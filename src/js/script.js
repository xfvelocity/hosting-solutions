const navBar = document.querySelector('.navBar')
const mainNav = document.getElementById("myNav");
const body = document.getElementById("main");
const openButton = document.getElementById('button');
const notice = document.querySelector('.notice');

const openNav = () => {
  mainNav.style.width = "220px";
  openButton.style.marginRight = "220px";
  body.style.marginRight = "220px";
}

const closeNav = () => {
  mainNav.style.width = "0";
  openButton.style.marginRight = "0";
  body.style.marginRight= "0";
}

openButton.addEventListener('click', (e) => {
	if (mainNav.style.width === '220px') {
		closeNav();
	} else {
		openNav();
	}
});

window.addEventListener('scroll', ()=> {
    if (window.pageYOffset > 400){
        navBar.classList.add('stickyNav');
        notice.style.position = 'fixed';
    } else {
       	navBar.classList.remove('stickyNav');
       	notice.style.position = '';
    }
});

body.addEventListener('click', () => {
	if (mainNav.style.width === '220px') {
		closeNav();
	}
});







