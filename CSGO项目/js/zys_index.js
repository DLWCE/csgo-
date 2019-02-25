/**
 * Created by zhi on 2018/12/6.
 */

//index首页的js代码

$(function () {

    //固定定位栏目点×消失

    $('.fixed .xx').click(function () {
        $('.fixed').animate({right: -149},300,'linear', function () {
            $(this).css('display','none');
        });
    });

    //快捷导航shortcut栏目

    $('.shortcut .links a').mouseenter(function () {
        $(this).find('i').stop(true,false).animate({width: 85}, 200, 'linear');
    }).mouseleave(function () {
        $(this).find('i').stop(true,false).animate({width:0},200,'linear');
    });

    //左右视频列表栏目

    $('.video_list>div').mouseenter(function () {
        $(this).siblings('div').find('a').css('opacity', .3);
        $(this).find('video').trigger('play');
        $(this).siblings('div').find('video').trigger('pause');
    });
    $('.video_list').mouseleave(function () {
        $(this).find('a').css('opacity',0);
        $(this).find('video').trigger('pause');
    });

    //底部进入官网栏
    //
    //$('.menu .banner_links a').mouseenter(function () {
    //    console.log($(this).css('top', -20));
    //})


});

