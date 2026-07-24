import {NavBar} from "../components/shares/navbar.js";
import Banner from "../components/home/banner.js";
import Services from "../components/home/services.js";
import Visitors from "../components/home/visitors.js";
import Footer from "../components/shares/footer.js";

function Home(eve) {
 const display = document.getElementById('yousuf');
  display.innerHTML += eve;
}

Home(NavBar());
// Home(Banner());
Home(Services());
Home(Visitors());

Home(Footer());