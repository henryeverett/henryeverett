---
layout: post
title:  "SKTextureAtlas and Memory"
date:   2014-05-20 22:44:00
categories: iphone
---

I have seen a few posts detailing how you should create a singleton to deal with your textures in Apple's Sprite Kit. This got me thinking. Is this really necessary? I try to avoid singletons as much as possible and my upcoming Sprite Kit game is no exception.

Apple doesn't seem to mention how textures are dealt with in memory <a href="https://developer.apple.com/library/ios/documentation/SpriteKit/Reference/SKTextureAtlas/Reference/Reference.html" target="_blank">in their documentation</a> so I decided I would find out for myself. I created a test Sprite Kit project and modified the boilerplate project code to initialise a new instance of an SKSpriteNode subclass every time the screen is tapped. The subclass creates an instance of SKTextureAtlas as a property, referencing a texture atlas in the bundle.

Upon launching Instruments and profiling the app's memory heap, it looks like the texture atlas is loaded only once into memory. Below is the memory allocation graph, the spike shows the first time I tapped the screen and after that everything is pretty steady and no more allocations of the texture atlas are made despite me tapping repeatedly.

![Memory Profiler]({{ site.url }}/assets/mem-profiler.png)

I performed a second test using the same application but this time running the System Usage profiler. As the graph below shows, only one IO is performed when loading the texture atlas into memory (The large spike).

![IO Profiler]({{ site.url }}/assets/io-profiler.png)

This confirms that Sprite Kit indeed does its own memory management of the texture atlas, loading the image once and keeping it as long as it's needed. This negates the need for a singleton pattern in order to keep the heap small, leaving you with the time to get on with more important matters like launching the 631st clone of Flappy Bird.

To keep up to date with my latest Sprite Kit ramblings <a href="https://twitter.com/henryeverett">follow me on Twitter!</a>