import { year } from "../../function/function.js";
import {nabItems} from "./navbar.js";

const firstContent = `
  <li class="bold-600">SLYS</li>
  <li class="mt-5 mb-5">Yousuf islam</li>
  <li class="mt-5 mb-5">yousufislamaps@gmail.com</li>
  <li>01734043322</li>`;
const secondContent = `
  <li class="bold-600">Address</li>
  <li class="mt-5 mb-5">Barisal, Dhaka-Bangladesh</li>
  <li class="mt-5 mb-5">Betmore bn hat</li>
  <li>8565</li>`;

export default function Footer(){
 return(`
 <section class="bg-gray-2">
  <div class="w-95-pr mx-auto">
   <div class="md-flex justify-evenly pt-50 pb-30">
    <div class="p-15"><ul>${firstContent}</ul></div>
    <div class="p-10"><ul>${secondContent}</ul></div>
    <div class="p-10"><ul>${nabItems}</ul></div>
   </div>
  <p class="w-80-pr bg-black-2 mb-5 h-1 mx-auto"></p>
  <div class="flex justify-between px-15 py-10 bold">
   <p class="gray">Powered by : slys &copy 2025 - ${year}</p>
   <p id="country" class="gray">Bangladesh</p>
  </div>
  </div>
 <section>
 `);
}
