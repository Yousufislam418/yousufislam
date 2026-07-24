
export default function BarcodeGenerate(){ 

 window.generate = function() {
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
  <div class="text-center mt-25">
  <a href="" class="absolute bg-black p-3 radius-3 top-8 right-8">❌</a>
  <h2 class="blue fs-30">Barcode Generator</h2>    
 <!----------------------------->
  <div class="m-15">
   <input type="text" id="barcodeInput" focus class="input text-center" placeholder="Enter barcode text">   
   <input type="button" class="btn-sm mt-20" onclick="generate()" value="Generate">   
  </div>
 <!----------------------------->
  <div class="mt-50">
   <svg id="barcode"></svg>
  </div>
  </div>
 `);


} // Barcode Generate function end

