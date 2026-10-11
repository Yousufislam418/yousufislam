import "../../Components/components.js";
import "../../Framework/framework.js";
import Banner from "../components/banner.js";
import Footer from "../components/footer.js";
import {NavBar} from "../components/navbar.js";
import Services from "../components/services.js";
import Visitors from "../components/visitors.js";

function Home(eve) {
 const display = document.getElementById('yousuf');
  display.innerHTML += eve;
}

Home(NavBar());
Home(Services());
Home(Banner());
Home(Visitors());

Home(Footer());