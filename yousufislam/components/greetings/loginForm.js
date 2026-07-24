import { dbUrl, hideElementById, Reload, showElementById } from "../../function/function.js";
import Message from "../shares/message.js";

export default function LoginForm(){
 return(
  `<section id="loginForm-section" class="none">
   <div class="container bg-base p-30">
    <div class="form-content">
 <form id="login-form-data" class="form w-80-pr">
  <div class="text-center">
   <h1 class="aqua-8 fs-25">Login</h1>
  </div>
  <div class="mt-8">
   <input class="input" type="text" name="email" placeholder="Email">
  </div>
  <div class="mt-8">
   <input class="input" type="password" name="password" placeholder="Password">
  </div>
  <div class="mt-30 text-center">
   <input type="submit" class="btn-md danger w-50-pr" value="Login">
  </div>
  <div class="mt-15 text-end">
   <p class="fs-18 white">You have no account?
    <span id="goRegisterBtn" class="aqua fs-20 bold pointer ml-10">Register</span></p>
  </div>
 </form>
    </div>
   </div>
  </section>`
 );
};

document.addEventListener('DOMContentLoaded', ()=>{ 
 const formDatas = document.getElementById('login-form-data');
 formDatas.onsubmit =(even)=>{ 
  even.preventDefault();
  const formData = new FormData(formDatas);
  const datas = Object.fromEntries(formData.entries());
  const {email, password} = datas;

  if(!email || !password){
    return Message('All failed are Required');
  }else{
  fetch(`${dbUrl}/login`,{
    method: "POST",
    headers: {'content-type':'application/json'},
    body: JSON.stringify({email,password})
  }).then((res)=> res.json()).then((data)=>{
  const expires = new Date(Date.now()+ 2592000000).toUTCString();
  document.cookie = `token=${data.token}; expires=${expires}; path=/;`;

// user data store localStorage
 fetch(`${dbUrl}/profile`,{
  method: "GET",
  headers: {'Authorization':`Bearer ${data.token}`}
 }).then((res)=> res.json()).then((currentUser)=>{
  if(currentUser.error){
    Message('Email or password not matched');
  }else if(currentUser._id){
    const {name, number, email, location, image, age, date, _id} = currentUser;
    const userDatas = {name,number,email,location,image,age,date,id:_id};
    localStorage.setItem('user-datas', JSON.stringify(userDatas));
    Message('Data added Successfully...');
    Reload();
    document.getElementById('accounts-section').classList.remove('none');
    document.getElementById('loginForm-section').classList.add('none');
  }
 });// profile get data then and
 }); // login then data end
 }// else end
 }// form onSubmit end

//  Login section hide : Register section show
 document.getElementById('goRegisterBtn').onclick =()=>{ 
   hideElementById('loginForm-section');
   showElementById('registerForm-section');  
 }

});