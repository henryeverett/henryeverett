---
layout: post
title:  "Sprite Kit tip: Counting Animation Frames"
date:   2014-05-24 11:00:00
categories: sprite-kit
---

If you're like me and you like to load multiple animations from one texture atlas, you will often need to loop through a particular animation and add each frame to an SKAction.

There are a few ways of doing this, but my method below negates the need to declare the number of frames in the animation.

{% highlight objc %}
- (NSInteger)numberOfFramesInAnimation:(NSString *)animationName {
		// Get a list of all the file names in the atlas
    NSArray *allAnimationNames = self.textureAtlas.textureNames;
    // Filter the list by the particular animation name
    NSPredicate *nameFilter = [NSPredicate predicateWithFormat:@"SELF CONTAINS[cd] %@",[self textureNameBaseForAction:animationName]];
    // Return the number of filtered frames
    return [[allAnimationNames filteredArrayUsingPredicate:nameFilter] count];
}
{% endhighlight %}

Easy! All you need to do then is use a for loop and use the method above for the condition.

{% highlight objc %}
for (NSInteger i = 1; i < [self numberOfFramesInAnimation:animationName]+1; i++) {

// Do stuff

}
{% endhighlight %}

To keep up to date with my latest Sprite Kit ramblings <a href="https://twitter.com/henryeverett">follow me on Twitter!</a>