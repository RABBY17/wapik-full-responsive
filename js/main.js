/*counter up*/
$('.counter').counterUp({
    delay: 10,
    time: 1000
    });

    /*menu toggler*/
function myFunction(x) {
    x.classList.toggle("change");
}
$(".toggler-btn").click(function(){
    $("nav").toggleClass("open-nav");
});


/*
$(document).ready(function($) {

    var windows = $(window);
    var sticky = $('.header-sticky')
    windows.on('scroll', function() {
        var scroll = windows.scrollTop();
        if (scroll < 250) {
            sticky.removeClass('stick');
        } else {
            sticky.addClass('stick');
        }
    });

    $(".toggle-menu-icon").click(function(){
        $(".menu").slideToggle();
    })
});

*/