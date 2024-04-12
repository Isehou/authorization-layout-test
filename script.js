let passwordInput = document.getElementById("passwordInput");
let passwordEyeHidden = document.querySelector(".password-eye-btn img");

function toggleHiddenPassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordEyeHidden.src = " ./assets/eye-hide.svg";
  } else {
    passwordInput.type = "password";
    passwordEyeHidden.src = "./assets/eye.svg";
  }
}
