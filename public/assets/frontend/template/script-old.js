document.addEventListener('DOMContentLoaded', () => {

    let controller = new ScrollMagic.Controller();
    let timeline = new TimelineMax();
    // TweenMax.defaultEase = Linear.easeNone;

    let leftTop = document.getElementById('leftTop');
    let leftBottom = document.getElementById('leftBottom');
    let right = document.getElementById('right');

    timeline
        .from(leftTop, 1, {
            x: -300,
            opacity: 0
            // ease: "back"
        },)
        .from(right, 1, {
            x: 200,
            opacity: 0
            // ease: "back"
        }, '-=0.5')
        .from(leftBottom, 1, {
            x: -300,
            opacity: 0
            // ease: "back"
        },'-=1');

        // Scene-------------------------------------------
        let scene = new ScrollMagic.Scene({
            triggerElement: '.software-development-section',
            duration: '50%',
            // duration: 200,
            // reverse: true,
            // triggerHook: 0.50,
            offset: -100
        })
            .setTween(timeline)
            // .setPin('.software-development-block')
            .addTo(controller);
        
            
});