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

 <div> 
<div id="reader" style="width:100%"></div>

<button id="startBtn">Start Scan</button>
<button id="stopBtn">Stop Camera</button>
<button id="copyBtn">Copy All</button>

<div id="scanList"></div>
</section>`);   


} 


export function SingleScanEvent() { 

let scanner = new Html5Qrcode("reader"); 

 const startBtn = document.getElementById('startBtn');
 const stopBtn = document.getElementById('stopBtn');
 const copyBtn = document.getElementById('copyBtn');

let scanData = JSON.parse(
    localStorage.getItem("ScanData") || "[]"
);


// Start Scanner
async function StartScan() {

    try {

        await scanner.start(
            { facingMode: "environment" },

            {
                fps: 10,
                qrbox: { width: 250, height: 150 }
            },

            (value) => {

                // Duplicate Check
                if (scanData.includes(value)) {

                    alert("This Barcode Already Exists!");

                    return;
                }

                // Save New Data
                scanData.push(value);

                localStorage.setItem(
                    "ScanData",
                    JSON.stringify(scanData)
                );

                ShowData();

            },

            () => {}
        );

    } catch (error) {

        alert("Camera Error: " + error);

    }
}

 startBtn.addEventListener("click", ()=> {
   StartScan();
 });

// Stop Camera
async function StopScan() {

    if (scanner.isScanning) {
        await scanner.stop();
    }

}

 stopBtn.addEventListener("click", ()=> {
   StopScan();
 });




// Show All Data
function ShowData() {

    document.getElementById("scanList").innerHTML =
        scanData.map((value, index) => `
            <p>${index + 1}. ${value}</p>
        `).join("");

}


// Copy All Data
async function CopyData() {

    if (scanData.length === 0) {

        alert("No Data Found!");

        return;
    }

    await navigator.clipboard.writeText(
        scanData.join("\n")
    );

    alert("All Data Copied Successfully!");

}

 copyBtn.addEventListener("click", ()=> {
   CopyData();
 });


// Load Existing Data
ShowData();

// External Scanner Device
document.getElementById("barcodeInput")
.addEventListener("keydown", function(e) {

    if (e.key === "Enter") {

        e.preventDefault();

        AddBarcode();

    }

}); 





// Add Barcode Method
function AddBarcode() {

    let input = document.getElementById("barcodeInput");

    let value = input.value.trim();

    if (!value) return;

    // Duplicate Check
    if (scanData.includes(value)) {

        alert("Barcode Already Exists!");

        input.value = "";

        return;
    }

    // Save Data
    scanData.push(value);

    localStorage.setItem(
        "ScanData",
        JSON.stringify(scanData)
    );

    input.value = "";

    ShowData();

}
}

