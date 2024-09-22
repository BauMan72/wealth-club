// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll-triggered Fade-in Animation for Timeline (working both directions)
window.addEventListener('scroll', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const elementPosition = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        // Add 'visible' class when the element is in the viewport
        if (elementPosition < windowHeight - 100 && elementPosition > 0) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible'); // Remove 'visible' when out of view
        }
    });
});

// Testimonials Navigation
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-content');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

leftArrow.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === 0) ? testimonials.length - 1 : currentTestimonial - 1;
    showTestimonial(currentTestimonial);
});

rightArrow.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial === testimonials.length - 1) ? 0 : currentTestimonial + 1;
    showTestimonial(currentTestimonial);
});

// Buborék animáció
window.addEventListener('load', function () {
    const bubbleBackground = document.querySelector('.bubble-background');
    const bubbleCount = 10;

    for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        bubbleBackground.appendChild(bubble);
    }
});
