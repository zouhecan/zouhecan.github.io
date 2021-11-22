var param = 1;

function show() {
    const now = new Date();
    var month = now.getMonth() + 1
    if (month < 10) {
        month = "0" + month;
    }
    var date = now.getDate()
    if (now.getDate() < 10) {
        date = "0" + date;
    }
    const filename = 'APP性能周报数据' + now.getFullYear() + month + date + '.xlsx';
    // window.alert("Hello world!");
    window.alert(filename);
}

function out(param) {
    console.log("执行out方法");
    document.getElementById("demo").innerHTML = param + "<br />" + testObject() + "<br />" + testArray();
    var str = "字符串的长度";
    console.log(typeof str);
    console.log(typeof param);

    if ((typeof str) == "string") {
        var l = str.length;
        console.log(str + ".length = " + l);
    }
}

function testObject() {
    var array = [40, 100, 1, 5, 25, 10];
    array.sort();
    return array.toString();
}

function testArray() {
    var object = {
        "name": "zouhecan",
        "id": "123456"
    }
    var array = [40, 100, 1, 5, 25, 10];
    array.sort((a, b) => 1);
    return array.reverse().toString();
}

function testNumber() {
    console.log(undefined == null);
    console.log(undefined == NaN);
    console.log(0 == null);
}

// var count = 10;

function testFunc() {
    var count = 0;
    var user = {
        count: 1,
        getCount: function () {
            return this.count;
        }
    }
    console.log(user.getCount());
    var myGetCount = user.getCount;
    console.log(myGetCount());
    console.log(myGetCount);
}

function testWindow() {
    eval(console.log(window.location));//把传入的字符串当作js脚本执行
    console.log([] ? true : false);
    console.log([] == false);
    console.log([] == false ? true : false);
}

function testUl() {
    var elements = document.getElementsByTagName("li");
    console.log(elements);
    var length = elements.length;
    console.log("elements.length = " + length);
    for (var i = 0; i < length; i++) {
        elements[i].onclick = function () {
            console.log("current i = " + i);
        }
    }
    XMLHttpRequest
}

function arrayArguments(a, b, c) {
    var array = [11, 22, 33];
    console.log(array);
    document.getElementById("test_arguments").innerHTML = array;
}

function greatCommonDivision() {
    var form = document.getElementById("my_form");
    var a = form.number1.value;//数字字符串
    var b = form.number2.value;
    if (a <= 0 || b <= 0) {
        return -1;
    }
    if (a - b < 0) {//减法会将数字string转为number
        var c = a;
        a = b;
        b = c;
    }
    var result = gcd1(a, b);
    document.getElementById("result").innerHTML = a + "与" + b + "的最大公约数是" + result;
    console.log(a + "与" + b + "的最大公约数是" + result);
    return;
}

/**
 * 最大公约数
 */
function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}

/**
 * 最大公约数
 */
function gcd1(a, b) {
    if (a - b < 0) {
        var c = a;
        a = b;
        b = c;
    }
    if (a == b) {
        return a;
    }
    return gcd1(b, a - b);
}

function crow() {
    // testInnerText()
    // testProxy();
    // testPromise(1)
    // testIterator()
    // testGenerator()
    testClass()
}

function testInnerText() {
    const {log} = console;
    // log(document.getElementsByTagName("body")[0].innerText);
    log(document.documentElement.innerText == null);
}

function testProxy() {
    const {log} = console;

    const handler = {
        get: function (target, name) {
            if (name === 'prototype') {
                return Object.prototype;
            }
            return 'Hello, ' + name;
        },

        apply: function (target, args) {
            return args[0];
        },

        construct: function (target, args) {
            return {value: args[1]};
        }
    };

    const fproxy = new Proxy(function (x, y) {
        return x + y;
    }, handler);

    const r = fproxy(1, 2); // 1
    log(r)
}

function testPromise(num) {
    let promise = new Promise(function (resolve, reject) {
        console.log('Promise');
        if (num > 10) {
            resolve();
        } else {
            reject()
        }
    });

    promise.then(function () {
        console.log('resolved.');
    }, function () {
        console.log('reject.');
    });

    for (let i = 1; i < 100; i++) {
        console.log("Wating")
    }
}

function testIterator() {
    var it = makeIterator((['a', 'b']))
    console.log(it.next())
    console.log(it.next())
    console.log(it.next())
}

function makeIterator(array) {
    var index = 0
    return {
        next: function () {
            return array[index++]
        }
    };
}

function testGenerator() {
    var hw = helloWorldGenerator();
    console.log(hw.next)
    console.log(hw.next)
    console.log(hw.next)

    console.log(hw.next())
    console.log(hw.next())
    console.log(hw.next())

    console.log(hw.next().value)
    console.log(hw.next().value)
    console.log(hw.next().value)
}

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

function openUrl(url) {
    window.open(url, "my_window")
}

function testClass() {
    let myClass = new MyClass(123, "zouhecan")
    console.log(myClass.name)
    console.log(myClass.id)
    console.log(myClass.getName())

    console.log(myClass.hasOwnProperty("name"))
    console.log(myClass.hasOwnProperty("id"))
    console.log(myClass.hasOwnProperty("getName"))

    console.log(MyClass.prototype.hasOwnProperty("name"))
    console.log(MyClass.prototype.hasOwnProperty("id"))
    console.log(MyClass.prototype.hasOwnProperty("getName"))

    Object.getPrototypeOf(myClass).printClass = function (){
       console.log("向MyClass中添加printClass方法")
    }
    myClass.printClass()
}

class MyClass {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    getName() {
        return this.name
    }
}