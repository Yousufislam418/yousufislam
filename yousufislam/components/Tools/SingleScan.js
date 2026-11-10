import { copyElementByIdInnerText } from "../../function/function.js";

export default function SingleScan() {
 return (`
  <section class="bg-base wp-100 min-hp-100 pos-absolute left-0 top-0">
   <div class="d-flex items-center m-10">
    <img class="w-30 mr-10" src="../../icons/home.png">
    <h1 class="p-0 m-0">Single Item Scan</h1>
   </div>
<!------------------------------------------------->
 <div>
 <div class="bg-gray d-flex justify-right py-10">
  <div class="d-flex items-center w-380 items-center">
   <input type="text" id="barcodeInput" class="input w-300" placeholder="Barcode">
   <button class="btn-md btn-danger mr-13">Submit</button>
  </div>
 </div>
 </div>
<!--------------------------------->
</section>`);   

} 


export function SingleScanEvent() { 

}

