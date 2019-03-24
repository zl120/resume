var wheelDeltaLinstner = function () {
    var pageFlag = 0;//0表示第一頁
    var maxPages = rightDiv.length - 1;//全部的頁數

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
            pageFlag = pageFlag == maxPages ? maxPages : pageFlag + 1;
        }
        else if (delta > 0) {//向下滚
            pageFlag = pageFlag == 0 ? 0 : pageFlag - 1;
        }
        pageShow(pageFlag);
    }

    //注册事件
    if (document.addEventListener) { document.addEventListener('DOMMouseScroll', pageChange, false); }
    document.onmousewheel = pageChange;
}();

var wheelDeltaLinstner = function () {
    var pageFlag = 0;//0表示第一頁
    var maxPages = rightDiv.length - 1;//全部的頁數
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
            pageFlag = pageFlag == maxPages ? maxPages : pageFlag + 1;
        }
        else if (delta > 0) {//向下滚
            pageFlag = pageFlag == 0 ? 0 : pageFlag - 1;
        }
        pageShow(pageFlag);
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