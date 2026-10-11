import { dbUrl } from "../function/function.js";

const likeIcon = '../../icons/like.png';

export default function Visitors(){
 return(` 
 <section class="bg-base my-30 py-40">
  <div>
   <div class="d-flex justify-center">
    <div class="d-flex items-center">
     <span class="fs-25">Total Likes:</span>
     <span id="like-data-display" class="fs-50 clr-8 fw-bold ml-10">0</span>
     <img id="visitor-like-id" class="w-35 cursor-pointer d-none active ml-20" src="${likeIcon}">
    </div>
   </div>
  </div>
 </section>
 `); 
} 



window.addEventListener('DOMContentLoaded',()=> { 

 const visitorsLikeId = document.getElementById('visitor-like-id');
 if(!localStorage.getItem('visitors-datas')){
    visitorsLikeId.classList.remove('none');
 }

  let dbId;
  let dbVisitors;
const likeDatadisplay =()=> {
 fetch(`${dbUrl}/visitors`,{
  method: "GET",
   }).then(res=> res.json()).then(datas => { 
  datas.map(data => { 
    dbId =  data._id;
    dbVisitors = data.visitors;
 document.getElementById('like-data-display').innerHTML = dbVisitors;
  });
 });
} 
likeDatadisplay();
// onclick : like btn
 visitorsLikeId.onclick =()=> {
 const newVisitors = Number(dbVisitors) + 1;
 const newData = {visitors: newVisitors, date: Date.now()};
// Update
 fetch(`${dbUrl}/visitors/${dbId}`,{
  method: "PUT",
  headers: {'content-type':'application/json'},
  body: JSON.stringify(newData)
 }).then(res=> res.json()).then(data => {
   visitorsLikeId.classList.add('none');
   localStorage.setItem('visitors-datas', true);
   likeDatadisplay();

 });
                 
 }
});
