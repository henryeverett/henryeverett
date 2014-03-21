---
layout: post
title:  "Making the Game - Part 3"
date:   2014-02-23 17:33:00
categories: making-the-game
---

A problem that I ran into today was one amidst the ongoing battle of collision detection. When jumping up a straight-edged stairway, the player (who I have affectionately dubbed: "Squareface") would automatically stick to the next step if he was already pushed up against the edge of that step. This is because when he reached the height of the next step's "floor", the collision detection would try to stick him to the ground. Resulting in a very unnatural on-rails type movement.

![Sticky Squareface.]({{ site.url }}/assets/game-shot-4.png)

The solution was to only register the ground plane collision when the Y velocity of Squareface was less than 0 (ie. he was falling). This resulted in a much nicer jumping experience. Game programmer XP+1.

![Free as a (square) bird!]({{ site.url }}/assets/game-shot-5.png)
