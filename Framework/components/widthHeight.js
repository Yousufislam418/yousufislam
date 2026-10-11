//===========================================================>
//<----- css class ------------- 6 August 2026 -------------->
//===========================================================>
export default function WidthHeight(elements,classes){
// width px
  if(classes.startsWith("w-")){
    elements.style.width = classes.slice(2) + "px";
  }
// minimum width px
  if(classes.startsWith("min-w-")){
    elements.style.minWidth = classes.slice(6) + "px";
  }
// maximum width px
  if(classes.startsWith("max-w-")){
    elements.style.maxWidth = classes.slice(6) + "px";
  }
//===========================================================>
// width percentage
  if(classes.startsWith("wp-")){
    elements.style.width = classes.slice(3) + "%";
  }
// minimum width percentage
  if(classes.startsWith("min-wp-")){
    elements.style.minWidth = classes.slice(7) + "%";
  }
// maximum width percentage
  if(classes.startsWith("max-wp-")){
    elements.style.maxWidth = classes.slice(7) + "%";
  }
//===========================================================> 
// height px
  if(classes.startsWith("h-")){
    elements.style.height = classes.slice(2) + "px";
  }
// minimum height px
  if(classes.startsWith("min-h-")){
    elements.style.minHeight = classes.slice(6) + "px";
  }
// maximum height px
  if(classes.startsWith("max-h-")){
    elements.style.maxHeight = classes.slice(6) + "px";
  }
//===========================================================>
// height percentage
  if(classes.startsWith("hp-")){
    elements.style.height = classes.slice(3) + "%";
  }
// minimum height percentage
  if(classes.startsWith("min-hp-")){
    elements.style.minHeight = classes.slice(7) + "%";
  }
// maximum height percentage
  if(classes.startsWith("max-hp-")){
    elements.style.maxHeight = classes.slice(7) + "%";
  }
}
//===========================================================>
//===========================================================> 
