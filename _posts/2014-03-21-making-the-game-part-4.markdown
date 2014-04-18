---
layout: post
title:  "Making the Game 4 - Class Hierarchy"
date:   2014-03-21 17:33:00
categories: making-the-game
---

It's been a while since I posted last, and while this screenshot of the current game is pretty similar visually to the last one I posted, a lot has changed under the hood (or bonnet for my fellow Brits).

![Reset]({{ site.url }}/assets/game-shot-6.png)

I decided to tear the game apart and start again from scratch. This wasn't because the code I had written didn't work, it was just messy and disorganised. Now that I understood a little more about building a game, I was more confident about what the class structure should look like.

![Class Structure]({{ site.url }}/assets/class-diagram-1.png)

Above is the class structure of the GameObject class type. A GameObject is basically any entity that lives within the level map as an interactive element. All GameObjects have their own update loop which is called from the main update loop.

I decided to implement a component pattern which makes it really easy and really fun to create new GameObject descendants just by plugging in behaviour and logic modules. I split any physics, movement and collision detection into separate classes that could be easily plugged into a GameObject, and mixed and matched to create different behaviour.

For example, the Actor subclass has movement, friction and gravity classes plugged into it. This means that all subclasses of Actor (at this point the player and the enemy classes) will behave according to those rules. Now of course we want the player to have some different functionality to the enemies, so the Player class also has extra abilities and a different movement input source. The enemy class has an AI input plugged into it's movement module, and the player has the user's touch input.

Another nifty little feature I have implemented is the friction module which will read the friction value of the tile that a game object is currently touching and change it's movement accordingly. For example, an 'ice' tile will reduce the deceleration of the GameObject once it stops moving, giving a slippery effect.
