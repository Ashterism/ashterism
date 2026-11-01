/* Drive-time planner for Ashterism UAE Hiking Shortlist.
   Requests are user initiated. Public demo APIs can be unavailable or rate-limited.
   Never treat the hike's area pin as a verified car park. */
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    const dataNode = document.getElementById('hike-drive-data');
    const form = document.getElementById('hike-drive-form');
    if (!dataNode || !form) return;

    let hikes;
    try { hikes = JSON.parse(dataNode.textContent); }
    catch (error) { return; }

    const originInput = document.getElementById('hike-drive-origin');
    const findButton = document.getElementById('hike-drive-find');
    const locationChoices = document.getElementById('hike-drive-choices');
    const locationSelect = document.getElementById('hike-drive-match');
    const chooseButton = document.getElementById('hike-drive-choose');
    const message = document.getElementById('hike-drive-message');
    const sortBlock = document.getElementById('hike-drive-sort-wrap');
    const sortSelect = document.getElementById('hike-drive-sort');
    const useGps = document.getElementById('hike-drive-gps');
    const list = document.getElementById('hike-list');

    const defaultOrigin = {lat: 24.48528, lon: 54.59738, label: 'Yas Golf Collection, Yas Island'};
    const entries = Array.from(list.querySelectorAll('.hike-entry')).map(function (card, index) {
      return {card: card, hike: hikes[index], index: index};
    }).filter(function (item) { return item.hike && item.hike.id; });

    // This pin is a waterfall, not a verified vehicle-access point.
    const excludedIds = new Set(['hanging-gardens-dry-falls']);
    const geoCache = new Map();
    const driveCache = new Map();
    let selectedOrigin = defaultOrigin;
    let searchMatches = [];
    let results = new Map();
    let sequence = 0;

    function announce(text) { message.textContent = text; }
    function busy(isBusy) {
      findButton.disabled = isBusy;
      chooseButton.disabled = isBusy;
      useGps.disabled = isBusy;
      findButton.textContent = isBusy ? 'Checking…' : 'Calculate drives';
    }
    function matchesOrigin(query, origin) {
      return query.trim().toLocaleLowerCase() === origin.label.toLocaleLowerCase();
    }
    function restoreOriginalOrder() {
      entries.slice().sort(function (a, b) { return a.index - b.index; })
        .forEach(function (item) { list.appendChild(item.card); });
    }
    function sortCards() {
      if (sortSelect.value !== 'drive' || !results.size) {
        restoreOriginalOrder();
        return;
      }
      entries.slice().sort(function (a, b) {
        const aRoute = results.get(a.hike.id);
        const bRoute = results.get(b.hike.id);
        const aTime = aRoute ? aRoute.minutes : Infinity;
        const bTime = bRoute ? bRoute.minutes : Infinity;
        return aTime - bTime || a.index - b.index;
      }).forEach(function (item) { list.appendChild(item.card); });
    }
    function resetResultView() {
      results = new Map();
      sortBlock.hidden = true;
      sortSelect.value = 'original';
      restoreOriginalOrder();
      entries.forEach(function (item) {
        const slot = item.card.querySelector('.hike-drive-result');
        if (slot) { slot.replaceChildren(); slot.hidden = true; }
      });
    }
    function formatMinutes(minutes) {
      const n = Math.max(1, Math.round(minutes));
      const hours = Math.floor(n / 60);
      return hours ? hours + 'h ' + String(n % 60).padStart(2, '0') + 'm' : n + ' min';
    }
    function directions(origin, hike) {
      const params = new URLSearchParams({
        api: '1',
        origin: origin.lat + ',' + origin.lon,
        destination: Number(hike.latitude) + ',' + Number(hike.longitude),
        travelmode: 'driving'
      });
      return 'https://www.google.com/maps/dir/?' + params.toString();
    }
    function showResults(origin) {
      entries.forEach(function (item) {
        const hike = item.hike;
        const slot = item.card.querySelector('.hike-drive-result');
        if (!slot) return;
        slot.hidden = false;
        slot.replaceChildren();

        if (excludedIds.has(hike.id)) {
          slot.textContent = 'Parking not confirmed — no driving estimate';
          return;
        }

        const route = results.get(hike.id);
        const amount = document.createElement('strong');
        amount.textContent = route
          ? '≈ ' + formatMinutes(route.minutes) + ' drive · ' + Math.round(route.km) + ' km by road'
          : 'Driving time unavailable';
        slot.appendChild(amount);

        const note = document.createElement('span');
        note.className = 'hike-drive-caveat';
        note.textContent = ' · to approximate mapped area';
        slot.appendChild(note);

        const link = document.createElement('a');
        link.href = directions(origin, hike);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Directions ↗';
        link.title = hike.pin_note || 'Verify parking before travelling';
        slot.appendChild(link);
      });
      sortBlock.hidden = results.size === 0;
      sortCards();
    }
    function cacheKey(origin) {
      return origin.lat.toFixed(5) + ',' + origin.lon.toFixed(5);
    }
    async function calculate(origin, token) {
      locationChoices.hidden = true;
      selectedOrigin = origin;
      originInput.value = origin.label;
      const key = cacheKey(origin);
      if (driveCache.has(key)) {
        results = driveCache.get(key);
        showResults(origin);
        announce('Cached driving estimates from ' + origin.label + '.');
        return;
      }
      resetResultView();
      busy(true);
      announce('Calculating driving times from ' + origin.label + '…');

      const eligible = hikes.filter(function (hike) {
        return !excludedIds.has(hike.id) && Number.isFinite(Number(hike.latitude))
          && Number.isFinite(Number(hike.longitude)) && hike.latitude && hike.longitude;
      });
      const request = {
        sources: [{lat: origin.lat, lon: origin.lon}],
        targets: eligible.map(function (hike) {
          return {lat: Number(hike.latitude), lon: Number(hike.longitude)};
        }),
        costing: 'auto',
        units: 'kilometers',
        verbose: false
      };
      try {
        const url = 'https://valhalla1.openstreetmap.de/sources_to_targets?json='
          + encodeURIComponent(JSON.stringify(request));
        const response = await fetch(url, {
          headers: {'X-Client-Id': 'ashterism.com', 'Accept': 'application/json'}
        });
        if (!response.ok) throw new Error('Routing provider returned ' + response.status);
        const data = await response.json();
        if (token !== sequence) return;
        const matrix = data.sources_to_targets;
        if (!matrix || !Array.isArray(matrix.durations) || !Array.isArray(matrix.durations[0]))
          throw new Error('Routing service response not recognised');
        if (matrix.durations[0].length !== eligible.length)
          throw new Error('Incomplete routing matrix');
        const next = new Map();
        eligible.forEach(function (hike, i) {
          const seconds = matrix.durations[0][i];
          const km = matrix.distances && matrix.distances[0] && matrix.distances[0][i];
          if (typeof seconds === 'number' && Number.isFinite(seconds) && seconds >= 0
              && typeof km === 'number' && Number.isFinite(km) && km >= 0) {
            next.set(hike.id, {minutes: seconds / 60, km: km});
          }
        });
        if (!next.size) throw new Error('No drivable routes returned');
        results = next;
        driveCache.set(key, next);
        showResults(origin);
        announce('Estimated times to ' + next.size + ' mapped hike areas from '
          + origin.label + '. No live traffic; verify parking and road access.');
      } catch (error) {
        if (token !== sequence) return;
        results = new Map();
        showResults(origin);
        announce('Driving estimates unavailable right now. Directions links are still available for mapped areas; confirm parking before setting off.');
      } finally {
        if (token === sequence) busy(false);
      }
    }
    function getLabel(feature) {
      const p = feature.properties || {};
      return [p.name, p.city || p.county, p.state, p.country]
        .filter(Boolean).filter(function (part, i, parts) { return parts.indexOf(part) === i; })
        .join(', ');
    }
    async function findOrigin(query, token) {
      busy(true);
      announce('Finding ' + query + '…');
      try {
        let matches = geoCache.get(query.toLocaleLowerCase());
        if (!matches) {
          const params = new URLSearchParams({
            q: query, limit: '6', lang: 'en',
            bbox: '51.4,22.5,56.8,26.4'
          });
          const response = await fetch('https://photon.komoot.io/api/?' + params.toString());
          if (!response.ok) throw new Error('Place search unavailable');
          const data = await response.json();
          matches = (data.features || []).filter(function (feature) {
            const c = feature.geometry && feature.geometry.coordinates;
            return Array.isArray(c) && c.length >= 2 && Number.isFinite(c[0])
              && Number.isFinite(c[1]) && c[0] >= 51.4 && c[0] <= 56.8
              && c[1] >= 22.5 && c[1] <= 26.4;
          }).slice(0, 5).map(function (feature) {
            return {
              lat: feature.geometry.coordinates[1],
              lon: feature.geometry.coordinates[0],
              label: getLabel(feature) || query
            };
          });
          geoCache.set(query.toLocaleLowerCase(), matches);
        }
        if (token !== sequence) return;
        if (!matches.length) {
          announce('No UAE location found. Try the hotel name plus its emirate, or enter latitude, longitude.');
          return;
        }
        searchMatches = matches;
        locationSelect.replaceChildren();
        matches.forEach(function (match, index) {
          const option = document.createElement('option');
          option.value = String(index);
          option.textContent = match.label;
          locationSelect.appendChild(option);
        });
        locationChoices.hidden = false;
        announce('Choose the matching location, then calculate drives.');
      } catch (error) {
        if (token !== sequence) return;
        announce('Location search unavailable. Try again, or enter coordinates as latitude, longitude.');
      } finally {
        if (token === sequence) busy(false);
      }
    }
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const query = originInput.value.trim();
      const token = ++sequence;
      locationChoices.hidden = true;
      resetResultView();
      if (!query) { announce('Enter a hotel, place or coordinates.'); return; }
      if (matchesOrigin(query, defaultOrigin) || /^(yas golf collection)(,|$)/i.test(query)) {
        calculate(defaultOrigin, token);
      } else if (matchesOrigin(query, selectedOrigin)) {
        calculate(selectedOrigin, token);
      } else {
        const coordinateMatch = query.match(/^(-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)$/);
        if (coordinateMatch) {
          const lat = Number(coordinateMatch[1]);
          const lon = Number(coordinateMatch[2]);
          if (Math.abs(lat) > 90 || Math.abs(lon) > 180) {
            announce('Invalid coordinates. Enter latitude, longitude.'); return;
          }
          calculate({lat: lat, lon: lon, label: query}, token);
        } else {
          findOrigin(query, token);
        }
      }
    });
    chooseButton.addEventListener('click', function () {
      const choice = searchMatches[Number(locationSelect.value)];
      if (choice) calculate(choice, ++sequence);
    });
    useGps.addEventListener('click', function () {
      if (!navigator.geolocation) {announce('Location sharing is unavailable in this browser.'); return;}
      const token = ++sequence;
      locationChoices.hidden = true;
      resetResultView();
      announce('Requesting your location…');
      navigator.geolocation.getCurrentPosition(function (position) {
        if (token !== sequence) return;
        calculate({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          label: 'Current location'
        }, token);
      }, function () {
        if (token === sequence) announce('Location not available. Enter a hotel or place instead.');
      }, {enableHighAccuracy: false, timeout: 10000});
    });
    originInput.addEventListener('input', function () {
      ++sequence;
      busy(false);
      locationChoices.hidden = true;
      resetResultView();
      announce('Choose Calculate drives to find a location or refresh estimates.');
    });
    sortSelect.addEventListener('change', sortCards);
  });
})();
