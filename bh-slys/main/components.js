import {NavBar} from "../components/shares/navbar.js";
import Form from "../components/components/form.js";

import Footer from "../components/shares/footer.js";

function slys(eve) {
 const display = document.getElementById('slys');
  display.innerHTML += eve;
}

slys(NavBar());
slys(Form());

slys(Footer());