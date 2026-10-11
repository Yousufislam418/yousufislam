import Display from "../components/display.js";
import WidthHeight from "../components/widthHeight.js";
import Margin from "../components/margin.js";
import Padding from "../components/padding.js";
import Borders from "../components/borders.js";
import Fonts from "../components/fonts.js";
import Colors from "../components/colors.js";
import CustomColors from "../components/customColors.js";
import Shadow from "../components/shadow.js";
import Transform from "../components/transform.js";
import Others from "../components/others.js";
//<---------------------------------------------------------->
//<---------- Main - All function page management ---------> 
//<---------------------------------------------------------->
document.addEventListener("DOMContentLoaded", function() { 
//------------------------------------------->
 const body = document.querySelector("body");
  body.style.margin = "0";
  body.style.padding = "0";
//------------------------------------------->
 function ComponentsManagements(elements){
 elements.classList.forEach((classes)=> { 
//----------------------------------------->
 Display(elements, classes);
 WidthHeight(elements, classes);
 Margin(elements, classes);
 Padding(elements, classes);
 Borders(elements, classes);
 Fonts(elements, classes);
 Colors(elements, classes);
 CustomColors(elements, classes);
 Shadow(elements, classes);
 Transform(elements, classes);
 Others(elements, classes);
//---------------------------------------------->
 });
 } // ComponentsManagements end 
//------------------------------------------------------->
 document.querySelectorAll("*").forEach((elements)=> {
    ComponentsManagements(elements);
 });

 const observer = new MutationObserver((mutations)=> {
  mutations.forEach((mutation)=> {

  mutation.addedNodes.forEach((node)=> {
   if(node.nodeType !== 1) return;

  ComponentsManagements(node);

 node.querySelectorAll("*").forEach((elements)=> {
   ComponentsManagements(elements);
 });
 });
 });
 });

 observer.observe(document.body, {
   childList: true,
   subtree: true
 });

}); // DOM end

