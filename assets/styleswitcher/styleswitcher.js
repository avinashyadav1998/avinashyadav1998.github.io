$(document).ready(function() {

	$("body").append('<div id="style-switcher"></div>');
	// $("#style-switcher").load( "assets/styleswitcher/styleswitcher.html" );

	setTimeout(function() {

		var preColorLink = $('#color').attr("href");

		var activeScheme = preColorLink.substring(17); 
		activeScheme = activeScheme.substring(0,activeScheme.length-4); 

		var $colorSwitcher = $('#color-switcher');

		$colorSwitcher.find('a').each(function() {
	        if($(this).data('scheme')==activeScheme) $(this).addClass('active');
	    });
		
		$colorSwitcher.find('a').on('click', function(){
			var scheme = $(this).data('scheme');
			$('#color').attr('href','assets/css/color/'+scheme+'.css');
			
			$colorSwitcher.find('a.active').removeClass('active');
			$(this).addClass('active');

			return false;
		})
	
		$('#style-switcher .ss-toggle').click(function(){
			var div = $('#style-switcher');
			if (div.css('right') === '-175px') {
				$('#style-switcher').animate({
					right: '0'
				});
				$(this).toggleClass('active');
			} else {
				$('#style-switcher').animate({
					right: '-175px'
				});
				$(this).toggleClass('active');
			}
			return false;
		});
	}, 1000)

});