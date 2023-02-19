const form = document.querySelector("form"),
   emailField = document.querySelector(".email-field"),
   emailInput = emailField.querySelector(".email"),
   passField = form.querySelector(".create-password"),
   passInput = passField.querySelector(".password"),
   cPassField = form.querySelector(".confirm-password"),
   cPassInput = form.querySelector(".cPassword");

// Email validation

function checkEmail () {
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!emailInput.value.match(emailPattern)) {
   return emailField.classList.add("invalid"); 
}
emailField.classList.remove("invalid");
}

// Hide and show password
const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach(eyeIcon => {
   eyeIcon.addEventListener("click", () => {
      const pInput = eyeIcon.parentElement.querySelector("input");
      if(pInput.type === "password") {
         eyeIcon.classList.replace("bx-hide", "bx-show");
         return(pInput.type = "text");
      }
      eyeIcon.classList.replace("bx-show", "bx-hide");
         pInput.type = "password";      
   });
});

// Calling function on form submit
function createPass() {
   const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

   if(!passInput.value.match(passPattern)){
      return passField.classList.add("invalid");
   }
   passField.classList.remove("invalid");
}

// Confirm password validatio
function confirmPass(){
   if(passInput.value !== cPassInput.value || cPassInput.value === '') {
      cPassField,classList.add("invalid");     
   }
   cPassField,classList.remove("invalid");  
}

// calling function on form submit
form.addEventListener("submir", (e) => {
   e.preventDefault(); //preventing form submitting
   checkEmail();
   createPass();
   confirmPass();

   // calling function on keyup
   emailInput.addEventListener("keyup", checkEmail);
   passInput.addEventListener("keyup", createPass);
   cPassInput.addEventListener("keyup", confirmPass);

   if(
      !emailField.classList.contains("invalid") &&
      !passField.classList.contains("invalid") &&
      !cPassField.classList.contains("invalid")
      ) {
         location.href = form.getAttribute("action");
      }
});