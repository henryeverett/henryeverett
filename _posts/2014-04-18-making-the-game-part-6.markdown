---
layout: post
title:  "Making the Game 6 - Narrow Phase Collisions"
date:   2014-04-21 17:34:00
categories: making-the-game
---

One of my objectives for this game is to make it "bulletproof". I don't want objects glitching through walls and I want to avoid the 'bullet-though-paper' effect as much as possible. This is where an object is moving fast enough that it passes straight through a platform. This happens because while there may be a platform in the direction of its movement, neither its current position or its position in the next frame (which is beyond the platform) actually intersect with the platform. There are a few ways of dealing with this including techniques such as ray tracing or running multiple sweeps of the collision detection (but this is expensive). I opted for a technique called Speculative Contacts.

![Bad day for collisions.]({{ site.url }}/assets/bad-collision.png)

Speculative contacts solves the bullet-through-paper problem by detecting whether there will be a collision in the next frame, and if so, reducing the velocity of the moving object just enough so that it comes to a stop right before the collision in the next frame.

![Great day for collisions!]({{ site.url }}/assets/good-collision.png)

I decided that there weren't enough resources to help with this subject, so I have made my code (and the Spacial Hashing code from <a href="/making-the-game/2014/03/21/making-the-game-part-5.html#content">my previous post</a>) open source and available to view or to slot into your own project.


<div class="github-widget" data-repo="henryeverett/ToastCollisions2D"></div>


Please note that this is still a work in progress and I will iron out bugs as I go. If you feel like you can make it better, please fork and send over a pull request or submit a ticket!

An excellent tutorial by Paul Firth (and most of the code found in ToastCollisions2D) on the Speculative Contacts technique can be found here:
<a href="http://www.wildbunny.co.uk/blog/2011/12/14/how-to-make-a-2d-platform-game-part-2-collision-detection/" target="_blank">http://www.wildbunny.co.uk/blog/2011/12/14/how-to-make-a-2d-platform-game-part-2-collision-detection/</a>
