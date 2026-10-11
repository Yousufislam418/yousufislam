//<--------------------------------------------------------->
//<-----> Box and Text shadow css class <------------------------------>
//<--------------------------------------------------------->
export default function Shadow(elements,classes){
// box shadow white 
  if(classes.startsWith("bsw-")){
    elements.style.boxShadow = `0 0 ${classes.slice(4) + "px"} white`;
  }
// box shadow all side 
  if(classes.startsWith("bs-")){
    elements.style.boxShadow = `0 0 ${classes.slice(3) + "px"} black`;
  }
// box shadow red
  if(classes.startsWith("bsr-")){
    elements.style.boxShadow = `0 0 ${classes.slice(4) + "px"} red`;
  }
// box shadow green
  if(classes.startsWith("bsg-")){
    elements.style.boxShadow = `0 0 ${classes.slice(4) + "px"} green`;
  }
// box shadow blue
  if(classes.startsWith("bsb-")){
    elements.style.boxShadow = `0 0 ${classes.slice(4) + "px"} blue`;
  }
//--------------------------------------------------------------------->
// text shadow white
  if(classes.startsWith("tsw-")){
    elements.style.textShadow = `0 0 ${classes.slice(4) + "px"} white`;
  }
// text shadow 
  if(classes.startsWith("ts-")){
    elements.style.textShadow = `0 0 ${classes.slice(3) + "px"} black`;
  }
// text shadow red
  if(classes.startsWith("tsr-")){
    elements.style.textShadow = `0 0 ${classes.slice(4) + "px"} red`;
  }
// text shadow
  if(classes.startsWith("tsg-")){
    elements.style.textShadow = `0 0 ${classes.slice(4) + "px"} green`;
  }
// text shadow
  if(classes.startsWith("tsb-")){
    elements.style.textShadow = `0 0 ${classes.slice(4) + "px"} blue`;
  }
}

