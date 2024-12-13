document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.product');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    boxes.forEach(product => {
        observer.observe(product);
    });
});




document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.inner_do');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    boxes.forEach(inner_do => {
        observer.observe(inner_do);
    });
});



document.addEventListener('DOMContentLoaded', () => {

    const animatedBox = document.getElementById('year_box');

    toggleButton.addEventListener('click', () => {
        animatedBox.classList.toggle('visible');
    });
});

