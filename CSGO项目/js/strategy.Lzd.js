/**
 * Created by Administrator on 2018/12/5.
 */

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
