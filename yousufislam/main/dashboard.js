import {NavBar} from "../components/shares/navbar.js";
import Footer from "../components/shares/footer.js";
import NavDashboard from "../components/dashboard/nav-dashboard.js";
import Information from "../components/dashboard/information.js";

function Dashboard(eve) {
 const display = document.getElementById('yousuf');
  display.innerHTML += eve;
}

Dashboard(NavBar());
Dashboard(NavDashboard());
Dashboard(Information());


Dashboard(Footer());