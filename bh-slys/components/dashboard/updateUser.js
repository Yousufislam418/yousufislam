import { dbUrl, Reload } from "../../function/function.js";

export function UpdateUserData(token,userId){
 return(
   fetch(`${dbUrl}/users/${userId}`,{
  method: "GET",
  headers: {'Authorization':`Bearer ${token}`}
 }).then((res)=> res.json()).then((datas)=>
  document.body.innerHTML = `
   <section>
    <div class="center-x mt-30">
     <div id="update-form-data" class="form w-80-pr"> 
      <div class="text-center">
       <h1 class="aqua-7 fs-30">Update user</h1>
      </div>
      <div class="">
       <p class="mt-10 pl-5 bold-580 pb-4">Name:</p>
       <input type="text" id="name" class="input" value="${datas?.name}">
       <p class="mt-8 pl-5 bold-580 pb-4">Email:</p>
       <input type="email" id="email" class="input" value="${datas?.email}">
       <p class="mt-8 pl-5 bold-580 pb-4">Number:</p>
       <input type="number" id="number" class="input" value="${datas?.number}">
       <p class="mt-8 pl-5 bold-580 pb-4">Location:</p>
       <input type="text" id="location" class="input" value="${datas?.location}">
       <p class="mt-8 pl-5 bold-580 pb-4">Age:</p>
       <input type="number" id="age" class="input" value="${datas?.age}">
       <div class="text-center">
        <button id="updateBtn" class="update-form-btn text-center btn-md danger mt-20">Update</button>
       </div>
      </div>
     </div>
    </div>
   </section>`
)
), // return end

 document.body.onclick =(even)=>{
   if(even.target.classList.contains('update-form-btn')){
    console.log('ok');

 const name = document.getElementById('name').value;
 const email = document.getElementById('email').value;
 const number = document.getElementById('number').value;
 const location = document.getElementById('location').value;
 const age = document.getElementById('age').value;
 
 if(!name ||!email ||!number ||!location ||!age) return alert('All Failed are required');

 const datas = {name, email, number, location, age};

 fetch(`${dbUrl}/users/${userId}`,{
    method: "PUT",
    headers: {'content-type':'application/json'},
    body: JSON.stringify(datas)
 }).then((res)=> res.json()).then((data)=>{
    console.log(data);

 if(data._id){
    alert('Update Successfully');
    Reload();
 }
 });
 }  
 }

} // UpdateUserData function end


// UpdateUserPassword Start
export function UpdateUserPassword(userId){
 return(
  document.body.innerHTML = `
   <section>
    <div class="center-x mt-30">
     <div id="update-form-data" class="form w-80-pr"> 
      <div class="text-center">
       <h1 class="aqua-7 fs-30">Update user</h1>
      </div>
      <div class="">
       <p class="mt-10 pl-5 fs-20 green bold-580 pb-4">New Password:</p>
       <input type="text" id="password" class="input" placeholder="New Password">
       <p class="mt-8 pl-5 fs-20 green bold-580 pb-4">Re-type Password:</p>
       <input type="text" id="re-password" class="input" placeholder="Re-Password">
       <div class="text-center">
        <button id="updateBtn" class="update-pass-form-btn text-center btn-md danger mt-20">Update Password</button>
       </div>
      </div>
     </div>
    </div>
   </section>`

), // return end

 document.body.onclick =(even)=>{
  if(even.target.classList.contains('update-pass-form-btn')){
   
 const newPassword = document.getElementById('password').value;
 const rePassword = document.getElementById('re-password').value;
 if(!newPassword ||!rePassword){
   alert('All Failed are required');
   return;
 }else if(newPassword !== rePassword){
   alert('Password not match');
   return;
 }else if(newPassword === rePassword){ 
     const datas = {password: rePassword}
  fetch(`http://localhost:3003/users-pass/${userId}`,{
    method: "PUT",
    headers: {'content-type':'application/json'},
    body: JSON.stringify(datas)
 }).then((res)=> res.json()).then((data)=>{
    console.log(data);

  if(data._id){
    alert('Password Update Successfully');
    Reload();
 }
 });
 }
 }  
 }

} // UpdateUserPassword function end


