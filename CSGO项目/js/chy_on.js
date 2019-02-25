
$(".chy_hotTab .chy_tabList li a").click(function () {
    $(this).addClass("chy_on");
    $(this).parent().siblings().children().removeClass("chy_on");
});
