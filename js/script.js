// MENU//

$(document).ready(function(){
    $('.nav_main li:not(:first-child)').click(function(){
        $('.nav_main li:not(:first-child)').removeClass('active');
        $(this).addClass('active');
    });
});


$(document).ready(function() {
    $('#menu').click(function(e) {
        $(this).toggleClass('menu_show ');
        $('.nav_main li:not(:nth-child(-n+2))').toggleClass('menu_show');
        e.preventDefault();
    });
});

//SCROLL
$(document).on("scroll", function() {

    if($(document).scrollTop()>150) { //scrolltop zwraca pozycję scrolla w px
        $("header").removeClass("large").addClass("small");
    } else {
        $("header").removeClass("small").addClass("large");
    }

});


// SLIDER
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 4000);
}


