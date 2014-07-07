---
layout: post
title:  "Downcasting in Swift"
date:   2014-07-07 18:06:00
categories: swift
---

One thing that always bugged me about Objective-C was the fact that you can't easily cast an object as its subclass. For example, let's say you have a class named Phone. You also have a subclass of Phone called IPhone. You ask a 3rd Party library called MyMagicPhoneLibrary for all its iPhone objects. It however spews out an array of generic Phone objects. We know these should be iPhones so what can we do to cast them as iPhones? One option is to write a constructor method that will convert instances of Phone to iPhone but this isn't really optimal, especially if you are doing this operation in many places.

This is where Swift becomes really useful. Using the 'as' keyword, Swift fully supports downcasting. Let's see how we could solve the above problem in Swift code:

{% highlight objc %}
 for phone in fetchedPhones {
 		if let iPhone = phone as? IPhone {
 				println("Do I have touch ID? " + ((iPhone.touchID) ? "Yes!" : "No."))
 		}
 }
{% endhighlight %}

By adding a question mark after 'as', we are using the operator's optional form. This is useful if you are unsure whether the downcast will succeed. You can alternatively use 'as' without the question mark to force the downcast if you are sure it will always succeed. A runtime error will be thrown if it doesn't.