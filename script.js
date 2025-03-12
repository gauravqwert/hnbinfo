$(document).ready(() => {
    // Initialize Bootstrap components
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))
  
    // Smooth scrolling for anchor links
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .not("[data-bs-toggle]")
      .click(function (event) {
        if (
          location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
        ) {
          var target = $(this.hash)
          target = target.length ? target : $("[name=" + this.hash.slice(1) + "]")
          if (target.length) {
            event.preventDefault()
            $("html, body").animate(
              {
                scrollTop: target.offset().top - 70,
              },
              1000,
            )
          }
        }
      })
  
    // Navbar active state
    $(".navbar-nav .nav-link").click(function () {
      $(".navbar-nav .nav-link").removeClass("active")
      $(this).addClass("active")
    })
  
    // Mobile menu collapse on click
    $(".navbar-nav .nav-link").click(() => {
      $(".navbar-collapse").collapse("hide")
    })
  
    // Animation for trainer cards
    function animateTrainers() {
      $(".trainer-card").each(function (index) {
        var $this = $(this)
        setTimeout(() => {
          $this.addClass("visible")
        }, 100 * index)
      })
    }
  
    // Add CSS class for animation
    $("<style>")
      .prop("type", "text/css")
      .html(`
              .trainer-card {
                  opacity: 0;
                  transform: translateY(20px);
                  transition: opacity 0.5s ease, transform 0.5s ease;
              }
              .trainer-card.visible {
                  opacity: 1;
                  transform: translateY(0);
              }
          `)
      .appendTo("head")
  
    // Trigger animation on page load
    setTimeout(animateTrainers, 500)
  
    // Filter trainers functionality (can be implemented if needed)
    // This would allow filtering trainers by category, department, etc.
    $(".filter-btn").click(function () {
      var filterValue = $(this).attr("data-filter")
  
      if (filterValue === "all") {
        $(".trainer-card").show()
      } else {
        $(".trainer-card").hide()
        $('.trainer-card[data-category="' + filterValue + '"]').show()
      }
  
      $(".filter-btn").removeClass("active")
      $(this).addClass("active")
    })
  
    // Newsletter form submission (demo functionality)
    $(".newsletter-form .btn").click((e) => {
      e.preventDefault()
      var email = $(".newsletter-form input").val()
      if (email && validateEmail(email)) {
        alert("Thank you for subscribing to our newsletter!")
        $(".newsletter-form input").val("")
      } else {
        alert("Please enter a valid email address.")
      }
    })
  
    // Email validation helper function
    function validateEmail(email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  })
  
  

  $(document).ready(function() {
    // Sticky Navigation
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.navbar').addClass('navbar-sticky');
        } else {
            $('.navbar').removeClass('navbar-sticky');
        }
    });

    // Smooth scrolling for anchor links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    // Mobile menu toggle
    $('.navbar-toggler').on('click', function() {
        $(this).toggleClass('active');
    });

    // Testimonial carousel custom navigation
    $('#testimonialCarousel').carousel({
        interval: 5000
    });

    // Course hover effect
    $('.course-card').hover(
        function() {
            $(this).find('.course-title').css('color', '#4CAF50');
        },
        function() {
            $(this).find('.course-title').css('color', '#212529');
        }
    );

    // Counter animation for statistics
    $('.counter').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    // Add active class to nav-item based on scroll position
    $(window).scroll(function() {
        const scrollDistance = $(window).scrollTop();
        
        $('section').each(function(i) {
            if ($(this).position().top <= scrollDistance + 100) {
                $('.navbar-nav a.active').removeClass('active');
                $('.navbar-nav a').eq(i).addClass('active');
            }
        });
    }).scroll();

    // Dropdown menu on hover for desktop
    function toggleDropdown() {
        if (window.innerWidth > 991) {
            $('.dropdown').hover(
                function() {
                    $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
                },
                function() {
                    $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
                }
            );
        }
    }
    
    toggleDropdown();
    $(window).resize(toggleDropdown);
    
    // Initialize AOS animation library if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true
        });
    }
});