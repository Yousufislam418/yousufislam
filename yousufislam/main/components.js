import {NavBar} from "../components/shares/navbar.js";
import Form from "../components/components/form.js";

import Footer from "../components/shares/footer.js";

function Components(eve) {
 const display = document.getElementById('yousuf');
  display.innerHTML += eve;
}

Components(NavBar());
Components(Form());

Components(Footer());