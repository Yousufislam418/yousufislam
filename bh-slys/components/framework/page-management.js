import { HomePage } from "./home-page.js";
import FontColor from "./font-color.js";
import BackgroundColor from "./background-color.js";
import FontSize from "./font-size.js";
import Width from "./width.js";
import Grid from "./grid.js";



export default function pageManagement(db) { 
 document.getElementById('main-content-id').innerHTML = '';

   switch(db){
    case 'home': HomePage();
      break;
    case '0': FontColor(); 
      break;
    case '1': BackgroundColor();
      break;
    case '2': FontSize();
      break;
    case '3': Width();
      break;
    case '4': Grid();
      break;
   }
    
}
