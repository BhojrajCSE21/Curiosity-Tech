// Existing count-up script
document.addEventListener('DOMContentLoaded', function() {
    function countUp(element, start, end, duration) {
        let startTime = null;

        function step(timestamp) {
            if (!startTime) startTime = timestamp;
            let progress = Math.min((timestamp - startTime) / duration, 1);
            element.innerText = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        }

        window.requestAnimationFrame(step);
    }

    countUp(document.getElementById('projects-count'), 0, 452, 2000);
    countUp(document.getElementById('clients-count'), 0, 469, 2000);
    countUp(document.getElementById('experts-count'), 0, 400, 2000);
});