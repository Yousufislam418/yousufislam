import {NavBar} from "../components/shares/navbar.js";
import {MainSection} from "../components/framework/framework.js";

import Footer from "../components/shares/footer.js";

function Framework(eve) {
 const display = document.getElementById('yousuf');
  display.innerHTML += eve;
}

Framework(NavBar());
Framework(MainSection());

Framework(Footer());