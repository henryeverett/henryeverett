---
layout: post
title:  "How to make one-way tiles in ToastCollisions2D"
date:   2014-04-22 17:34:00
categories: tc2d
---

ToastCollisions2D was updated today to support one-way tiles with the introduction of the new protocol method: **ignoresCollision:**.

When performing collision resolution, the engine will now query this to check if it returns YES. If it does, the collision is ignored. This allows you to specify (either in a subclass of SKSpriteNode or a category extension) when a collision should be ignored.

This is perfect for one-way tiles. In my game, I have implemented **ignoresCollision** in an SKSpriteNode "tile" category. Then I simply check the direction of the collision using the **direction** property of the passed in TC_Collision object and return YES if the collision direction is up, left or right. To prevent embedding, I also ignore the down direction if the distance between the player is less than zero.

{% highlight objc %}
switch (collision.direction) {
            case up:
                return YES;
                break;

            case left:
                return YES;
                break;

            case right:
                return YES;
                break;

            case down:
                return (collision.distance < 0);
                break;

            default:
                return NO;
                break;
        }
{% endhighlight %}
