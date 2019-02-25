/**
 * Created by Administrator on 2018/12/6.
 */

$(function () {

  /*----------------------------【旋转木马数据】-------------------------------*/

  //旋转木马的数据
  var arr1 = [
    {'z-index': 5},
    {'z-index': 4},
    {'z-index': 3},
    {'z-index': 4}
  ];
  var arr2 = [
    {'width': 636, 'height': 364, 'top': 83, 'left': 281, 'opacity': 1},
    {'width': 445, 'height': 254, 'top': 135, 'left': 660,'opacity': .7},
    {'width': 0, 'height': 0, 'top': 243, 'left': 600, 'opacity': .2},
    {'width': 445, 'height': 254, 'top': 135, 'left': 89, 'opacity': .7}
  ];

  /*----------------------------【点击右侧旋转木马】-------------------------------*/

  //点击旋转木马右侧点击事件
  $('.banner .right').click(function () {
    $(this).attr("disabled", true).css("pointer-events", "none");

    arr1.unshift(arr1.pop());
    arr2.unshift(arr2.pop());

    $('#slideshow li').each(function (i, e) {
      $(this).css(arr1[i]);
      $(this).stop().animate(arr2[i], 250, function () {
        $('.banner .right').attr("disabled", false).css("pointer-events", "auto");
      });

    });

  });

  /*----------------------------【点击左侧旋转木马】-------------------------------*/

  //点击旋转木马左侧点击事件
  $('.banner .left').click(function () {
    //禁止轮播图被连续点击
    $(this).attr("disabled", true).css("pointer-events", "none");
    arr1.push(arr1.shift());
    arr2.push(arr2.shift());

    $('#slideshow li').each(function (i) {
      $(this).css(arr1[i]);
      $(this).animate(arr2[i], 250, function () {
        $('.banner .left').attr("disabled", false).css("pointer-events", "auto");
      });

    });

  });


  //main里的?号图片注释,鼠标移动上去显示对应的注释/移出则取消
  $('.acquire-list .tag').mouseenter(function () {
    $(this).parent().next().show();
  });

  $('.acquire-list .tag').mouseleave(function () {
    $(this).parent().next().hide();
  });

  /*-----------------【主体的左箭头鼠标移入效果】------------------*/

  //鼠标放入到container的左箭头arrows-btn-left时,箭头左右移动
  var $arrowsBtnLeft = $('#arrows-btn-left');
  //声明一个变量存储定时器
  var arrowsTimeId = null;
  $arrowsBtnLeft.mouseenter(function () {
    //进来先进行一次动画
    $arrowsBtnLeft.stop().animate({left: 15, 'opacity': .4}, 600, function () {
      $arrowsBtnLeft.stop().animate({left: 0, 'opacity': 1}, 600);
    })
    //先清理一次定时器
    clearInterval(arrowsTimeId)
    arrowsTimeId = setInterval(function () {
      $arrowsBtnLeft.stop().animate({left: 15, 'opacity': .4}, 600, function () {
        $arrowsBtnLeft.stop().animate({left: 0, 'opacity': 1}, 600);
      })
    }, 1200)

    //鼠标移出则清除定时器
    $arrowsBtnLeft.mouseleave(function () {
      clearInterval(arrowsTimeId);
      $(this).stop().animate({left: 0, 'opacity': 1}, 50);
    });

  });


  /*-----------------【主体的右箭头鼠标移入效果】------------------*/

  //鼠标放入到container的右箭头arrows-btn时,箭头左右移动
  var $arrowsBtnRight = $('#arrows-btn-right');
  //声明一个变量存储定时器
  var arrowsTimeIdRight = null;
  $arrowsBtnRight.mouseenter(function () {
    //进来先进行一次动画

    //$arrowsBtnRight.stop().animate({right: 15}, 500) ;
    //  console.log(11);


    $arrowsBtnRight.stop().animate({right: 15, 'opacity': .4}, 600, function () {
      console.log(11);
      $arrowsBtnRight.stop().animate({right: 0, 'opacity': 1}, 600);
    })
    //先清理一次定时器
    clearInterval(arrowsTimeIdRight)
    arrowsTimeIdRight = setInterval(function () {
      $arrowsBtnRight.stop().animate({right: 15, 'opacity': .4}, 600, function () {
        $arrowsBtnRight.stop().animate({right: 0, 'opacity': 1}, 600);
      })
    }, 1200)
    //
    //鼠标移出则清除定时器
    $arrowsBtnRight.mouseleave(function () {
      clearInterval(arrowsTimeIdRight);
      $(this).stop().animate({right: 0, 'opacity': 1}, 50);

    });

  });


  /*-----------------【点击主体的左箭头，展开右侧containerL画面】------------------*/

  //声明一个变量存储主体左侧的里的箭头containerL-arrows
  var containerLTimeID = null;

  //鼠标点击container的左箭头arrows-btn时
  //隐藏container   显示containerL
  console.log($arrowsBtnLeft);
  $arrowsBtnLeft.click(function () {
    //$('.main').css('background-position-x','505px')
    $('.main .bg').animate({'margin-left': -900}, 200);
    //background-position: 0 0;
    $('.main .container').fadeOut(500);
    $('#containerL').fadeIn(500);


    //先清理一次定时器
    clearInterval(containerLTimeID);
    $('#containerL .containerL-arrows').animate({
      left: 181, 'opacity': .4
    }, 600, function () {
      $('#containerL .containerL-arrows').animate({
        left: 166, 'opacity': 1
      }, 600)
    })
    containerLTimeID = setInterval(function () {
      $('#containerL .containerL-arrows').animate({left: 181, 'opacity': .4}, 600, function () {
        $('#containerL .containerL-arrows').animate({
          left: 166, 'opacity': 1
        }, 600)
      })
    }, 1200)

  });


  /*-----------------------【点击左侧箭头返回到主体】--------------------------*/


  //点击主体左侧的里的箭头containerL-arrows,隐藏containerL盒子,并且显示container
  $('#containerL .containerL-arrows').click(function () {
    clearInterval(containerLTimeID);
    $('#containerL').fadeOut(150);
    $('.main .bg').animate({'margin-left': -1200}, 200);
    $('.container').stop().fadeIn(300);
  });


  /*-----------------【点击主体的右箭头，展开右侧containerR画面】------------------*/


  var containerRTimeID = null;
  var $containerR = $('#containerR')
  //鼠标点击container的右箭头arrows-btn时
  //隐藏container   显示containerL
  $arrowsBtnRight.click(function () {
    //$('.main').css('background-position-x','505px')
    $('.main .bg').animate({'margin-left': -1500}, 200);
    //background-position: 0 0;
    $('.main .container').fadeOut(500);
    $containerR.fadeIn(500);


    //先清理一次定时器
    clearInterval(containerRTimeID);
    $('#containerR .containerR-arrows').animate({
      right: 325, 'opacity': .4
    }, 600, function () {
      $('.containerR .containerR-arrows').animate({
        right: 310, 'opacity': 1
      }, 600)
    })
    containerRTimeID = setInterval(function () {
      $('.containerR .containerR-arrows').animate({right: 325, 'opacity': .4}, 600, function () {
        $('.containerR .containerR-arrows').animate({
          right: 310, 'opacity': 1
        }, 600)
      })
    }, 1000)

  });

  /*-----------------------【点击右侧箭头返回到主体】--------------------------*/

  //点击主体右侧的里的箭头containerR-arrows,隐藏containerR盒子,并且显示container
  $('#containerR .containerR-arrows').click(function () {
    clearInterval(containerRTimeID);
    $('#containerR').fadeOut(150);
    $('.main .bg').animate({'margin-left': -1200}, 200);
    $('.container').stop().fadeIn(300);
  });

  /*-------------【点击主体里的左右侧containerL containerR里的a.first标签,鼠标移入事件】------------*/
  //console.log($('#acquire-list-first'));
  $('.acquire-list .first').mouseenter(function () {
      $(this).stop().animate({bottom: 4}, 200);
    });

  $('.containerL .acquire-list .first').mouseleave(function () {
      $(this).stop().animate({bottom: 0}, 300);
  });


});

