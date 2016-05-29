/**
 * Created by Administrator on 2016/5/26.
 */
$(function(){
    setInterval("changeHeight()",100) ;
    setInterval("getSize()",100);

});

//更改主页高度，使其沾满浏览器窗口
function changeHeight(){
    var win_height = document.documentElement.clientHeight ;
    var new_height = win_height - "50";
    $("#head").css({"height":new_height});
}
//获取图片尺寸，并附给翻转背景
function getSize(){
    var $img_height = $(".work").height();
    var $img_width = $(".work").width();
    $(".works-hover").height($img_height).width($img_width);
    var $contact_img_height = $(".git").height();
    var $contact_img_width = $(".git").width();
    $(".contact-hover-main").height($contact_img_height).width($contact_img_width);
}
//点击首页相关元素后页面向下滑动
$("#view,#down").click(function() {
    var win_height = document.documentElement.clientHeight ;
    $("html, body").animate({ scrollTop: win_height }, "slow");
    return false;
});
//首页背景图轮播
setInterval("carousel()",3000);
    var i=0;
function carousel(){
    var imgs=["1.jpg","2.jpg","3.jpg"];
    if (i>=imgs.length){
        i=0;
    } else {
        var imgs_url= "url('" + "images/" + imgs[i] + "')";
        $("#head").css("background-image",imgs_url);
        i++;
    }
}
