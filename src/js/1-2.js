
var count = 1;
var img_height = 768;

window.onload = function () {
    document.getElementById('img_bg' + count).style.top = 0 + 'px';
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
        var top = 0;

        if (delta < 0) {//向下滚
            if (count >= 6) {
                return;
            }
            count++;
            // document.getElementById('img_bg' + (count - 1)).style.top = 0 + 'px';
            var timer = setInterval(function () {
                if (parseInt(document.getElementById('img_bg' + (count - 1)).style.top) < -img_height) {
                    clearInterval(timer);
                    return false;
                }
                document.getElementById('img_bg' + (count - 1)).style.top = parseInt(document.getElementById('img_bg' + (count - 1)).style.top) - 20 + 'px';
                document.getElementById('content' + (count - 1)).style.top = parseInt(document.getElementById('content' + (count - 1)).style.top) - 20 + 'px';
                document.getElementById('img_bg' + count).style.top = parseInt(document.getElementById('img_bg' + (count - 1)).style.top) + img_height + 'px';
                if (parseInt(document.getElementById('img_bg' + count).style.top) < 20) {
                    document.getElementById('img_bg' + count).style.top = 0 + 'px';
                }
            }, 16);
        }
        else if (delta > 0) {//向上滚   
            if (count <= 1) {
                return;
            }
            count--;
            // document.getElementById('img_bg' + (count + 1)).style.top = 0 + 'px';
            var timer = setInterval(function () {
                if (parseInt(document.getElementById('img_bg' + (count + 1)).style.top) > img_height) {
                    clearInterval(timer);
                    return false;
                }
                document.getElementById('img_bg' + (count + 1)).style.top = parseInt(document.getElementById('img_bg' + (count + 1)).style.top) + 20 + 'px';
                document.getElementById('content' + (count + 1)).style.top = parseInt(document.getElementById('content' + (count + 1)).style.top) + 20 + 'px';
                document.getElementById('img_bg' + count).style.top = parseInt(document.getElementById('img_bg' + (count + 1)).style.top) - img_height + 'px';
                if (parseInt(document.getElementById('img_bg' + count).style.top) < 20) {
                    document.getElementById('img_bg' + count).style.top = 0 + 'px';
                }
            }, 16); 
        }
        // document.getElementById('img_bg' + count).style.top = 0 + 'px';
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
        }, 1000);
    }

    //注册事件
    if (document.addEventListener) { document.addEventListener('DOMMouseScroll', pageChange, false); }
    document.onmousewheel = pageChange;
}();