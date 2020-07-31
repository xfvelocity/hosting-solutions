const navButton = document.querySelector('.navbutton');
const navLinks = document.querySelector('.nav-links')
let navPressed;

navButton.addEventListener('click', () => {
    navPressed = !navPressed;
    navLinks.classList.remove('nav-links-open');

    if(navPressed) {
        navLinks.classList.toggle('nav-links-open');
    } 
})

let t = 0;
const headerText = document.querySelector('.header-animate');
let programRan = false;

const typeWriter = type => {
  if (t < type.length) {
    headerText.innerHTML += type.charAt(t);
    t++;
    setTimeout(typeWriter, 80, type);
  }
};

typeWriter('simple');

const faqArr = [
  {
    question: [ 'What is web hosting?'],
    answer: ['Boop']
  }
]

const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', e => {
    console.log(e.target.parentNode);
  })
})

// const children = document.querySelectorAll('section');
// let options = {
//   threshold: 0.5
// };
// const services = document.querySelector('.services');

// let observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting) {
//       if(entry.target.classList.contains('serviceContainer')) {
//         console.log('boop');
//         services.style.display = 'flex';
//       }
//     }
//   })
// }, options)

// children.forEach(child => {
//   observer.observe(child)
// })








// const dropdownButton = document.querySelector('.features');
// const dropdown = document.querySelector('.dropdown');
// let dropPressed;

// dropdownButton.addEventListener('click', () => {
//     dropPressed = !dropPressed;
//     dropdown.classList.remove('drop-pressed');

//     if(dropPressed) {
//         dropdown.classList.toggle('drop-pressed');
//     } 
// })