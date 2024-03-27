
// toggle to change section
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    menuToggle.addEventListener('click', function () {
        mobileNav.classList.toggle('active');
    });

    // Close mobile navigation when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!mobileNav.contains(event.target) && event.target !== menuToggle) {
            mobileNav.classList.remove('active');
        }
    });
});

   

// service slider change color and move toggle ball at transition
var isSection1Visible = true;

function toggleSections() {
    const slider = document.querySelector('.slider');
    const ball = document.querySelector('.ball');
    const section1 = document.getElementById('section1');
    const section2 = document.getElementById('section2');

    isSection1Visible = !isSection1Visible;

    if (isSection1Visible) {
        section1.classList.add('visible');
        section2.classList.remove('visible');
        ball.style.transform = 'translateX(0)';
        slider.style.backgroundColor = '#ccc';
        ball.style.backgroundColor = '#fff';
    } else {
        section1.classList.remove('visible');
        section2.classList.add('visible');
        ball.style.transform = 'translateX(30px)';
        slider.style.backgroundColor = '#555';
        ball.style.backgroundColor = '#ccc';
    }
}


// lottie file set up
document.addEventListener('DOMContentLoaded', function () {
    // Specify the path to your Lottie JSON file
    const animationPath = '/assets/animationgear.json';

    // Load and play the animation
    const animationContainer = document.getElementById('lottie-container');
    const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg', // or 'canvas'
        loop: true,
        autoplay: true,
        path: animationPath,
    });
});

// drop down and arrow rotates transition
document.addEventListener('DOMContentLoaded', function () {
    const gridItems = document.querySelectorAll('.faq-grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', function () {
            // Toggle the 'active' class to show/hide the dropdown
            this.classList.toggle('active');
        });
    });
});



