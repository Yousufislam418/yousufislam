//<--------------------------------------------------------->
//<-----> Fonts css class <------------------------------>
//<--------------------------------------------------------->
export default function Fonts(elements,classes){
// font size
  if(classes.startsWith("fs-")){
    elements.style.fontSize = classes.slice(3) + "px";
  }
// font weight
  if(classes.startsWith("fw-")){
    elements.style.fontWeight = classes.slice(3);
  }
// font family
  if(classes.startsWith("ff-")){
    elements.style.fontFamily = classes.slice(3);
  }
}

