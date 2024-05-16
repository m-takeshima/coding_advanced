// ーーースワイプメニュー用ーーー
const swiper = new Swiper(".swiper", {
    autoplay:{
        delay:5000
    },
    slidesPerView: 2,
    direction: 'horizontal',
    loop: true,
// ページネイション
    pagination: {
        el: ".swiper-pagination"
     },
// ナビボタン
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    scrollbar: {
        el: '.swiper-scrollbar',
      },
});
// ーーースワイプメニュー用ーーー


//ーーーアコーディオンメニュー用 ーーー
$(function(){
    $("#acMenu dt").on("click", function() {
    $(this).next().slideToggle();
    });
    });
//ーーーアコーディオンメニュー用 ーーー


//ーーフェードーー
$(window).on('scroll', function () {
    $('.fadein').each(function() {
      var targetPosition = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetPosition - windowHeight) {
        $(this).addClass('show');
      }
    });
  });
//ーーフェードーー