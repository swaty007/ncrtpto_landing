$(document).on('ready', function() {

    var menu_selector = "#w1"; // Переменная должна содержать название класса или идентификатора, обертки нашего меню.
    function onScroll(){

        var scroll_top = $(document).scrollTop();
        $(menu_selector + " a.scroll").each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + " a.active").removeClass("active");
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }


        $(document).on("scroll", onScroll);

        $("a[href^=#]").click(function(e){
            e.preventDefault();

            $(document).off("scroll");
            $(menu_selector + " a.active").removeClass("active");
            $(this).addClass("active");
            var hash = $(this).attr("href");
            var target = $(hash);

            $("html, body").animate({
                scrollTop: target.offset().top
            }, 500, function(){
                window.location.hash = hash;
                $(document).on("scroll", onScroll);
            });
        });

});

//navbar
document.addEventListener('DOMContentLoaded',function () {
    var navbar =   $('#navbar-adaptive');
    navbar.on('show.bs.collapse',function () {
        navbar.addClass('opened');
    });
    navbar.on('shown.bs.collapse',function () {
        // console.log(2);
    });
    navbar.on('hide.bs.collapse',function () {
        navbar.removeClass('opened');
    });
    navbar.on('hidden.bs.collapse',function () {
        // console.log(4);
    });
});

//heigth all like one
window.addEventListener('load', function () {
    var styleJs = {
        heigth: 0,
        offer: function () {
            this.setHeigth($('#advisors .description-block'));
            // this.setHeigth($('#tab-bonus-1 .token-block-wrap'));
            this.setHeigth($('#how-it-works-5 .row .text-center'));
        },
        setHeigth: function (items) {
            this.heigth = 0;
            items.each(function () {
                if ($(this).outerHeight() > styleJs.heigth) {
                    items.css({minHeight: '0'});
                    styleJs.heigth = $(this).outerHeight();
                }
            });
            if (this.heigth > 0) {
                items.css({minHeight: this.heigth + 'px'});
            }
        }
    };
    setTimeout(function () {
        styleJs.offer();
    },100);

    $(window).resize(styleJs.offer());
    //slider-init
    function initSlider() {
        $('#bonus-items').slick({
            dots: false,
            infinite: false,
            speed: 300,
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: false,
            autoplaySpeed: 4000,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        if (window.innerWidth >= 992) {
            $('#partners-items').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: false,
                autoplaySpeed: 4000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        if (window.innerWidth <= 992) {
            $('#circle-slide').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: false,
                autoplaySpeed: 4000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 700,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
            $('#advisors-slide').slick({
                dots: false,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 2,
                autoplay: false,
                autoplaySpeed: 4000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
    };
    initSlider();

});