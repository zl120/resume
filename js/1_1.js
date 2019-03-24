
var count = 1;

window.onload = function () {
    document.getElementById('img_bg').classList.add('screen_bg' + count)

}

var wheelDeltaLinstner = function () {
    function pageChange(e) {
        //滚轮监听
        e = e || window.event;
        if (e.wheelDelta) {
            var delta = e.wheelDelta;
        }
        else if (e.detail) {
            var delta = e.detail;
        }

        if (delta < 0) {//向下滚
            document.getElementById('img_bg').classList.remove('screen_bg' + count)
            count++;
            if (count > 6) {
                count = 6
            }
            document.getElementById('img_bg').classList.add('screen_bg' + count)
        }
        else if (delta > 0) {//向下滚
            document.getElementById('img_bg').classList.remove('screen_bg' + count)
            count--;
            if (count < 1) {
                count = 1
            }
            document.getElementById('img_bg').classList.add('screen_bg' + count)
        }
        // pageShow(pageFlag);
        //为了防止一次滚动太凶而直接跳转到底部，先关闭监听一段时间后再开启
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', null, false);
        }
        document.onmousewheel = null;
        setTimeout(function () {//再次重新注册
            if (document.addEventListener) {
                document.addEventListener('DOMMouseScroll', pageChange, false);
            }
            document.onmousewheel = pageChange;
        }, 100);
    }

    //注册事件
    if (document.addEventListener) { document.addEventListener('DOMMouseScroll', pageChange, false); }
    document.onmousewheel = pageChange;
}();