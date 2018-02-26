console.log('aaa');

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
    setTimeout(showSlides, 3000);

}


// var slideIndex = 1;
// showDivs(slideIndex);
//
// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("slide");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length}
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex-1].style.display = "block";
//     setTimeout(showDivs, 1000);
// }

