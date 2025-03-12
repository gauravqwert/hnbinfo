$(document).ready(function() {
    // Initialize Bootstrap components
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Initialize the carousel with custom options
    var reviewsCarousel = new bootstrap.Carousel(document.querySelector('#reviewsCarousel'), {
        interval: 5000,
        wrap: true,
        touch: true
    });

    // Smooth scrolling for anchor links
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').not('[data-bs-toggle]').click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && 
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
            }
        }
    });

    // Navbar active state
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-nav .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // Mobile menu collapse on click
    $('.navbar-nav .nav-link').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Newsletter form submission (demo functionality)
    $('.newsletter-form .btn').click(function(e) {
        e.preventDefault();
        var email = $('.newsletter-form input').val();
        if (email && validateEmail(email)) {
            alert('Thank you for subscribing to our newsletter!');
            $('.newsletter-form input').val('');
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Email validation helper function
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // Add animation for review cards
    function animateReviews() {
        $('.review-card').each(function(index) {
            var $this = $(this);
            setTimeout(function() {
                $this.addClass('visible');
            }, 200 * index);
        });
    }

    // Add CSS class for animation
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .review-card {
                opacity: 0;
                transform: translateY(20px);
                transition: opacity 0.5s ease, transform 0.5s ease;
            }
            .review-card.visible {
                opacity: 1;
                transform: translateY(0);
            }
        `)
        .appendTo('head');

    // Trigger animation on page load
    setTimeout(animateReviews, 500);

    // Handle carousel swipe on mobile
    var touchStartX = 0;
    var touchEndX = 0;
    
    $('.carousel').on('touchstart', function(event) {
        touchStartX = event.originalEvent.touches[0].pageX;
    });
    
    $('.carousel').on('touchend', function(event) {
        touchEndX = event.originalEvent.changedTouches[0].pageX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX) {
            // Swipe left
            $('#reviewsCarousel').carousel('next');
        }
        if (touchEndX > touchStartX) {
            // Swipe right
            $('#reviewsCarousel').carousel('prev');
        }
    }
});