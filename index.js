/*ways of call html element 
document.querySelector(".head") //by class name in general
document.getElementsByClassName("head") //by class name
document.getElementById("headh") //by ID 
document.querySelector("#headh") //by ID in general
*/

var input = document.querySelector("#password");
var eyeIcon = document.getElementById("eyeSlash");
function togglePassword() {
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
  else{
    input.type = "password"
    eyeIcon.classList.remove("fa-eye")
    eyeIcon.classList.add("fa-eye-slash")
  }
}
