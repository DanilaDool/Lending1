$(function(){
    $('.header-nav-link').click(function(){
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: ($(id).offset().top - 76)
        }, 500);
        return false;
    });
});

$(function(){
    $('.button-gray').click(function(){
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: ($(id).offset().top - 76)
        }, 500);
        return false;
    });
});

$(function(){
    $('.button-blue').click(function(){
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: ($(id).offset().top - 76)
        }, 500);
        return false;
    });
});

$(function(){
    $('.button-green').click(function(){
        var id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: ($(id).offset().top - 76)
        }, 500);
        return false;
    });
});
