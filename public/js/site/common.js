"use strict";

$(document).ready(function() {

  /**
  * Слайдеры
  */

  // слайдер в шапке на главной
  $('.home-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    prevArrow: '<button class="home-slider__arrow slick-prev"></button>',
    nextArrow: '<button class="home-slider__arrow slick-next"></button>',
    dots: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000,
  });

  // слайдер отзывов на главной
  $('.review-list_carousel').slick({
    slidesToScroll: 1,
    slidesToShow: 3,
    infinite: true,
    arrows: true,
    prevArrow: '<button class="review-list__arrow slick-prev"></button>',
    nextArrow: '<button class="review-list__arrow slick-next"></button>',
    dots: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 376,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // слайдер акций
  $('.stock-list_carousel').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
    infinite: true,
    arrows: true,
    prevArrow: '<button class="stock-list__arrow slick-prev"></button>',
    nextArrow: '<button class="stock-list__arrow slick-next"></button>',
    dots: false,
  });



  /**
  * Адаптивное меню
  * Docs: https://slideout.js.org/
  */

  var slideout = new Slideout({
    'panel': document.getElementById('wrapper'),
    'menu': document.getElementById('mobile-nav'),
    'padding': 256,
    'tolerance': 70
  }).disableTouch();

  document.querySelector('.nav-toggle').addEventListener('click', function() {
    slideout.toggle();
  });

  document.querySelector('.nav-overlay').addEventListener('click', function() {
    slideout.close();
  });



  /**
  * Плавающее меню
  */

  $(window).scroll(function() {
    if ($(this).scrollTop() > 300){  
      $('.fix-bar').addClass("fix-bar_active");
    }
    else{
      $('.fix-bar').removeClass("fix-bar_active");
    }
  });


  /**
  * FancyBox 3
  * Docs: http://fancyapps.com/fancybox/3/docs/
  */

  $("[data-fancybox]").fancybox({
    buttons : [
      'close',
    ],
	protect: true,
	touch:false,
    // afterShow : function() {
    //     $('.form-select').styler();
    //   }
  });


  /**
  * Разбить слово на буквы
  */

  $(".letter").lettering();


  /**
  * Стилизация select
  * Docs: http://dimox.name/jquery-form-styler/
  */

  $('.form-select').styler({
    selectPlaceholder: 'Выберите услугу'
  });


  /**
  * Адаптивные таблицы
  */

  $(".article table").wrap("<div class='table-responsive'></div>");

});