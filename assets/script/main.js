// アコーディオン
$('.accordion__header').click(function() {
    $(this).next().slideToggle();
    // $(this).find(".accordion__header-icon img").toggleClass('active');
    $(this).find("img").toggleClass('active');
});

// カルーセル
$('.slide').slick({
    infinite: true,
    dots: true,
    arrows: true,
    nextArrow: '<img src="/assets/image/slide_arrow_right_01.svg" class="slide-arrow next-arrow">',
    prevArrow: '<img src="/assets/image/slide_arrow_left_01.svg" class="slide-arrow prev-arrow">',
    fade: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 767.9,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
            }
        }
    ]
});

//スクロールイベントで表示/非表示を切り替え
$(window).on("scroll", function() {
    if ($(window).scrollTop() > 400) {
        $(".back-to-top__button").fadeIn();
    } else {
        $(".back-to-top__button").fadeOut();
    }
})
