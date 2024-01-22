document.addEventListener("DOMContentLoaded", function () {

    const events = document.querySelectorAll('.event');

    events.forEach((event, index) => {
        const delay = index * 350; 
        setTimeout(() => {
            event.classList.add('show');
        }, delay);
    });
});
