$(document).ready(function() {
	// Vendor Initialize
	$('[data-aos]').attr('data-aos-once', true);
	AOS.init();

	// Scroll to Div
	$('a[data-slide="slide"]').click(function(e) {
		e.preventDefault();
		$('.sidebar-overlay').trigger('click');
		var target = $(this).data('slide-target');
	    $("html, body").animate({
	        scrollTop: $(target).offset().top - 100
	    }, 600);
	})

	// Dynamic Scrolled Navbar
	function hasScrolled() {
		var navbar = $('.navbar');
		if (window.scrollY > 50) {
			navbar.addClass('scrolled');
		} else {
			navbar.removeClass('scrolled');
		}
	}
	$(window).scroll(function() {
		hasScrolled();
	});
	$(window).resize(function() {
		hasScrolled();
	});
	hasScrolled();

	// Dynamic Sidebar
	$('.navbar-bars').click(function(e) {
		e.preventDefault();
		$('.sidebar').addClass('active');
		$('.sidebar-overlay').addClass('active');
	});
	$('.sidebar-overlay').click(function(e) {
		e.preventDefault();
		$('.sidebar').removeClass('active');
		$('.sidebar-overlay').removeClass('active');
	});

	// Sidebar Menu
	$('.sidebar__nav li').click(function() {
		$('.sidebar__nav li').removeClass('active');
		$(this).addClass('active');
	});

	// Dynamic Overlay Clones
	var overlay 	 = $('.overlay_effect'),
		overlayArray = ['overlay__right','overlay__left','overlay__top','overlay__bottom','overlay__center'];

	overlay.map(function(k, v) {
		var currents = $(v);

		for (var i in overlayArray) {
			var nextOverlay = $(v).clone().removeClass('overlay_effect').addClass(overlayArray[i]);
			currents.after(nextOverlay);
		}

		currents.remove();
	});

	// Swiper Initialize
	new Swiper('#swiper-travel', {
	    speed: 400,
	    spaceBetween: 30,
	    slidesPerView: 5,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: true,
		breakpoints: {
			320: {
				slidesPerView: 2,
				spaceBetween: 10
			},
			480: {
				slidesPerView: 3,
				spaceBetween: 20
			},
			640: {
				slidesPerView: 4,
				spaceBetween: 30
			}
		}
	});
});
