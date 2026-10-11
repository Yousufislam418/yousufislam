//=============================================================>
//<--------------- Custom Colors css class -------------------->
//=============================================================>
export default function CustomColors(elements,classes) { 
//=============================================================>
// background color 
//=============================================================>
 if(classes.startsWith("bg")){ 
  const background = classes.slice(3);
 switch (background) {
  case 'base': elements.style.backgroundColor = "#EEE"; break;
  case '0': elements.style.backgroundColor = "#FFF"; break;
  case '1': elements.style.backgroundColor = "#4E1F7A"; break;
  case '2': elements.style.backgroundColor = "#64358A"; break;
  case '3': elements.style.backgroundColor = "#967AAD"; break;
  case '4': elements.style.backgroundColor = "#FF00F0"; break;
  case '5': elements.style.backgroundColor = "#E3E3EE"; break;
  case '6': elements.style.backgroundColor = "#8843E8"; break;
  case '7': elements.style.backgroundColor = "#F5F5F5"; break; 
  case '8': elements.style.backgroundColor = "#3700B3"; break; 

  default: break;
 }
 }
//=============================================================>
// text color 
//=============================================================>
 if(classes.startsWith("clr")){ 
  const color = classes.slice(4);
 switch (color) {
  case 'base': elements.style.color = "#EEE"; break;
  case '0': elements.style.color = "white"; break;
  case '1': elements.style.color = "#4E1F7A"; break;
  case '2': elements.style.color = "#64358A"; break;
  case '3': elements.style.color = "#967AAD"; break;
  case '4': elements.style.color = "#FF00F0"; break;
  case '5': elements.style.color = "#E3E3EE"; break;
  case '6': elements.style.color = "#8843E8"; break; 
  case '7': elements.style.color = "#F5F5F5"; break; 
  case '8': elements.style.color = "#3700B3"; break; 

  default: break;
 }
 }
}

