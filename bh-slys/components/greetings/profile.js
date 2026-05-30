import { currentLocalUser } from "../../function/function.js";


export default function Profile(){
 return(`
  <section id="accounts-section" class="none">
   <div class="container bg-base">
    <div class="content p-20">
 <div id="accounts-data" class="">
 ${
 document.addEventListener('DOMContentLoaded', async()=> {
  const {name,email,number,location,age,image,id} =  currentLocalUser();
 document.getElementById('accounts-data').innerHTML = `
 <div class="lg-flex bg-teal-3 p-20 radius-5 shadow-5">
  <div>
 <h3 class="navy fs-30 p-10 m-3 border-1 -gray-1 radius-5">Name : ${name? name: ''}</h3>
 <h5 class="navy fs-25 p-10 m-3 border-1 -gray-1 radius-5">Email : ${email? email :''}</h5>
 <h5 class="navy fs-25 p-10 m-3 border-1 -gray-1 radius-5">Number : ${number? number :''}</h5>
 <h5 class="navy fs-25 p-10 m-3 border-1 -gray-1 radius-5">Country : ${location? location :''}</h5>
 <h5 class="navy fs-25 p-10 m-3 border-1 -gray-1 radius-5">Age : ${age? age :''}</h5>
 <h5 class="navy fs-25 p-10 m-3 border-1 -gray-1 radius-5">id : ${id? id :''}</h5>
 </div>
 <img class="w-300 p-20 radius-5 shadow-3 m-5" src=${image? image :''}>
 </div>` 
 
 })
 }
 </div>
    </div>
   </div>
  </section>
 `);
}
