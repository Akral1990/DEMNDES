$(document).ready(function() {
    $('.to_form').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.order__form').offset().top
        }, 1000);
    });

    $('.to_title').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.title').offset().top
        }, 1000);
    });

    $('.to_about').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.about').offset().top
        }, 1000);
    });

    $('.to_comments').click(function(e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $('.comments').offset().top
        }, 1000);
    });

    var time = 3728;

    function simpleTimer(sec) {
        var time = sec;
        var hour = parseInt(time / 3600);
        if (hour < 1)
            hour = 0;
        time = parseInt(time - hour * 3600);
        if (hour < 10)
            hour = '0' + hour;
        var minutes = parseInt(time / 60);
        if (minutes < 1)
            minutes = 0;
        time = parseInt(time - minutes * 60);
        if (minutes < 10)
            minutes = '0' + minutes;
        var seconds = time;
        if (seconds < 10) seconds = '0' + seconds;
        $('.counter-h').text(hour);
        $('.counter-m').text(minutes);
        $('.counter-s').text(seconds);
        sec--;
        if (sec > 0) {
            setTimeout(function() {
                simpleTimer(sec);
            }, 1000);
        }
    }

    simpleTimer(time);

});