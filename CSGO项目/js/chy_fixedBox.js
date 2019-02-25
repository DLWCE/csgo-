var chy_fixedBox = document.getElementsByClassName("chy_fixedBox")[0];
var chy_videoCenter =document.getElementsByClassName("chy_videoCenter")[0];
window.onscroll=function () {
    if (getScroll().scrollTop >= chy_videoCenter.offsetHeight) {
        chy_fixedBox.className = "chy_fixedBox";
    }else {
        chy_fixedBox.className = "chy_fixedBox keJ";
    }
}
$('.chy_fixedBox').click(function(){
    $("html,body").animate({scrollTop:0},200);
});