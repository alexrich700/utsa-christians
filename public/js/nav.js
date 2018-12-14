$(window).scroll(function() {
    if ($(this).scrollTop() > 50 && $(window).width() > 800){  
        $('nav').addClass("sticky");
    }
    else{
        $('nav').removeClass("sticky");
    }
    });


// replace contact button based on width of page    
    
if($(window).width() < 767) {
      $('.contact-us-button').remove();
    } else {
      $('.contact-us-small-button').remove();
    }
    
    if( $(window).width() < 767 ){
        $( "img" ).removeClass( "w-100" );
        $(".hide-img").hide();
        $(".top-nav-off-mob").hide();
    }
    
    
// for carousel

    $('.carousel').carousel({
    pause: "false" /* Change to true to make it paused when your mouse cursor enter the background */
    });
    
    $(".carousel").swipe({
    
      swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
    
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    
      },
      allowPageScroll:"vertical"
    
    });
    
    
    
// for countdown timer    
    // const second = 1000,
    // minute = second * 60,
    // hour = minute * 60,
    // day = hour * 24;

    // let countDown = new Date('Sept 4, 2018 0:00:00').getTime(),
    // x = setInterval(function() {

    //   let now = new Date().getTime(),
    //     distance = countDown - now;

    //     document.getElementById('days').innerText = Math.floor(distance / (day)),
    //     document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
    //     document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
    //     document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    // }, second)
    
    
// toggle show more btn on index page    
    
    $(document).ready(function(){
      $(".show-more-btn").click(function(){
            $(".show-more").toggle("slow")
            $(this).text($(this).text() == 'Show More' ? 'Show Less' : 'Show More');
      });
    });