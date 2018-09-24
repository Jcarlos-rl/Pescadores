/*script nav*/
$(document).ready(function(){
    $('.sidenav').sidenav();
});

/*carousel*/
var instance = M.Carousel.init({
    indicators: true
  });

  // Or with jQuery
$('.carousel.carousel-slider').carousel({
    indicators: true
});
setTimeout(autoplay, 6000);
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4000);
}