---
layout: post
title: "Dartmoor North–South: planning the crossing"
date: 2026-08-28
categories: [Hiking]
tag: [dartmoor, hiking, wild-camping, walking, hiking-planning]
---

I’ve been thinking about crossing Dartmoor for a while. Not following a neat trail around the edges, but actually crossing the high moor: getting away from roads and villages, spending a couple of nights out, and feeling like I’ve properly experienced the place rather than just visited it.

The current idea is to take public transport to **Okehampton**, walk south across the moor, and keep going in roughly the direction of home. The cleanest version finishes at **Ivybridge** and comes to around **47 km with roughly 1,100 metres of ascent**. I’m also tempted by a finish at the **Rock Inn at Haytor Vale**: a pint in the sun, dinner, and perhaps a room rather than an immediate journey home.

That second version would not be a strict north–south line—it would bend east towards Haytor—and I haven’t mapped it properly yet. But “arrive somewhere pleasant and stop” may be a better ending than treating the nearest railway station as the inevitable destination.

So this is not yet a route guide. It’s the working plan: what sort of crossing I want, what I need to prove to myself beforehand, and what still needs resolving.

## Why north to south?

There are established long-distance routes across Dartmoor, most obviously the Two Moors Way. But the experience I’m after is less “complete a named trail” and more “cross the wild centre of the moor”.

Starting around Okehampton or Belstone gives access to the northern high moor before heading towards Hangingstone Hill and the upper East Dart. From there, the broad idea is to pass through the heart of Dartmoor around Two Bridges and Fox Tor country, then follow the Erme towards the old Red Lake railway and finally descend to Ivybridge.

There is also a very practical reason for going north to south. Okehampton is straightforward to reach by public transport, so I can travel up to the northern edge and then spend the next few days walking back towards South Devon. That feels much more like a journey than finishing on the far side of the moor and immediately having to undo it by bus or train.

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="">

<figure class="media-card dartmoor-route-map-card">
  <div id="dartmoor-route-map" role="img" aria-label="Zoomable map showing the published Dartmoor north-to-south route from Sticklepath to Ivybridge"></div>
  <figcaption>
    The published 47 km Sticklepath–Ivybridge line. Starting at Okehampton would alter the northern approach; finishing at Haytor would create a different route altogether. Route checkpoints from <a href="https://www.ukhillwalking.com/logbook/r/?i=1387">UKHillwalking</a>—this is a planning overview, not a navigation map.
  </figcaption>
</figure>

<style>
  .dartmoor-route-map-card { margin: 2rem 0; }
  #dartmoor-route-map {
    width: 100%;
    height: min(68vh, 600px);
    min-height: 420px;
    border-radius: 0.5rem 0.5rem 0 0;
    background: #e8ece7;
  }
  .dartmoor-route-map-card figcaption { padding-top: 0.75rem; }
  .dartmoor-route-map-card .leaflet-popup-content { margin: 0.7rem 0.9rem; }
  .dartmoor-route-map-card .leaflet-tile {
    width: 256px !important;
    height: 256px !important;
    max-width: none !important;
    max-height: none !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    object-fit: fill !important;
  }
  @media (max-width: 600px) {
    #dartmoor-route-map { min-height: 360px; }
  }
</style>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/proj4js/2.11.0/proj4.js" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script>
  (() => {
    const container = document.getElementById('dartmoor-route-map');
    if (!container || !window.L || !window.proj4) return;

    const britishNationalGrid = '+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +towgs84=446.448,-125.157,542.06,0.1502,0.247,0.8421,-20.4894 +units=m +no_defs';
    const checkpoints = [
      ['Sticklepath', 264181, 94109],
      ['Belstone / Oke Tor approach', 262000, 93365],
      ['Hangingstone Hill / Whitehorse Hill', 261699, 86113],
      ['Sandy Hole Pass', 262064, 81605],
      ['Higher White Tor / Longaford Tor', 261955, 78631],
      ['Two Bridges', 260902, 75043],
      ['Whiteworks / Fox Tor Mires', 261276, 71039],
      ['Upper Erme', 261694, 70237],
      ['Erme Pound / Red Lake railway', 263716, 65663],
      ['Western Beacon / Ivybridge', 265120, 58244]
    ];
    const points = checkpoints.map(([name, easting, northing]) => {
      const [longitude, latitude] = proj4(britishNationalGrid, 'EPSG:4326', [easting, northing]);
      return { name, latlng: [latitude, longitude] };
    });

    const map = L.map(container, { scrollWheelZoom: false });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const route = L.polyline(points.map(point => point.latlng), {
      color: '#9f3d2f',
      weight: 5,
      opacity: 0.9,
      lineJoin: 'round'
    }).addTo(map);

    points.forEach((point, index) => {
      if (index !== 0 && index !== points.length - 1 && index !== 5) return;
      L.circleMarker(point.latlng, {
        radius: 6,
        color: '#fffdf7',
        weight: 2,
        fillColor: '#263d34',
        fillOpacity: 1
      }).bindPopup(`<strong>${point.name}</strong>`).addTo(map);
    });

    map.fitBounds(route.getBounds(), { padding: [24, 24] });
    L.control.scale({ imperial: true, metric: true }).addTo(map);
  })();
</script>

## Is it actually far enough for two nights?

The direct Okehampton-to-Ivybridge version is about 47 km. That is not three full days of walking, but it does fit rather neatly into a partial travel day followed by two proper days on the moor.

