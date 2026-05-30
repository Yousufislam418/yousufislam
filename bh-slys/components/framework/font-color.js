import { mainContents, styleHeading } from "./framework.js";

const font_color = [
  'red-1','red-2','red-3','red-4','red-5','red-6','red-7','red-8','red',
  'green-1','green-2','green-3','green-4','green-5','green-6','green-7','green-8','green',
  'blue-1','blue-2','blue-3','blue-4','blue-5','blue-6','blue-7','blue-8','blue',
  'black-1','black-2','black-3','black-4','black-5','black-6','black-7','black-8','black',
  'yellow-1','yellow-2','yellow-3','yellow-4','yellow-5','yellow-6','yellow-7','yellow-8','yellow',
  'aqua-1','aqua-2','aqua-3','aqua-4','aqua-5','aqua-6','aqua-7','aqua-8','aqua',
  'sky-1','sky-2','sky-3','sky-4','sky-5','sky-6','sky-7','sky-8','sky',
  'gray-1','gray-2','gray-3','gray-4','gray-5','gray-6','gray-7','gray-8','gray',
  'cyan-1','cyan-2','cyan-3','cyan-4','cyan-5','cyan-6','cyan-7','cyan-8','cyan',
  'violet-1','violet-2','violet-3','violet-4','violet-5','violet-6','violet-7','violet-8','violet',
  'pink-1','pink-2','pink-3','pink-4','pink-5','pink-6','pink-7','pink-8','pink',
  'lime-1','lime-2','lime-3','lime-4','lime-5','lime-6','lime-7','lime-8','lime',
  'tomato-1','tomato-2','tomato-3','tomato-4','tomato-5','tomato-6','tomato-7','tomato-8','tomato',
  'teal-1','teal-2','teal-3','teal-4','teal-5','teal-6','teal-7','teal-8','teal',
  'olive-1','olive-2','olive-3','olive-4','olive-5','olive-6','olive-7','olive-8','olive',
  'orange-1','orange-2','orange-3','orange-4','orange-5','orange-6','orange-7','orange-8','orange',
  'navy-1','navy-2','navy-3','navy-4','navy-5','navy-6','navy-7','navy-8','navy',
  'fuchsia-1','fuchsia-2','fuchsia-3','fuchsia-4','fuchsia-5','fuchsia-6','fuchsia-7','fuchsia-8','fuchsia',
  'purple-1','purple-2','purple-3','purple-4','purple-5','purple-6','purple-7','purple-8','purple',
  'base-1','base-2','base-3','base-4','base-5','base-6','base-7','base-8','base'
];

export default function FontColor() { 

  // const mainContent = document.getElementById('main-content-id');
 return( 
 mainContents( 
  
 styleHeading('Font Color','','Result') +

 font_color.map((msData, index) =>
  `<p class="w-80-pr mx-auto h-1 bg-lime-1"></p>
    <div id="test" class="py-10 m-1 flex justify-between bg-white">
    <div class="ml-80">
     <h1 class="fs-23 bold black-5">${msData}</h1>
    </div>
    <div class="mr-80">
     <h1 class="${msData} fs-30 bold">ABC</h1>
    </div>
    </div>
  `).join('')
    
)
); 
 } 
