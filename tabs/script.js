function createTab(selector) {
	var tabs = $(selector);
	var a = tabs.children('span');
	var div = tabs.children('div');
	tabs
		.addClass('tabs')
		.prepend('<div class="tabs_controllers"></div>')
		.append('<div class="tabs_panels"></div>')
		.on('click','.tabs_controller',function (e){
			e.preventDefault();
			tabs
				.find('.tabs_controller_active')
				.removeClass('tabs_controller_active');
			tabs
				.find('.tabs_panel_active')
				.removeClass('tabs_panel_active');
			$(this).addClass('tabs_controller_active')
			tabs 
				.find('.tabs_panel')
				.eq($(this).index())
				.addClass('tabs_panel_active');
		});
	a  
		.prependTo(selector + ' .tabs_controllers')
		.each(function(i) {
			var a = $(this);
			if (!i) {
				a
				  .replaceWith('<a href="#" class="tabs_controller tabs_controller_active">'
					+ a.text()
					+'</a>'
					);
			}
			else{
				a
				  .replaceWith('<a href="#" class="tabs_controller">'
					+ a.text()
					+'</a>'
					);
			}
		});

	div 
	   	.prependTo(selector+' .tabs_panels')
	   	.addClass('tabs_panel')
	   	.eq(0)
	   	.addClass('tabs_panel_active');
}
	
createTab('#tab');