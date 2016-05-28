/**
 * Created by Administrator on 2016/5/26.
 */
$(function(){
    setInterval("changeHeight()",100) ;
});

//更改主页高度，使其沾满浏览器窗口
function changeHeight(){
    var win_height = document.documentElement.clientHeight ;
    var new_height = win_height - "50";
    $("#head").css({"height":new_height});
}

