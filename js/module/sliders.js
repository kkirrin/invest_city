export const initProgrammSlider = () => {
    const generalSlider = document.querySelector('.program-item');

    if (generalSlider) {

        const swiper = new Swiper(generalSlider, {
            slidesPerView: 2,
            spaceBetween: 20,
            speed: 3000,
            navigation: {
                nextEl: '.program-slide-next',
                prevEl: '.program-slide-prev',
            },

            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                460: {
                    slidesPerView: 1,
                },
                460: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                769: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1047: {
                    slidesPerView: 2,
                }
            },
        })
    }
}