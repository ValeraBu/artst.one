jQuery(document).ready(function($){
	$("#phone").mask("+7 (999) 999-9999");

	$("#application-form").validate();

	$('.goods-slider').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3
	});

	$('.goods-slider2').slick({
	  infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3
	});

	$(window).scroll(function(){
   if( $(window).scrollTop() > 300 ) {
     $('.toTop').addClass('visible');
   } else {
     $('.toTop').removeClass('visible');
   }
 });
	 $('.toTop').on("click", function (e) {
    e.preventDefault();
    var anchor = $(this);
    $('html, body').stop().animate({
     scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
   });

	 $("a.slider-pic").fancybox();

});