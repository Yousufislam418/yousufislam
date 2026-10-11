//<--------------------------------------------------------->
//<-----> Borders css class <------------------------------>
//<--------------------------------------------------------->
export default function Borders(elements,classes){
// border all side
  if(classes.startsWith("b-")){
    elements.style.border = classes.slice(2) + "px solid";
  }
// border top
  if(classes.startsWith("bt-")){
    elements.style.borderTop = classes.slice(3) + "px solid";
  }
// border right
  if(classes.startsWith("br-")){
    elements.style.borderRight = classes.slice(3) + "px solid";
  }
// border bottom
  if(classes.startsWith("bb-")){
    elements.style.borderBottom = classes.slice(3) + "px solid";
  }
// border left
  if(classes.startsWith("bl-")){
    elements.style.borderLeft = classes.slice(3) + "px solid";
  }
// border radius
  if(classes.startsWith("brs-")){
    elements.style.borderRadius = classes.slice(4) + "px";
  } 
// border collapse
  if(classes.startsWith("collapse")){
    elements.style.borderCollapse = 'collapse';
  } 



}

