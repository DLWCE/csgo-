/**
 * Created by ����� on 2018/12/6.
 */

$(function(){

    $('.top_nav li').mouseenter(function () {
        $(this).stop(true,false).animate({marginTop: -20},300,'linear');
    });
    $('.top_nav li').mouseleave(function () {
        $(this).stop(true,false).animate({marginTop: 0},300,'linear');
    });


    $('.down .cli').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');

        var idx = $(this).index(); //�ҵ���ǰ��������li��ǩ������.

        $('.down .main').eq(idx).addClass('selected').siblings('div').removeClass('selected');
    });



        $('.inner li').mouseenter(function () {
        console.log(this);

        $(this).stop(true,false).animate({marginTop:-30},300,'linear');
    });

    $('.inner li').mouseleave(function () {
        $(this).stop(true,false).animate({marginTop: 0},300,'linear');
    });
})