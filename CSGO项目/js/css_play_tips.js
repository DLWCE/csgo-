/**
 * Created by cat on 2018/12/5.
 */

var cs_tip_banner = document.getElementsByClassName('cs_tip_banner')[0];
var cs_tip_pics = document.getElementsByClassName('cs_tip_pics')[0];
var cs_dots = document.getElementsByClassName('cs_dots')[0];


var timeID = setInterval(function () {
    nextPage();
}, 2000);

cs_tip_banner.onmouseout = function () {
    timeID = setInterval(function () {
        nextPage();
    }, 2000);
};

cs_tip_banner.onmouseover = function () {
    clearInterval(timeID);
}
var index = 0;
function nextPage() {
    if (index == cs_tip_pics.children.length - 1) {
        cs_tip_pics.style.left = '0px';
        index = 0;
    }
    ;
    index++;
    animationMove(cs_tip_pics, -index * cs_tip_banner.offsetWidth);

    for (var i = 0; i < cs_dots.children.length; i++) {
        if (i == index) {
            cs_dots.children[i].className = 'current';
        } else {
            cs_dots.children[i].className = '';
        }
    }
    ;
    if (index == cs_tip_pics.children.length - 1) {
        cs_dots.children[0].className = 'current';
    }
}

//ҳ����
for (var i = 0; i < cs_dots.children.length; i++) {
    //1.��ÿһ��ҳ�����һ���Զ�����������
    cs_dots.children[i].setAttribute('yemaIndex', i);
    //2.ע�����¼�
    cs_dots.children[i].onclick = function () {
        //2.1 ȡ����ǰ�����ol������
        var yemaIndex = this.getAttribute('yemaIndex');
        console.log(yemaIndex);
        //2.2 �޸�indexΪ��ǰ�����ҳ������
        index = yemaIndex;
        //2.3 ��ʼ����
        animationMove(cs_tip_pics, -index * cs_tip_banner.offsetWidth);
        //2.4 ����˼���޸���ʽ
        for (var j = 0; j < cs_dots.children.length; j++) {
            if (j == yemaIndex) {
                cs_dots.children[j].className = 'current';
            } else {
                cs_dots.children[j].className = '';
            }
        }
    }

}

