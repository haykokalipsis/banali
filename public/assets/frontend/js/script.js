document.addEventListener('DOMContentLoaded', () => {

    $('#slideshow-slick-block-insides').slick({
        infinite: true,
        // slidesToShow: 3,
        // slidesToScroll: 3
        // speed: 500,
        // cssEase: 'ease-in',
        // centerMode: true,
        // centerPadding: '50px',
        dots: true,
        // lazyLoad: 'ondemand', // progressive (default)
        // arrows: false,
        // rtl: true, // Right to left (тегу слайдера нужно дать аттрибут dir='rtl')
        // fade: true,
        // draggable: false // свайп,
        // vertical: true,

        // rows: 2, // слайды пойдут в несколько строчек
        // slidesPerRow: 2, // Сколько слайдов в каждой строке
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    const minAllowedWidth = 992;
    const minAllowedHeight = 600;

    let width = $(window).outerWidth();
    let height = $(window).outerHeight();

    // clouds-------------------------------------------------------------------------------------
    let cloudsSceneController = new ScrollMagic.Controller();
    let cloudsTimeline = new TimelineMax();
    // TweenMax.defaultEase = Linear.easeNone;

    let leftTop = document.getElementById('leftTop');
    let leftBottom = document.getElementById('leftBottom');
    let right = document.getElementById('right');
    let leftPart = document.getElementById('leftPart');
    let rightPart = document.getElementById('rightPart');
    let textBlock = document.getElementById('textBlock');

    let cloudsMovingTween = new TimelineMax();

    cloudsMovingTween
        .to('.development-block__cloud--left-top', 2, {
            x: '398px',
            ease: Power0.easeNone
        })
        .to('.development-block__cloud--left-bottom', 2.3, {
            x: '258px',
            // top: -600,
            ease: Power0.easeNone
        }, '-=2')
        .to('.development-block__cloud--right', 1.9, {
            x: '-190px',
            ease: Power0.easeNone
        }, '-=2.3')

        .to('.development-block__background--left', 2, {
            x: '-390px',
            ease: Power0.easeNone
        }, '+=0.5')
        .to('.development-block__background--right', 2, {
            x: '390px',
            ease: Power0.easeNone
        }, '-=2')

        .fromTo('.development-block__text-block', 2, {
            y: '101%',
        }, {
            y: '-99%',
            ease: Power0.easeNone
        }, '-=2');

    // let importSceneController = new ScrollMagic.Controller();
    let figuresMovingTween = new TimelineMax();

    figuresMovingTween
        .to('.import-block__calendar', 2, {
            y: '-200px',
            ease: Power0.easeNone
        })
        .to('.import-block__truck', 2, {
            x: '470px',
            // top: -600,
            ease: Power0.easeNone
        }, '-=2')
        .to('.import-block__timer', 2, {
            y: '270px',
            ease: Power0.easeNone
        }, '-=2')
        .to('.import-block__baggage', 2, {
            x: '-300px',
            ease: Power0.easeNone
        }, '-=2')
        .to('.import-block__phone', 2, {
            scale: 0,
            opacity: 0,
            ease: Power0.easeNone
        }, '-=2')
        .from('.import-block__text', 2, {
            y: '330%',
            // opacity: 1,
            ease: Power0.easeNone
        }, '-=2')
        .from('.import-block__truck-reverse', 2, {
            x: '270%',
            // opacity: 1,
            ease: Power0.easeNone
        });

    let imgArr = document.querySelectorAll('.slider__item');

    let textSlidingSceneController = new ScrollMagic.Controller();
    let textSlidingTween = new TimelineMax();

    textSlidingTween
        .to('.smm-block__sliding-text', 0.5, {
            top: -420,
            ease: Power0.easeNone
        })
        .to('.smm-block__text', 0.5, {
            // opacity: 0,
            ease: Power0.easeNone
        }, '-=0.5');


    let companiesMovingTween = new TimelineMax();

    companiesMovingTween
        .from('.companies-block__logo--1', 1, {
            y: '-200px',
            ease: Power4.Bounce
        })
        .from('.companies-block__logo--3', 1, {
            y: '-200px',
            ease: Power4.Bounce
        }, '-=1')
        .from('.companies-block__logo--6', 1, {
            x: '-400px',
            ease: Power4.Bounce
        }, '-=1')
        .from('.companies-block__logo--8', 1, {
            x: '400px',
            ease: Power4.Bounce
        }, '-=1')
        .from('.companies-block__logo--9', 1, {
            x: '-400px',
            ease: Power4.Bounce
        }, '-=1')
        .from('.companies-block__logo--11', 1, {
            x: '400px',
            ease: Power4.Bounce
        }, '-=1')
        .from('.companies-block__logo--14', 1, {
            y: '200px',
            ease: Power4.Bounce
        }, '-=1')
        .from('.companies-block__logo--16', 1, {
            y: '200px',
            ease: Power4.Bounce
        }, '-=1')

        .from('.companies-block__logo--2', 1, {
            y: '-200px',
            ease: Power4.Bounce
        }, '-=2')
        .from('.companies-block__logo--4', 1, {
            y: '-200px',
            ease: Power4.Bounce
        }, '-=2')
        .from('.companies-block__logo--5', 1, {
            x: '-400px',
            ease: Power4.Bounce
        }, '-=2')
        .from('.companies-block__logo--7', 1, {
            x: '400px',
            ease: Power4.Bounce
        }, '-=2')
        .from('.companies-block__logo--10', 1, {
            x: '-400px',
            ease: Power4.Bounce
        }, '-=2')
        .from('.companies-block__logo--12', 1, {
            x: '400px',
            ease: Power4.Bounce
        }, '-=2')
        .from('.companies-block__logo--13', 1, {
            y: '200px',
            ease: Power4.Bounce
        }, '-=2')
        .from('.companies-block__logo--15', 1, {
            y: '200px',
            ease: Power4.Bounce
        }, '-=2')
        .from('.companies-block__logo-image', 1, {
            opacity: 0
        });
    // imgArr.forEach(function(item, index) {
    //     imgItems.style.left = 90 * imgArr.length + '%';
    // });

    // let slideshowSceneController = new ScrollMagic.Controller();
    let slideshowTimeline = new TimelineMax();
    let imgItems = document.getElementById('slider__items');

    let distance = imgArr.length -1;
    distance =  (distance * -100);
    let gap =  ((imgArr.length -1)  * 50);
    let result = distance + gap;
    // let itemsWidth = ($(imgItems).width());
    // TweenMax.set(".slider__items", { x: 0 });
    slideshowTimeline
        // .set({}, {}, 0.1)
        .to('.slider__items', 1, {
            x: ((imgArr.length - 1) * -103.5) + '%',
            // x: `calc(${distance}% + ${gap}px)`,
            // x: -( ($(imgItems).width() * (imgArr - 1)) + 150),
            // x: -($(imgItems).innerWidth() * (imgArr.length - 1) + ((imgArr.length - 1) * 50)),
            // ease: Power1.easeInOut
            ease: Power0.easeNone,
            // x: distance + '%',
            // modifiers: {
            //     x: function() {
            //         return 'calc(' + distance + '%)';
            //     }
            // },
            // strictUnits:true
        });
    //---------------+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    let developmentSceneController = null;
    let slideshowSceneController = null;
    let smmSceneController = null;
    let importSceneController = null;
    let companiesSceneController = null;

    function initScrollMagic() {
        // $('body').scrollTop( 0 ); Скролл на топ
        developmentSceneController = new ScrollMagic.Controller();
        slideshowSceneController = new ScrollMagic.Controller();
        smmSceneController = new ScrollMagic.Controller();
        importSceneController = new ScrollMagic.Controller();
        companiesSceneController = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
            triggerElement: '#development-section',
            duration: '350%',
            triggerHook: 0
        })
            .setTween(cloudsMovingTween)
            .setPin("#development-section") // pins the element for the the scene's duration
            .addTo(developmentSceneController); // assign the scene to the controller

        new ScrollMagic.Scene({
            triggerElement: '#smm-section',
            // triggerHook: 'onLeave',
            triggerHook: 0,
            duration: "125%",
            // offset: '500px'
            // duration: "1"
        })
            .setTween(textSlidingTween)
            .setPin('#smm-section')
            // .addIndicators()
            .addTo(smmSceneController);

        new ScrollMagic.Scene({
            triggerElement: '.import-section',
            // triggerHook: 'onEnter',
            triggerHook: 0,
            duration: '200%',
            // offset: '500px'
            // duration: "1"
        })
            .setTween(figuresMovingTween)
            .setPin('#import-section')
            // .addIndicators()
            .addTo(importSceneController);

        new ScrollMagic.Scene({
            triggerElement: '.companies-section',
            // triggerHook: 'onEnter',
            triggerHook: 0,
            duration: '100%',
            // offset: '380%'
            // duration: "1"
        })
            .setTween(companiesMovingTween)
            .setPin('#companies-section')
            // .addIndicators()
            .addTo(companiesSceneController);

        new ScrollMagic.Scene({
            triggerElement: '#slideshow-section',
            triggerHook: 0,
            duration: "600%"
            // duration: "1"
        })
            .setPin('#slideshow-section')
            .setTween(slideshowTimeline)
            // .addIndicators()
            .addTo(slideshowSceneController);
    }

    // 991 is my mobile breakpoint
    if (width > 991 && height > 599) {
        initScrollMagic();
    }

    $(window).resize(function () {
        width = $(window).outerWidth();
        height = $(window).outerHeight();

        if (width < 992 || height < 600) {
            //you can just use 'controller' here as it will return true or false, you dont need all the conditionals
            if (developmentSceneController && slideshowSceneController && smmSceneController && importSceneController && companiesSceneController) {
                developmentSceneController = developmentSceneController.destroy(true);
                slideshowSceneController = slideshowSceneController.destroy(true);
                smmSceneController = smmSceneController.destroy(true);
                importSceneController = importSceneController.destroy(true);
                companiesSceneController = companiesSceneController.destroy(true);
            }
        } else if (width > 991 && height > 599) {
            //same here
            if (!developmentSceneController && !slideshowSceneController && !smmSceneController && !importSceneController && !companiesSceneController) {
                initScrollMagic();
            }
        }
    });


    //0---------------------------=======================================================
    // cloudsxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // Slideshow------------------------------------------------------------------------------------
    // let imgArr = document.querySelectorAll('.slider__item');
    // let imgItems = document.querySelectorAll('.slider__items')[0];
    // // imgArr.forEach(function(item, index) {
    // //     imgItems.style.left = 90 * imgArr.length + '%';
    // // });
    //
    // let slideshowSceneController = new ScrollMagic.Controller();
    // let slideshowTimeline = new TimelineMax();
    //
    // slideshowTimeline
    //     // .set({}, {}, 0.1)
    //     .to('.slider__items', 1, {
    //         x: ( (imgArr.length - 1) *  -103.5) + '%',
    //         // ease: Power1.easeInOut
    //         ease: Power0.easeNone
    //     });
    // .set({}, {}, '+=0.1');
    // slideshowTimeline
    //     .to('#slider', 1, {
    //         left: ( (imgArr.length - 1 ) * - 80) + '%',
    //         ease: Power0.easeNone
    //     })
    // .to('#slider-bg', 1, {
    //     left: '-30%',
    //     ease: Power0.easeNone
    // }, '-=1');

    // new ScrollMagic.Scene({
    //     triggerElement: '.slideshow-section',
    //     triggerHook: 0,
    //     duration: "600%"
    //     // duration: "1"
    // })
    //     .setPin('#slideshow-section')
    //     .setTween(slideshowTimeline)
    // // .addIndicators()
    //     .addTo(slideshowSceneController);
    // Slideshowxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // Text sliding scene-------------------------------------------------------------------------------
    // let textSlidingSceneController = new ScrollMagic.Controller();
    // let textSlidingTween = new TimelineMax();
    //
    // textSlidingTween
    //     .to('.smm-block__sliding-text', 0.5, {
    //         top: -420,
    //         ease: Power0.easeNone
    //     })
    //     .to('.smm-block__text', 0.5, {
    //         // opacity: 0,
    //         ease: Power0.easeNone
    //     }, '-=0.5');

    // new ScrollMagic.Scene({
    //     triggerElement: '#smm-section',
    //     // triggerHook: 'onLeave',
    //     triggerHook: 0,
    //     duration: "125%",
    //     // offset: '500px'
    //     // duration: "1"
    // })
    //     .setTween(textSlidingTween)
    //     .setPin('#smm-section')
    //     // .addIndicators()
    //     .addTo(textSlidingSceneController);
    // });
    // Text sliding scenexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // import-export scene--------------------------------------------------------------------------
    // let importSceneController = new ScrollMagic.Controller();
    // let figuresMovingTween = new TimelineMax();
    //
    // figuresMovingTween
    //     .to('.import-block__calendar', 2, {
    //         y: '-200px',
    //         ease: Power0.easeNone
    //     })
    //     .to('.import-block__truck', 2, {
    //         x: '470px',
    //         // top: -600,
    //         ease: Power0.easeNone
    //     }, '-=2')
    //     .to('.import-block__timer', 2, {
    //         y: '270px',
    //         ease: Power0.easeNone
    //     }, '-=2')
    //     .to('.import-block__baggage', 2, {
    //         x: '-300px',
    //         ease: Power0.easeNone
    //     }, '-=2')
    //     .to('.import-block__phone', 2, {
    //         scale: 0,
    //         opacity: 0,
    //         ease: Power0.easeNone
    //     }, '-=2')
    //     .from('.import-block__text', 2, {
    //         y: '330%',
    //         // opacity: 1,
    //         ease: Power0.easeNone
    //     }, '-=2')
    //     .from('.import-block__truck-reverse', 2, {
    //         x: '270%',
    //         // opacity: 1,
    //         ease: Power0.easeNone
    //     });

    // new ScrollMagic.Scene({
    //     triggerElement: '.import-section',
    //     // triggerHook: 'onEnter',
    //     triggerHook: 0,
    //     duration: '200%',
    //     // offset: '500px'
    //     // duration: "1"
    // })
    //     .setTween(figuresMovingTween)
    //     .setPin('#import-section')
    //     // .addIndicators()
    //     .addTo(importSceneController);
    // import scenexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // companies scene----------------------------------------------------------------------------------------
    // let companiesSceneController = new ScrollMagic.Controller();
    // let companiesMovingTween = new TimelineMax();
    //
    // companiesMovingTween
    //     .from('.companies-block__logo--1', 1, {
    //         y: '-200px',
    //         ease: Power4.Bounce
    //     })
    //     .from('.companies-block__logo--3', 1, {
    //         y: '-200px',
    //         ease: Power4.Bounce
    //     }, '-=1')
    //     .from('.companies-block__logo--6', 1, {
    //         x: '-400px',
    //         ease: Power4.Bounce
    //     }, '-=1')
    //     .from('.companies-block__logo--8', 1, {
    //         x: '400px',
    //         ease: Power4.Bounce
    //     }, '-=1')
    //     .from('.companies-block__logo--9', 1, {
    //         x: '-400px',
    //         ease: Power4.Bounce
    //     }, '-=1')
    //     .from('.companies-block__logo--11', 1, {
    //         x: '400px',
    //         ease: Power4.Bounce
    //     }, '-=1')
    //     .from('.companies-block__logo--14', 1, {
    //         y: '200px',
    //         ease: Power4.Bounce
    //     }, '-=1')
    //     .from('.companies-block__logo--16', 1, {
    //         y: '200px',
    //         ease: Power4.Bounce
    //     }, '-=1')
    //
    //     .from('.companies-block__logo--2', 1, {
    //         y: '-200px',
    //         ease: Power4.Bounce
    //     }, '-=2')
    //     .from('.companies-block__logo--4', 1, {
    //         y: '-200px',
    //         ease: Power4.Bounce
    //     }, '-=2')
    //     .from('.companies-block__logo--5', 1, {
    //         x: '-400px',
    //         ease: Power4.Bounce
    //     }, '-=2')
    //     .from('.companies-block__logo--7', 1, {
    //         x: '400px',
    //         ease: Power4.Bounce
    //     }, '-=2')
    //     .from('.companies-block__logo--10', 1, {
    //         x: '-400px',
    //         ease: Power4.Bounce
    //     }, '-=2')
    //     .from('.companies-block__logo--12', 1, {
    //         x: '400px',
    //         ease: Power4.Bounce
    //     }, '-=2')
    //     .from('.companies-block__logo--13', 1, {
    //         y: '200px',
    //         ease: Power4.Bounce
    //     }, '-=2')
    //     .from('.companies-block__logo--15', 1, {
    //         y: '200px',
    //         ease: Power4.Bounce
    //     }, '-=2')
    //     .from('.companies-block__logo-image', 1, {
    //         opacity: 0
    //     });

    // new ScrollMagic.Scene({
    //     triggerElement: '.companies-section',
    //     // triggerHook: 'onEnter',
    //     triggerHook: 0,
    //     duration: '100%',
    //     // offset: '380%'
    //     // duration: "1"
    // })
    //     .setTween(companiesMovingTween)
    //     .setPin('#companies-section')
    //     // .addIndicators()
    //     .addTo(companiesSceneController);
    // companies scenexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // envelope-------------------------------------------------------------------------------------------
    let mailSceneController = new ScrollMagic.Controller();
    let mailMovingTween = new TimelineMax();

    mailMovingTween
        .to('.mail__paper', 1, {
            y: '-300px',
            ease: Power4.Bounce
        });

    new ScrollMagic.Scene({
        triggerElement: '#mail',
        // triggerHook: 'onEnter',
        triggerHook: 0.5,
        duration: '0%',
        // offset: '500px'
        // duration: "1"
    })
        // .setPin('#logos-block')
        .setTween(mailMovingTween)
        // .addIndicators()
        .addTo(mailSceneController);
    // envelopexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

});
