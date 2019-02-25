/**
 * Created by zhi on 2018/12/8.
 */

$(function () {

    //fixed栏目

    $('.fixed li').on('click', function () {
        var idx = $(this).index();
        $('html,body').stop(true,false).animate({scrollTop:870*idx},1000);
    });


    //section1栏目

    $('.section1 .enter').on('click', function () {
        $('html,body').animate({scrollTop:870},1000);
    });

    //section2栏目

    $('.section2 .left li').on('mousemove', function (e) {

        var dragLeft = e.clientX - $(this).parent().parent().position().left;
        $(this).parent().next().css('left', dragLeft-4);
        $('.section2 .left li').find('div').width(dragLeft);

    });


    $('.section2 .right li').on( {
        'mouseover':function () {
            $(this).addClass('on').siblings('li').removeClass('on');
        },
        'click': function () {
            $(this).addClass('current').siblings('li').removeClass('current');
            var idx = $(this).index();
            $('.section2 .left li').eq(idx).addClass('on').siblings('li').removeClass('on');
        },
        'mouseleave': function () {
            $('.section2 .right li').removeClass('on');
        }
    });


    //section4栏目

    $('.section4 img').on('click', function () {
        $(this).siblings('video').trigger('play');
        $('.section4 img').hide();
    });


    //section5栏目

    $('.section5 .shou .one').on('click', function () {
         $(this).siblings('.two').animate({
             width: 705
         },500,'linear').siblings('.fou').animate({
             width: 0
         },500,'linear');
        $('.section5 .fly img').eq(0).animate({
            left: 990,
            top: 5,
            opacity: 0
        },800).next('img').animate({
            left: 1520,
            top: 360,
            opacity: 0
        },800).next('img').animate({
            left: 1100,
            top: 585,
            opacity: 0
        },800).next('img').animate({
            left: 200,
            top: -135,
            opacity: 0
        },800);
    });
    $('.section5 .shou .thr').on('click', function () {
        $(this).siblings('.two').animate({
            width: 0
        },500,'linear').siblings('.fou').animate({
            width: 705
        },500,'linear');

        $('.section5 .fly img').eq(0).animate({
            left: 790,
            top: 205,
            opacity: 1
        },800).next('img').animate({
            left: 1320,
            top: 160,
            opacity: 1
        },800).next('img').animate({
            left: 1300,
            top: 385,
            opacity: 1
        },800).next('img').animate({
            left: 400,
            top: 65,
            opacity: 1
        },800);
    });

    $('.section5,.section5 .title_04,.section5 .shou').on('mouseenter', function () {

        $('.section5 .imgs img').eq(0).animate({
            left: 0,
            top: 0,
            opacity: 1
        }, 1200).next('img').animate({
            left: 600,
            top: 50,
            opacity: 1
        }, 1200).next('img').animate({
            left:-31,
            top: 468,
            opacity: 1
        }, 1200).next('img').animate({
            left: 602,
            top: 462,
            opacity: 1
        }, 1200).next('img').animate({
            left: 185,
            top: 25,
            opacity: 1
        }, 1200).next('img').animate({
            left: 1128,
            top: 308,
            opacity: 1
        }, 1200);

    });

    //----------------------------------------------------

    //$(window).on('scroll', function () {
    //    var scrollTopValue = $(this).scrollTop();
    //    if(scrollTopValue < 2610 || scrollTopValue > 4350) {
    //        $('.section5 .imgs img').animate({
    //            left: 1900,
    //            top: -200,
    //            opacity: 0
    //        },800);
    //    }else {
    //        $('.section5 .imgs img').eq(0).animate({
    //            left: 0,
    //            top: 0,
    //            opacity: 1
    //        }, 1200).next('img').animate({
    //            left: 600,
    //            top: 50,
    //            opacity: 1
    //        }, 1200).next('img').animate({
    //            left:-31,
    //            top: 468,
    //            opacity: 1
    //        }, 1200).next('img').animate({
    //            left: 602,
    //            top: 462,
    //            opacity: 1
    //        }, 1200).next('img').animate({
    //            left: 185,
    //            top: 25,
    //            opacity: 1
    //        }, 1200).next('img').animate({
    //            left: 1128,
    //            top: 308,
    //            opacity: 1
    //        }, 1200);
    //    }
    //});

    //-------------------------------------------------------------------


    //section6栏目

    $('.section6 .videos .left li').on('click', function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        var idx = $(this).index();
        $('.section6 .videos .right li').eq(idx).addClass('on').siblings('li').removeClass('on').end().find('video').trigger('play').parent().siblings('li').find('video').trigger('pause');
    });


});

























