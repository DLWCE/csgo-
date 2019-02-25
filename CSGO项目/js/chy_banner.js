//1.获取元素
var chy_screen = document.getElementById("chy_screen");
var chy_ul = chy_screen.children[ 0 ]//轮播图列表ul
var chy_ol = chy_screen.children[ 1 ]//页码列表ol
//页面一加载：开启自动轮播模式
var timeID = setInterval(function (  ) {
    nextPage();
},2000);

//2.1 鼠标移入
chy_screen.onmouseover = function () {
    //关闭定时器，切换手动模式
    clearInterval(timeID);
}
//鼠标移出
chy_screen.onmouseout = function () {
    //开启自动模式
    timeID = setInterval(function (  ) {
        nextPage();
    },2000);
}

var index = 0;
function nextPage() {
    if (index == chy_ul.children.length - 1){
        chy_ul.style.left = '0px';
        index = 0;//从第一张开始无限轮播
    };
    //index++ 下一页
    index++;
    //开始滚动
    animationMove(chy_ul,-index*chy_screen.offsetWidth);
    //排他思想修改页面样式
    for(var i = 0;i<chy_ol.children.length;i++){
        if (i == index){
            chy_ol.children[i].className = 'active';
        }else{
            chy_ol.children[i].className = '';
        }
    };

    //如果是最后一张，则应该手动修改第一个页码高亮
    if (index == chy_ul.children.length - 1){
        chy_ol.children[0].className = 'active';
    }
}

// 页码点击事件
for(var i = 0;i<chy_ol.children.length;i++){
    //给每一个页码添加一个自定义索引属性
    chy_ol.children[i].setAttribute('yemaIndex',i);
    //注册点击事件
    chy_ol.children[i].onclick = function (  ) {
        //取出当前点击的ol的索引
        var yemaIndex = this.getAttribute('yemaIndex');
        console.log ( yemaIndex );
        //修改index为当前点击的页码索引
        index = yemaIndex;
        //开始滚动
        animationMove(chy_ul, -index*chy_screen.offsetWidth);
        //排他思想修改样式
        for(var j = 0;j<chy_ol.children.length;j++){
            if (j == yemaIndex){
                chy_ol.children[j].className = 'active';
            }else{
                chy_ol.children[j].className = '';
            }
        }
    }
}