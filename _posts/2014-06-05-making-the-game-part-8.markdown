---
layout: post
title:  "Making the Game 6 - Quadtrees"
date:   2014-06-05 11:44:00
categories: making-the-game
---

<a href="/making-the-game/2014/03/21/making-the-game-part-5.html">I posted before</a> about the advantages of board-phase collision detection and I talked about implementing a spatial hashing algorithm. Spatial hashing is a great way of dividing up on-screen objects into 'buckets' to reduce the number of collisions to check. The image below gives an example of this method:

![Spatial Hashing]({{ site.url }}/assets/quad-spatial.png)

Today I would like to talk about another method of broad-phase collision detection: Quadtress.
Quadtrees share a similar goal with spatial hashing; they both aim to break the space into smaller compartments to check if objects are near each other. The difference with quadtrees is that it's much more focused and efficient. If there are 1000 objects in one corner of the screen, why should we have to check all the other grid spaces?

The quadtree algorithm breaks the space into four grid squares. If one of those squares contains objects, it is broken into four more grid squares. This is repeated until a predefined depth is reached. If two objects are within the same grid-square, they are subject to further collision tests.

![Quadtrees]({{ site.url }}/assets/quad-tree.png)

I have released version 1.1 of my Sprite Kit collision system ToastCollisions2D which now replaces spatial hashing with quadtrees.

<div class="github-widget" data-repo="henryeverett/ToastCollisions2D"></div>

To keep up to date with my latest Sprite Kit ramblings <a href="https://twitter.com/henryeverett">follow me on Twitter!</a>