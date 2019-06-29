(function($) {

				// Sticky NavBar feature
				window.onscroll = function() {stickyNav()};
				
				const navbar = document.getElementById('navbar');
				const sticky = navbar.offsetTop;
				
				function stickyNav() {
					if (window.pageYOffset > sticky) {
						navbar.classList.add('sticky');
						navbar.classList.add('sticky-background-color');
						} else {
							navbar.classList.remove('sticky');
							navbar.classList.remove('sticky-background-color');
						}
				}
				
				// Scroll to top
				$('#to-top').click(function() {
						$('html, body').animate({
								scrollTop: 0
						}, 500);
				});

				// Create timeline
				$('#experience-timeline').each(function() {

						$this = $(this); // Store reference to this
						$userContent = $this.children('div'); // user content

						// Create each timeline block
						$userContent.each(function() {
								$(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
						});

						// Add icons to each block
						$this.find('.vtimeline-point').each(function() {
								$(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
						});

						// Add dates to the timeline if exists
						$this.find('.vtimeline-content').each(function() {
								var date = $(this).data('date');
								if (date) { // Prepend if exists
										$(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
								}
						});

				});

				// Highlights current section in navbar when scrolling
				// Sauce: https://jsfiddle.net/cse_tushar/Dxtyu/141/
				function onScroll(event){
					var scrollPos = $(document).scrollTop();
					$('#navbar #nav-anchor').each(function () {
						var currLink = $(this);
						var refElement = $(currLink.attr("href"));
						if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
							$('#menu-center ul li a').removeClass("current");
							currLink.addClass("current");
						}
						else{
							currLink.removeClass("current");
						}
					});
				}
				$(document).on("scroll", onScroll);
				
})(jQuery);
