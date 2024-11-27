document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imageContainer');
    
    if (imageContainer) {
        imageContainer.addEventListener('mouseenter', function() {
            imageContainer.style.transform = 'translateX(-100px) scale(1.05)';
        });

        imageContainer.addEventListener('mouseleave', function() {
            imageContainer.style.transform = 'translateX(0px) scale(1)';
        });
    }

    // JavaScript for navbar toggle visibility on resize
    function toggleNavbarVisibility() {
        const navbarPC = document.getElementById('pc-nav');
        const navbarMobile = document.getElementById('navbarmobilescript');
        if (window.innerWidth > 790) {
            navbarPC.style.display = 'block';
            navbarMobile.style.display = 'none';
        } else {
            navbarPC.style.display = 'none';
            navbarMobile.style.display = 'block';
        }
    }

    window.addEventListener('load', toggleNavbarVisibility);
    window.addEventListener('resize', toggleNavbarVisibility);

    // Toggle mobile menu visibility
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('active');
    });
});
