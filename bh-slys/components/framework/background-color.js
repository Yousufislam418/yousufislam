import { mainContents, styleHeading } from "./framework.js";

const background_color = [
    'bg-red-1','bg-red-2','bg-red-3','bg-red-4','bg-red-5','bg-red-6','bg-red-7','bg-red-8','bg-red',
    'bg-green-1','bg-green-2','bg-green-3','bg-green-4','bg-green-5','bg-green-6','bg-green-7','bg-green-8','bg-green',
    'bg-blue-1','bg-blue-2','bg-blue-3','bg-blue-4','bg-blue-5','bg-blue-6','bg-blue-7','bg-blue-8','bg-blue',
    'bg-black-1','bg-black-2','bg-black-3','bg-black-4','bg-black-5','bg-black-6','bg-black-7','bg-black-8','bg-black',
    'bg-yellow-1','bg-yellow-2','bg-yellow-3','bg-yellow-4','bg-yellow-5','bg-yellow-6','bg-yellow-7','bg-yellow-8','bg-yellow',
    'bg-aqua-1','bg-aqua-2','bg-aqua-3','bg-aqua-4','bg-aqua-5','bg-aqua-6','bg-aqua-7','bg-aqua-8','bg-aqua',
    'bg-sky-1','bg-sky-2','bg-sky-3','bg-sky-4','bg-sky-5','bg-sky-6','bg-sky-7','bg-sky-8','bg-sky',
    'bg-gray-1','bg-gray-2','bg-gray-3','bg-gray-4','bg-gray-5','bg-gray-6','bg-gray-7','bg-gray-8','bg-gray',
    'bg-cyan-1','bg-cyan-2','bg-cyan-3','bg-cyan-4','bg-cyan-5','bg-cyan-6','bg-cyan-7','bg-cyan-8','bg-cyan',
    'bg-violet-1','bg-violet-2','bg-violet-3','bg-violet-4','bg-violet-5','bg-violet-6','bg-violet-7','bg-violet-8','bg-violet',
    'bg-pink-1','bg-pink-2','bg-pink-3','bg-pink-4','bg-pink-5','bg-pink-6','bg-pink-7','bg-pink-8','bg-pink',
    'bg-lime-1','bg-lime-2','bg-lime-3','bg-lime-4','bg-lime-5','bg-lime-6','bg-lime-7','bg-lime-8','bg-lime',
    'bg-tomato-1','bg-tomato-2','bg-tomato-3','bg-tomato-4','bg-tomato-5','bg-tomato-6','bg-tomato-7','bg-tomato-8','bg-tomato',
    'bg-teal-1','bg-teal-2','bg-teal-3','bg-teal-4','bg-teal-5','bg-teal-6','bg-teal-7','bg-teal-8','bg-teal',
    'bg-olive-1','bg-olive-2','bg-olive-3','bg-olive-4','bg-olive-5','bg-olive-6','bg-olive-7','bg-olive-8','bg-olive',
    'bg-orange-1','bg-orange-2','bg-orange-3','bg-orange-4','bg-orange-5','bg-orange-6','bg-orange-7','bg-orange-8','bg-orange',
    'bg-navy-1','bg-navy-2','bg-navy-3','bg-navy-4','bg-navy-5','bg-navy-6','bg-navy-7','bg-navy-8','bg-navy',
    'bg-fuchsia-1','bg-fuchsia-2','bg-fuchsia-3','bg-fuchsia-4','bg-fuchsia-5','bg-fuchsia-6','bg-fuchsia-7','bg-fuchsia-8','bg-fuchsia',
    'bg-purple-1','bg-purple-2','bg-purple-3','bg-purple-4','bg-purple-5','bg-purple-6','bg-purple-7','bg-purple-8','bg-purple',
    'bg-base-1','bg-base-2','bg-base-3','bg-base-4','bg-base-5','bg-base-6','bg-base-7','bg-base-8','bg-base'
  ];
  
export default function BackgroundColor() { 
 return(
 mainContents( 
  
 styleHeading('Background Color','','Result') +

 background_color.map((bgData) => 
  `<p class="w-80-pr mx-auto h-1 bg-lime-1"></p>
      <div id="test" class="py-10 m-1 flex justify-between white">
      <div class="ml-80 align-center">
       <h1 class="fs-23 bold black-5">${bgData}</h1>
      </div>
      <div class="mr-50">
       <h1 class="${bgData} w-100 h-30 py-10"></h1>
      </div>
      </div>`
   ).join('')
  )
 );
}
  