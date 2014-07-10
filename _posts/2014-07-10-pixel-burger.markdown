---
layout: post
title:  "Pixel Burger - development post-mortem"
date:   2014-07-10 17:37:00
categories: sprite-kit
---

Four months ago I embarked on my largest project to date - an iPhone game. Working alone, I spent a great deal of time getting to grips with game development and Apple's Sprite Kit engine. After a while, it dawned on me that this project was going to take a lot longer than I initially expected. I found myself losing motivation when I cast my gaze forward and saw the mountain of work still left to do.

Three weeks ago I decided I needed to take a break for some morale-boosting. I decided that the best way to do that would be to launch something, so I started work on a much smaller - more casual game. This game turned out to be Pixel Burger.
Pixel Burger was never planned out, it grew organically from a vision in my head of a retro 8-bit-themed burger stacking task. I spent the weekend hacking together the basic concept of piling rectangles on top of each other using Sprite Kit's built in physics engine. The result was a cool concept that I decided to flesh out into a full game.

The original concept I had in my head was a timed race against the clock, quickly building the customer's burger order before the timer ran out. I built it, drew the graphics for the timer and everything but something just felt wrong while playing it. I couldn't quite put my finger on it. Then it clicked - my game wasn't fun! I didn't enjoy the fast-paced grabbing of ingredients while checking the clock to see how close I was to 'game over'.

Still wanting my game to come to fruition, but not wanting to release a project that wasn't enjoyable, I turned off the timer mechanism and dejectedly played with the non-game I had built so far. Bored, I piled up the ingredients to see how high they would go without crashing down. After the pile reached about 10-15 ingredients, it would start to wobble and become unstable. Carefully I would try and beat my last record - and then it clicked. This was fun! This is what the game should be about!

I set about adjusting the gameplay mechanics to suit the 'how-high-can-you-go' concept and removed most of the 'floor' to provide a greater sense of danger, ending up with a narrow plinth on which to build your burger. Encouraged by the game's new lease on life, I finished the graphics, polished the UI and wrote a little ditty to use as background music.

Pixel Burger was ready to go, but I had no idea of how to price it. From an unknown indie developer, I couldn't imagine too many people rushing to buy it so I decided to give it away for free and offer two in-app payment options which provided additional ingredients to play with. I didn't want to restrict the game in any way by implementing pay-walls.

![Pixel Burger launches today!]({{ site.url }}/assets/pixel-burger.png)

And so Pixel Burger launched today on Apple App Store. Please <a href="###############">download it</a> and let me know what you think via <a href="https://twitter.com/henryeverett">twitter</a> or leave a review on the store. I would love to know what worked and what didn't so I can improve and grow as an iOS (and now indie game) developer.

Unfortunately, there seems to be a memory management bug in Sprite Kit on iOS 7.0, which means that I have had to submit a panicked re-release of the game to address it. Users who are experiencing the bug can either wait for the update or upgrade to 7.1. Just one of those things to chalk up to experience I guess. Luckily most iOS users are quick to update their devices.

Meanwhile, I had better get back to my original project but with that just-launched glow, new ideas and more experience under my belt.