import "../../Components/components.js";
import "../../Framework/framework.js";


import {NavBar} from "../components/navbar.js";
import Footer from "../components/footer.js";
import ToolsManager, { EventHandler } from "../components/Tools/ToolsManager.js";
import { SingleScanEvent } from "../components/Tools/SingleScan.js";


export default function Tools(eve) {
 const display = document.getElementById('tools');
  display.innerHTML += eve;
} 

Tools(NavBar());
Tools(ToolsManager());
Tools(Footer());  


// ToolsManager Event
EventHandler(); 
SingleScanEvent();
