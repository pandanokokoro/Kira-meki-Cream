// アコーディオン
$(".accordion__panel:nth-of-type(1) .accordion__header-icon img").addClass("active");
$(".accordion__panel:nth-of-type(1) .accordion__content").css("display", "block");

$('.accordion__header').click(function() {
    $(this).next().slideToggle();
    $(".accordion__header-icon img").toggleClass('active');
});


// カルーセル
$('.slide').slick({
    infinite: true,
    dots: true,
    arrows: true,
    prevArrow: '<img src="/assets/image/slide-arrow-left.svg" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="/assets/image/slide-arrow-right.svg" class="slide-arrow next-arrow">',
    fade: true
});