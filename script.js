document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector('.scroll-arrow');
    if (arrow) {
        setTimeout(() => {
            arrow.classList.add('visible');
        }, 1000);
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                arrow.style.opacity = '0';
            } else {
                arrow.style.opacity = '1';
            }
        });
    }
    constobserver = new IntersectionObserver((entries) => {entries.forEach((entry) => {if (entry.isIntersecting){
        entry.target.classList.add('show');
    }});
}, { threshold:0.2
    });

    video.play().catch(error => {
        console.log("Autoplay video dicegah oleh browser. Interaksi pengguna diperlukan.", error);
    });

});
    const video = document.querySelector('.hero-video');
    if (video) {
        video.play().catch(error => {
            console.log("Autoplay video dicegah oleh browser. Diperlukan interaksi pengguna.", error);
        });
    };