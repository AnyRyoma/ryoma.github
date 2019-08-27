<!--崩溃欺骗-->
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "../images/favicon.ico");
        document.title = '╭(°A°`)╮不要抛弃我~';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "../images/favicon.ico");
        document.title = '(ฅ>ω<*ฅ) 噫，你来了~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 6000);
    }
});
