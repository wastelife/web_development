# jQuery in w3s
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [jQuery in w3s](#jquery-in-w3s)
	- [jQuery Tutorial](#jquery-tutorial)
		- [What is jQuery?](#what-is-jquery)
			- [Adding jQuery to Your Web Pages](#adding-jquery-to-your-web-pages)
		- [jQuery Syntax](#jquery-syntax)
			- [The Document Ready Event](#the-document-ready-event)
		- [jQuery Selectors](#jquery-selectors)
			- [The element Selector](#the-element-selector)
			- [The #id Selector](#the-id-selector)
			- [The .class Selector](#the-class-selector)
			- [[More Examples of jQuery Selectors](https://www.w3schools.com/jquery/jquery_selectors.asp)](#more-examples-of-jquery-selectorshttpswwww3schoolscomjqueryjqueryselectorsasp)
		- [jQuery Event Methods](#jquery-event-methods)
	- [jQuery Effects](#jquery-effects)
		- [jQuery hide() and show()](#jquery-hide-and-show)
			- [jQuery toggle()](#jquery-toggle)
		- [jQuery Effects - Fading](#jquery-effects-fading)
		- [jQuery Effects - Sliding](#jquery-effects-sliding)
		- [jQuery Effects - Animation](#jquery-effects-animation)
		- [jQuery Effects - stop()](#jquery-effects-stop)
		- [jQuery Callback Functions](#jquery-callback-functions)
		- [jQuery - Chaining](#jquery-chaining)
	- [jQuery HTML](#jquery-html)
		- [jQuery - Get Content and Attributes](#jquery-get-content-and-attributes)
		- [jQuery - Set Content and Attributes](#jquery-set-content-and-attributes)
		- [jQuery - Add Elements](#jquery-add-elements)
		- [jQuery - Remove Elements](#jquery-remove-elements)
		- [jQuery - Get and Set CSS Classes](#jquery-get-and-set-css-classes)
		- [jQuery - css() Method](#jquery-css-method)
		- [jQuery - Dimensions](#jquery-dimensions)
	- [jQuery AJAX](#jquery-ajax)
		- [jQuery - AJAX Introduction](#jquery-ajax-introduction)
		- [jQuery - AJAX load() Method](#jquery-ajax-load-method)
		- [jQuery - AJAX get() and post() Methods](#jquery-ajax-get-and-post-methods)

<!-- /TOC -->
##jQuery Tutorial
###What is jQuery?
JavaScript library
####Adding jQuery to Your Web Pages
Downloading jQuery / jQuery CDN
Google CDN:

```
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
</head>
```
###jQuery Syntax
Examples:

```js
$(this).hide() - hides the current element.

$("p").hide() - hides all <p> elements.

$(".test").hide() - hides all elements with class="test".

$("#test").hide() - hides the element with id="test".
```
####The Document Ready Event                  
2 methonds

```js
$(document).ready(function(){

   // jQuery methods go here...

});
```

```js
$(function(){

   // jQuery methods go here...

});
```
###jQuery Selectors
jQuery selectors are used to "find" (or select) HTML elements based on their name, id, classes, types, attributes, values of attributes and much more. It's based on the existing CSS Selectors, and in addition, it has some own custom selectors.
####The element Selector

```js
$(document).ready(function(){
    $("button").click(function(){
        $("p").hide();
    });
});
```

####The #id Selector
```js
$(document).ready(function(){
    $("button").click(function(){
        $("#test").hide();
    });
});
```
####The .class Selector

```js
$(document).ready(function(){
    $("button").click(function(){
        $(".test").hide();
    });
});
```
####[More Examples of jQuery Selectors](https://www.w3schools.com/jquery/jquery_selectors.asp)

###jQuery Event Methods

```js
$("p").click(function(){
  // action goes here!!
});
```

##jQuery Effects
###jQuery hide() and show()
####jQuery toggle()
switch between hide/show
###jQuery Effects - Fading
* fadeIn()
* fadeOut()
* fadeToggle()
* fadeTo()

###jQuery Effects - Sliding
* slideDown()
* slideUp()
* slideToggle()

###jQuery Effects - Animation
###jQuery Effects - stop()
###jQuery Callback Functions

```js
$("button").click(function(){
    $("p").hide("slow", function(){
        alert("The paragraph is now hidden");
    });
});
```
###jQuery - Chaining
`$("#p1").css("color", "red").slideUp(2000).slideDown(2000);`
or

```js
$("#p1").css("color", "red")
  .slideUp(2000)
  .slideDown(2000);
```
##jQuery HTML
###jQuery - Get Content and Attributes
* text() - Sets or returns the text content of selected elements
* html() - Sets or returns the content of selected elements (including HTML markup)
* val() - Sets or returns the value of form fields
*
```js
$("#btn1").click(function(){
    alert("Text: " + $("#test").text());
});
$("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
});
```
the content of .html returns include HTML tag


```js
$("#btn1").click(function(){
    alert("Value: " + $("#test").val());
});
```

```js
$("button").click(function(){
    alert($("#w3s").attr("href"));
});
```
###jQuery - Set Content and Attributes
We will use the same three methods from the previous page to set content:

* text() - Sets or returns the text content of selected elements
* html() - Sets or returns the content of selected elements (including HTML markup)
* val() - Sets or returns the value of form fields

A Callback Function for text(), html(), and val()
???

Set Attributes - attr()

```js
$("button").click(function(){
    $("#w3s").attr("href", "https://www.w3schools.com/jquery");
});
```
or

```js
$("button").click(function(){
    $("#w3s").attr({
        "href" : "https://www.w3schools.com/jquery",
        "title" : "W3Schools jQuery Tutorial"
    });
});
```
A Callback Function for attr()
???

###jQuery - Add Elements
We will look at four jQuery methods that are used to add new content:

* append() - Inserts content at the end of the selected elements
* prepend() - Inserts content at the beginning of the selected elements
* after() - Inserts content after the selected elements
* before() - Inserts content before the selected elements

###jQuery - Remove Elements
###jQuery - Get and Set CSS Classes
jQuery has several methods for CSS manipulation. We will look at the following methods:

* addClass() - Adds one or more classes to the selected elements
* removeClass() - Removes one or more classes from the selected elements
* toggleClass() - Toggles between adding/removing classes from the selected elements
* css() - Sets or returns the style attribute

###jQuery - css() Method
###jQuery - Dimensions
jQuery has several important methods for working with dimensions:

* width()
* height()
* innerWidth()
* innerHeight()
* outerWidth()
* outerHeight()

##jQuery AJAX
###jQuery - AJAX Introduction
What is AJAX?
AJAX = Asynchronous JavaScript and XML.

In short; AJAX is about loading data in the background and display it on the webpage, without reloading the whole page.
###jQuery - AJAX load() Method
###jQuery - AJAX get() and post() Methods
