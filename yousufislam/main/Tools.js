import {NavBar} from "../components/shares/navbar.js";
import Footer from "../components/shares/footer.js";
import ToolsManager from "../components/Tools/ToolsManager.js";

function Tools(eve) {
 const display = document.getElementById('tools');
  display.innerHTML += eve;
}

Tools(NavBar());
Tools(ToolsManager());
Tools(Footer());