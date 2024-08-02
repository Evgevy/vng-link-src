const initButtons = () => {

    const ticker = () => {

        const marqueeBox = document.querySelector('.ticker__marquee-box');
        if (marqueeBox) {
            marqueeBox.innerHTML += marqueeBox.innerHTML;
        }



    }

    ticker();
}


export { initButtons };