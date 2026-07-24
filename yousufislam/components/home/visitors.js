import { dbUrl } from "../../function/function.js";

const likeIcon = '../../icons/like.png';

export default function Visitors(){
 return(` 
 <section class="bg-base-3 my-30 py-40">
  <div>
   <div class="flex justify-center">
    <div class="flex align-items-center">
     <span class="fs-25 black-3">Total Likes:</span>
     <span id="like-data-display" class="fs-50 cyan bold ml-10">0</span>
     <img id="visitor-like-id" class="w-35 pointer none active ml-20" src="${likeIcon}">
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
