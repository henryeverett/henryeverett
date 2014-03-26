---
layout: post
title:  "Making the Game - Part 5"
date:   2014-03-21 17:34:00
categories: making-the-game
---

Collision detection is once of the most time consuming and complicated things you will have to deal with when developing a game. I knew that I could write about 5 lines of code to check for collisions on all of the objects on screen, but this would be a very expensive operation. The number of collisions to check would be n^2-n as every object would have to check for a collision with every other object (excluding itself).

![Lots of collision checks]({{ site.url }}/assets/spatial-diagram-1.png)

I decided first of all, I would only check for collisions of nodes that are currently visible on the screen. This would be manageable with only 5 nodes on-screen (20 checks) but if a situation arises where 100 nodes are on screen (nearly 10,000 checks) the CPU is going to be under a lot of strain.

So I went about looking for a solution to this problem and came across Spatial Hashing, a technique in which you divide the visible screen into a grid and then determine which nodes live in the same grid square. Those nodes would obviously be near each other and would therefore qualify for a collision check. An object in the top-left grid square, would not have to be collision-checked with an object in the bottom-right grid square for example as it is clear they are nowhere near each other.

Using this technique, we are now able to break collision detection into two phases. A broad phase and a narrow phase. The image above depicts the number of collision checks without spatial hashing and the image below shows the number of collisions with spatial hashing. The number has gone from 20 collision checks down to a meagre 2. Scale that up and that's a vast optimisation.

![Few collision checks]({{ site.url }}/assets/spatial-diagram-2.png)

A great guide to implementing this technique can be found here: <a href="http://conkerjo.wordpress.com/2009/06/13/spatial-hashing-implementation-for-fast-2d-collisions/" target="_blank">http://conkerjo.wordpress.com/2009/06/13/spatial-hashing-implementation-for-fast-2d-collisions/</a>