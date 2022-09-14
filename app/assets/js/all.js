$(function () {
  console.log('Hello Bootstrap5');

  //swiper
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    // autoplay: 3000,//可选选项，自动滑动
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 24,
    pagination : '.swiper-pagination',
  
  })


});

// vanilla JS
// init with element
var grid = document.querySelector('.grid');

// init with selector
var msnry = new Masonry('.grid', {
  // options...
});