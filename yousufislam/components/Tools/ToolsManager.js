import BarcodeGenerate from "./barcode-generate.js";
import QRCodeGenerate from "./qrcode-generate.js";

export default function ToolsManager(){ 
 return(`
  <section class="my-20">   
   <div class="m-5 radius-3 flex justify-center bg-base-8">
    <ul class="flex flex-wrap p-10 gap-10">
     <li id="barcodeImg" class="pointer"><img class="w-180 border-10 -aqua-3 radius-5" src="../../images/barcode.png"></li>
     <li id="qrcodeImg" class="pointer"><img class="w-180 border-10 -aqua-3 radius-5" src="../../images/qrcode.jpg"></li>
     <li class="center pointer"><img class="w-180 border-10 -aqua-3 radius-5" src="../../images/yousuf.jpg"></li>
    </ul>
   </div>
  </section>   
 `);
} 

// -------------------------------------------------------------------------->
document.addEventListener('DOMContentLoaded',()=>{

// Barcode generate
 document.getElementById('barcodeImg').onclick =()=>{ 
  GenerateDataLoad(BarcodeGenerate());
  };
// QR Code generate
 document.getElementById('qrcodeImg').onclick =()=>{
  GenerateDataLoad(QRCodeGenerate());
  };


// Tools image Click handler to Generate data Load into Tools HTML Page
 function GenerateDataLoad(eve){
 const section = document.createElement('section');
 section.classList.add('bg-white','absolute','top-0','w-100-pr','h-100-pr');
 section.innerHTML = eve;
 document.body.appendChild(section);
}
 



 
}); // DOM end