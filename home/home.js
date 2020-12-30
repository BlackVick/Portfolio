$(document).ready(function () {
  //navbar scroll animation
  $(window).scroll(function () {
    //show nav background
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //scroll to top button visibility
    if (this.scrollY > 550) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //slide up when arrow is clicked
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //menu hide and unhide
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $("#navigation .navbar .menu-btn i").toggleClass("active");
  });

  //owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  //quick scroll animation
  $(".scroll-up-btn").hover(
    function () {
      $(".scroll-up-btn i").addClass("bounce-4");
    },
    function () {
      $(".scroll-up-btn i").removeClass("bounce-4");
    }
  );

  //typed animation script
  var typed = new Typed(".typing", {
    strings: [
      "Software Engineer",
      "Android Developer",
      "Game Developer",
      "Professional Gamer",
      "Project Manager",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //typed animation script 2nd
  var typed = new Typed(".typing-2", {
    strings: [
      "Software Engineer",
      "Android Developer",
      "Game Developer",
      "Professional Gamer",
      "Project Manager",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
