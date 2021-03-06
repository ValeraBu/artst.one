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

	 $("a.slider-pic").fancybox({
	 	'titleShow': true,
	 	'titlePosition':'inside',
	 	padding: 0, 
		helpers: {
		    overlay: {
		      locked: false }
			}
	 	});

});

var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.querySelector( 'span' ).innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

// modal
jQuery(document).ready(function($){
$('.btn').click(function (event) {
	  $('.form-modal').toggleClass('open');
	  $('body').toggleClass('hidden');
	  $('.dark-bg').toggleClass('visible');
	 });

$('.dark-bg').click(function (event) {
	  $('.form-modal').removeClass('open');
	  $('body').removeClass('hidden');
	  $('.dark-bg').removeClass('visible');
	 });

$('.close').click(function (event) {
	  $('.form-modal').removeClass('open');
	  $('body').removeClass('hidden');
	  $('.dark-bg').removeClass('visible');
	 });
});