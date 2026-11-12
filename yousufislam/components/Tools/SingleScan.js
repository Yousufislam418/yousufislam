import { copyElementByIdInnerText } from "../../function/function.js";

export default function SingleScan() {
 return (`
  <section class="bg-base wp-100 min-hp-100 pos-absolute pb-300 left-0 top-0">
<!---------------------------------> 
<div class="mx-13">
 <section class="navs bg-skyblue d-flex mt-8 items-center gap-10">
   <h2 class="ml-10 p-8 my-5">Offline Barcode Scanner</h2>
   <a href="home.html" class="btn-sm btn-primary">Home</a>
 </section>

  <section class="panel bg-base my-10">
    <video id="video" class="wp-80 max-h-300" playsinline muted></video>
    <p id="status" class="my-15 fs-20 clr-blue">Camera off</p>
    <button id="startCamera" class="btn-md btn-primary my-10">Start Camera</button>
    <button id="stopCamera" class="btn-md btn-danger">Stop Camera</button>
  </section>

  <section class="panel bg-base my-10">
    <label class="mb-15 fs-18">Barcode input</label>
    <input id="barcodeInput" class="input class="mb-20" type="text" placeholder="Scan or type" autocomplete="off">
    <button id="addButton" class="btn-md btn-primary mt-20">Add Data</button>
  </section>

  <section class="panel bg-base my-10 p-10">
    <h3 class="fs-20 mb-5">Saved Data: <span id="total">0</span></h3>
    <div id="scanList" class="p-8 fs-20 mb-20 bg-base clr-navy mb-3"></div>
    <button id="copyButton" class="btn-md btn-primary">Copy All</button>
    <button id="clearButton" class="btn-md btn-danger">Clear All</button>
  </section>
</div>

<!--------------------------------->
</section>`);   

} 


export function SingleScanEvent() { 

const STORAGE_KEY = "ScanData";
const input = document.getElementById("barcodeInput");
const video = document.getElementById("video");
const statusText = document.getElementById("status");
const list = document.getElementById("scanList");
const total = document.getElementById("total");

let scanData = loadData();
let stream = null;
let detector = null;
let scanning = false;
let lastCameraValue = "";
let lastCameraAt = 0;

function loadData() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved.filter(x => typeof x === "string") : [];
  } catch {
    return [];
  }
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scanData));
}

function addBarcode(rawValue, fromCamera = false) {
  const value = String(rawValue || "").trim();
  if (!value) return;

  if (scanData.includes(value)) {
    if (fromCamera) {
      const now = Date.now();
      if (lastCameraValue === value && now - lastCameraAt < 3000) return;
      lastCameraValue = value;
      lastCameraAt = now;
    } else {
      alert("This Barcode Already Added");
      input.value = "";
      input.focus();
    }
    return;
  }

  scanData.push(value);
  saveData();
  renderData();
  input.value = "";
  if (!fromCamera) input.focus();
  statusText.textContent = "Saved: " + value;
}

function renderData() {
  total.textContent = scanData.length;
  list.replaceChildren();

  scanData.forEach((value, index) => {
    const row = document.createElement("h1");
    row.className = "item bs-1 my-8 py-5 px-15 brs-3";
    row.innerHTML = `${index + 1}. <span class="ls-1">${value}</span>`;
    list.appendChild(row);
  });
}

input.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    event.preventDefault();
    addBarcode(input.value);
  }
});

document.getElementById("addButton").addEventListener("click", () => addBarcode(input.value));

async function startCamera() {
  if (scanning) return;

  if (!("BarcodeDetector" in window)) {
    statusText.textContent = "This browser not Supported Camera BarcodeDetector. You can use External scanner or Manual Input";
    alert("This browser no built-in BarcodeDetector. Use Update version at Android Chrome");
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert("For Camera use need HTTPS or localhost");
    return;
  }

  try {
    const supported = await BarcodeDetector.getSupportedFormats();
    const preferred = ["code_128", "code_39", "ean_13", "ean_8", "upc_a", "upc_e", "qr_code", "itf", "codabar"];
    const formats = preferred.filter(format => supported.includes(format));
    detector = new BarcodeDetector({ formats: formats.length ? formats : supported });

    stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { facingMode: { ideal: "environment" } }
    });

    video.srcObject = stream;
    await video.play();
    scanning = true;
    statusText.textContent = "Camera is on — Keep front Barcode";
    detectLoop();
  } catch (error) {
    statusText.textContent = "Not possible to open Camera";
    alert("Camera Error: " + (error.message || error));
    stopCamera();
  }
}

async function detectLoop() {
  if (!scanning || !detector) return;

  try {
    if (video.readyState >= 2) {
      const results = await detector.detect(video);
      for (const result of results) {
        if (result.rawValue) addBarcode(result.rawValue, true);
      }
    }
  } catch (error) {
    // Ignore a single frame detection error and continue scanning.
  }

  if (scanning) requestAnimationFrame(detectLoop);
}

function stopCamera() {
  scanning = false;
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
    stream = null;
  }
  video.pause();
  video.srcObject = null;
  statusText.textContent = "Camera have off";
}

document.getElementById("startCamera").addEventListener("click", startCamera);
document.getElementById("stopCamera").addEventListener("click", stopCamera);

async function copyAll() {
  if (!scanData.length) {
    alert("Data not found!");
    return;
  }

  const text = scanData.join("\n");
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const temp = document.createElement("textarea");
      temp.value = text;
      temp.style.position = "fixed";
      temp.style.opacity = "0";
      document.body.appendChild(temp);
      temp.focus();
      temp.select();
      const ok = document.execCommand("copy");
      temp.remove();
      if (!ok) throw new Error("Copy failed");
    }
    alert("All Data Coppied");
  } catch {
    alert("Copy Not Possible - Please check Browser clipboard permission");
  }
}

document.getElementById("copyButton").addEventListener("click", copyAll);

document.getElementById("clearButton").addEventListener("click", () => {
  if (!confirm("Are you sure all data Remove ?")) return;
  scanData = [];
  localStorage.removeItem(STORAGE_KEY);
  renderData();
});

window.addEventListener("pagehide", stopCamera);
renderData(); 

}


