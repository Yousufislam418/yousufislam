import { mainContents, styleHeading } from "./framework.js";

const grid_datas = [
 'grid-template-columns: repeat(1, minmax(0, 1fr))',
 'grid-template-columns: repeat(2, minmax(0, 1fr))',
 'grid-template-columns: repeat(3, minmax(0, 1fr))',
 'grid-template-columns: repeat(4, minmax(0, 1fr))',
 'grid-template-columns: repeat(5, minmax(0, 1fr))',
 'grid-template-columns: repeat(6, minmax(0, 1fr))',
 'grid-template-columns: repeat(7, minmax(0, 1fr))',
 'grid-template-columns: repeat(8, minmax(0, 1fr))',
 'grid-template-columns: repeat(9, minmax(0, 1fr))',
 'grid-template-columns: repeat(10, minmax(0, 1fr))',
 'grid-template-columns: repeat(11, minmax(0, 1fr))',
 'grid-template-columns: repeat(12, minmax(0, 1fr))',
];


export default function Grid() {
 return(
 mainContents(
  
 styleHeading('Grid','','Style') +
 grid_datas.map((grid_data,index)=> 
 `<section>
   <div> 
    <div class="flex justify-around py-10">
    <div class="">
      <span class="fs-18 navy-5">grid-cols-${index + 1}</span>
    </div>
    <div class="">
     <span class="fs-18 navy-5">${grid_data}</span>
    </div>
    </div>
     <p class="w-98-pr h-1 mx-auto bg-cyan-2"></p>
    </div>
  </section>`
   ).join('') 
  )
 );
}

