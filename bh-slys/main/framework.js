import {NavBar} from "../components/shares/navbar.js";
import {MainSection} from "../components/framework/framework.js";

import Footer from "../components/shares/footer.js";

function slys(eve) {
 const display = document.getElementById('slys');
  display.innerHTML += eve;
}

slys(NavBar());
slys(MainSection());

slys(Footer());