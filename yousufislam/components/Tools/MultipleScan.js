export default function MultipleScan() {
 return (`
 <section class="pos-absolute left-0 top-0 bg-0 wp-100 min-hp-100">
 <div class="container mx-auto wp-98">
<!--- Part 1 --->
 <div class="d-flex bg-base brs-10 p-10 gap-20 mt-8 items-center">
  <h3 class="m-0 py-5 clr-navy">Multiple Barcode Scanner</h3>
  <a href="tools.html" class="td-none btn-sm btn-warning">Back</a>
 </div>

<!--- Part 2 --->
 <div class="d-flex justify-space-evenly bg-base p-10 brs-10 mt-13"> 
  <button id="startCameraScanBtn" class="btn-sm btn-primary">Start Camera Scanner</button>
  <button id="stopScanBtn" class="btn-sm btn-danger">Stop Camera</button>
 </div>

<!--- Part 3 --->
 <div class="bg-base brs-10 p-10 mt-13">
  <div>
   <input id="barcodeInput" type="text" class="input" placeholder="Enter Barcode" autocomplete="off">
  </div>
  <div class="mt-13">
   <button id="addBarcodeBtn" class="btn-md btn-primary">Add Barcode</button>
  </div>
 </div>

<!--- Part 4 --->
 <div class="bg-base d-flex justify-center p-10 brs-10 mt-13"> 
  <div id="scanner"></div>
 </div> 

<!--- Part 5 --->
 <div class="bg-base p-10 brs-10 mt-13">
  <h2 class="p-3 m-3">Scanned Data :</h2>
  <div id="total" class="items-center"></div>
 </div>

<!--- Part 6 --->
 <div class="bg-base brs-10 p-10 mt-13">
  <div id="list"></div>
 </div>

<!--- Part 7 --->
 <div class="bg-base d-flex justify-center gap-20 brs-10 p-10 mt-13">
  <button id="copyDataBtn" class="btn-sm btn-primary">Copy All Data</button>
  <button id="clearDataBtn" class="btn-sm btn-danger">Clear All Data</button>  
 </div>

 
 </div>
 </section>
`);
} // MultipleScan function end



//===========================================>
// Multiple Scan Event
//===========================================>
export function MultipleScanEvent() { 
 const addBarcodeBtn = document.getElementById('addBarcodeBtn');
 const startCameraScanBtn = document.getElementById('startCameraScanBtn');
 const stopScanBtn = document.getElementById('stopScanBtn');
 const copyDataBtn = document.getElementById('copyDataBtn');
 const clearDataBtn = document.getElementById('clearDataBtn');
 
// Local Storage Key
const STORAGE_KEY = "barcodeData";

// Load Data
let barcodeData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

// Scanner Variables
let lastScanTime = 0;
let scannerActive = false;
let stream = null;
let video = null;
let scanTimer = null;

// Save Data
function saveData() {
 localStorage.setItem(STORAGE_KEY,JSON.stringify(barcodeData));
  displayData();
}

// Main Scan Method
function scanBarcode(code) {
 code = String(code).trim();
 if (!code) return;

// 3 Second Cooldown
 const now = Date.now();
 if (now - lastScanTime < 3000) {
   return;
 }

 lastScanTime = now;

// Check Existing Barcode
 const existing = barcodeData.find(item => item.barcode === code);
  if (existing) {
 existing.quantity += 1;
 } else {
  barcodeData.push({ barcode: code, quantity: 1 });
 }
 saveData();
}

// Manual Input Scan
function manualScan() {
 const input = document.getElementById("barcodeInput");
 const code = input.value.trim();
 if (!code) return;

 const now = Date.now();
  if (now - lastScanTime < 3000) {
 alert("Please wait 3 seconds!");
  return;
 }
 scanBarcode(code);
  input.value = "";
  input.focus();
} 

 addBarcodeBtn.addEventListener('click', manualScan);

// Enter Key
document.getElementById("barcodeInput").addEventListener("keydown", function(e) {
 if (e.key === "Enter") {
  manualScan();
 }
});

// Camera Scanner
async function startScanner() {
 if (!("BarcodeDetector" in window)) {
  alert("BarcodeDetector not supported!");
  return;
 }

 if (scannerActive) return;
  try {
 const detector = new BarcodeDetector();
  stream = await navigator.mediaDevices.getUserMedia({
  video: { facingMode: "environment" }
 });

 video = document.createElement("video");
 video.srcObject = stream;
 video.setAttribute("playsinline", true);

 await video.play();

 document.getElementById("scanner").appendChild(video);
  video.style.width = "90%";
  video.style.height = "230px";
  scannerActive = true;
  scanCamera(detector);
 } catch (error) {
  alert("Camera Error: " + error.message);
 }
} 
 startCameraScanBtn.addEventListener('click', startScanner);

// Continuous Camera Scan
async function scanCamera(detector) {
 if (!scannerActive) return;
  try {
 if (video.readyState === 4) {
  const results = await detector.detect(video);
 if (results.length > 0) {
  const code = results[0].rawValue;
  scanBarcode(code);
 }
 }
 } catch (error) {
   alert(error.message);
 }

 if (scannerActive) {
  scanTimer = setTimeout(() => {
  scanCamera(detector);
 }, 300);
 }
}

// Stop Camera
function stopScanner() {
 scannerActive = false;
 clearTimeout(scanTimer);

 if (stream) {
  stream.getTracks().forEach(track => {
  track.stop();
 });
 }

 if (video) {
  video.remove();
  video = null;
 }
  stream = null;
} 
 stopScanBtn.addEventListener('click', stopScanner);

// Display Data
function displayData() {
 const list = document.getElementById("list");
 list.innerHTML = "";
 let totalQuantity = 0;
 barcodeData.forEach((item, index) => {
 totalQuantity += item.quantity;
 list.innerHTML += `
 <div class="item d-flex gap-30 px-10 py-3 m-0 bb-1 bc-white">
 <p class="p-3 m-0 clr-blue fw-700 fs-23">${index + 1}. ${escapeHTML(item.barcode)}</p>
 <p class="p-3 m-0 fs-20 clr-navy">Qty: ${item.quantity}</p>
 </div>
 `;
 });

 document.getElementById("total").innerHTML = `
  <p class="clr-navy">Total Barcode: <span class="clr-blue fs-22">${barcodeData.length}</span>  
  Total Quantity: <span class="clr-blue fs-22 fw-700">${totalQuantity}</span></p>`;
}

// Escape HTML
function escapeHTML(value) {
 return String(value).replace(/[&<>"']/g, char => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);
}

// Copy All Data
async function copyData() {
 const text = barcodeData.map(item =>
 `${item.barcode},${item.quantity}`
 ).join("\n");

 try {
  await navigator.clipboard.writeText(text);
  alert("All Data Copied!");
 } catch (error) {
  alert("Copy failed!");
 }
} 
 copyDataBtn.addEventListener('click', copyData);

// Clear Data
function clearData() {
 if (!confirm("Delete all barcode data ?")) {
  return;
 }
  barcodeData = [];
  saveData();
} 
 clearDataBtn.addEventListener('click', clearData);

 displayData();
}


