---
layout: post
title:  "Making the Game - Part 2"
date:   2014-02-22 11:15:00
categories: making-the-game
---

It is very important to me that I get the gameplay right. This is more important than anything else in my opinion. It needs to feel responsive and polished. Think about the most successful platformers throughout gaming history; which ones excelled? Sonic and Mario should spring to most people's minds. These two games got it right. The feel, the speed and the weight of your character just felt right. Within a minute or two you understood exactly how that character should be controlled. It was easy and intuitive but at the same time had enough nuance that you could master the game in time for the more difficult levels.

So far I have been playing with the game physics and collision detection. It's by no means perfect but it's getting there slowly. The player can now be moved along the ground and can jump too. I chose to implement a custom physics model rather than use Sprite Kit's real world physics modelling as I want to have as much control over the experience as possible. I will likely keep Sprite Kit's physics for things like particles where I don't need to be so precise.

At the moment, everything is made from blocks, and the landscape is pretty flat. I want to have slopes in this game but it looks like a tricky task. The collision detection will be a pain to get right but it's important to me that this game has interesting and diverse worlds to explore.

![Stairway to uncaught exception.]({{ site.url }}/assets/game-shot-2.png)