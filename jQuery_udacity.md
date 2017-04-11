# jQuery in udacity
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [jQuery in udacity](#jquery-in-udacity)
	- [Why jQuery?](#why-jquery)
	- [3 ways to select elements in jQuery](#3-ways-to-select-elements-in-jquery)
	- [DOM manipulation](#dom-manipulation)
	- [jQuery Event](#jquery-event)

<!-- /TOC -->
## Why jQuery?
一些操作的步骤比较繁琐,譬如在一个父节点里插入一个新的节点,jQuery提供方便的操作命令

## 3 ways to select elements in jQuery
- $("tag");
- $(".class");
- $("#id");  

Examples
```js
//parent返回一个,parents返回所有;
//children返回一层,find返回所有;
//.XX()括号里还能加限制条件,eg:$('#cameron').parents('#jack');
$('#cameron').parent();
$('#cameron').parents();
$('#cameron').children();
$('#cameron').find();
$('#cameron').siblings();
```  
为.nav-list类下第一个child的<a>中加入href 并设值为#1
```js
var navList, firstItem, link;
navList = $('.nav-list');
firstItem = navList.children.first();
link = firstItem.find('a');
link.attr('href', '#1');
```
## DOM manipulation  
Add / Remove class  
`.toogleClass()`  
Get / Set attributes  
`.attr()`  
Get / Set CSS  
`.css()`  
Get / Set html content or text content  
`.html()`  
`.text()`  
Get / Set value of tag  
`.val()`  
Remove DOM element  
`.remove()`  
Add new DOM element  
`.append()`  
`.prepend()`  
`.insertBefore()`  
`.before()`  
`.insertAfter()`   
`after()`  

.each()  
循环所有选中的tag,常放入一个函数  
```js
//numbnerAdder functions display the text length of p tag at the end of content
function numberAdder (){
  var text, number;
  text = $(this).text();
  numbe = text.length;
  $(this).text(text + " " + number);
}
//select all p tag and apply numberAdder function
$("p").each(numberAdder);
```  
## jQuery Event
`monitorEvent` in chrome  

```js
/*
For this quiz, use jQuery to set up an event listener. Your event listener must:
    1. listen to the #my-button element
    2. listen for a `click` event
    3. perform the following actions when the button is clicked:
        a. remove the #my-button element from the DOM
        b. add the `success` class to the body
*/
$("#my-button").on('click', function() {
  $(this).remove();
  $('body').addClass('success');
});

```
