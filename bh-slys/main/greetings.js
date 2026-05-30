import {NavBar} from "../components/shares/navbar.js";
import Footer from "../components/shares/footer.js";
import LoginForm from "../components/greetings/loginForm.js";
import UserRegisterForm from "../components/greetings/userRegisterForm.js";
import Profile from "../components/greetings/profile.js";
import { currentLocalUser } from "../function/function.js";

function slys(eve) {
 const display = document.getElementById('slys');
  display.innerHTML += eve;
} 

document.addEventListener('DOMContentLoaded',()=>{ 
  const lsUserData = currentLocalUser();

if(lsUserData){
 document.getElementById('accounts-section').classList.remove('none');
}else{
  document.getElementById('loginForm-section').classList.remove('none');
}
});

slys(NavBar());
slys(Profile());
slys(LoginForm());
slys(UserRegisterForm());

slys(Footer());