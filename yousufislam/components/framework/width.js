import { mainContents, styleHeading } from "./framework.js";

const width_px_datas = [
 0,1,2,3,4,5,6,7,8,9,10,11,12,15,18,20,25,30,35,40,45,50,55,60,65,70,75,80,
 85,90,95,100,110,120,130,140,150,160,170,180,190,200,210,220,230,240,250,
 260,270,280,290,300,310,320,330,340,350,360,370,380,390,400,410,420,430,
 440,450,460,470,480,490,500,520,530,550,580,600,630,650,680,700,750,800
];
const width_percent_datas = [
 0,1,2,3,4,5,6,7,8,9,10,11,12,
 15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,98,99,100
]; 
const width_other_class_datas = `
 <h1 class="pb-10">w-min</h1>
 <h1 class="pb-10">w-max</h1>
 <h1 class="pb-10">w-fit</h1>
 <h1 class="pb-10">w-vw</h1>
 <h1 class="pb-10">w-auto</h1>
 <p class="w-98-pr h-1 mx-auto bg-cyan-2"></p>
 <h1 class="pb-10">w-1-12</h1>
 <h1 class="pb-10">w-2-12</h1>
 <h1 class="pb-10">w-3-12</h1>
 <h1 class="pb-10">w-4-12</h1>
 <h1 class="pb-10">w-5-12</h1>
 <h1 class="pb-10">w-6-12</h1>
 <h1 class="pb-10">w-7-12</h1>
 <h1 class="pb-10">w-8-12</h1>
 <h1 class="pb-10">w-9-12</h1>
 <h1 class="pb-10">w-10-12</h1>
 <h1 class="pb-10">w-11-12</h1>
 <h1 class="pb-10">w-full</h1>
 `;
const width_other_style_datas = ` 
 <h1 class="pb-10">width: min-content</h1>
 <h1 class="pb-10">width: max-content</h1>
 <h1 class="pb-10">width: fit-content</h1>
 <h1 class="pb-10">width: 100-vw</h1>
 <h1 class="pb-10">width: auto</h1>
 <p class="w-98-pr h-1 mx-auto bg-cyan-2"></p>
 <h1 class="pb-10">width: 8.333333%</h1>
 <h1 class="pb-10">width: 16.666667%</h1>
 <h1 class="pb-10">width: 25%</h1>
 <h1 class="pb-10">width: 33.333333%</h1>
 <h1 class="pb-10">width: 41.666667%</h1>
 <h1 class="pb-10">width: 50%</h1>
 <h1 class="pb-10">width: 58.333333%</h1>
 <h1 class="pb-10">width: 66.666667%</h1>
 <h1 class="pb-10">width: 75%</h1>
 <h1 class="pb-10">width: 83.333333%</h1>
 <h1 class="pb-10">width: 91.666667%</h1>
 <h1 class="pb-10">width: 100%</h1>
 `;



export default function Width(){
 return(
 mainContents(
  styleHeading('Width px','Style px','Style rem') +
width_px_datas.map((widthPxData,index) => 
 `
     <section>
      <div> 
       <div class="flex justify-evenly py-10">
        <div class="w-180">
         <span class="font-size-id fs-20 navy-8 bold">width-${widthPxData}</span>
        </div>
        <div class="w-180">
         <span class="fs-18 navy-5">width: ${widthPxData}px</span>
        </div>
        <div class="w-180">
         <span class="fs-18 navy-5">width: ${widthPxData * 0.0625}rem</span>
        </div>
       </div>
       <p class="w-98-pr h-1 mx-auto bg-cyan-2"></p>
      </div>
     </section>`
    ).join('') +

  styleHeading('Width Parcent','Style %','Style rem') +
 width_percent_datas.map((width_percent_datas,index) => 
  `<section>
      <div> 
       <div class="flex justify-evenly py-10">
        <div class="w-180">
         <span class="font-size-id fs-20 navy-8 bold">width-${width_percent_datas}-pr</span>
        </div>
        <div class="w-180">
         <span class="fs-18 navy-5">width: ${width_percent_datas}%</span>
        </div>
        <div class="w-180">
         <span class="fs-18 navy-5">width: ${width_percent_datas * 0.0625}rem</span>
        </div>
       </div>
       <p class="w-98-pr h-1 mx-auto bg-cyan-2"></p>
      </div>
     </section>` 
    ).join('') +

 styleHeading('Width other','','Style') +
   `<section>
      <div> 
       <div class="flex justify-evenly py-10">
        <div class="w-40-pr">
         <span class="font-size-id fs-12 navy-8">${width_other_class_datas}</span>
        </div>
        <div class="w-0">
         <span class=""></span>
        </div>
        <div class="w-50-pr">
         <span class="navy-5 fs-12">${width_other_style_datas}</span>
        </div>
       </div>
      </div>
     </section>`
  )
 );  
} 
