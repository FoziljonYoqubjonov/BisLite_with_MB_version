$(document).ready(function () {
  $('.slider__inner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
  });
  $('.works__slider').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
  });

  $('.menu__btn').on('click', function () {
    $('.header__menu').slideToggle();
  })
  $('.drop-down').on('click', function () {
    $('.drop-down__menu').slideToggle();
  });
});
