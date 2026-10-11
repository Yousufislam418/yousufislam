//=============================================================>
//<-----> Transform css class <------------------------------>
//=============================================================> 
export default function Transform(elements,classes){
// Transition -> for smootly movements
 if(classes.startsWith("transition-")){ 
   elements.style.transition = `transform ${classes.slice(11)}s ease`; 
 }
// Transform -> translate - x
 if(classes.startsWith("translate-x-")){
   elements.style.transform = `translateX(${classes.slice(12)+'px'})`;
 }
// Transform -> translate - y
 if(classes.startsWith("translate-y-")){
   elements.style.transform = `translateY(${classes.slice(12)+'px'})`;
 }
// Transform -> rotate
 if(classes.startsWith("rotate-")){
   elements.style.transform = `rotate(${classes.slice(7)+'deg'})`;
 }
// Transform -> scale
 if(classes.startsWith("scale-")){
   elements.style.transform = `scale(${classes.slice(6)})`;
 }



}

 