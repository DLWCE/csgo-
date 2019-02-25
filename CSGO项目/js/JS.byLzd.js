/**
 * Created by Administrator on 2018/12/5.
 */
//电竞中心Start
//点击切换对应的图片
$(function(){
    //1.left点击事件移动修改top
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
    //jQuery的定时器进行优化
    $ul.parent().on("mouseenter",function(){
        clearInterval(timeID);
    }).on('mouseleave',function(){
        timeID = setInterval(function(){

            $right_btn.trigger('click');
        },2000);
    });
    //鼠标移入时候停止定时器,移出启动定时器
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
//    $ul.on('mouseenter',function(){//只用找一次$ul
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
//电竞中心End
//攻略中心tab栏切换,请导入JQuery的外包谢谢!
$(function(){
    //1.修改左边盒子的属性,获取到要修改的list
    var $list = $(".firstpage_gonglue_leftbox .title_nav li");
    $(".m_list_item").eq(0).css("display","block").siblings(".m_list_item").css("display","none");
    $list.click(function(){
        //修改点击到的li的下边
        $(this).css("border-bottom","4px solid white").siblings($list).css("border-bottom","").siblings($list).removeClass("fixed_underline_lzd");
        //修改对应下标的tab栏展示
        var index = $(this).index();
        $(".m_list_item").eq(index).css("display","block").siblings(".m_list_item").css("display","none");
    })


   //2.修改右边盒子,添加tab栏属性
   var $list = $(".title_nav_right li")
    //先进行隐藏和首个的显示
   var $imgs = $(".imgBlank");
   $list.click(function(){
       $(this).css("border-bottom","4px solid white").siblings($list).css("border-bottom","").siblings($list).removeClass("fixed_underline_lzd")
       //修改对应的tab栏图片
       var index = $(this).index();
       var $ul = $(".imgBlank");
       $ul.parent().find(".imgBlank").css("display","none").eq(index).css("display","block");
   })
    //3.修改右边盒子,添加动画属性
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
