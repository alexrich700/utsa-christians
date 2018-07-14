$(window).scroll(function() {
    if ($(this).scrollTop() > 50 && $(window).width() > 800){  
        $('nav').addClass("sticky");
    }
    else{
        $('nav').removeClass("sticky");
    }
    });