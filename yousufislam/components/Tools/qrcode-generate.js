
export default function QRCodeGenerate(){ 

 window.makeQR = function() {
  const inputValue = document.getElementById('qrcodeInput').value;
  const qrcode = document.getElementById("qrcode"); 
  const qrcodeText = document.getElementById('qrcodeText'); 
   qrcode.innerHTML = "";

  if(inputValue == ''){
    alert('Please type qrcode text');
    return;
  }
 
   new QRCode(qrcode, {
      text: inputValue, width: 220, height: 220
   },
    qrcodeText.innerHTML = inputValue
);  
} // makeQR function end
  
 return(`
 <div class="text-center mt-20">
  <a href="" class="absolute bg-black p-3 radius-3 top-8 right-8">❌</a>
  <h2 class="blue fs-30">QR code generator</h2>    
 <!----------------------------->
  <div class="m-12">
   <input type="text" id="qrcodeInput" class="input text-center" placeholder="Enter qrcode text" autofocus>   
   <input type="button" class="btn-sm mt-15" onclick="makeQR()" value="Generate">   
  </div>
 <!----------------------------->
  <div class="mt-50 center">
    <div id="qrcode"></div>
  </div>
   <p class="mt-10 fs-20 bold-600" id="qrcodeText"></p>
  </div>
 `);


} // QRCode Generate function end

