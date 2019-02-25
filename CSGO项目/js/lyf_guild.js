/**
 * Created by Administrator on 2018/12/6.
 */

$(function () {

  /*----------------------------����תľ�����ݡ�-------------------------------*/

  //��תľ�������
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

  /*----------------------------������Ҳ���תľ��-------------------------------*/

  //�����תľ���Ҳ����¼�
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

  /*----------------------------����������תľ��-------------------------------*/

  //�����תľ��������¼�
  $('.banner .left').click(function () {
    //��ֹ�ֲ�ͼ���������
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


  //main���?��ͼƬע��,����ƶ���ȥ��ʾ��Ӧ��ע��/�Ƴ���ȡ��
  $('.acquire-list .tag').mouseenter(function () {
    $(this).parent().next().show();
  });

  $('.acquire-list .tag').mouseleave(function () {
    $(this).parent().next().hide();
  });

  /*-----------------����������ͷ�������Ч����------------------*/

  //�����뵽container�����ͷarrows-btn-leftʱ,��ͷ�����ƶ�
  var $arrowsBtnLeft = $('#arrows-btn-left');
  //����һ�������洢��ʱ��
  var arrowsTimeId = null;
  $arrowsBtnLeft.mouseenter(function () {
    //�����Ƚ���һ�ζ���
    $arrowsBtnLeft.stop().animate({left: 15, 'opacity': .4}, 600, function () {
      $arrowsBtnLeft.stop().animate({left: 0, 'opacity': 1}, 600);
    })
    //������һ�ζ�ʱ��
    clearInterval(arrowsTimeId)
    arrowsTimeId = setInterval(function () {
      $arrowsBtnLeft.stop().animate({left: 15, 'opacity': .4}, 600, function () {
        $arrowsBtnLeft.stop().animate({left: 0, 'opacity': 1}, 600);
      })
    }, 1200)

    //����Ƴ��������ʱ��
    $arrowsBtnLeft.mouseleave(function () {
      clearInterval(arrowsTimeId);
      $(this).stop().animate({left: 0, 'opacity': 1}, 50);
    });

  });


  /*-----------------��������Ҽ�ͷ�������Ч����------------------*/

  //�����뵽container���Ҽ�ͷarrows-btnʱ,��ͷ�����ƶ�
  var $arrowsBtnRight = $('#arrows-btn-right');
  //����һ�������洢��ʱ��
  var arrowsTimeIdRight = null;
  $arrowsBtnRight.mouseenter(function () {
    //�����Ƚ���һ�ζ���

    //$arrowsBtnRight.stop().animate({right: 15}, 500) ;
    //  console.log(11);


    $arrowsBtnRight.stop().animate({right: 15, 'opacity': .4}, 600, function () {
      console.log(11);
      $arrowsBtnRight.stop().animate({right: 0, 'opacity': 1}, 600);
    })
    //������һ�ζ�ʱ��
    clearInterval(arrowsTimeIdRight)
    arrowsTimeIdRight = setInterval(function () {
      $arrowsBtnRight.stop().animate({right: 15, 'opacity': .4}, 600, function () {
        $arrowsBtnRight.stop().animate({right: 0, 'opacity': 1}, 600);
      })
    }, 1200)
    //
    //����Ƴ��������ʱ��
    $arrowsBtnRight.mouseleave(function () {
      clearInterval(arrowsTimeIdRight);
      $(this).stop().animate({right: 0, 'opacity': 1}, 50);

    });

  });


  /*-----------------�������������ͷ��չ���Ҳ�containerL���桿------------------*/

  //����һ�������洢����������ļ�ͷcontainerL-arrows
  var containerLTimeID = null;

  //�����container�����ͷarrows-btnʱ
  //����container   ��ʾcontainerL
  console.log($arrowsBtnLeft);
  $arrowsBtnLeft.click(function () {
    //$('.main').css('background-position-x','505px')
    $('.main .bg').animate({'margin-left': -900}, 200);
    //background-position: 0 0;
    $('.main .container').fadeOut(500);
    $('#containerL').fadeIn(500);


    //������һ�ζ�ʱ��
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


  /*-----------------------���������ͷ���ص����塿--------------------------*/


  //�������������ļ�ͷcontainerL-arrows,����containerL����,������ʾcontainer
  $('#containerL .containerL-arrows').click(function () {
    clearInterval(containerLTimeID);
    $('#containerL').fadeOut(150);
    $('.main .bg').animate({'margin-left': -1200}, 200);
    $('.container').stop().fadeIn(300);
  });


  /*-----------------�����������Ҽ�ͷ��չ���Ҳ�containerR���桿------------------*/


  var containerRTimeID = null;
  var $containerR = $('#containerR')
  //�����container���Ҽ�ͷarrows-btnʱ
  //����container   ��ʾcontainerL
  $arrowsBtnRight.click(function () {
    //$('.main').css('background-position-x','505px')
    $('.main .bg').animate({'margin-left': -1500}, 200);
    //background-position: 0 0;
    $('.main .container').fadeOut(500);
    $containerR.fadeIn(500);


    //������һ�ζ�ʱ��
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

  /*-----------------------������Ҳ��ͷ���ص����塿--------------------------*/

  //��������Ҳ����ļ�ͷcontainerR-arrows,����containerR����,������ʾcontainer
  $('#containerR .containerR-arrows').click(function () {
    clearInterval(containerRTimeID);
    $('#containerR').fadeOut(150);
    $('.main .bg').animate({'margin-left': -1200}, 200);
    $('.container').stop().fadeIn(300);
  });

  /*-------------���������������Ҳ�containerL containerR���a.first��ǩ,��������¼���------------*/
  //console.log($('#acquire-list-first'));
  $('.acquire-list .first').mouseenter(function () {
      $(this).stop().animate({bottom: 4}, 200);
    });

  $('.containerL .acquire-list .first').mouseleave(function () {
      $(this).stop().animate({bottom: 0}, 300);
  });


});

