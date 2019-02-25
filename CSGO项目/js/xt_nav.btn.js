$(function ( ) {
    $('.nav_btn').click(function (  ) {
        $(this).siblings('.nav_process_box').stop(true,false).slideToggle(200);
    $(this).find('.xia').toggleClass('bg').toggleClass('on');
    });
    $('.step_02 a').mouseenter(function (  ) {
        $(this).siblings('span').show()
    })
    $('.step_02 a').mouseleave(function (  ) {
        $(this).siblings('span').hide()
    })
    $('.step_03 a').mouseenter(function (  ) {
        $(this).siblings('span').show()
    })
    $('.step_03 a').mouseleave(function (  ) {
        $(this).siblings('span').hide()
    })
})