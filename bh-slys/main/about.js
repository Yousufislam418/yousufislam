import {NavBar} from "../components/shares/navbar.js";
import Footer from "../components/shares/footer.js";

function slys(eve) {
 const display = document.getElementById('slys');
  display.innerHTML += eve;
}

slys(NavBar());

slys(Footer());