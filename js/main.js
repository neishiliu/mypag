/**
 * Created by Administrator on 2016/5/26.
 */
$(function(){
    setInterval("changeHeight()",100) ;
    setInterval("getSize()",100)
});

//������ҳ�߶ȣ�ʹ��մ�����������
function changeHeight(){
    var win_height = document.documentElement.clientHeight ;
    var new_height = win_height - "50";
    $("#head").css({"height":new_height});
}
//��ȡͼƬ�ߴ磬��������ת����
function getSize(){
    var $img_height = $(".work").height();
    var $img_width = $(".work").width();
    $(".works-hover").height($img_height).width($img_width);
    var $contact_img_height = $(".git").height();
    var $contact_img_width = $(".git").width();
    $(".contact-hover-main").height($contact_img_height).width($contact_img_width);
}
