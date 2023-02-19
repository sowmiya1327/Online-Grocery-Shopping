let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');
let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


const swiper1 = new Swiper(".slider-1", {
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  grabCursor: true,
  effect: "fade",
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password_value = document.querySelector("#password").value;
const error_message = document.querySelector(".error");
const submit_form = document.querySelector(".login-form");

submit_form.addEventListener("submit", (e) => {
  e.preventDefault();

  error_message.style.color = "red";

  if (!username.value && !password.value)
    return (error_message.innerHTML =
      "Both fields are empty. Data required to perform login!");

  if (!username.value)
    return (error_message.innerHTML = "Username can't be empty");

  if (!password.value)
    return (error_message.innerHTML = "Password can't be empty");

  error_message.innerHTML = "You're logged in.";
  window.location.href="index.html";

  submit_form.style.border = "2px solid #4caf50";

  error_message.style.color = "#4caf50";
});


