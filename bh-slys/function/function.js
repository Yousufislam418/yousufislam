
// bh-slys-server url
export const dbUrl = 'https://bh-slys-server.vercel.app';

// Show hide Elements
export function showElementById(element){
   const elementId = document.getElementById(element);
    elementId.classList.remove('none');
}
export function hideElementById(element){
   const elementId = document.getElementById(element);
    elementId.classList.add('none');
} 

// Copy Element by id value
export function copyElementByIdValue(element) {
 const elementId = document.getElementById(element);
  navigator.clipboard.writeText(elementId.value);
}
// Copy Element by id innerText
export function copyElementByIdInnerText(element) {
 const elementId = document.getElementById(element);
  navigator.clipboard.writeText(elementId.innerText);
}

// Date Time Management
 function dateTimes() {
  const dates = Date.now();
  const dateTime = new Date();
  const date = dateTime.toDateString();
  const time = dateTime.toLocaleTimeString();
  const year = dateTime.getFullYear();
  const month = dateTime.getMonth() + 1;
  const day = dateTime.getDay();
  const minutes = dateTime.getMinutes();
  const seconds = dateTime.getSeconds();
  const miliseconds = dateTime.getMilliseconds();

 return {dates, date, time, year, month, day, minutes, seconds, miliseconds}
}
export const {dates, date, time, year, month, day, minutes, seconds, miliseconds} = dateTimes(); 
//----------------------------------------------------------------------------------------------->

// Cookie getToken
export function getCookieToken(){
  const match = document.cookie.match(new RegExp('(^| )'+'token'+'=([^;]+)'));
  if(match){
    return match[2];
  }else{
    return null;
  }
}

// Current local user data 
export function currentLocalUser(){
  if(localStorage.getItem('user-datas')){
    return JSON.parse(localStorage.getItem('user-datas'));
  }else{
    return 0;
  }
}


// Get All User data ----------------------------------->
 let users = null;
export async function userDatas() {
  if (users) {
    return users;
  }
  try {
    const res = await fetch(`${dbUrl}/users`); 
    if (!res.ok) throw new Error('User fetch failed');
    users = await res.json();
    return users;
  } catch (err) {
    console.error('Error fetching user:', err);
    return null;
  }
}


// Location Reload
export function Reload(){
  location.reload();
}



 