# JavaScript 入门篇
<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [JavaScript 入门篇](#javascript-入门篇)
	- [Chapter 1](#chapter-1)
		- [document.write(); 在html上打印信息](#documentwrite-在html上打印信息)
		- [alert("hello!");  弹出一个对话框](#alerthello-弹出一个对话框)
		- [注释](#注释)
		- [区分大小写 abc 和abC不是一个变量](#区分大小写-abc-和abc不是一个变量)
		- [if else](#if-else)
		- [函数调用](#函数调用)
	- [请和我互动（常用互动方法）](#请和我互动常用互动方法)
		- [document.write()](#documentwrite)
		- [alert()](#alert)
		- [JavaScript-确认（confirm 消息对话框）](#javascript-确认confirm-消息对话框)
		- [JavaScript-提问（prompt 消息对话框）](#javascript-提问prompt-消息对话框)
		- [JavaScript-打开新窗口（window.open）](#javascript-打开新窗口windowopen)
		- [JavaScript-关闭窗口（window.close）](#javascript-关闭窗口windowclose)
		- [编程练习](#编程练习)
	- [第3章 你也有控制权（DOM操作）](#第3章-你也有控制权dom操作)
		- [DOM](#dom)
		- [通过ID获取元素](#通过id获取元素)
		- [innerHTML 属性](#innerhtml-属性)
		- [改变 HTML 样式](#改变-html-样式)
		- [显示和隐藏（display属性）](#显示和隐藏display属性)
		- [控制类名（className 属性）](#控制类名classname-属性)
	- [编程挑战](#编程挑战)

<!-- /TOC -->
## Chapter 1
### document.write(); 在html上打印信息

```js
<script type="text/javascript">
  document.write("I love");
</script>
```
### alert("hello!");  弹出一个对话框

```js
<script type="text/javascript">
    alert("hello!");
</script>
```
### 注释
`//` & `/* */`

变量
### 区分大小写 abc 和abC不是一个变量

```js
var mychar;
mychar="javascript";
var mynum = 6;

```
### if else

```js
if(条件)
{ 条件成立时执行的代码 }
else
{ 条件不成立时执行的代码 }
```
### 函数调用
click the button and the alert will show up

```js
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>函数调用</title>
   <script type="text/javascript">
      function contxt() //定义函数
      {
         alert("哈哈，调用函数了!");
      }
   </script>
</head>
<body>
   <form>
      <input type="button"  value="点击我" onclick="contxt()" />  
   </form>
</body>
</html>
```
## 请和我互动（常用互动方法）
### document.write()
* 第一种:输出内容用`" "`括起，直接输出`" "`号内的内容。

```js
<script type="text/javascript">
  document.write("I love JavaScript！"); //内容用""括起来，""里的内容直接输出。
</script>
```

* 第二种:通过变量输出内容

```js
<script type="text/javascript">
  var mystr="hello world!";
  document.write(mystr);  //直接写变量名，输出变量存储的内容。
</script>
```

* 第三种:输出多项内容 内容之间用`+`号连接。

```js
<script type="text/javascript">
  var mystr="hello";
  document.write(mystr+"I love JavaScript"); //多项内容之间用+号连接
</script>
```

* 第四种:输出HTML标签，并起作用，标签使用`""`括起来

```js
<script type="text/javascript">
  var mystr="hello";
  document.write(mystr+"<br>");//输出hello后，输出一个换行符
  document.write("JavaScript");
</script>
```

### alert()
it can show many alerts and it will show in order

```js
<script type="text/javascript">
   var mynum = 30;
   alert("hello!");
   alert(mynum);
</script>
```
### JavaScript-确认（confirm 消息对话框）
confirm(str);  
参数说明:

str：在消息对话框中要显示的文本  
返回值: Boolean值  
返回值:

当用户点击"确定"按钮时，返回true  
当用户点击"取消"按钮时，返回false

```js
<script type="text/javascript">
    var mymessage=confirm("你喜欢JavaScript吗?");
    if(mymessage==true)
    {   document.write("很好,加油!");   }
    else
    {  document.write("JS功能强大，要学习噢!");   }
</script>
```
### JavaScript-提问（prompt 消息对话框）
prompt(str1, str2);  
参数说明：

str1: 要显示在消息对话框中的文本，不可修改  
str2：文本框中的内容，可以修改  
返回值:
1. 点击确定按钮，文本框中的内容将作为函数返回值
2. 点击取消按钮，将返回null

```js
var myname=prompt("请输入你的姓名:");
if(myname!=null)
  {   alert("你好"+myname); }
else
  {  alert("你好 my friend.");  }
```
### JavaScript-打开新窗口（window.open）

```js
<script type="text/javascript">
window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no,status=no,scrollbars=yes')
</script>

```
### JavaScript-关闭窗口（window.close）

```js
<script type="text/javascript">
   var mywin=window.open('http://www.imooc.com'); //将新打的窗口对象，存储在变量mywin中
   mywin.close();
</script>
```
注意:上面代码在打开新窗口的同时，关闭该窗口，看不到被打开的窗口。

### 编程练习

```html
<!DOCTYPE html>
<html>
 <head>
  <title> new document </title>  
  <meta http-equiv="Content-Type" content="text/html; charset=gbk"/>   
  <script type="text/javascript">  
    function openWindow()
    {
        var myconfirm = confirm("open the window?");
        if(myconfirm == true) {
            window.open('http://www.imooc.com/', '_blank', 'width=400,height=500,menubar=no,toolbar=no, menubar=no');
        }
    }
    // 新窗口打开时弹出确认框，是否打开

    // 通过输入对话框，确定打开的网址，默认为 http：//www.imooc.com/

    //打开的窗口要求，宽400像素，高500像素，无菜单栏、无工具栏。


  </script>
 </head>
 <body>
	  <input type="button" value="新窗口打开网站" onclick="openWindow()" />
 </body>
</html>
```
## 第3章 你也有控制权（DOM操作）
### DOM
文档对象模型DOM（Document Object Model）定义访问和处理HTML文档的标准方法。DOM 将HTML文档呈现为带有元素、属性和文本的树结构（节点树）。
### 通过ID获取元素

```js
var mye = document.getElementById("con");
document.write(mye);
```

`result: null`
注:获取的元素是一个对象，如想对元素进行操作，我们要通过它的属性或方法。

### innerHTML 属性

```js
var mychar = document.getElementById("ID");
mychar.innerHTML
```
### 改变 HTML 样式
Object.style.property=new style;
### 显示和隐藏（display属性）
Object.style.display = value

| value | Description |
| --- | --- |
|block | display |
| none | Not display  |
### 控制类名（className 属性）
object.className = classname
## 编程挑战
DF
txt.removeAttribute("style");

```js
function reSet() {
    var f5 = confirm("reset?");
    if(f5 == true) {
        var txt=document.getElementById("txt");

        txt.removeAttribute("style");

        var con=document.getElementById("con");

        con.removeAttribute("style");
    }
}
```
