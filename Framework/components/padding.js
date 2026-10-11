//<--------------------------------------------------------->
//<-----> Padding css class <------------------------------>
//<--------------------------------------------------------->
export default function Padding(elements,classes){
// padding -> all side
  if(classes.startsWith("p-")){
    elements.style.padding = classes.slice(2) + "px";
  }
// padding -> top
  if(classes.startsWith("pt-")){
    elements.style.paddingTop = classes.slice(3) + "px";
  }
// padding -> right 
  if(classes.startsWith("pr-")){
    elements.style.paddingRight = classes.slice(3) + "px";
  }
// padding -> bottom
  if(classes.startsWith("pb-")){
    elements.style.paddingBottom = classes.slice(3) + "px";
  }
// padding -> left
  if(classes.startsWith("pl-")){
    elements.style.paddingLeft = classes.slice(3) + "px";
  }
// padding -> px
  if(classes.startsWith("px-")){
    elements.style.paddingLeft = classes.slice(3) + 'px';
    elements.style.paddingRight = classes.slice(3) + 'px';
  }
// padding -> my
  if(classes.startsWith("py-")){
    elements.style.paddingTop = classes.slice(3) + 'px';
    elements.style.paddingBottom = classes.slice(3) + 'px';
  }
}

