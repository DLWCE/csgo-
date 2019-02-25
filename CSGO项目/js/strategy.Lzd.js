/**
 * Created by Administrator on 2018/12/5.
 */

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
