// Load header and footer components
$(document).ready(function() {
	// Load header
	$('#header-placeholder').load('components/header.html', function() {
		// Set active navigation based on current page
		var page = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
		if (page === 'index' || page === '') {
			$('.nav-home').addClass('current');
		} else if (page === 'courses') {
			$('.nav-courses').addClass('current');
		} else if (page === 'schedule') {
			$('.nav-schedule').addClass('current');
		} else if (page === 'about') {
			$('.nav-about').addClass('current');
		}

		// Reinitialize dropdowns after header is loaded
		$('#nav > ul').dropotron({
			mode: 'fade',
			speed: 300,
			alignment: 'center',
			noOpenerFade: true
		});

		// Remove existing mobile nav elements if they exist
		if ($('#navPanel').length) {
			$('#navPanel').remove();
		}
		if ($('#navButton').length) {
			$('#navButton').remove();
		}

		// Create nav button for mobile
		$(
			'<div id="navButton">' +
				'<a href="#navPanel" class="toggle"></a>' +
			'</div>'
		)
			.appendTo($('body'));

		// Create nav panel with proper content
		$(
			'<div id="navPanel">' +
				'<nav>' +
					$('#nav').navList() +
				'</nav>' +
			'</div>'
		)
			.appendTo($('body'))
			.panel({
				delay: 500,
				hideOnClick: true,
				resetScroll: true,
				resetForms: true,
				side: 'top',
				target: $('body'),
				visibleClass: 'navPanel-visible'
			});
	});

	// Load footer
	$('#footer-placeholder').load('components/footer.html');
});
