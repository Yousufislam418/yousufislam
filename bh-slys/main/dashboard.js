import {NavBar} from "../components/shares/navbar.js";
import Footer from "../components/shares/footer.js";
import NavDashboard from "../components/dashboard/nav-dashboard.js";
import Information from "../components/dashboard/information.js";

function slys(eve) {
 const display = document.getElementById('slys');
  display.innerHTML += eve;
}

slys(NavBar());
slys(NavDashboard());
slys(Information());


slys(Footer());