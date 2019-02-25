$(".chy_page>a").click(function () {
    $(this).addClass("chy_light");
    $(this).parent().siblings(".chy_page").children().removeClass("chy_light");
})