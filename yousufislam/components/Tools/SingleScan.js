import Message from "../message.js";
import MessageTime from "../MessageTime.js";

export default function SingleScan() {
 return (`
  <section class="bg-0 wp-100 min-hp-100 pos-absolute pb-300 left-0 top-0">
<!---------------------------------> 
<!--- Part 1️⃣ --->
 <div>
 <div class="d-flex gap-30 items-center bg-base m-5 p-3 brs-5">
   <h2 class="m-0 p-8">Barcode Scanner</h2> 
   <a href="tools.html" class="btn-sm btn-warning td-none">Back</a>
 </div>
 </div>
 
<!--- Part 2️⃣ --->
 <div>
 <div class="bg-base m-5 p-8 brs-3">
  <div class="d-flex gap-8 items-center p-5 bsw-13"> 
   <input type="text" id="scannerInput" class="input" placeholder="Scan barcode here" autocomplete="off">
   <button class="btn-sm btn-danger">Enter</button>
  </div>
 </div>
 </div>

<!--- Part 3️⃣ --->
 <div>
 <div class="bg-base m-8 brs-3">
  <div class="p-10"> 
  <div id="videoLoad"></div>
  </div>
 </div>
 </div>

<!--- Part 4️⃣ --->
 <div>
 <div class="m-8 bg-base brs-3">
  <div class="d-flex justify-right mr-20 items-center p-10"> 
   <button id="startCameraBtn" class="btn-md btn-primary">Start Camera</button>
  </div>
 </div>
 </div> 

<!--- Part 5️⃣ --->
 <div>
 <div class="m-8 bg-base brs-5">
  <div class="p-10"> 
   <div class="d-flex items-center gap-25 mt--13"> 
    <h1 id="barcodeLength" class="bg-yellow b-1 py-5 px-20 clr-red brs-8"></h1> 
    <button id="copyAllBtn" class="btn-md btn-primary title-Copy">Copy All</button> 
   </div>
   <div id="barcodeList" class="p-10 bsw-10"></div>
  </div>
 </div>
 </div> 

<!--- Part 6️⃣ --->
 <div>
 <div class="m-8 bg-base brs-3">
  <div class="d-flex gap-20 justify-space-evenly items-center p-10"> 
  <button id="clearAllBtn" class="btn-md btn-danger">Clear</button>
  </div>
 </div>
 </div>



<!--------------------------------->
</section>`);   

} 


//===========================================>
export function SingleScanEvent() { 
const STORAGE_KEY = "singleBarcodes";

let stream = null;
let detector = null;
let scanning = false;
let lastScanTime = 0;

// Elements
const videoLoad = document.getElementById("videoLoad");
const startCameraBtn = document.getElementById("startCameraBtn");
const copyAllBtn = document.getElementById("copyAllBtn");
const clearAllBtn = document.getElementById("clearAllBtn");
const scannerInput = document.getElementById("scannerInput");

// Load existing data
let barcodes = JSON.parse(
  localStorage.getItem(STORAGE_KEY) || "[]"
);

// Save data
function saveData() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(barcodes)
  );
} 

// Display all data
function displayData() {
  const barcodeList = document.getElementById("barcodeList"); 
 document.getElementById('barcodeLength').innerHTML = 
  `Total items : <span class="bg-red clr-yellow px-20 b-2 bc-white brs-3">${barcodes.length}</span>`;

  barcodeList.innerHTML = "";

 barcodes.reverse().forEach((barcode, index) => {
 const h1 = document.createElement("h1");
 
 const number = document.createElement("span");
  number.textContent = `${index + 1}. `;

 const code = document.createElement("span");
  code.textContent = barcode;
  code.style.cursor = "pointer";
  code.title = "Click to copy";

    code.addEventListener("click", async () => {
      await navigator.clipboard.writeText(barcode);
      MessageTime("Copied! "+ barcode);
    });

    h1.append(number, code); 
    h1.classList.add('m-3','p-3','clr-blue','cursor-pointer','bb-1','bc-#F5F5F5'); 
    barcodeList.appendChild(h1);
  });
}

// Add new barcode
function addBarcode(value) {
  value = String(value).trim();

  if (!value) return false;

  // Duplicate check
 if (barcodes.includes(value)) { 
   MessageTime('Already Added '+ value);
    return false;
  }

  barcodes.push(value);

   saveData(); 
   MessageTime(value);
   displayData();

  return true;
}

// Copy all barcodes
copyAllBtn.addEventListener("click", async () => {
  const text = barcodes.join("\n");

  if (!text) {
    MessageTime("No barcode available!");
    return;
  }

  await navigator.clipboard.writeText(text);
  MessageTime("All barcodes copied!");
});

// Clear all
clearAllBtn.addEventListener("click", () => {
  if (!confirm("Clear all barcodes?")) return;

  barcodes = [];
  saveData();
  displayData();
});

// Scanner device support
scannerInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addBarcode(scannerInput.value);
    scannerInput.value = "";
  }
});

// Start Camera
startCameraBtn.addEventListener("click", async () => {
  try {
    if (!("BarcodeDetector" in window)) {
  MessageTime("BarcodeDetector is not supported in this browser.");
      return;
    }

    if (scanning) {
      stopCamera();
      return;
    }

    detector = new BarcodeDetector();

    stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: "environment"
      }
    });

    // Create video dynamically
 const video = document.createElement("video");
   video.autoplay = true;
   video.playsInline = true;
   video.muted = true;
   video.classList.add('wp-100','h-230','object-fit-cover');

   videoLoad.innerHTML = "";
   videoLoad.appendChild(video);
   video.srcObject = stream;
   await video.play();

   scanning = true;
  startCameraBtn.textContent = "Stop Camera";
   scanLoop(video);

  } catch (error) {
    console.error(error);
  Message("Camera Error: " + error.message);
    stopCamera();
  }
});

// Scan Loop
async function scanLoop(video) {
  while (scanning) {
    try {
      const results = await detector.detect(video);

      if (results.length > 0) {
        const now = Date.now();

        // 3 second delay
        if (now - lastScanTime >= 3000) {

          const value = results[0].rawValue;

          if (addBarcode(value)) {
            lastScanTime = now;
          } else {
            // Duplicate barcode
            lastScanTime = now;
          }
        }
      }

    } catch (error) {
      Message(error.message);
    }

    await new Promise(resolve => setTimeout(resolve, 150));
  }
}

// Stop camera
function stopCamera() {
  scanning = false;

  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }

  videoLoad.innerHTML = "";
  startCameraBtn.textContent = "Start Camera";
} 

// Initial display
displayData();


//===========================================>

}


