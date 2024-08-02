const initAnimation = () => {
    // Анимация для intro
    const title = document.querySelector('.intro__title');
    const text = document.querySelector('.intro__text');


    function showElement(element) {
        element.classList.remove('hidden');
        element.classList.add('show');
    }


    document.addEventListener('DOMContentLoaded', () => {

        setTimeout(() => showElement(title), 400);


        setTimeout(() => showElement(text), 1100);
    });

    // Анимация для offer
    const offerList = document.querySelector('.offer__list');
    const offerItems = offerList.querySelectorAll('li');

    const showOfferItem = (item, delay) => {
        setTimeout(() => {
            item.classList.remove('hidden');
            item.classList.add('show');
        }, delay);
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            offerItems.forEach((item, index) => {
                showOfferItem(item, (offerItems.length - index) * 400);
            });
        }
    }, { threshold: 0, rootMargin: '0px 0px 0px 0px' });

    observer.observe(offerList);

    // Анимация для plus
    const plusInfoBlocks = document.querySelectorAll('.plus__info');

    const showPlusInfo = (block, delay) => {
        setTimeout(() => {
            block.classList.remove('hidden');
            block.classList.add('show');
        }, delay);
    };

    const observerPlus = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            plusInfoBlocks.forEach((block, index) => {
                showPlusInfo(block, index * 400);
            });
        }
    }, { threshold: 0.5 });

    observerPlus.observe(document.querySelector('.plus__slider'));


    // Анимация для линии заголовка в grade
    const gradeInfoTitles = document.querySelectorAll('.grade__info-title');

    // Настройка наблюдателя для каждого заголовка
    const observerGrade = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Поиск элемента внутри текущего заголовка
                const gradeInfoTitleLine = entry.target.querySelector('.grade__info-title-line');
                if (gradeInfoTitleLine) {
                    setTimeout(() => {
                        gradeInfoTitleLine.classList.add('active');
                    }, 500);
                }
            }
        });
    }, { threshold: 1 });

    // Начало наблюдения для каждого заголовка
    gradeInfoTitles.forEach(title => {
        observerGrade.observe(title);
    });

    // Анимация для how
    const items = document.querySelectorAll('.how__item');
    const section = document.querySelector('section.how');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
    };

    const observerHow = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                items.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 700);
                });
                observerHow.unobserve(entry.target);
            }
        });
    }, options);

    observerHow.observe(section);

    // Анимация для ways
    const waysItems = document.querySelectorAll('.ways__item');
    const waysSection = document.querySelector('section.ways');

    const optionsWays = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.6
    };

    const observerWays = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                waysItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 500);
                });
                observer.unobserve(entry.target);
            }
        });
    }, optionsWays);

    observerWays.observe(waysSection);

    // Анимация для server
    const serverItems = document.querySelectorAll('.server__item');
    const serverSection = document.querySelector('section.server');

    const optionsServer = {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.55
    };

    const observerServer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                serverItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, index * 500);
                });
                observer.unobserve(entry.target);
            }
        });
    }, optionsServer);

    observerServer.observe(serverSection);

}

initAnimation();
export { initAnimation };