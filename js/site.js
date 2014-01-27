$( document ).ready(function() {

	$("header").css({ opacity: 1 });

	$(window).scroll(function(){

		var windowScroll = $(window).scrollTop();
		var headerHeight = $("header").outerHeight();
		var offsetTop = 10;

		var opacity = (windowScroll*-1/headerHeight*2) +1;
		
		$(".header-content").css({
			top: $(window).scrollTop()*0.6,
			opacity: opacity
		});

		if (windowScroll > headerHeight - offsetTop) {

			$("header").css({
				position: "fixed",
				top: headerHeight*-1 + offsetTop
			});

			$(".content").css({
				marginTop: headerHeight
			});

		} else {

			if (windowScroll <= headerHeight - offsetTop) {
				
				$("header").css({
					position: "relative",
					top: ""
				});

				$(".content").css({
					marginTop: 0
				});
			}

		}

	});
});