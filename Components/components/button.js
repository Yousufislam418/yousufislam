export default function Button(elements,classes) {
//  button large
 if(classes.startsWith("btn-lg")){
    elements.classList.add("px-30","py-13","clr-navy","ts-1","fs-25","b-0","brs-5","active","cursor-pointer");
 }
//  button medium
 if(classes.startsWith("btn-md")){
    elements.classList.add("px-25","py-10","clr-navy","ts-1","ls-1","fs-20","b-0","brs-5","active","cursor-pointer");
 }
//  button small
 if(classes.startsWith("btn-sm")){
    elements.classList.add("px-20","py-8","clr-navy","ts-1","ls-1","fs-18","b-0","brs-5","active","cursor-pointer");
 }



//========================================================>
//  button primary
 if(classes.startsWith("btn-primary")){
    elements.classList.add("bg-blue","clr-white");
 }
//  button danger - btn-danger
 if(classes.startsWith("btn-warning")){
    elements.classList.add("bg-bisque","clr-navy");
 }
//  button danger - btn-danger
 if(classes.startsWith("btn-danger")){
    elements.classList.add("bg-red","clr-white");
 }

}