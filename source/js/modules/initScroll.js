const initScroll = () => {
    if (window.innerWidth >= 1024) {
        const gradeSection = document.querySelector('.grade');
        const items = document.querySelectorAll('.grade__item');
        let activeIndex = 0;
        let isFixed = false; // Флаг для отслеживания состояния фиксированного класса

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gradeSection.classList.add('fixed');
                    document.body.style.overflow = 'hidden';
                    isFixed = true;
                } else {
                    gradeSection.classList.remove('fixed');
                    document.body.style.overflow = 'auto';
                    isFixed = false;
                }
            });
        }, observerOptions);

        observer.observe(gradeSection);

        items[activeIndex].classList.add('active');

        const updateItems = (newIndex) => {
            items.forEach((item, index) => {
                if (index === newIndex) {
                    item.classList.add('active');
                    item.classList.remove('enter-from-left', 'enter-from-right');
                } else {
                    item.classList.remove('active');
                    if (index < newIndex) {
                        item.classList.add('enter-from-left');
                    } else {
                        item.classList.add('enter-from-right');
                    }
                }
            });
        };

        const handleScroll = (event) => {
            if (!isFixed) return;

            if (event.deltaY > 0) {
                // Скролл вниз
                if (activeIndex < items.length - 1) {
                    event.preventDefault(); // Предотвратить стандартное поведение
                    activeIndex++;
                    updateItems(activeIndex);
                } else if (activeIndex === items.length - 1) {
                    event.preventDefault(); // Предотвратить стандартное поведение
                    // Удалить фиксированный класс и позволить прокрутку вниз
                    gradeSection.classList.remove('fixed');
                    isFixed = false;
                    document.body.style.overflow = 'auto';
                    window.scrollBy(0, event.deltaY);
                }
            } else {
                // Скролл вверх
                if (activeIndex > 0) {
                    event.preventDefault(); // Предотвратить стандартное поведение
                    activeIndex--;
                    updateItems(activeIndex);
                } else if (activeIndex === 0) {
                    event.preventDefault(); // Предотвратить стандартное поведение
                    // Удалить фиксированный класс и позволить прокрутку вверх
                    gradeSection.classList.remove('fixed');
                    isFixed = false;
                    document.body.style.overflow = 'auto';
                    window.scrollBy(0, event.deltaY);
                }
            }
        };

        const handleKeydown = (event) => {
            if (!isFixed) return;

            if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                if (activeIndex < items.length - 1) {
                    activeIndex++;
                    updateItems(activeIndex);
                } else if (activeIndex === items.length - 1) {
                    // Удалить фиксированный класс и позволить прокрутку вниз
                    gradeSection.classList.remove('fixed');
                    isFixed = false;
                    document.body.style.overflow = 'auto';
                    window.scrollBy(0, 10); // Корректируйте значение по необходимости
                }
            } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                if (activeIndex > 0) {
                    activeIndex--;
                    updateItems(activeIndex);
                } else if (activeIndex === 0) {
                    // Удалить фиксированный класс и позволить прокрутку вверх
                    gradeSection.classList.remove('fixed');
                    isFixed = false;
                    document.body.style.overflow = 'auto';
                    window.scrollBy(0, -10); // Корректируйте значение по необходимости
                }
            }
        };

        document.addEventListener('keydown', handleKeydown);
        gradeSection.addEventListener('wheel', handleScroll, { passive: false });
    }
}

export { initScroll };