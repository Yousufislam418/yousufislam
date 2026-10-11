//<--------------------------------------------------------->
//<-----> Margin css class <------------------------------>
//<--------------------------------------------------------->
export default function Margin(elements,classes){
// margin -> all side
  if(classes.startsWith("m-")){
    elements.style.margin = classes.slice(2) + "px";
  }
// margin -> top
  if(classes.startsWith("mt-")){
    elements.style.marginTop = classes.slice(3) + "px";
  }
// margin -> right 
  if(classes.startsWith("mr-")){
    elements.style.marginRight = classes.slice(3) + "px";
  }
// margin -> bottom
  if(classes.startsWith("mb-")){
    elements.style.marginBottom = classes.slice(3) + "px";
  }
// margin -> left
  if(classes.startsWith("ml-")){
    elements.style.marginLeft = classes.slice(3) + "px";
  }
// margin -> mx - px
  if(classes.startsWith("mx-")){
    elements.style.marginLeft = classes.slice(3) + "px";
    elements.style.marginRight = classes.slice(3) + "px";
  }
// margin -> my - px
  if(classes.startsWith("my-")){
    elements.style.marginTop = classes.slice(3) + "px";
    elements.style.marginBottom = classes.slice(3) + "px";
  }
// margin -> mx - auto
  if(classes.startsWith("mx-auto")){
    elements.style.marginLeft = "auto";
    elements.style.marginRight = "auto";
  }
// margin -> my - auto
  if(classes.startsWith("my-auto")){
    elements.style.marginTop = "auto";
    elements.style.marginBottom = "auto";
  }
}