The shape I can imagine is:

| Day | Broad shape | Likely distance |
|---|---|---:|
| 1 | Travel to Okehampton, get up onto the moor and camp | 8–12 km |
| 2 | A full day across the northern and central moor, then camp | 17–20 km |
| 3 | Another full day, then descend to the finish | 17–22 km |

So yes: it is far enough to justify two nights, particularly if the first day includes the journey to Okehampton. The extra camp is not necessary because 47 km intrinsically requires three days. It is there because I want time on the moor, a relaxed first afternoon, and enough margin not to turn the crossing into a race.

With only one night, it becomes two days of roughly 23–24 km on rough ground with a camping pack. I can probably cover that distance; the question is whether it would still feel like the trip I want.

The camps need to sit inside the areas shown on the current [Dartmoor backpack-camping map](https://www.dartmoor.gov.uk/enjoy-dartmoor/outdoor-activities/camping), and the exact split will depend on the final destination.

## Where should it finish?

**Ivybridge** preserves the simple idea: north edge to south edge, about 47 km, with a railway station at the end. It is the obvious version to map and train for first.

**[The Rock Inn at Haytor Vale](https://www.rock-inn.co.uk/)** offers a much better final image: boots off, pint outside if the weather cooperates, then either a room for the night or a lift home. The inn has accommodation as well as the bar and restaurant, so it is a real endpoint rather than just a celebratory detour. The trade-off is that the route would turn south-east instead of completing a literal north–south traverse. It may also change which parts of the central moor make sense, so I need to map that version before pretending to know its mileage.

There may be a third answer: another south-side pub or inn that gives me both the clean crossing and the pleasant ending. The endpoint should be part of the route design, not an administrative detail added after it.

## What “fit enough” actually means

The wrong test is whether I can stagger through a single 25 or 30 km walk. I already know I can cover a long distance as a one-off. The useful question is whether I can carry the actual pack over rough, hilly ground and wake up happy to do it again.

My working readiness test is:

> Walk 16–18 km over rough or hilly ground with 450–600 metres of ascent and the complete 8–10 kg pack, then walk another 10–12 km the following morning.

That doesn’t duplicate the trip in advance, but it should expose the things that a flat day walk cannot: tired feet, pack discomfort, knee or Achilles irritation, poor fuelling, and what it feels like to start walking on yesterday’s legs.

The test counts as passed if:

- knee and Achilles discomfort do not progressively worsen;
- there is no swelling, limping or changed gait;
- stairs and ordinary walking feel normal the next morning;
- feet, shoulders and back tolerate the loaded pack;
- any minor discomfort returns to normal within roughly 24 hours; and
- another 15–18 km feels realistic rather than absurd.

## Where I am now

In the last few months I’ve been running, returning to strength work and becoming more consistently active. Recent walks include a 20.9 km day and shorter hilly outings of 9.4 km with 314 metres ascent and 8.5 km with 243 metres.

The less encouraging interpretation is that the 20.9 km outing is the only recent walk above 10 km. Most of the hiking volume has arrived in the last couple of weeks, I haven’t tested back-to-back substantial days, and I haven’t yet done the work with the full camping pack.

In other words: the general engine is probably adequate, but the specific proof is missing.

## The accelerated training plan

The earliest sensible target currently looks like the end of September, giving roughly four weeks to add hills, pack weight and consecutive days without trying to manufacture fitness through panic.

| Week | Main walking target | Pack |
|---|---|---:|
| 1 | 25–30 km total, including one 12–14 km hilly walk with 300–400 m ascent | 5–6 kg |
| 2 | 28–34 km total; 14–16 km hilly followed by 8–10 km easy the next day | 7–8 kg |
| 3 | Dress rehearsal: 16–18 km rough/hilly, then 10–12 km the following morning | Full 8–10 kg |
| 4 | Easy walking and a short taper before the crossing | Full pack checked, not trained with |

Alongside the walking, I want to keep two short strength sessions each week: some form of squat or leg press, a hinge, step-ups or step-downs, calf work, pulling/carrying and trunk strength. Running can stay, but probably at two easy sessions rather than allowing a running target to compromise the hiking work.

If a progression irritates the knee or Achilles beyond the following day, the answer is to repeat or reduce that week—not force the date.

## The provisional window

The first possible three-day window is **26–28 September 2026**. The current [MOD Dartmoor firing schedule](https://www.gov.uk/government/publications/dartmoor-firing-times) shows no firing at Okehampton, Willsworthy or Merrivale across those three days.

That is not a booking yet. Firing times must be checked again immediately before departure, as must the live camping map, access notices, river conditions and the mountain forecast. If the weather is poor enough to turn the route into an exercise in survival, the moor will still be there the following week.

## Still to decide

Before this turns into an actual route, I need to settle:

- the precise northern start: Okehampton or Belstone;
- whether the finish is Ivybridge, the Rock Inn, or somewhere else with a pint and a bed;
- the legal and practical camp areas for both nights;
- actual pack weight including food and water;
- likely water sources and treatment;
- the exact line across the central moor once the finish is chosen;
- planned bailout points, particularly around Two Bridges;
- the Okehampton arrival time and realistic first-day mileage; and
- transport home—or whether the ending deserves a night of its own.

The useful change is that this no longer feels like a vague ambition. It is now a route concept, a four-week experiment and a very specific readiness test. If the body, kit and weather all cooperate, I go. If one of them doesn’t, I postpone rather than negotiate with the evidence.
