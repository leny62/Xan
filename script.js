
// author : tresor

const toggleButton = document.getElementsByClassName('navbar-toggler')[0]
const navbarNav = document.getElementsByClassName('navbar-nav')[0];
const navItem1=document.getElementsByClassName('nav-item')[0];
const navItem2=document.getElementsByClassName('nav-item')[1];
const navItem3=document.getElementsByClassName('nav-item')[2];
const navItem4=document.getElementsByClassName('nav-item')[3];
const navItem5=document.getElementsByClassName('nav-item')[4];
const navItem6=document.getElementsByClassName('nav-item')[5];
// for toggle button 
toggleButton.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
    navItem1.classList.toggle("active")
    navItem2.classList.toggle("active")
    navItem3.classList.toggle("active")
    navItem4.classList.toggle("active")
    navItem5.classList.toggle("active")
    navItem6.classList.toggle("active")
})
// author : tresor


// for Sliders 

const buttons = document.querySelectorAll("[data-carousel-button]")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

// author :tresor
//show/hide nav links

const showNavBarbutton=document.getElementsByClassName("navbar-toggler")[0]
console.log(showNavBarbutton);

//show/hide nav links

// author :tresor



