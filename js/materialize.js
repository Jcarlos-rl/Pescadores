/*script nav*/
$(document).ready(function(){
    $('.sidenav').sidenav();
});

/*carousel*/
var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true
  });

  // Or with jQuery

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
setTimeout(autoplay, 4000);
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4000);
}