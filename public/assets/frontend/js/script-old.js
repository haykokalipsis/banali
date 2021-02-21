document.addEventListener('DOMContentLoaded', () => {

    const minAllowedWidth = 768;
    const minAllowedHeight = 700;

    // clouds-------------------------------------------------------------------------------------
    // let cloudsSceneController = new ScrollMagic.Controller();
    // let cloudsTimeline = new TimelineMax();
    // // TweenMax.defaultEase = Linear.easeNone;
    //
    // let leftTop = document.getElementById('leftTop');
    // let leftBottom = document.getElementById('leftBottom');
    // let right = document.getElementById('right');
    // let leftPart = document.getElementById('leftPart');
    // let rightPart = document.getElementById('rightPart');
    // let textBlock = document.getElementById('textBlock');
    //
    // // Scene-------------------------------------------
    // let cloudScene1 = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(leftTop, 'development-block__cloud--left-top-moved')
    //     // .setClassToggle('.development-section', 'bgc')
    //     // .setClassToggle(leftBottom, 'development-block__cloud--left-bottom-moved')
    //     // .setClassToggle(right, 'development-block__cloud--right-moved')
    //     // .on('enter', function() {
    //     //     leftTop.classList.add('development-block__cloud--left-top-moved');
    //     //     leftBottom.classList.add('development-block__cloud--left-bottom-moved');
    //     //     right.classList.add('development-block__cloud--right-moved');
    //     // })
    //     // .on('end', function() {
    //     //     leftTop.classList.remove('development-block__cloud--left-top-moved');
    //     //     leftBottom.classList.remove('development-block__cloud--left-bottom-moved');
    //     //     right.classList.remove('development-block__cloud--right-moved');
    //     // })
    //     // .setTween(setMultipleClasses)``
    //     .addTo(cloudsSceneController);
    //
    // let cloudScene2 = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(leftBottom, 'development-block__cloud--left-bottom-moved')
    //     .addTo(cloudsSceneController);
    //
    // let cloudScene3 = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(right, 'development-block__cloud--right-moved')
    //     .addTo(cloudsSceneController);
    //
    // let leftPartScene = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(leftPart, 'development-block__background--left--moved')
    //     .addTo(cloudsSceneController);
    //
    // let rightPartScene = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(rightPart, 'development-block__background--right--moved')
    //     .addTo(cloudsSceneController);
    //
    // let textMoveScene = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(textBlock, 'development-block__text-block--moved')
    //     .addTo(cloudsSceneController);
    // cloudsxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

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

    // Scene-------------------------------------------
    // let cloudScene1 = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(leftTop, 'development-block__cloud--left-top-moved')
        // .setClassToggle('.development-section', 'bgc')
        // .setClassToggle(leftBottom, 'development-block__cloud--left-bottom-moved')
        // .setClassToggle(right, 'development-block__cloud--right-moved')
        // .on('enter', function() {
        //     leftTop.classList.add('development-block__cloud--left-top-moved');
        //     leftBottom.classList.add('development-block__cloud--left-bottom-moved');
        //     right.classList.add('development-block__cloud--right-moved');
        // })
        // .on('end', function() {
        //     leftTop.classList.remove('development-block__cloud--left-top-moved');
        //     leftBottom.classList.remove('development-block__cloud--left-bottom-moved');
        //     right.classList.remove('development-block__cloud--right-moved');
        // })
        // .setTween(setMultipleClasses)``
        // .addTo(cloudsSceneController);

    // let cloudScene2 = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(leftBottom, 'development-block__cloud--left-bottom-moved')
    //     .addTo(cloudsSceneController);
    //
    // let cloudScene3 = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(right, 'development-block__cloud--right-moved')
    //     .addTo(cloudsSceneController);
    //
    // let leftPartScene = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(leftPart, 'development-block__background--left--moved')
    //     .addTo(cloudsSceneController);
    //
    // let rightPartScene = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(rightPart, 'development-block__background--right--moved')
    //     .addTo(cloudsSceneController);
    //
    // let textMoveScene = new ScrollMagic.Scene({
    //     triggerElement: ".development-block__background",
    // })
    //     .setClassToggle(textBlock, 'development-block__text-block--moved')
    //     .addTo(cloudsSceneController);

































    // let developmentSceneController = new ScrollMagic.Controller();
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

        // .from('.development-block__text-block', 2, {
        //     y: '130%',
        //     ease: Power0.easeNone
        // }, '-=2')
        .to('.development-block__text-block', 2, {
            y: '-100%',
            ease: Power0.easeNone
        }, '-=2');
        // .to('.import-block__baggage', 2, {
        //     x: '-300px',
        //     ease: Power0.easeNone
        // }, '-=2')
        // .to('.import-block__phone', 2, {
        //     scale: 0,
        //     opacity: 0,
        //     ease: Power0.easeNone
        // }, '-=2')
        // .from('.import-block__text', 2, {
        //     y: '330%',
        //     // opacity: 1,
        //     ease: Power0.easeNone
        // }, '-=2')
        // .from('.import-block__truck-reverse', 2, {
        //     x: '270%',
        //     // opacity: 1,
        //     ease: Power0.easeNone
        // });

    // Создаём сцену
    // let developmentScene = new ScrollMagic.Scene({
    //     triggerElement: '#development-section',
    //     triggerHook: 0,
    //     duration: '350%', // Дистанция скролла
    // })
    //     .setTween(cloudsMovingTween) // Анимация
    //     .setPin('#development-section') // Закрепление
    //     .addTo(developmentSceneController);

    //---------------+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    let developmentSceneController = null;
    let width = $(window).outerWidth();
    let height = $(window).outerHeight();

    function initScrollMagic() {
        // $('body').scrollTop( 0 ); Скролл на топ
        developmentSceneController = new ScrollMagic.Controller();

        new ScrollMagic.Scene({
            triggerElement: '#development-section',
            duration: '350%',
            triggerHook: 0
        })
            .setTween(cloudsMovingTween)
            .setPin("#development-section") // pins the element for the the scene's duration
            .addTo(developmentSceneController); // assign the scene to the controller
    }

    // 991 is my mobile breakpoint
    if( width > 991 && height > 699) {
        initScrollMagic();
    }

    $(window).resize(function(){
        width = $(window).outerWidth();
        height = $(window).outerHeight();

        if( width < 992 || height < 700 ) {
            //you can just use 'controller' here as it will return true or false, you dont need all the conditionals
            if (developmentSceneController) {
                developmentSceneController = developmentSceneController.destroy(true)
            }
        } else if ( width > 991 && height > 699) {
            //same here
            if ( ! developmentSceneController ) {
                initScrollMagic()
            }
        }
    });







































    //0---------------------------=======================================================
    // cloudsxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // Slideshow------------------------------------------------------------------------------------
    let imgArr = document.querySelectorAll('.slider__item');
    let imgItems = document.querySelectorAll('.slider__items')[0];
    // imgArr.forEach(function(item, index) {
    //     imgItems.style.left = 90 * imgArr.length + '%';
    // });

    let slideshowSceneController = new ScrollMagic.Controller();
    let slideshowTimeline = new TimelineMax();

    slideshowTimeline
        // .set({}, {}, 0.1)
        .to('.slider__items', 1, {
            x: ( (imgArr.length - 1) *  -103.5) + '%',
            // ease: Power1.easeInOut
            ease: Power0.easeNone
        });
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

    new ScrollMagic.Scene({
        triggerElement: '.slideshow-section',
        triggerHook: 0,
        duration: "600%"
        // duration: "1"
    })
        .setPin('#slideshow-section')
        .setTween(slideshowTimeline)
    // .addIndicators()
        .addTo(slideshowSceneController);
    // Slideshowxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // Text sliding scene-------------------------------------------------------------------------------
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

    new ScrollMagic.Scene({
        triggerElement: '.smm-section',
        // triggerHook: 'onLeave',
        triggerHook: 0,
        duration: "125%",
        // offset: '500px'
        // duration: "1"
    })
        .setTween(textSlidingTween)
        .setPin('#smm-section')
        // .addIndicators()
        .addTo(textSlidingSceneController);
    });
    // Text sliding scenexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // import-export scene--------------------------------------------------------------------------
    let importSceneController = new ScrollMagic.Controller();
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
    // import scenexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // companies scene----------------------------------------------------------------------------------------
    let companiesSceneController = new ScrollMagic.Controller();
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
    // companies scenexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // envelope-------------------------------------------------------------------------------------------
    // let mailSceneController = new ScrollMagic.Controller();
    // let mailMovingTween = new TimelineMax();
    //
    // mailMovingTween
    //     .to('.mail__paper', 1, {
    //         y: '-300px',
    //         ease: Power4.Bounce
    //     });
    //
    // new ScrollMagic.Scene({
    //     triggerElement: '#mail',
    //     // triggerHook: 'onEnter',
    //     triggerHook: 0.5,
    //     duration: '0%',
    //     // offset: '500px'
    //     // duration: "1"
    // })
    //     // .setPin('#logos-block')
    //     .setTween(mailMovingTween)
    //     // .addIndicators()
    //     .addTo(mailSceneController);
    // envelopexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
