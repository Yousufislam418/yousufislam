//=============================================================>
//<-----> Others css class <------------------------------>
//=============================================================> 
export default function Others(elements,classes){
// z index
 if(classes.startsWith("z-")){
   elements.style.zIndex = classes.slice(2);
 }
// letter spacing
 if(classes.startsWith("ls-")){
   elements.style.letterSpacing = classes.slice(3) + "px";
 }
// cursor - pointer
 if(classes.startsWith("cursor-")){
   elements.style.cursor = classes.slice(7);
 }
// button hover
 if(classes.startsWith("hover")){
   elements.addEventListener("mouseenter", () => {
   elements.style.backgroundColor = "lightgray";
 });
   elements.addEventListener("mouseleave", () => {
   elements.style.backgroundColor = "";
 });
 }
// active
 if(classes.startsWith("active")){
   elements.addEventListener("pointerdown", () => {
   elements.style.backgroundColor = "red";
 });
   elements.addEventListener("pointerup", () => {
   elements.style.backgroundColor = "";
 });
 }
// a -> text decoration
 if(classes.startsWith("td-")){
   elements.style.textDecoration = classes.slice(3);
 }
// input outline color
 if(classes.startsWith("outline-clr-")){
   elements.style.outlineColor = classes.slice(12);
 }
// li > list style
 if(classes.startsWith("list-")){
   elements.style.listStyle = classes.slice(5);
 }



}

 