---
layout: post
title:  "How I Built an App in 2 days"
date:   2014-05-13 19:28:00
categories: iphone
---

So you want to know how I to designed and built <a href="http://moonlitapp.com/" target="_blank">Moonlit</a>, an iPhone App and a web-based API, from scratch in just two days? Here's the short answer: a lot of coffee and short-cuts.

It all started late last Friday evening. My plans for the weekend had just been unexpectedly cancelled so I had two days with nothing to do ahead of me. The weather was pretty gross, so a rainy day activity it would have to be. I decided I would set myself a challenge: I would build something cool by midnight on Sunday.

Rather than rattle on about the various decision processes I went through and a thesis about why I chose a particular library, here's a conveniently sized list of ten things I did to get it done:

1. Stay up late (but not too late)

	2am was my cut-off point, after that my productivity generally nose-dives and I suffer the next day.

2. Drink too much coffee

	My <a href="http://www.aeropresscoffee.com/" target="_blank">Aeropress</a> was one of the most important tools I used in the building of this app.

3. Use libraries for all the things.

	Some I used: <a href="https://github.com/Mantle/Mantle/" target="_blank">Mantle</a> (for object mapping), <a href="https://github.com/gonzalezreal/Overcoat" target="_blank">Overcoat</a> (for http requests), <a href="https://github.com/rails-api/rails-api" target="_blank">Rails-API</a> (a stripped down fork of Rails), <a href="https://github.com/rs/SDWebImage" target="_blank">SDWebIMage</a> (for image caching). Don't reinvent the wheel.

4. Don't unit test

	What?? Yes, not a single test was written for any of my code. Don't get me wrong though - for bigger or more important projects, testing is a very good idea.

5. Keep it simple

	Every time I thought of a feature I could add, I would tell myself "No, leave it for version 1.1". 

7. Stick with what you're unfamiliar with

	I have been writing an iOS game recently and haven't touched Autolayout or Interface Builder for a while, so I stuck with what I knew best at the time which was to turn off Autolayout and manually write CGRects EVERYWHERE.

8. Code only for the scenarios you need

	I'm going to have complete control over the API data, so it doesn't matter that my app doesn't automatically adjust its layout if some of the content doesn't fit. Solution: don't add content that doesn't fit.

9. Auth? What auth?

	The api consists of two models and a controller with one index method. That's all I needed. For now I'm the only person who will be adding content so I just wrote a short seed script to dump a YAML file. Why make it any more complicated than that?

10. Don't over-design

	I had a rough idea in my head of what the app should look like, so I just dived straight into Illustrator and started creating the design. No time for sketches or wireframes.

6. Write messy, undocumented code

	I need to go in and refactor a lot of code for 1.1, but for now who cares? It works and nobody else is going to see that largely redundant, tangled mess!

In summary, if you want to get something out there fast, don't over think or over engineer it. Ship it as an MVP and write a nice list of things to make it better for the next iteration. The process of shipping something is satisfying and likely to propel you forward and avoid that project boredom dip.

<a href="https://itunes.apple.com/app/moonlit-bristol-do-something/id877299039/" target="_blank">Moonlit is available on Apple's App Store.</a>

If you're feeling adventurous, come and <a href="https://twitter.com/henryeverett">follow me on Twitter!</a>