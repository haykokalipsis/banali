document.addEventListener('DOMContentLoaded', () => {

    // clouds-------------------------------------------------------------------------------------
    let cloudsSceneController = new ScrollMagic.Controller();
    let cloudsTimeline = new TimelineMax();
    // TweenMax.defaultEase = Linear.easeNone;

    let leftTop = document.getElementById('leftTop');
    let leftBottom = document.getElementById('leftBottom');
    let right = document.getElementById('right');

    // Scene-------------------------------------------
    let cloudScene1 = new ScrollMagic.Scene({
        triggerElement: ".software-development-block__figures",
    })
        .setClassToggle(leftTop, 'software-development-block__cloud--left-top-moved')
        // .setClassToggle('.software-development-section', 'bgc')
        // .setClassToggle(leftBottom, 'software-development-block__cloud--left-bottom-moved')
        // .setClassToggle(right, 'software-development-block__cloud--right-moved')
        // .on('enter', function() {
        //     leftTop.classList.add('software-development-block__cloud--left-top-moved');
        //     leftBottom.classList.add('software-development-block__cloud--left-bottom-moved');
        //     right.classList.add('software-development-block__cloud--right-moved');
        // })
        // .on('end', function() {
        //     leftTop.classList.remove('software-development-block__cloud--left-top-moved');
        //     leftBottom.classList.remove('software-development-block__cloud--left-bottom-moved');
        //     right.classList.remove('software-development-block__cloud--right-moved');
        // })
        // .setTween(setMultipleClasses)
        .addTo(cloudsSceneController);
    
    let cloudScene2 = new ScrollMagic.Scene({
        triggerElement: ".software-development-block__figures",
    })
        .setClassToggle(leftBottom, 'software-development-block__cloud--left-bottom-moved')
        .addTo(cloudsSceneController);

    let cloudScene3 = new ScrollMagic.Scene({
        triggerElement: ".software-development-block__figures",
    })
        .setClassToggle(right, 'software-development-block__cloud--right-moved')
        .addTo(cloudsSceneController);
    // cloudsxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    
    // Slideshow------------------------------------------------------------------------------------
    let imgArr = document.querySelectorAll('.img');
    imgArr.forEach(function(item, index) {
        item.style.left = 80 * index + '%';
    });

    let slideshowSceneController = new ScrollMagic.Controller();
    let slideshowTimeline = new TimelineMax();

    slideshowTimeline
        .to('#slider', 1, {
            left: ( (imgArr.length - 1.5 ) * -80) + '%', 
            ease: Power0.easeNone
        })
        .to('#slider-bg', 1, {
            left: '-30%', 
            ease: Power0.easeNone
        }, '-=1')

    new ScrollMagic.Scene({
        triggerElement: '#slideshow-block',
        triggerHook: 'onLeave',
        duration: "600%" 
        // duration: "1" 
    })
        // .setPin('#slideshow-block', { pushFollowers: true })    
        .setTween(slideshowTimeline)
        // .addIndicators()
        .addTo(slideshowSceneController);
    // Slideshowxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // Text sliding scene-------------------------------------------------------------------------------
    let textSlidingSceneController = new ScrollMagic.Controller();
    let textSlidingTween = new TimelineMax();

    textSlidingTween
        .to('.content-writing-block__sliding-text', 0.5, {
            top: -420, 
            ease: Power0.easeNone
        })
        .to('.content-writing-block__text', 0.5, {
            // opacity: 0, 
            ease: Power0.easeNone
        }, '-=0.5');

    new ScrollMagic.Scene({
        triggerElement: '#content-writing-block',
        // triggerHook: 'onLeave',
        triggerHook: 0.3,
        duration: "50%",
        // offset: '500px'
        // duration: "1" 
    })
        .setTween(textSlidingTween)
        // .addIndicators()
        .addTo(textSlidingSceneController);
    });
    // Text sliding scenexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // import-export scene--------------------------------------------------------------------------
    let importExportSceneController = new ScrollMagic.Controller();
    let figuresMovingTween = new TimelineMax();

    figuresMovingTween
        .to('.import-export-block__calendar', 1, {
            y: '-200px', 
            ease: Power0.easeNone
        })
        .to('.import-export-block__truck', 1, {
            x: '470px', 
            // top: -600, 
            ease: Power0.easeNone
        }, '-=1')
        .to('.import-export-block__timer', 1, {
            y: '170px', 
            ease: Power0.easeNone
        }, '-=1')
        .to('.import-export-block__baggage', 1, {
            x: '-300px', 
            ease: Power0.easeNone
        }, '-=1')
        .to('.import-export-block__phone', 1, {
            scale: 0,
            opacity: 0, 
            ease: Power0.easeNone
        }, '-=1')
        .to('.import-export-block__text', 1, {
            y: '-140%', 
            // opacity: 1,
            ease: Power0.easeNone
        }, '-=1');

    new ScrollMagic.Scene({
        triggerElement: '#import-export-block',
        // triggerHook: 'onEnter',
        triggerHook: 0.2,
        duration: '13%',
        // offset: '500px'
        // duration: "1" 
    })
        .setTween(figuresMovingTween)
        // .addIndicators()
        .addTo(importExportSceneController);
    // import-export scenexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    // logos scene----------------------------------------------------------------------------------------
    let logosSceneController = new ScrollMagic.Controller();
    let logosMovingTween = new TimelineMax();

    logosMovingTween
        .from('.logos-block__logo--1', 1, {
            y: '-200px', 
            ease: Power4.Bounce
        })
        .from('.logos-block__logo--3', 1, {
            y: '-200px', 
            ease: Power4.Bounce
        }, '-=1')
        .from('.logos-block__logo--6', 1, {
            x: '-400px', 
            ease: Power4.Bounce
        }, '-=1')
        .from('.logos-block__logo--8', 1, {
            x: '200px', 
            ease: Power4.Bounce
        }, '-=1')
        .from('.logos-block__logo--9', 1, {
            y: '200px', 
            ease: Power4.Bounce
        }, '-=1')
        .from('.logos-block__logo--11', 1, {
            y: '200px', 
            ease: Power4.Bounce
        }, '-=1')

        .from('.logos-block__logo--2', 1, {
            y: '-200px', 
            ease: Power4.Bounce
        }, '-=2')
        .from('.logos-block__logo--4', 1, {
            y: '-200px', 
            ease: Power4.Bounce
        }, '-=2')
        .from('.logos-block__logo--5', 1, {
            x: '-200px', 
            ease: Power4.Bounce
        }, '-=2')
        .from('.logos-block__logo--7', 1, {
            x: '400px', 
            ease: Power4.Bounce
        }, '-=2')
        .from('.logos-block__logo--10', 1, {
            y: '200px',  
            ease: Power4.Bounce
        }, '-=2')
        .from('.logos-block__logo--12', 1, {
            y: '200px', 
            ease: Power4.Bounce
        }, '-=2')
        .from('.logos-block__logo-image', 1, {
            opacity: 0
        })
        
    new ScrollMagic.Scene({
        triggerElement: '#logos-block',
        // triggerHook: 'onEnter',
        triggerHook: 0.5,
        duration: '50%',
        // offset: '500px'
        // duration: "1" 
    })
        .setTween(logosMovingTween)
        // .addIndicators()
        .addTo(logosSceneController);
    // logos scenexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
    
    // envelope-------------------------------------------------------------------------------------------
    let mailSceneController = new ScrollMagic.Controller();
    let mailMovingTween = new TimelineMax();

    mailMovingTween
        .to('.mail__paper', 1, {
            y: '-350px', 
            ease: Power4.Bounce
        })
        
    new ScrollMagic.Scene({
        triggerElement: '#mail',
        // triggerHook: 'onEnter',
        triggerHook: 0.2,
        duration: '0%',
        // offset: '500px'
        // duration: "1" 
    })
        // .setPin('#logos-block') 
        .setTween(mailMovingTween)
        // .addIndicators()
        .addTo(mailSceneController);
    // envelopexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx