import { dates, dbUrl, hideElementById, showElementById } from "../../function/function.js";
import Message from "../shares/message.js";

export default function UserRegisterForm(){
 return(`
  <section id="registerForm-section" class="none">
   <div class="container bg-base">
    <div class="content py-10">
<!-----------form start------------->
 <form id="form-data" class="form w-85-pr mx-auto"> 
  <div class="text-center my-8">
   <h1 class="fs-30 aqua-5">User Registration</h1>
  </div>
  <div class="mt-10">
   <input name="name" class="input" type="text" placeholder="Name">
  </div>
  <div class="mt-8">
   <input name="email" class="input" type="email" placeholder="Email">
  </div>
  <div class="mt-8">
   <input name="number" class="input" type="number" placeholder="Number">
  </div>
  <div class="mt-8">
   <input name="password" class="input" type="password" placeholder="Password">
  </div>
  <div class="mt-8">
   <input name="location" class="input" type="text" placeholder="Country">
  </div>
  <div class="mt-8">
   <input name="age" class="input" type="number" placeholder="Age">
  </div>
  <div class="mt-8">
   <input name="image" class="input" type="text" placeholder="image url">
  </div>
  <div class="mt-30 mb-10 text-center">
   <input type="submit" class="btn-md w-50-pr danger" value="Register">
  </div>
  <div class="mt-15 text-end">
   <p class="fs-18 white">already have account?
    <span id="goLoginBtn" class="aqua fs-20 bold pointer ml-10">Login</span></p>
  </div>
 </form>
<!----------form end--------------------->
    </div>
   </div>
  </section>
 `);
}

document.addEventListener('DOMContentLoaded', ()=> {
 const formDatas = document.getElementById('form-data');
 formDatas.onsubmit = (even)=> {
  even.preventDefault(); 
  const formData = new FormData(formDatas);
  const datas = Object.fromEntries(formData.entries());
  const {name,email,number,password,location,age,image} = datas;

  const userDatas = {...datas, date: dates};
 
 if(!name|| !email|| !number|| !password|| !location|| !age|| !image){
   return Message('All fieled are required');
}else{

 fetch(`${dbUrl}/register`,{
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(userDatas)
 }).then(res => res.json()).then(data => {

  console.log(data);
  

  //  formDatas.reset();
 });
}//else end
 
 }// form onSubmit end

// Login section hide : Register section show
 document.getElementById('goLoginBtn').onclick =()=>{ 
   hideElementById('registerForm-section');  
   showElementById('loginForm-section');
 }


}); // DOMContentLoaded end