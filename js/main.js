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

        $("a.scroll[href^=#]").click(function(e){
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


    // circle background percents
    function circlePercents() {
        var percents =  Number($('#circle_percent').attr('data-percent'));
        var loops = 100;
        var increment = 360/loops;
        var half = loops/2;
        // var back_color = 'rgba(255, 255, 255, 0)';
        var back_color = '#b73bcc';
        // var back_color = '#C86DD7';
        // var theme_color = '#C86DD7';
        var theme_color = '#000';
        var bg = "";
        if (percents < half) {
            var next_deg = (90 + increment * percents) + 'deg';
            next_deg = String(next_deg);
            bg = 'linear-gradient(90deg, '+back_color+' 50%, transparent 50%, transparent), linear-gradient('+next_deg+', '+theme_color+' 50%, '+back_color+' 50%, '+back_color+')';
            console.log(bg)
        } else {
            var next_deg = (-90 + increment * (percents - half)) + 'deg';
            console.log(next_deg)
            bg = 'linear-gradient('+next_deg+', '+theme_color+' 50%, transparent 50%, transparent), linear-gradient(270deg, '+theme_color+' 50%, '+back_color+' 50%, '+back_color+')';
        }
        $('#circle_percent').css('backgroundImage',bg);
    }
    circlePercents();
    // circle background percents end
    // linear-gradient(90deg, rgb(200, 109, 215) 50%, transparent 19%, transparent), linear-gradient(rgb(0, 0, 0) 50%, rgb(200, 109, 215) 50%, rgb(200, 109, 215))
    // linear-gradient(90deg, rgb(200, 109, 215) 50%, transparent 50%, transparent), linear-gradient(rgb(0, 0, 0) 50%, rgb(200, 109, 215) 50%, rgb(200, 109, 215))
    // linear-gradient(90deg, rgba(255, 255, 255, 0) 50%, transparent 50%, transparent), linear-gradient(rgb(0, 0, 0) 50%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0))
    var flag = 0;
    function lock(time) {
        flag = 1;
        setTimeout(function () {
            flag = 0;
        }, time);
    }
    //how-it-works-1 tabs
    $('#content-how-work-1>div').hide();
    $($('#how-it-1-adaptive-tabs li.active a').attr('data-target')).show();

    $('#how-it-1-adaptive-tabs a').on('click',function () {
        var li = $(this).parent('li');
        if (!li.hasClass('active') && flag == 0) {
            lock(400);
            $('#how-it-1-adaptive-tabs li').removeClass('active');
            $(li).addClass('active');
            var targets = $(this).attr('data-target');
            $('#content-how-work-1>div').slideUp(150);

            setTimeout(function () {
                $(targets).slideDown(250);
            },150);
        }
    });
    //how-it-works-1 tabs end

    // how-it-works-4 tabs
    $('#how-it-works-4 .how-4-tab-content').hide();
    $($('#how-it-4-adaptive-tabs li.active a').attr('data-target')).show();

    $('#how-it-4-adaptive-tabs a').on('click',function () {
        var li = $(this).parent('li');
        if (!li.hasClass('active') && flag == 0) {
            lock(300);
            $('#how-it-4-adaptive-tabs li').removeClass('active');
            $(li).addClass('active');
            var target = $(this).attr('data-target');
            var image_target = $(this).attr('data-img');
            $('#how-it-works-4 .how-4-tab-content').hide(150);

            $('#how-4-tab-img').attr('src',image_target);
            $(target).show(150);
        }
    });
    // how-it-works-4 tabs end

    // how-it-works-cases tabs
    $('#how-it-works-cases .how-cases-tab-content').hide();
    $($('#how-it-cases-adaptive-tabs li.active a').attr('data-target')).show();
    $('#how-it-works-cases').css('backgroundImage',"url("+
        $('#how-it-cases-adaptive-tabs li.active a').attr('data-img-bg')
    +")");

    $('#how-it-cases-adaptive-tabs a').on('click',function () {
        var li = $(this).parent('li');
        if (!li.hasClass('active') && flag == 0) {
            lock(300);
            $('#how-it-cases-adaptive-tabs li').removeClass('active');
            $(li).addClass('active');
            var target = $(this).attr('data-target');
            var image_bg = $(this).attr('data-img-bg');
            $('#how-it-works-cases').css('backgroundImage',"url("+image_bg+")");
            $('#how-it-works-cases .how-cases-tab-content').hide(150);
            $(target).show(150);
        }
    });
    // how-it-works-cases tabs end

    //network tabs
    $("#network .circle-content:not(.active)").slideUp();

    function slideNetwork(_this) {
        if (!$(_this).hasClass('active') && flag == 0) {
            lock(400);
            $('#network .circle-block').removeClass('active');
            $(_this).addClass('active');
            var target = $(_this).attr('data-target');
            $('#network .circle-content').removeClass('active').slideUp(150);

            // setTimeout(function () {
                $(target).addClass('active').slideDown(150);
            // }, 150);
        }
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
       $('#network .circle-block').on('click',function () {
           slideNetwork(this);
       });
    } else {
        $('#network .circle-block').on('mouseover',function () {
            if (flag == 0) {
                slideNetwork(this);
            }
        });
    }
    //network tabs end
});



var styleJs = {
    heigth: 0,
    offer: function () {
        this.setHeigth($('#advisors .description-block'));
        // this.setHeigth($('#tab-bonus-1 .token-block-wrap'));
        this.setHeigth($('#how-it-works-5 .row .text-center'));
        this.setHeigth($('#how-it-works-1 .info-block'));
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
//heigth all like one
window.addEventListener('load', function () {
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