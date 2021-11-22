function show() {
    window.alert("大别山灵气孕育，千年出一个的人才")
}

function crow() {
    window.confirm("思想价值3个亿，家里油缸都漫出来了")
}

function getResult() {
    var form = document.getElementById("my_form");
    var a = form['name1'].value;
    var b = form['name2'].value;
    if (a === '' || b === '' || a === b) {
        window.alert("请输入你的名字")
        return;
    }

    if (b !== '王劲松' && a !== '王劲松') {
        document.getElementById("result").innerHTML = a + "比" + b + "优秀";
    } else if (a === '王劲松') {
        document.getElementById("result").innerHTML = b + "比" + a + "差十万百千里";
    } else {
        document.getElementById("result").innerHTML = a + "比" + b + "差十万百千里";
    }
}