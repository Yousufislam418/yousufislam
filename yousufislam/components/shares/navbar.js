import { currentLocalUser } from "../../function/function.js";
import Message from "./message.js";

const yousufimage = "../../images/yousuf.jpg";
const proImg = '../../icons/profile.png';

export const nabItems = `
   <li class="p-3"><a class="white" href="home.html">Home</a><li>
   <li class="p-3"><a class="white" href="tools.html">Tools</a><li>
   <li class="p-3"><a class="white" href="framework.html">Framework</a><li>
   <li class="p-3"><a class="white" href="components.html">Components</a><li>
   <li class="p-3"><a class="white" href="video.html">Video</a><li>
   <li class="p-3"><a class="white" href="about.html">About</a><li>`; 


export function NavBar(){ 
 return( `
   <section>
    <div class="content min-h-45 bg-base-3 flex justify-between align-items-center">
  <!----------------------------------->
    <div class="flex">
     <div class="brand-img m-10">
     <a href="home.html">
      <img class="w-40 h-40 radius-3" src="${yousufimage}">
     </a>
     </div>    
    </div>
  <!--------------------Main-menu--------------->
     <div class="nav-items">
      <div class="flex">
       <ul class="flex flex-wrap align-items-center p-3 gap-5 fs-15 md-fs-20 bold-600">
         ${nabItems} 
        <li id="profile-image-box" class="center-y"> 
 <!----profile image load------>
        </li>
       </ul>
      </div>
     </div> 
    </div>
   </section>` 
  );
}


 document.addEventListener('DOMContentLoaded',async()=>{
 const {number,email,image} =  currentLocalUser();
  
  const profileImageBox = document.getElementById('profile-image-box');
   profileImageBox.innerHTML = `
  <img class="w-30 h-30 mr-10 round border-2 -white pointer"
   src=${image? image : proImg}>`;
// Profile image box onClick Start
 profileImageBox.onclick =()=>{
  const section = document.createElement('section');
  section.className = 'absolute top-10 right-10';
  document.body.appendChild(section);
  section.innerHTML = `
   <div class="bg-white shadow-10 radius-10 p-30 m-15">
    <div class="text-center">
     <div>
      <img class="w-100 h-100 round bg-blue-3 border-3 -aqua-3" src=${image? image : proImg}>
     </div>
     <li><a class="fs-20 bold-500 blue" href="greetings.html">Account details</a></li>
    </div>
    <div class="text-center mt-10">
     <ul>
     ${ number === '01734043322' || email === 'yousufislamaps@gmail.com' ?
     `<li class="py-5"><a class="fs-25 navy bold" href="dashboard.html">Dashboard</a></li>` : ''
     }
      ${ email ? 
            `<li id="logoutBtn" class="mt-5 fs-25 blue bold-600 pointer">Logout</li>`:
            `<li class="mt-5"><a class="fs-25 blue" href="greetings.html">Login</a></li>`
       }
     </ul>
    </div>
   </div>`;
  
// Logout btn onclick : cookie token and lsData delete
 const logoutBtn = document.getElementById('logoutBtn');
 if(logoutBtn){
 logoutBtn.onclick =()=>{
  const exdate = 'Mon, 14 Jul 2025 20:48:38 GMT';
 const response = document.cookie = `userid=; expires=${exdate}; path=/;`;
 if(response){
  Message('User Logout - now Load Home page');
  localStorage.removeItem('user-datas');
  location.assign('home.html');
 } 
 };
 }// if end

 section.onclick =()=> {
  section.remove();
 }

 }// profile img onclick end




 });
 
