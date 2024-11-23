// アコーディオン
$('.accordion__header').click(function() {
    $(this).next().slideToggle();
    $(this).find(".accordion__header-icon img").toggleClass('active');
});

// カルーセル
$('.slide').slick({
    infinite: true,
    dots: true,
    arrows: true,
    nextArrow: '<img src="/assets/image/slide_arrow_right_01.svg" class="slide-arrow next-arrow">',
    prevArrow: '<img src="/assets/image/slide_arrow_left_01.svg" class="prev-arrow">',
    fade: true,
    // slidesToShow: 3,
    slidesToScroll: 5,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});