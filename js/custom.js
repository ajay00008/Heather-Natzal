
// ...................................................Home page start....................................

$('.slicer').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prevs"><img src="images/sliderleftarrow.png" class="img-fluid" alt=""></div>',
  nextArrow: '<div class="slick-nexts"><img src="images/sliderrightarrow.png" class="img-fluid" alt=""></div>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }, 
  ]
});
    
$('.slicers').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
   prevArrow: '<div class="slick-prevs"><img src="images/slidesleftarrow.png" class="img-fluid" alt=""></div>',
  nextArrow: '<div class="slick-nexts"><img src="images/slidesrightarrow.png" class="img-fluid" alt=""></div>'
});
    

// ...................................................Home page end....................................


// ...................................................blog-description-page-start....................................

$('.blog-slicer').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prevs"><img src="images/sliderleftarrow.png" class="img-fluid" alt=""></div>',
  nextArrow: '<div class="slick-nexts"><img src="images/sliderrightarrow.png" class="img-fluid" alt=""></div>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    
  ]

});
    

// ...................................................blog-description-page-page-end....................................

// ...................................................property-description-page-start....................................


$('.main-img-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  fade:true,
  autoplay: true,
  autoplaySpeed: 4000,
  speed: 300,
  lazyLoad: 'ondemand',
  asNavFor: '.thumb-nav'
});
// Thumbnail/alternates slider for product page
$('.thumb-nav').slick({
  slidesToShow: 9,
  slidesToScroll: 1,
  infinite: true,
  centerPadding: '0px',
  asNavFor: '.main-img-slider',
  dots: false,
  centerMode: true,
  draggable: true,
  speed:200,
  focusOnSelect: true,
  prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
  nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'  
});


//keeps thumbnails active when changing main image, via mouse/touch drag/swipe
$('.main-img-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
  //remove all active class
  $('.thumb-nav .slick-slide').removeClass('slick-current');
  //set active class for current slide
  $('.thumb-nav .slick-slide:not(.slick-cloned)').eq(currentSlide).addClass('slick-current');  
});

// ...................................................property-description-page-end....................................


// ..................................................property-grid-listing-page-start..................................

$('.property-slides').slick({
  dots: false,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<div class="slick-prevs"><img src="images/sliderleftarrow.png" class="img-fluid" alt=""></div>',
  nextArrow: '<div class="slick-nexts"><img src="images/sliderrightarrow.png" class="img-fluid" alt=""></div>',
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    
  ]

});
// ..................................................property-grid-listing-page-end..........................................