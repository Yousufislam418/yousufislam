import Button from "../components/button.js";
import input from "../components/input.js";
//<---------------------------------------------------------->
//<---------- Main - All function page management ---------> 
//<---------------------------------------------------------->
document.addEventListener("DOMContentLoaded", function() { 
 function ComponentsManagementes(elements) {
 elements.classList.forEach((classes)=>{
//----------------------------------------->
  Button( elements, classes );
  input( elements, classes );
//----------------------------------------->
 });
 } // ComponentsManagementes end 

 document.querySelectorAll("*").forEach((elements)=> {
    ComponentsManagementes(elements);
 });

 const observer = new MutationObserver((mutations)=> {
  mutations.forEach((mutation)=> {

  mutation.addedNodes.forEach((node)=> {
   if(node.nodeType !== 1) return;

  ComponentsManagementes(node);

 node.querySelectorAll("*").forEach((elements)=> {
   ComponentsManagementes(elements);
 });
 });
 });
 });

 observer.observe(document.body, {
   childList: true,
   subtree: true
 });

}); // DOM end

