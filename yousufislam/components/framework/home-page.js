import { copyElementByIdValue } from "../../function/function.js";
import sectionHeading from "../shares/sectionHeading.js";
import { mainContents } from "./framework.js";



export function HomePage(){
const welcome = 'Welcome to our besic framework';
const para = 'This framework use free. if you use your any purpose';
 return(
mainContents(
 `<div>
    <div class="bg-red-3">
     ${sectionHeading(welcome, para)}
    </div>
  </div>
<!-------Style link--------->
  <div>
  <div> 
   <div class="">
 <div class="bg-color-0 p-10 mx-auto">
  <div class="title mb-8 flex justify-between">
   <p class="black-4 pl-10 bold">input link</p>
   <p id="copy-btn" class="lime pointer pr-10 bold">Copy</p>
  </div>
  <div class="box bg-color-1 overflow-x-auto radius-10 ">
   <pre class="">
    <code class="">
  <textarea id="slys-css-link" class="w-700 bg-transparent border-none mt-15 cyan fs-16 resize-none outline-none"><link rel="type="stylesheet" href="https://www.bh-slys.com/slys/slys/slys.css"></textarea>
    </code>
   </pre>
  </div>
 </div>
   </div>
  </div>
 </div>`

 )
 );
} 



window.addEventListener('DOMContentLoaded', () => {
  HomePage(); 

 const copyBtn = document.getElementById('copy-btn');
  copyBtn.onclick= ()=> {
  copyElementByIdValue('slys-css-link');
   copyBtn.innerHTML = 'Copied'; 
 }

});





function copyBtnHandler(){


  

}
