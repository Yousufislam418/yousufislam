import {NavBar} from "../components/shares/navbar.js";
import Banner from "../components/home/banner.js";
import Services from "../components/home/services.js";
import Visitors from "../components/home/visitors.js";
import Footer from "../components/shares/footer.js";

function slys(eve) {
 const display = document.getElementById('slys');
  display.innerHTML += eve;
}

slys(NavBar());
slys(Banner());
slys(Services());
slys(Visitors());

slys(Footer());