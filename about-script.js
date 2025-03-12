$(document).ready(() => {
  // Initialize Bootstrap components
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl))

  // Animate branch cards on scroll
  function animateBranchCards() {
    $(".branch-card").each(function (index) {
      const card = $(this)
      if (isElementInViewport(card)) {
        setTimeout(() => {
          card.addClass("visible")
        }, index * 100)
      }
    })
  }

  // Check if element is in viewport
  function isElementInViewport(el) {
    const rect = el[0].getBoundingClientRect()
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  // Handle scroll events for animations
  $(window).on("scroll", () => {
    animateBranchCards()
  })

  // Trigger initial animation
  animateBranchCards()

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

