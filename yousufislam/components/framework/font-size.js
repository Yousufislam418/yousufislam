import { mainContents, styleHeading } from "./framework.js";

const font_size_data = [
 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
 31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,
 61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,85,90,95,100,105,110,115,120,125,
 130,135,140,145,150,155,160,165,170,175,180,190,200,210,220,230,240,250,260,270,280,290,300
];

export default function FontSize() { 
 return(
 mainContents(

 styleHeading('Font Size','Styles px','Styles rem') +
 
 font_size_data.map((font_size,index) =>
 `<section>
  <div> 
   <div class="flex justify-evenly py-10">
    <div class="w-180">
     <span class="font-size-id fs-20 navy-8 bold">fs-${font_size}</span>
    </div>
    <div class="w-180">
     <span class="fs-18 navy-5">font-size: ${font_size}px</span>
    </div>
    <div class="w-180">
     <span class="fs-18 navy-5">font-size: ${font_size * 0.0625}rem</span>
    </div>
   </div>
   <p class="w-98-pr h-1 mx-auto bg-cyan-2"></p>
  </div>
 </section>`
 ).join('')
 )
 )
}
