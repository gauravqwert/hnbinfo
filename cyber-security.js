$(document).ready(function() {
    // Initialize Bootstrap components
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
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

    // Accordion functionality
    $('.accordion-button').click(function() {
        const isCollapsed = $(this).hasClass('collapsed');
        
        // Remove active class from all buttons
        $('.accordion-button').removeClass('active');
        
        // Add active class to clicked button if expanding
        if (!isCollapsed) {
            $(this).addClass('active');
        }
    });
});