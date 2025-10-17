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
	});

	// Load footer
	$('#footer-placeholder').load('components/footer.html');
});
