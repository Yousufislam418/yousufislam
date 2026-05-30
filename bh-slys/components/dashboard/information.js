import { dbUrl, getCookieToken } from "../../function/function.js";
import {UpdateUserData, UpdateUserPassword} from "./updateUser.js";
const edit = "./../../../icons/edit.png";
const pass = "./../../../icons/pass.png";

export default function Information(){ 
 return(`
  <section>
   <div class="flex flex-wrap">
    <div class="p-20 m-20 border-1 -blue-1 radius-10 shadow-3">
<!------------------------->
  <div class="m-10">
   <button id="users-manage" class="btn-lg">Users manage</button>
  </div>
  <div class="m-10">
   <button class="btn-lg">Other</button>
  </div>
<!------------------->
    </div>
   </div>
  </section>
 `);
}


document.addEventListener('DOMContentLoaded',()=>{ 
 document.getElementById('users-manage').onclick =()=>{ 
 const usersFunction =()=>{

 const token = getCookieToken(); 

   fetch(`${dbUrl}/users`,{
      method: "GET",
      headers: {'Authorization':`Bearer ${token}`}
    }).then((res)=> res.json()).then((users)=>{  

  const userList = users.map((user,index)=>
   `<tr class="fs-20 bg-aqua-1">
     <td class="p-5">${index +1}</td>
     <td class="p-5">${user.name}</td>
     <td class="p-5">${user.email}</td>
     <td class="p-5">${user.number}</td>
     <td class="p-5">${user.location}</td>
     <td class="center gap-10 py-10">
      <img class="update-user bg-blue-5 p-3 radius-3 pointer w-25 h-25" user-id="${user._id}" src=${edit}>
      <img class="update-user-password bg-green-5 radius-3 p-3 pointer w-25 h-25" user-id="${user._id}" src=${pass}>
      <p class="delete-user btn-sm danger" user-id="${user._id}">&times</p>
     </td>
    </tr>`
   ).join("");
      
  document.body.innerHTML = `
 <section class="mx-30 bg-gray-1 radius-10 shadow-10">
  <div class="p-10 mt-3 align-items-center flex justify-between">
   <h1>Total users: ${users.length}</h1>
   <a class="fs-30 red" href="dashboard.html">&times</a>
  </div>
<!----All users show in table--->
  <div class="">
   <table id="table-data" class="w-100-pr p-10 radius-10">
    <thead class="bg-green-3">
     <tr class="">
      <th class="p-8">Serial</th>
      <th class="p-8">Name</th>
      <th class="p-8">Email</th>
      <th class="p-8">Number</th>
      <th class="p-8">Location</th>
      <th class="p-8">Action</th>
     </tr>
    </thead>
    <tbody">
     ${userList}
    </tbody>
   </table>
  </div>
 </section>`;

  

// Table data onclick
const tableData = document.getElementById('table-data');
    tableData.onclick =(even)=>{

   if(even.target.classList.contains('delete-user')){
    const userId = even.target.getAttribute('user-id');

    const prm = prompt('Type yes');
     if(prm === 'yes'){
      fetch(`${dbUrl}/users/${userId}`,{
        method: "DELETE",
        headers: {'content-type':'application/json'}
      }).then((res)=> res.json()).then((data)=>{
        console.log(data);
        usersFunction();
      });
     }  
   }  

  // User Update
 if(even.target.classList.contains('update-user')){
  const userId = even.target.getAttribute('user-id');
// get user-data match id
  UpdateUserData(userId);
 }// update user if condition end

  // User Update Password
 if(even.target.classList.contains('update-user-password')){
  const userId = even.target.getAttribute('user-id');
// get user-data match id
  UpdateUserPassword(userId);
 }// update user if condition end



 }// table data onclick end  


  
 });// fetch end


   
  }// userFunction end
  usersFunction();  

 
 } // onClick to user manage end
}); // DOM end






