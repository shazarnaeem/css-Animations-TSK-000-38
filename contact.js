
    document.addEventListener('DOMContentLoaded', function() {
        const content = document.querySelector('.content');
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                content.classList.add('visible');
            } else {
                content.classList.remove('visible');
            }
        });
    });

