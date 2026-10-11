//=============================================================>
//<--------------- Colors css class ------------------------->
//=============================================================>
export default function Colors(elements,classes){ 
// background color
 if(classes.startsWith("bg-")){
    elements.style.backgroundColor = classes.slice(3);
 }
// text color
 if(classes.startsWith("clr-")){
    elements.style.color = classes.slice(4);
 }
// border color
 if(classes.startsWith("bc-")){
    elements.style.borderColor = classes.slice(3);
 }
}
