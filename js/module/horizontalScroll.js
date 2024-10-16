export const initHorizontalScroll = () => {
    const pinSection = document.querySelector('#all_for_comfort');
    const pinWrapper = document.querySelector('.comfort_wrapper');

    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);



    console.log(pinSection, pinWrapper)

     if (document.querySelector("#all_for_comfort")) {
        const timelineScroll = gsap.timeline({
            scrollTrigger: {
                trigger: "#all_for_comfort",
                start: "top-=-50 top",
                end: () => "+=" + document.querySelector(".comfort-wrapper").scrollWidth + "px",
                pin: true,
                // markers: true,
                scrub: true,
            }
        });

        timelineScroll.to(".comfort-wrapper", {
            x: () => -(document.querySelector(".comfort-wrapper").scrollWidth - document.querySelector(".comfort-wrapper").offsetWidth),
        }, "start");
    }

}


