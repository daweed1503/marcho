$(function () {

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="14px" viewBox="0 0 9 14" version="1.1"><g><path d="M 1.164062 6.382812 C 0.8125 6.722656 0.8125 7.277344 1.164062 7.621094 L 5.664062 11.996094 C 6.015625 12.335938 6.585938 12.335938 6.9375 11.996094 C 7.289062 11.652344 7.289062 11.097656 6.9375 10.757812 L 3.074219 7 L 6.9375 3.242188 C 7.289062 2.902344 7.289062 2.347656 6.9375 2.003906 C 6.585938 1.664062 6.011719 1.664062 5.660156 2.003906 L 1.160156 6.378906 Z M 1.164062 6.382812 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="9px" height="15px" viewBox="0 0 9 14" version="1.1"><g><path d="M 7.835938 6.382812 C 8.1875 6.722656 8.1875 7.277344 7.835938 7.621094 L 3.335938 11.996094 C 2.984375 12.335938 2.414062 12.335938 2.0625 11.996094 C 1.710938 11.652344 1.710938 11.097656 2.0625 10.757812 L 5.925781 7 L 2.0625 3.242188 C 1.710938 2.902344 1.710938 2.347656 2.0625 2.003906 C 2.414062 1.664062 2.988281 1.664062 3.339844 2.003906 L 7.839844 6.378906 Z M 7.835938 6.382812 "/></g></svg></button>',
    infinite: false,
    autoplay: true,
    fade: true,
  });

  $('.product-tabs__top-item').on('click', function(e){
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  });

  $('.product-slide__thumb').slick({
    asNavFor: ".product-slide__big",
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical:true,
    draggable:false,
  });
  $('.product-slide__big').slick({
    asNavFor: ".product-slide__thumb",
    draggable:false,
    arrows:false,
    fade:true,
  });

  $('.shop-content__filter-btn').on('click', function (){
    $('.shop-content__filter-btn').removeClass('shop-content__filter-btn--active');
    $(this).addClass('shop-content__filter-btn--active');
  });

  $('.button-list').on('click', function(){
    $('.products__item').addClass('products__item--list')
  });

  $('.button-grid').on('click', function(){
    $('.products__item').removeClass('products__item--list')
  });

  $('.select-style, .product-item__num').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: '$',
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
  },
    });
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

    $(".star").rateYo({
      starWidth: "17px",
      normalFill: "#ccccce",
      ratedFill: "#ffc35b",
      readOnly: true,
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="19px" height="17px" viewBox="0 0 19 17" version="1.1"><g id="surface1"><path d="M 10.453125 0.597656 C 10.277344 0.234375 9.910156 0 9.503906 0 C 9.097656 0 8.730469 0.234375 8.554688 0.597656 L 6.433594 4.992188 L 1.695312 5.695312 C 1.300781 5.753906 0.96875 6.03125 0.847656 6.414062 C 0.726562 6.796875 0.824219 7.21875 1.109375 7.5 L 4.546875 10.921875 L 3.734375 15.761719 C 3.667969 16.160156 3.832031 16.566406 4.160156 16.800781 C 4.484375 17.035156 4.917969 17.066406 5.273438 16.878906 L 9.507812 14.601562 L 13.738281 16.878906 C 14.09375 17.066406 14.527344 17.039062 14.855469 16.800781 C 15.179688 16.5625 15.34375 16.160156 15.277344 15.761719 L 14.464844 10.921875 L 17.902344 7.5 C 18.183594 7.21875 18.289062 6.796875 18.164062 6.414062 C 18.035156 6.03125 17.710938 5.753906 17.3125 5.695312 L 12.574219 4.992188 Z M 10.453125 0.597656"/></g></svg>'
    });


  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function initializeClock(id, endtime) {
    var clock = document.querySelector('.promo__clock');
    var daysSpan = clock.querySelector('.promo__days');
    var hoursSpan = clock.querySelector('.promo__hours');
    var minutesSpan = clock.querySelector('.promo__minutes');
    var secondsSpan = clock.querySelector('.promo__seconds');
  
    function updateClock() {
      var t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  
  var deadline =$('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);
  
});
