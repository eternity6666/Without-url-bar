var list = document.getElementById("main").getElementsByTagName("div");
var list2 = new Array;

//使用原生js实现给元素添加id值
function newArray() {
    for (var i = 0; i < list.length; i++) {
        list2[i]=list[i].firstElementChild.innerHTML;
        list[i].firstElementChild.id=list2[i];
    }
};

newArray();

var menu = document.getElementById("menu");

/*
//这是一个失败的尝试
for (var i = 0; i < list2.length; i++) {
    var para = document.createElement("li");
    var a=document.createElement("a");
    var node = document.createTextNode('<a href="#' + list2[i] +'">'+list2[i]+'</a>');
    para.appendChild(node);
    menu.appendChild(para);
};
*/
//使用原生Javascript实现遍历列表
for (var i = 0; i < list2.length; i++) {
    var para = document.createElement("li");
    var a=document.createElement("a");
    a.href="#"+list2[i];
    var node = document.createTextNode(list2[i]);
    a.appendChild(node);
    para.appendChild(a);
    menu.appendChild(para);
};



//给frequent use中添加常用元素列表；按频繁次数排序；最多10个
