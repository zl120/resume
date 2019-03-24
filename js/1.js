
var count = 1;

window.onload = function () {
    document.getElementById('img_bg').classList.add('screen_bg' + count)

}

// document.onmousewheel = null;
//         setTimeout(function () {//再次重新注册
//             if (document.addEventListener) {
//                 document.addEventListener('DOMMouseScroll', wheel, false);
//             }
//             document.onmousewheel = wheel;
//         }, 100);

//兼容性写法，该函数也是网上别人写的，不过找不到出处了，蛮好的，所有我也没有必要修改了
//判断鼠标滚轮滚动方向
if (window.addEventListener)//FF,火狐浏览器会识别该方法
    window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;//W3C

//统一处理滚轮滚动事件
function wheel(event) {
    var delta = 0;
    if (!event) event = window.event;
    if (event.wheelDelta) {//IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
        delta = event.wheelDelta / 120;
        if (window.opera) delta = -delta;//因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
    } else if (event.detail) {//FF浏览器使用的是detail,其值为“正负3”
        delta = -event.detail / 3;
    }
    if (delta) {
        handle(delta);
    }
}
//上下滚动时的具体处理函数
function handle(delta) {
    if (delta < 0) {//向下滚动
        document.getElementById('img_bg').classList.remove('screen_bg' + count)
        count++;
        if (count > 6) {
            count = 6
        }
        console.log(count)
        document.getElementById('img_bg').classList.add('screen_bg' + count)
    } else {//向上滚动
        document.getElementById('img_bg').classList.remove('screen_bg' + count)
        count--;
        if (count < 1) {
            count = 1
        }
        console.log(count)
        document.getElementById('img_bg').classList.add('screen_bg' + count)
    }
}