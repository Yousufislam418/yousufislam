import {NavBar} from "../components/shares/navbar.js";
import Footer from "../components/shares/footer.js";

function About(eve) {
 const display = document.getElementById('yousuf');
  display.innerHTML += eve;
}

About(NavBar());

About(Footer());