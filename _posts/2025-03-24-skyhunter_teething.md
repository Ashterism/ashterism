---
layout: post
title: "iOptron Skyhunter teething troubles"
date: 2025-03-24
tag: astro
---


I’m getting round to writing up my notes a few weeks after this, but from memory there were a couple of evenings of trying to get the Skyhunter working correctly, not helped by iOptrons own control app (iOptron Commander) not being available on the App store at the time. 

First off, top tip!  Order a vixen-style dovetail plate if you don’t already have one.  This is a little bar that you attach your DSLR to that then slots onto the head of the tracker.  It’s like the one you get on a camera tripod but bigger.  It’s not included and you can’t attach a camera without one.  Fortunately I was able to use a similar bar from the telescope to rig something up the first night, or it would have been disappointing not to be able to use it at all!.  The first dovetail plate I ordered was too small as it didn’t easily allow for the LCD panel to open past the tightening bolts on the tracker - so I ordered a longer (20cm+) one which has worked better.

Putting the tracker together was fairly straightforward, and it can be controlled using the iOptron Commander app on a windows computer, or the Sky Safari Plus app (iOS/Android).  I couldn’t find the iOptron Commander app on the App store, so I contacted iOptron support and downloaded Sky Safari instead.  I latter learnt iOptron support are really friendly, and that the Commander app won’t be available for a while due to the developers needing to reregister with the app store or suchlike, so hopefully it’ll be back soon.  

There was a bit of a steep learning curve to using a tracker, though it was really helpful as it made me realise I’d been skipping some steps with the telescope too… The key steps seem to be aligning the telescope to polaris, and then giving it some reference points so it can “lock in” exactly where it is and slew properly. 

1. Prepare the tracker and camera (whilst there is still light)<br>
    a. Set the tripod up and use a compass to ensure RA axis pointing north  
    b. Adjust level to be flat (adjust leg lengths)  
    c. Set up the camera on the tripod  
    d. Make sure camera parallel to the RA axis (pointing “straight”)  

2. Physically align the tracker to Polaris<br>
    a. Once dark, line up Polaris through the hole in the RA axis knob  
    b. Double check everything is still level  

3. Set Zero Position<br>
    a. Once all aligned, turn the tracker off, then turn it back off (this “zeros” it)  
    b. Alternatively you can use the iOptron Commander app to set “zero position”  

4. Align to visible stars (for GoTo accuracy – not essential for just tracking)<br>
    a. Manually slew to a bright star (like Capella)  
    b. Select that star in the app (i.e., Sky Safari) and tap on “align”  
    c. Manually slew to another star  
    d. Select that star in the app and tap on “align”  

Unfortunately it took me quite a while to figure out how to get the telescope working correctly, and it was initially going to the opposite of where i was telling it to go using the GoTo, i.e. if it needed to track up and left to go from where it was to where i wanted it, it would instead go down and right.  After reading the manual and checking all the settings, reading all the forums etc, I contacted the seller and iOptron for help.  In the meantime I also borrowed a Windows PC (I use Mac) and used it to download and install the latest firmware.  This seemed to fix the problem, but the next day I was emigrating - so not had a chance to properly test it again.

**Settings to use to add the iOptron SkyHunter to Sky Safari:**
* iOptron CEM-120
* Equatorial  GOTO (German)
* Connect via WiFi
* IP address - 10.10.100.254
* port number - 8899

-END-
