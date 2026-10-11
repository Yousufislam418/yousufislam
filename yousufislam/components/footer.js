import { year } from "../function/function.js";
import {nabItems} from "../components/navbar.js";

const firstContent = `
  <li class="fw-600">SLYS</li>
  <li class="mt-5 mb-5">Yousuf islam</li>
  <li class="mt-5 mb-5">yousufislamaps@gmail.com</li>
  <li>01734043322</li>`;
const secondContent = `
  <li class="fw-600">Address</li>
  <li class="mt-5 mb-5">Barisal, Dhaka-Bangladesh</li>
  <li class="mt-5 mb-5">Betmore bn hat</li>
  <li>8565</li>`;

export default function Footer(){
 return(`
 <section class="bg-base">
  <div class="wp-95 mx-auto">
   <div class="d-flex justify-evenly pt-50 pb-30">
    <div class="p-15"><ul class="list-none">${firstContent}</ul></div>
    <div class="p-10"><ul class="list-none">${secondContent}</ul></div>
    <div class="p-10"><ul class="list-none">${nabItems}</ul></div>
   </div>
  <p class="wp-80 bg-5 mb-5 h-1 mx-auto"></p>
  <div class="d-flex justify-space-between px-15 py-10 fw-bold">
   <p class="clr-gray">Powered by : slys &copy 2025 - ${year}</p>
   <p id="country" class="clr-gray">Bangladesh</p>
  </div>
  </div>
 <section>
 `);
}
