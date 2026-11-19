import Message from "../message.js";
import MessageTime from "../MessageTime.js";

export default function SingleScan() {
 return (`
  <section class="bg-0 wp-100 min-hp-100 pos-absolute pb-300 left-0 top-0">
<!---------------------------------> 
<!--- Part 1️⃣ --->
 <div>
 <div class="d-flex gap-30 items-center bg-base m-5 brs-5">
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
  <div id="camera"></div>
  </div>
 </div>
 </div>

<!--- Part 4️⃣ --->
 <div>
 <div class="m-8 bg-base brs-3">
  <div class="d-flex gap-20 items-center p-10"> 
   <button id="startCameraBtn" class="btn-md btn-primary">Start Camera</button>
   <button id="stopCameraBtn" class="btn-md btn-danger">Stop Camera</button>
  </div>
 </div>
 </div> 

<!--- Part 5️⃣ --->
 <div>
 <div class="m-8 bg-base brs-3">
  <div class="d-flex gap-20 items-center p-10"> 
  <button id="copyAllBtn" class="btn-md btn-primary">Copy All</button>
  <button id="clearAllBtn" class="btn-md btn-danger">Clear All</button>
  </div>
 </div>
 </div>


  

  



  <h3 id="barcodeLength"></h3>
  <div id="barcodeList"></div>

<!--------------------------------->
</section>`);   

} 


export function SingleScanEvent() { 

//===========================================>

const STORAGE_KEY = "singleBarcodes";

let stream = null;
let detector = null;
let scanning = false;
let lastScanTime = 0;

// Elements
const camera = document.getElementById("camera");
const startCameraBtn = document.getElementById("startCameraBtn");
const stopCameraBtn = document.getElementById("stopCameraBtn");
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
  const list = document.getElementById("barcodeList"); 
 document.getElementById('barcodeLength').innerHTML = `Barcode List ${barcodes.length}`;

  list.innerHTML = "";

  barcodes.reverse().forEach((barcode, index) => {
    const item = document.createElement("h1");

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

    item.append(number, code);
    list.appendChild(item);
  });
}

// Add new barcode
function addBarcode(value) {
  value = String(value).trim();

  if (!value) return false;

  // Duplicate check
  if (barcodes.includes(value)) {
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

    video.style.width = "100%";
    video.style.maxWidth = "300px";

    camera.innerHTML = "";
    camera.appendChild(video);

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
            console.log("New Barcode:", value);
          } else {
            // Duplicate barcode
            lastScanTime = now;
          }
        }
      }

    } catch (error) {
      console.error("Scan Error:", error);
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

  camera.innerHTML = "";
  startCameraBtn.textContent = "Start Camera";
} 
 stopCameraBtn.addEventListener('click',()=> stopCamera());

// Initial display
displayData();


//===========================================>

}


