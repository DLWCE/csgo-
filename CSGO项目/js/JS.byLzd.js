/**
 * Created by Administrator on 2018/12/5.
 */
//�羺����Start
//����л���Ӧ��ͼƬ
$(function(){
    //1.left����¼��ƶ��޸�top
    var $left_btn =$(".dianjing_innerbox_lzd .arrow_left");
    var $right_btn = $(".dianjing_innerbox_lzd .arrow_right");
    var $ul = $(".dianjing_innerbox_lzd .swiper_img");
    var $img_height =$ul.find("img").height();
    var index = 0;

    $right_btn.click(function () {
        if(index == 4){
            index = 0;
        }
            index++;
            var current = -index*$img_height;
            $ul.animate({top:current},200);
        })
    $left_btn.click(function(){
            if(index == 0){
                index = 4;
            }
            index--;
        var current = -index*$img_height;
        $ul.animate({top:current},200);
        }
    )

    var timeID = null;
    //jQuery�Ķ�ʱ�������Ż�
    $ul.parent().on("mouseenter",function(){
        clearInterval(timeID);
    }).on('mouseleave',function(){
        timeID = setInterval(function(){

            $right_btn.trigger('click');
        },2000);
    });
    //�������ʱ��ֹͣ��ʱ��,�Ƴ�������ʱ��
    //var timeID = null;

//    timeID = setInterval(function(){
//        if(index == 4){
//            index = 0;
//        }
//        index++;
//        var current = -index*$img_height;
// // $ul.slide({effect:"top",easing:"easeOutElastic",delayTime:1000,autoPlay:true} );
//        $ul.animate({top:current},1000);
//    },2000)
//
//    $ul.on('mouseenter',function(){//ֻ����һ��$ul
//
//        clearInterval(timeID);
//
//    }).on('mouseleave',function(){
//        timeID = setInterval(function(){
//            if(index == 4){
//                index = 0;
//            }
//            index++;
//            var current = -index*$img_height;
//            $ul.animate({top:current},1000);
//        },2000)})
    })
//�羺����End
//��������tab���л�,�뵼��JQuery�����лл!
$(function(){
    //1.�޸���ߺ��ӵ�����,��ȡ��Ҫ�޸ĵ�list
    var $list = $(".firstpage_gonglue_leftbox .title_nav li");
    $(".m_list_item").eq(0).css("display","block").siblings(".m_list_item").css("display","none");
    $list.click(function(){
        //�޸ĵ������li���±�
        $(this).css("border-bottom","4px solid white").siblings($list).css("border-bottom","").siblings($list).removeClass("fixed_underline_lzd");
        //�޸Ķ�Ӧ�±��tab��չʾ
        var index = $(this).index();
        $(".m_list_item").eq(index).css("display","block").siblings(".m_list_item").css("display","none");
    })


   //2.�޸��ұߺ���,���tab������
   var $list = $(".title_nav_right li")
    //�Ƚ������غ��׸�����ʾ
   var $imgs = $(".imgBlank");
   $list.click(function(){
       $(this).css("border-bottom","4px solid white").siblings($list).css("border-bottom","").siblings($list).removeClass("fixed_underline_lzd")
       //�޸Ķ�Ӧ��tab��ͼƬ
       var index = $(this).index();
       var $ul = $(".imgBlank");
       $ul.parent().find(".imgBlank").css("display","none").eq(index).css("display","block");
   })
    //3.�޸��ұߺ���,��Ӷ�������
    var $list = $(".firstpage_gonglue_rightbox .imgBlank li");
    $list.mouseenter(function () {
        $(this).find("img").animate({
            width:300,
            height:170,
            marginLeft:-10,
            marginTop:-10
    },200)
})
    $list.mouseleave(function () {
        $(this).find("img").stop(true,false).animate({
            width: 278,
            height: 147,
            marginLeft:0,
            marginTop:0
        },200)
    })
})
