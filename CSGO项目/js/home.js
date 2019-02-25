




$(function () {

    //固定导航栏
    var $navbox = $(".navbox-bg") .height()
    var $guide = $(".guide").height()
    
    $(window).on("scroll" , function () {
        var scrollTopValue = $(this).scrollTop()

        if (scrollTopValue > $navbox  ) {
            $(".navbox-bg").css({
                position:'fixed',
                left:"0",
                top:0
            })

            $(".wrapper").css({
                marginTop: $navbox
            })
        } else {
            $(".navbox-bg").css({
                position:'static',

            })

            $(".wrapper").css({
                marginTop: 0
            })
        }
    })

    //快速指引按钮
    $('.guide > .nav_btn').click(function (  ) {
        $(this).siblings('.nav_process_box').stop(true,false).slideToggle(200);
        $(this).find('.xia').toggleClass('bg').toggleClass('on');
    });

    $('.qqBox_left>.panel-tabs>li').mouseenter(function () {
        $(this).addClass('move').siblings('li').removeClass('move')
    })
    $('.qqBox_left>.panel-tabs>li').mouseleave(function () {
        $('.qqBox_left>.panel-tabs>li').removeClass('move') //����뿪,Ӧ�������е�li��move���ԵĶ���ʧ
    })

    $('.qqBox_left>.panel-tabs>li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active')
        var idx = $(this).index();
        $('.qq-list-items>.qq-list-item').eq(idx).show().siblings('div').hide()
    })

    //主题图片切换
    $(".col-left .box_skitter_nav li").click(function () {
        $(this).addClass('skitter_nav_bg').siblings("li").removeClass("skitter_nav_bg")
        var index = $(this).index()
        $(".col-left .skytter .skytter-item").eq(index).show().siblings(".skytter-item").hide()
    })

    //武器/模式/地图模板切换
    $("#j_tabs_navs > a").on("click" , function () {
        var index = $(this).index()
        $(this).addClass("active").siblings("a").removeClass("active")
        if (index == 0) {
            $(".module-game").css({
                "backgroundImage":"url(\"./images/bg_game_wuqi_3a001facf8bb95e214be7fd15e016174.jpg\")"
            } )
            $(".module-game > video").show();
        } else if (index == 1) {
            $(".module-game").css("backgroundImage" , "url(\"./images/bg_game_moshi_7beb4443dd6882873f2cb49c4ebf1167.jpg\")")
            $(".module-game > video").hide();
        }else if (index == 2) {
            $(".module-game").css("backgroundImage" , "url(\"./images/bg_game_ditu_5df5b585c484e47849b8171972460dd1.jpg\")")
            $(".module-game > video").hide();
        }
        $(".game-tab1-box > .game-tab1-box-item").eq(index).show().siblings(" .game-tab1-box-item").hide()
    })

    //模式切换
    $("#moshi_tab_navs > a").on("click" , function () {
        var idx = $(this).index()
        $(this).addClass("active").siblings(".active").removeClass("active")
        $("#moshi_tab_boxs > .game-tab2-box-item").eq(idx).show().siblings(".game-tab2-box-item").hide()
    })

    //地图切换
    $("#ditu-tab > a").on("click" , function () {
        var idx = $ (this).index()
        $(this).addClass("active").siblings(".active").removeClass("active")
        $("#ditu_tabbox > .ditu-box-item").eq(idx).show().siblings(".ditu-box-item").hide()
        $("#ditu_tabbox > .ditu-box-item > img").css("display" , "block")
    })

    //切换武器类型
    var idx;
    $(".wuqi-box > .game-tab2 > a").click(function () {

        $(".row .progress")
        $(this).addClass("active").siblings("a").removeClass("active")
        idx =  $(this).index()
        $(".game-tab2-box > .game-tab2-box-item").eq(idx).addClass("active").show().siblings(".game-tab2-box-item").removeClass("active").hide()
    })


        $(".game-tab2-box-item.active > .weapon-tabs > .weapon-tabs-item").eq(0).on("click" , function () {

            $(".game-tab2-box-item.active > .weapon-pic > img").attr("src" ,"images/pic_deagle_9f21f1a50bc5493d86604fc02234c147.png" )
            $(".game-tab2-box-item.active > .weapon-property .name").text("沙漠之鹰")
            $(".game-tab2-box-item.active > .weapon-property .weapon-property-ft").text("杀伤力和它的卖价—样高，沙漠之鹰是—把很难驾驭，而在远距离又出乎意料精准的经典手枪。")
        })

        $(".game-tab2-box-item.active > .weapon-tabs > .weapon-tabs-item").eq(1).on("click" , function () {
            $(".game-tab2-box-item.active > .weapon-pic > img").attr("src" ,"images/pic_P2000_dd0001242524d0ae95085b145a4c2d40.png" )
            $(".game-tab2-box-item.active > .weapon-property .name").text("P2000")
            $(".game-tab2-box-item.active > .weapon-property .weapon-property-ft").text("精准、可控，这把德国制造的耐用第—回合手枪非常适合对付那些没有穿护甲的对手。")
        })


    $(".game-tab2-box-item.active > .weapon-tabs > .weapon-tabs-item").on("click" ,function () {
        $(this).addClass("active").siblings(".game-tab2-box-item > .weapon-tabs > .weapon-tabs-item").removeClass("active")
    })
})



