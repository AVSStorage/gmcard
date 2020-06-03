// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files
import * as VueApp from './app';
import "videojs-youtube/dist/Youtube";
import "video-js/video-js.min.css";
import succinit from './jQuery.succinct.min';
$(document).ready(function() {

    $('.filter__select').niceSelect();
    $('#myModal').on('show.bs.modal', function (e) {
        $('.modal .modal-dialog').attr('class', 'modal-dialog  fadeIn  animated');
    })

    $('.commercial__address-button--show').click((evt) => {
        $(evt.currentTarget).toggleClass('d-none')
        $(evt.currentTarget).parents('.commercial__address-wrapper').find('.commercial__address-info').toggleClass('d-none animated fadeIn');
        $(evt.currentTarget).parent().find('.commercial__address-button--hide').toggleClass('d-none')
    });

    $('.commercial__address-button--hide').click((evt) => {
        $(evt.currentTarget).toggleClass('d-none');
        $(evt.currentTarget).parents('.commercial__address-wrapper').find('.commercial__address-info').toggleClass('d-none animated');
        $(evt.currentTarget).parent().find('.commercial__address-button--show').toggleClass('d-none');
    });

    $('.current').succinct({
        size: 30
    });

    $('.menu__toggler').click((evt) => {
        $(evt.target).parent().find('.menu').toggleClass('d-none animated bounceIn');
    })

    $('.coupon-modal-open').click((evt) => {
        $(evt.target).parent().toggleClass('d-flex d-none');
        $(evt.target).parent().parent().toggleClass('blur');
        $(evt.target).parent().parent().find('.commercial__modal').toggleClass('d-none d-flex animated fadeIn')
    });

    $('.coupon-modal-close').click((evt) => {
        $(evt.target).parents('.commercial__modal').toggleClass('d-flex d-none');

        $(evt.target).parents('.theme-shadow').toggleClass('blur');
        let div = $(evt.target).parents('.theme-shadow').children()[0];
        $(div).toggleClass('d-none d-flex animated fadeIn')
    })
    $('.commercial__photos-btn').click((evt) => {
        $('.commercial__photos').toggleClass('d-none d-flex fadeIn');
    })

    $('#registrate').click((evt) => {
        $('.user--unauth').toggle();
    });

    $('#profile-button').click((evt) => {

        $(evt.currentTarget).parent().parent().find('.user').toggle();
        $(evt.currentTarget).parent().parent().find('.user').toggleClass('animated fadeIn')
    });

    $('#city').change(function (evt) {
        if (evt.target.value === "/cities"){
            window.location.href = "/gmcard/cities.html"
        }
    })

    $('.close-category').click((evt) => {
        $(evt.currentTarget).parent().toggleClass('animated fadeOut');
    })
    $('.category-dropdown').click(function (evt) {

        $(evt.currentTarget).parents('.category__mobile').find('.dl-submenu').toggleClass('d-none animated fadeIn');
    })

    $('.maxi .slider__main').slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        dots: true,
        dotsClass: "my-dots",
        prevArrow: $('.slider-arrow--prev'),
        nextArrow: $('.slider-arrow--next'),
        responsive: [
            {
                breakpoint: 1235,
                settings: {
                    dotsClass: "slick-dots  custom-dots",
                    dots: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    dotsClass: "my-dots",
                }
            },
            {
                breakpoint: 415,
                settings: {
                    dots: false,
                    dotsClass: 'slick-dots',
                }
            },
        ]
    })

    $('.mini .slider__main').slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        prevArrow: $('.slider-arrow--prev'),
        nextArrow: $('.slider-arrow--next'),
        responsive: [
            {
                breakpoint: 1235,
                settings: {
                }
            },
        ]
    })
    $('.index .slider__main').slick({
        slidesToShow: 1,
        infinite: true,
        slidesToScroll: 1,
        prevArrow: $('.slider-arrow--prev'),
        nextArrow: $('.slider-arrow--next')
    })

    const links = document.querySelectorAll('.category__link');
    //
    // let ticking = false;
    // const updateFunc = () => {
    //     ticking = false;
    //     block.classList.toggle('hidden');
    // };
    //
    Array.from(links).forEach((link) => {

        $(link).hover(function (evt) {
            $('.category__main').removeClass('hidden');
        }, function (evt) {
            if (!$('.category__main').hasClass('hidden')) {
                $('.category__main').addClass('hidden');
            }
            // let index = link.dataset.index;
            // const block = document.querySelector('.category__main[data-index="' + index + '"]');
            // if (!Array.from(link.children).includes(evt.target)) {
            //     block.classList.add('hidden');
            // }
        })
    })
        // $('.category__main').each(function () {
        //     $(this).hover(function (evt) {
        //         $(evt.currentTarget).removeClass('hidden');
        //     }, function (evt) {
        //         $(evt.currentTarget).addClass('hidden');
        //     });
        // })



    // let categories = document.querySelectorAll('.category');
    //
    // Array.from(categories).forEach((category) => {
    //     $(category).hover(function (evt) {
    //         let index = evt.currentTarget.dataset.index;
    //         let subIndex = Number(evt.currentTarget.dataset.sub) + 1;
    //
    //         // if (Number(evt.currentTarget.dataset.sub) === 0){
    //         //     $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-sub!="' + subIndex + '"]').each(function () {
    //         //         $(this).addClass('d-none');
    //         //     })
    //         // }
    //         if (index) {
    //             // $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-sub!="0"]').addClass('d-none');
    //
    //             const block = $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-index="' + index + '"][data-sub="' + subIndex + '"]');
    //             block.removeClass('d-none');
    //         }
    //     }, function (evt) {
    //
    //         let subIndex = Number(evt.currentTarget.dataset.sub);
    //         console.log(subIndex);
    //         // const block = $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-sub="' + subIndex + 1 + '"]');
    //         // if (subIndex === 1){
    //         const block = $(evt.currentTarget).parents('.category__main').find('.category__wrapper[data-sub="' + subIndex + 1 + '"]');
    //         console.log(block);
    //         // if (subIndex > 0 && !Array.from(block).includes(evt.target.parentElement)) {
    //         block.each(function () {
    //             $(this).addClass('d-none');
    //         })
    //         //    }
    //         //  }
    //     })
   // })


})



