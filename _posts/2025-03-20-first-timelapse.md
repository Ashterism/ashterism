---
layout: post
title: "First astro timelapse"
date: 2025-03-20
categories: astro
tag: [astrophotography, timelapse, davinci_resolve]
---


There's been a week or two of cloudy nights coinciding with my available evenings, during which I've been reading through _Nightwatch_ (Terence Dickinsons amazing book not the also great Pratchett novel...) and looking at potential future upgrades to my gear.  This (inevitably?) led to me ordering a star tracker which is due any day now, so I thought it would be a good opportunity to try a timelapse with last nights clear sky as it's something I'd love to do with a clear milyway sky one night.

The setting was my Dad's cottage in France, which, although only one room deep and not an actual palace, looks like a classic French chateaux complete with the amazing roof line they have - so I thought a great foreground item.  I definitely have a lot to learn but it was an interesting process and I'm keen to try again soon now I've read up on how to do it better.  

Yesterday evening, I set the camera up on a tripod looking up at the sky over the house.  I put it in Av mode, with an interval timer set for 45secs.  Around 45 mins before sunset I set it going and checked back in on it periodically.  I noticed at twilight that the stars were visible to the eye, but not appearing in the photos, so I switched it to manual and adjusted the ISO and SS manually so the stars were appearing in the shots.

When I checked back in an hour later (around half nine), the shots were again underexposed so you couldn't see the stars.  I adjusted the settings again to make the stars visible and left it to it again.  The camera carried on snapping away until around 4:30 when the battery died.  

I retrieved the camera and looked at the images in the morning - and then went down a rabbit hole of videos on how to actually make a timelapse on my laptop - and videos about how to get the perfect outcomes from "Holy Grail" timelapses.  This is the name for timelapses which transition day-to-night I've learnt.

> [!NOTE]
> Key learning is next time either just leave in Av mode and let the camera manage the transition and should be okay overall, OR... manually tweak throughout the three stages of twilight, an involved process but will get the best results

Anyway, I had a go at stitching the stills together in DaVinci Resolve (excellent free video editing software).  I'd used it before for some basic video editing to assumed it could do this, and found a few videos that explained how to do it, though it's a fairly simple process:
* convert .raw files into .dng files (DaVinci's preferred input) using the free Adobe DNG converter
* drag and drop photos into DaVinci Resolve's 'media pool'
* check still duration set to 1 frame (preferences > user > editing) - otherwise it defaults to 5 secs
* that's it - make tweaks to exposure / brightness / contrast etc of given frames as needed from within DR

As DR has some quite powerful frame editing capabilities, I was able to adjust out some of my exposure mistakes, though I didn't spend too long on it as keen to just take the learnings and try again.

This <a href="https://www.youtube.com/watch?v=pFdRO0RsdMM" target="_blank" rel="noopener">video</a> was the most useful I found for understanding how to do the timelapse in DR - with some additional information on how to adjust / enhance your timelapse too.

And my first attempt was:

<div class="video-wrapper">
  <iframe src="https://www.youtube.com/embed/PmEsczIhK4I" frameborder="0" allowfullscreen></iframe>
</div>

*Tips for next time*
Most complete video I found on timelapses was <a href="https://www.youtube.com/watch?v=fgPLOOVvM9k&t=7s" target="_blank">this one</a>

* Be prepared - note down what time the different phases of the transition from day to night are expected (see table below)
* Set up tripod, set shot in focus (for stars - around infinite)
* Intervals set to between 20-40 secs 
* Be ready to start shooting around 30-40 mins before sunset
* Start at ISO100
* Aim to keep exposure at 0ev until sunset
* Do this by adjusting shutter speed before starting to adjust ISO
* Then allow it to come up
* Will need most changes during twilight phases, lessen off, and then none once fully night
* As you get to the end of civil twiling and into nautical twilight (when its dark in one part of the sky but light in another...) ev can drift down to around -0.3 to -0.7
* Once you hit nautical twilight, will need to be adjusting every 2-3mins
* Once the Shutter speed hits (rule of 500/400) max for avoiding trailing, then start adjusting ISO


*Table for recording start/end times*
<table class="responsive-table centre-ticks">
  <thead>
    <tr>
      <th>Event</th>
      <th>Starts</th>
      <th>Ends</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Event">Sunset</td>
      <td colspan="2" data-label="Starts / Ends">✔️</td>
    </tr>
    <tr>
      <td data-label="Event">Civil Twilight</td>
      <td data-label="Starts">✔️</td>
      <td data-label="Ends">✔️</td>
    </tr>
    <tr>
      <td data-label="Event">Nautical Twilight</td>
      <td data-label="Starts">✔️</td>
      <td data-label="Ends">✔️</td>
    </tr>
    <tr>
      <td data-label="Event">Astronomical Twilight</td>
      <td data-label="Starts">✔️</td>
      <td data-label="Ends">✔️</td>
    </tr>
    <tr>
      <td data-label="Event">Start of Night</td>
      <td data-label="Starts">✔️</td>
      <td data-label="Ends"></td>
    </tr>
    <tr>
      <td data-label="Event">End Shooting</td>
      <td colspan="2" data-label="Starts / Ends">✔️</td>
    </tr>
  </tbody>
</table>


Also need to work out the rule of 400/500 for the lens you'll be using so you know how to avoid trailing (max shutter speed). 

-END-
