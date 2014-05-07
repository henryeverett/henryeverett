---
layout: post
title:  "Making the Game 6 - Sprite Kit Texture Animation"
date:   2014-05-07 19:44:00
categories: making-the-game
---

Sprite kit offers some really nifty time-saving techniques when working with image assets. One of these is the SKTextureAtlas class. By grouping your texture images in your project folder in folders with the suffix **.atlas**, XCode will automatically consolidate the images into a single image, rotating and cropping the textures in order to create the smallest and most efficient image possible. This is done at compile-time so you never need to worry about it, letting you focus on your individual assets. Anyone familiar with CSS frameworks such as Compass will be familiar with the concept.

![Can you guess what it is yet?]({{ site.url }}/assets/toast.1.png)

Accessing the individual textures is as easy as referencing the original image name:

{% highlight objc %}
	SKTextureAtlas *atlas = [SKTextureAtlas atlasNamed:@"toast"];
SKTexture *walkAnim1  = [atlas textureNamed:@"toast_walk_1.png"];
{% endhighlight %}

But it's not all moonlight and roses. Sprite Kit does have a couple of bugs to be aware of. Let's say that you have two textures of a bouncing ball. In the first, the ball is on the ground, in the second, the ball in the air. When you animate between the two, you may want the frame of the sprite to stay the same while the ball moves up. Sprite Kit unfortunately doesn't care about this and will crop out any transparency around the image, meaning you get two different sized textures.

This can cause all sorts of problems as the frame size changes. The only way I have found to fix this problem is to create a 1% opaque background on each texture. This will stop Sprite Kit from being too clever and cropping out that precious negative space. Hopefully Apple will fix this in the next version and allow us more control about how texture atlases are generated.