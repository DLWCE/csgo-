/**
 * Created by zhi on 2018/12/6.
 */

//index��ҳ��js����

$(function () {

    //�̶���λ��Ŀ�����ʧ

    $('.fixed .xx').click(function () {
        $('.fixed').animate({right: -149},300,'linear', function () {
            $(this).css('display','none');
        });
    });

    //��ݵ���shortcut��Ŀ

    $('.shortcut .links a').mouseenter(function () {
        $(this).find('i').stop(true,false).animate({width: 85}, 200, 'linear');
    }).mouseleave(function () {
        $(this).find('i').stop(true,false).animate({width:0},200,'linear');
    });

    //������Ƶ�б���Ŀ

    $('.video_list>div').mouseenter(function () {
        $(this).siblings('div').find('a').css('opacity', .3);
        $(this).find('video').trigger('play');
        $(this).siblings('div').find('video').trigger('pause');
    });
    $('.video_list').mouseleave(function () {
        $(this).find('a').css('opacity',0);
        $(this).find('video').trigger('pause');
    });

    //�ײ����������
    //
    //$('.menu .banner_links a').mouseenter(function () {
    //    console.log($(this).css('top', -20));
    //})


});

