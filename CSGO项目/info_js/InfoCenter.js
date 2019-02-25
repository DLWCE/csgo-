/*
   自适应 infoContent 宽度
*/

$(function () {

    var bodyW = parseInt($('body').css('width'));
    var infoNavW = parseInt($('.infoNav').css('width'));
    var infoContentW = bodyW - infoNavW;

    $('.infoContent').css('width',infoContentW);
});

/*
   更改背景图片及标题背景
*/

$(function () {

    $('.infoNav li').click(function () {

        $(this).addClass('title_selected').siblings('li').removeClass('title_selected');

        var idx = $(this).index();

        $('.infoContent').eq(idx).show().siblings('.infoContent').hide();

    });
});

/*
   详情内容的滚动
*/

$(function () {

    var scrollH = $('.details').css('height');
    $('.scrollView'). slimscroll({

        height: scrollH,
        alwaysVisible: true,
        disableFadeOut: false,
        color: '#b5d5f1'
    })
});

/*
    详情点击弹窗
*/

// $(function(){
//
//     $('.yj_details_a').on('click',function(){
//         // alert('点击');
//         $('.yj_box_b').css('display','block')
//     });
//     $('.yj-box-a .yj_cancel a').on('click',function(){
//         // alert("点击了");
//         $('.yj_box_b').css('display','none')
//     });
//
//     $('.yj_details_b').on('click',function(){
//         $('.yj_box_a').css('display','block')
//     });
//     $('.yj_cancel a').on('click',function(){
//         $('.yj_box_a').hide()
//     });
//
//     $('.yj_details_c').on('click',function(){
//         $('.yj_box_c').css('display','block')
//     });
//     $('.yj-box-b .yj_cancel').on('click',function(){
//         $('.yj_box_c').hide()
//     });
//
//     $('.yj_details_d').on('click',function(){
//         $('.yj_box_d').css('display','block')
//     });
//     $('.yj-box-c .yj_cancel').on('click',function(){
//         $('.yj_box_d').hide()
//     });
//
//     $('.yj_details_e').on('click',function(){
//         $('.yj_box_e').css('display','block')
//     });
//     $('.yj-box-d .yj_cancel').on('click',function(){
//         $('.yj_box_e').hide()
//     })
// });
$(function(){
    $('#yj-box-b').on('click',function(){
        $('.yj-box-b').show().siblings('li').hide();
    });
    $('#yj-box-c').on('click',function(){
        $('.yj-box-c').show().siblings('li').hide();
    });
    $('#yj-box-a').on('click',function(){
        $('.yj-box-a').show().siblings('li').hide();
    })
});
$(function(){
    $('.yj_liLsit li').on('click',function(){
        $(this).css({
            'backgroundColor':'#1c2027',
        }).siblings('li').css('backgroundColor','#3a404c',)
    })
});

