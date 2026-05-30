import { side_menu_data } from "./side-menu-data.js";
import pageManagement from './page-management.js';

const home = 'https://i.ibb.co/gbTLsTMj/home.png';

export function initMenuEvents(){
   document.addEventListener('click',(e)=> {
      if(e.target.matches('#menu-btn')){
       const index = e.target.dataset.index;
       console.log(index);
   pageManagement(index);
       
      }
   })
}
initMenuEvents();


export function MainSection(){ 
 return(`
 <section class="pb-50">
  <div>
   <div class="flex">
<!-----------------------------------side-menu------------------------------>
 <section class="min-w-230 w-280 sm-none md-flex">
  <div class="w-100-pr">
   <div id="side-menu-id" class="h-580 overflow-y-auto"> 
<!------->
 <div class="center bg-red w-100-pr">
   <img id="menu-btn" data-index="home" class="w-30 pointer mr-20" src="${home}">
   <h1 class="yellow py-10 text-center fs-30 pl-5">Properties</h1>
 </div>
<!-------side menu List show display------>
 ${ side_menu_data.map((smData,index)=>
  `<div class="py-8 bg-base border-1 -black-1">
   <button id="menu-btn" class="btn-sm focus shadow-0 ml-10 my-1" data-index="${index}">${smData}</button>
  </div>`
  ).join('')
  
 }

 

<!------------------------>
   </div>
  </div>
 </section>
<!-----------------------------------main-content---------------------------->
 <section id="myDiv" class="bg-sky-3 w-800 min-w-380 h-580 overflow-y-auto">
  <div class="mx-10">
   <div id="main-content-id" class="bg-white">
<!--------------------------->
   </div>
  </div>
 </section>
<!-----------------------------------Right-content---------------------------->
 <section class="">
  <div class="">
   <div id="" class="p-20 border-1 -red-1">
<!--------------------------->
   </div>
  </div>
 </section>
   </div>
  </div>
 </section>
 `);
 
}


// for Dynamic Title
export function styleHeading(title,one,two){
 return(
 `<div class="text-center bg-navy-8">
    <h1 class="fs-30 py-10 bold tomato">${title}</h1>
  </div>
  <div class="flex justify-evenly bg-teal-3">
   <div class="w-180"><h1 class="fs-23 py-10 bold blue">Class</h1></div>
   <div class="w-180"><h1 class="fs-23 py-10 bold blue">${one}</h1></div>
   <div class="w-180"><h1 class="fs-23 py-10 bold blue">${two}</h1></div>
  </div>`
 );
} 

// Get main element id and content Load by inner html
export function mainContents(contents){
  document.getElementById('main-content-id').innerHTML += contents;
}




