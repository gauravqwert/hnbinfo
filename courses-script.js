// const { link } = require("framer-motion/client");

$(document).ready(function() {
    // Course data
    const coursesData = [
        {
            title: "CYBER SECURITY",
            duration: "6 MONTH",
            image: "./courses/cybersecurity.jpg",
            link: "cyber-security.html"
        },
        {
            title: "CLOUD COMPUTING",
            duration: "6 MONTH",
            image: "./courses/cloud.jpg",
            link: "cloud-computing.html"
        },
        {
            title: "WEB DEVELOPING",
            duration: "3 MONTH",
            image: "./courses/website-development.png",
            link: "web-developing.html"
        },
        {
            title: "CCC",
            duration: "2 MONTH",
            image: "./courses/ccc.png",
            link: "ccc.html"
        },
        {
            title: "TALLY",
            duration: "2 MONTH",
            image: "./courses/tally.jpg",
            link: "tally.html"
        },
        {
            title: "PYTHON",
            duration: "2 MONTH",
            image: "./courses/python.jpg",
            link: "python.html"
        },
        {
            title: "CLOUD(AWS)",
            duration: "1 MONTH",
            image: "./courses/aws.png",
            link: "aws.html"
        },
        {
            title: "C, C++",
            duration: "2 MONTH",
            image: "./courses/c.png",
            link: "c-cpp.html"
        },
        {
            title: "ETHICAL HACKING",
            duration: "2 MONTH",
            image: "./courses/Ethical-hacking.jpg",
            link: "ethical-hacking.html"
        },
        {
            title: "HTML,CSS,JS",
            duration: "3 MONTH",
            image: "./courses/html-css-js.png",
            link: "web-technologies.html"
        },
        {
            title: "HARDWARE NETWORKING",
            duration: "3 MONTH",
            image: "./courses/hardware.webp",
            link: "networking.html"
        },
        {
            title: "CCISO (CCNA,CCNP)",
            duration: "4 MONTH",
            image: "./courses/ccna.png",
            link: "cisco.html"
        },
        {
            title: "SERVER ADMINISTRATOR",
            duration: "2 MONTH",
            image: "./courses/server.jpg",
            link: "server-admin.html"
        },
        {
            title: "PHP",
            duration: "2 MONTH",
            image: "./courses/php.png",
            link: "php.html"
        },
        {
            title: "JAVA",
            duration: "2 MONTH",
            image: "./courses/java.png",
            link: "java.html"
        },
        {
            title: "ANDROID",
            duration: "3 MONTH",
            image: "./courses/android.png",
            link: "android.html"
        },
        {
            title: "GRAPHIC DESIGN",
            duration: "4 MONTH",
            image: "./courses/graphics.jpg",
            link: "graphic-design.html"
        },
        {
            title: "UI UX",
            duration: "3 MONTH",
            image: "./courses/ui-ux.jpeg",
            link: "ui-ux.html"
        },
        {
            title: "MERN STACK",
            duration: "5 MONTH",
            image: "./courses/mern.png",
            link: "mern.html"
        },
        {
            title: "REACT JS",
            duration: "2 MONTH",
            image: "./courses/react.png",
            link: "react.html"
        },
        {
            title: "WEB DESIGNING",
            duration: "4 MONTH",
            image: "./courses/web-design.jpg",
            link: "web-design.html"
        },
        {
            title: "ADVANCED EXCEL",
            duration: "1 MONTH",
            image: "./courses/excel.jpg",
            link: "excel.html"
        },
        {
            title: "INTERNATIONAL COURSE",
            duration: "5 MONTH",
            image: "./courses/international.jpg",
            link: "international.html"
        },
        {
            title: "FLUTTER",
            duration: "3 MONTH",
            image: "./courses/flutter.jpg",
            link: "flutter.html"
        },
        {
            title: "DATA ANALYST",
            duration: "5 MONTH",
            image: "./courses/data_analyst.jpg",
            link: "data-analyst.html"
        },
        {
            title: "DIGITAL MARKETING",
            duration: "3 MONTH",
            image: "./courses/digital-marketing.jpg",
            link: "digital-marketing.html"
        }
    ];

    // Generate course cards
    function generateCourseCards() {
        const coursesGrid = $('#coursesGrid');
        coursesGrid.empty();
        
        coursesData.forEach((course, index) => {
            const card = `
                <div class="col-lg-3 col-md-4 col-sm-6">
                    <div class="course-card">
                        <div class="course-image">
                            <img src="${course.image}" alt="${course.title}">
                        </div>
                        <div class="course-info">
                            <h3>${course.title}</h3>
                            <p>${course.duration}</p>
                            <a href="${course.link}" class="btn btn-warning">Details</a>
                        </div>
                    </div>
                </div>
            `;
            coursesGrid.append(card);
        });
    }

    // Initialize Bootstrap components
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    // Generate course cards
    generateCourseCards();

    // Animate course cards on scroll
    function animateCourseCards() {
        $('.course-card').each(function(index) {
            const card = $(this);
            if (isElementInViewport(card)) {
                setTimeout(() => {
                    card.addClass('visible');
                }, index * 100);
            }
        });
    }

    // Check if element is in viewport
    function isElementInViewport(el) {
        const rect = el[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Handle scroll events for animations
    $(window).on('scroll', function() {
        animateCourseCards();
    });

    // Trigger initial animation
    animateCourseCards();

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
});