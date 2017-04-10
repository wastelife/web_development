# Java Script Basic

 ```js
 string.replace()

 var email = "weiwei@udacity.com";
 var newEmail =
    email/replace("udacity", "gmail");
    console.log(email);
    console.log(newEmail);
  ```

  ```js
  var s = "audacity";

  var udacityizer = function(s) {
      // Right now, the variable s === "audacity"
      // Manipulate s to make it equal to "Udacity"
      // Your code goes here!

      s = s[1].toUpperCase() + s.slice(2);
      return s;
  };

  // Did your code work? The line below will tell you!
  console.log(udacityizer(s));

  //slice(start, [end])
  ```
Truthy and Falsy

  Truthy | Falsy
  ------------ | -------------
  true | false
  non-zero numbers | 0
  "strings" | ""
  objects | undefined
  arrays | null
  functions | NaN

add the last number in array
  ```js
  function incrementLastArrayElement(_array)  {
    var newArray = [];
    newArray = _array.slice(0);
    var lastNumber = newArray.pop();
    newArray.push(lastNumber + 1);
    return newArray;
  }
  ```

  string test
  ```js
  function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}
  ```
  object literal notation
  ```js
  var bio = {
    "name": "Wei Wei",
    "role": "Sofeware Development Engineer",
    "contact": {
        "mobile": "8312957242",
        "email": "ww_1125@outlook.com",
        "github": "wastelife",
        "location": "Santa Cruz"
    },
    "skills": [
        "front-end", "back-end", "mobile"
    ],
    "bioPic": "images/fry.jpg"
}
  ```
  dot notation & bracket notation
  ```js
  var work = {};
  work.position = "Course Developer";
  work.employer = "Udacity";

  var education = {};
  education["name"] = "UCSC";
  education["years"] = "2016-2018";

  $("#main").append(work["position"]);
  $("#main").append(education.name);
    ```
JSON
JavaScript Object Notation（JavaScript 对象标记）。JSON 用于存储和传输嵌套或分层数据， 其格式简单，且非常流行。之所以说它流行，是因为大多数其他编程语言都具有能够解析和编写 JSON 的库（就像 Python 的 JSON 库）。Internet GET 和 POST 请求经常以 JSON 格式传递数据。JSON 支持将对象 （或其他类型的数据）简单封装在其他对象中。有关详细信息，请参阅 MDN 或 JSON.org。
```js
var education = {
    "schools": [
        {
            "name": "UCSC",
            "location": "Santa Cruz",
            "major": "EE",
            "data": "2016-Rresent"
        }, {
            "name": "TYUT",
            "location": "China",
            "major": "EE",
            "data": "2012-2016"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basic",
            "school": "Udacity",
            "datas": "2017"
        }, {
            "title": "Ajax",
            "school": "Udacity",
            "datas": "2017"
        }
    ]
}
```

DOM
not useful part

=== & ==
当连用三个等号 === 时，在执行比较之前， 不进行任何类型转换。如果两值属于不同类型，例如， 字符串和数字，则二者永远也不能相等。 仅当数值相等且类型相同时， 才返回 true。

宽松相等 == 会检查两值是否属于同一 类型，如果类型不同，则会先转换为相同类型，然后再进行比较。如果 类型相同，则 === 和 == 的结果 完全一致。如果不同，则可能会产生 意外结果。

for-in
for 的值只是一个迭代器 不是实际值
```js
var countries = ["Germany", "Argentina", "Brazil", "Netherlands"];
for(country in countries) {
  //print 0,1,2,3
  console.log(country);
  //print country name
  console.log(countries[country]);
}
```
function
1. First way
```js
var myFunc = function(para1, param2) {
  //code here
}
```
2. Second way
```js
function myFunc(para1, param2) {
  //code here
}
```
`string.trim()`
去除string前后的空白部分
encapsulation封装
```js
//projects is an object and the display function is inside
projects.display = function(){
  //code here
}
```
JS没有块级作用域
```js
var outsideExample = "First string";
if (true) {
    var outsideExample = "Second string";
    console.log(outsideExample);
}
console.log(outsideExample);
```
输出两次Second string,因为js没有块级作用域.js只支持函数作用域

Udacity 2种函数声明语法的区别
正如在这门课程中学到的，你可以使用两种语法来声明函数

`var functionName = function() {}`和`function functionName() {}`

JavaScript 解释器负责将你写的代码准备成机器代码，它在处理这两种函数声明时稍微有所不同，因为这是由它处理变量声明的方式造成的。

所有变量声明都将立即移到作用域的顶部。例如：

```
var x = 5;
console.log(x); // 5
var y = 10;
```
等同于
```
var x, y; // 这行同时声明了 x 和 y。
x = 5;
console.log(x); // 5
y = 10;
```
注意，y 的声明移到了作用域的顶部。同时注意，第一行没有为 x 或 y 设定值。在 var x, y; 之后，x 和 y 都 undefined。

其他类型的变量（包括函数）也具有这一行为。如果你使用 var functionName 语法，只有函数的声明（例如 var functionName;）移到作用域的顶部。但是，如果你使用 function functionName() 语法，函数声明和定义（函数里的实际说明）移到函数作用域的顶部。
1. eg1
```js
example1();
function example1() {
    console.log("Ran the example");
}
```
2. eg2
```js
example2();
var example2 = function() {
    console.log("Ran the example");
}
```
