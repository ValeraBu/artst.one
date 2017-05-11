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
});