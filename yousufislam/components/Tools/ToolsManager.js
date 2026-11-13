import Tools from "../../main/Tools.js";
import BarcodeGenerate from "./barcode-generate.js";
import MultipleScan, { MultipleScanEvent } from "./MultipleScan.js";
import QRCodeGenerate from "./qrcode-generate.js";
import SingleScan, { SingleScanEvent } from "./SingleScan.js";

export default function ToolsManager() { 
 return (`
  <section class="my-20">   
   <div class="m-5 radius-3 d-flex justify-center bg-base">
    <ul class="d-flex flex-wrap p-10 gap-10">
     <li id="barcodeImg" class="list-none cursor-pointer"><img class="w-180 b-10 bc-aqua brs-5" src="../../images/barcode.png"></li>
     <li id="qrcodeImg" class="list-none cursor-pointer"><img class="w-180 b-10 bc-aqua brs-5" src="../../images/qrcode.jpg"></li>
     <li id="singleScanImg" class="list-none cursor-pointer"><img class="w-180 b-10 bc-aqua brs-5" src="../../images/yousuf.jpg"></li>
     <li id="multipleScanImg" class="list-none cursor-pointer"><img class="w-180 b-10 bc-aqua brs-5" src="../../images/yousuf.jpg"></li>
    </ul>
   </div>
  </section>`); 

} // ToolsManager End 



export function EventHandler() {
 document.getElementById('barcodeImg').onclick = ()=> {
  Tools(SingleScan());
 };
 
 document.getElementById('singleScanImg').onclick = ()=> {
  Tools(SingleScan());
  SingleScanEvent();
 };
 
 document.getElementById('multipleScanImg').onclick = ()=> {
  Tools(MultipleScan);
  MultipleScanEvent();
 };
 
 } 
 

 

// -------------------------------------------------------------------------->
// document.addEventListener('DOMContentLoaded',()=>{

// // Barcode generate
//  document.getElementById('barcodeImg').onclick =()=>{ 
//   GenerateDataLoad(BarcodeGenerate());
//   };
// // QR Code generate
//  document.getElementById('qrcodeImg').onclick =()=>{
//   GenerateDataLoad(QRCodeGenerate());
//   };
// // QR Code generate
// //  document.getElementById('singleScanImg').onclick =()=>{
// //   GenerateDataLoad(SingleScan());
// //   };


// // Tools image Click handler to Generate data Load into Tools HTML Page
//  function GenerateDataLoad(eve){
//  const section = document.createElement('section');
//  section.classList.add('bg-white','absolute','top-0','w-100-pr','h-100-pr');
//  section.innerHTML = eve;
//  document.body.appendChild(section);
// }
 
 
// }); // DOM end