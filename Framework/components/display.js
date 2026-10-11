//<--------------------------------------------------------->
//<-----> Display css class <------------------------------>
//<--------------------------------------------------------->
export default function Display(elements,classes){
//  display type
  if(classes.startsWith("d-")){
    elements.style.display = classes.slice(2);
  }
// justify content -> left - center - right
  if(classes.startsWith("justify-")){
    elements.style.justifyContent = classes.slice(8);
  }
// horizontal items -> top - center - bottom
  if(classes.startsWith("items-")){
    elements.style.alignItems = classes.slice(6);
  }
// text alignment -> left - center - right
  if(classes.startsWith("text-")){
    elements.style.textAlign = classes.slice(5);
  }
// grid template colums
  if(classes.startsWith("grid-cols-")){
    elements.style.gridTemplateColumns = `repeat(${classes.slice(10)}, 1fr)`;
  }
  // gap
  if(classes.startsWith("gap-")){
    elements.style.gap = classes.slice(4) + "px";
  }
  // position - static - fixed - absolute - sticky - relative
  if(classes.startsWith("pos-")){
    elements.style.position = classes.slice(4);
  }
  // position - top
  if(classes.startsWith("top-")){
    elements.style.top = classes.slice(4) + "px";
  }
  // position - right
  if(classes.startsWith("right-")){
    elements.style.right = classes.slice(6) + "px";
  }
  // position - bottom
  if(classes.startsWith("bottom-")){
    elements.style.bottom = classes.slice(7) + "px";
  }
  // position - left
  if(classes.startsWith("left-")){
    elements.style.left = classes.slice(5) + "px";
  }
  // flex wrap
  if(classes.startsWith("flex-")){
    elements.style.flexWrap = classes.slice(5);
  }
}

