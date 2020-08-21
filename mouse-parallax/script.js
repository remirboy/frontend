$('.mouse_paralax').on('mousemove',(e)=>{
	
	const x = e.pageX / $(window).width();
	const y = e.pageY / $(window).height();

	console.log(x,y);

	$('.mouse_paralax_background').
		css('transform','translate(-'+ x * 30 +'px, -'+ y * 30 +'px)');

	$('.mouse_paralax_content').
		css('transform','translate('+ x * 60 +'px, '+ y * 60 +'px)');
});