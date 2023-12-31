const ourGoat = document.querySelector('.our-goat');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const icon = document.querySelector('i');
const headline = document.querySelector('.headline');

const t1 = new TimelineMax();

t1.fromTo(ourGoat, 1, { height: '0%' }, { height: '80%', ease: Power2.easeInOut })
    .fromTo(ourGoat, 1.2, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
    .fromTo(slider, 1.2, {x: "-100%"}, {x: '0%', ease: Power2.easeInOut}, '-=1.2')
    .fromTo(logo, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, "-=0.5")
    .fromTo(icon, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')
    .fromTo(headline, 0.5, {opacity: 0, x: 30}, {opacity: 1, x: 0}, '-=0.5')