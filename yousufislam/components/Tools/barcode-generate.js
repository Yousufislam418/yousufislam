
export default function BarcodeGenerate(){ 

 window.generate = ()=> {
  const value = document.getElementById("barcodeInput").value;
   if (value == "") {
      alert("Enter Text");
      return;
   }
  
   JsBarcode("#barcode", value, {
      format: "CODE128",
      width: 2,
      height: 80,
      displayValue: true
   });
}// generate function end


 return(` 
 <section class="wp-100 min-hp-100 pos-absolute left-0 top-0 bg-0">
  <div class="container">
 
<!--- Part 1 --->
 <div class="mx-10 d-flex gap-20 items-center bg-base brs-10  p-5 mt-5">
 <h2 class="blue ml-13 my-3 py-3 fs-30">Barcode Generate</h2>   
 <a href="" class="td-none btn-sm btn-warning">Back</a>
 </div>

 <!--- Part 2 --->
 <div class="mx-10 bg-base p-20 brs-10 mt-13">
  <div class="mb-20 max-w-430 d-flex gap-3 items-center">
   <input type="text" id="barcodeInput" class="input" placeholder="Enter barcode text" autofocus> 
   <button id="clearBtn" class="btn-sm btn-danger">Clear</button>
  </div>  
  <input type="button" class="btn-md btn-primary" onclick="generate()" value="Generate">   
 </div>

<!----------------------------->
 <div class="mx-10 bg-base text-center p-20 brs-10 mt-13">
  <svg id="barcode"></svg>
 </div>

 </div>
 </section>
 `);

} // Barcode Generate function end


export function BarcodeGenerateEvent() {
 const barcodeInput = document.getElementById('barcodeInput');
 const clearBtn = document.getElementById('clearBtn');
 clearBtn.addEventListener('click', ()=> {
   barcodeInput.value = '';
   barcodeInput.focus();
 });
}

