var inputs = document.querySelectorAll( '.inputfile' );
Array.prototype.forEach.call( inputs, function( input )
{
	var label	 = input.nextElementSibling,
		labelVal = label.innerHTML;

	input.addEventListener( 'change', function( e )
	{
		var fileName = '';
		fileName = e.target.value.split( '\\' ).pop();

		if( fileName ) {
			label.querySelector( 'strong' ).innerHTML = fileName;
		} else {
			label.innerHTML = labelVal;
		}
	});
});
$(document).ready(function() {
	var genre = $('.genre');
	if (genre.length > 0){
		genre.select2();
	}

	$('.owl-carousel').owlCarousel({
		merge:true,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		lazyLoad:true,
		center:true,
		dots:false,
		responsive:{
			0: {
				items:1,
				nav:false
			},
			480:{
				items:2,
				nav:false
			},
			600:{
				items:3,
				nav:true
			}
		}
	});
	$('.owl-prev').empty();
	$('.owl-next').empty();
	$('.owl-prev').append('<i class="material-icons">keyboard_arrow_left</i>');
	$('.owl-next').append('<i class="material-icons">keyboard_arrow_right</i>');
});
