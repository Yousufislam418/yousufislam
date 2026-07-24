import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } 
  from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase, set, get, ref } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";
  const firebaseConfig = {
    apiKey: "AIzaSyA13roctJjmW33HEBMNoTyfuku-AbtNth8",
    authDomain: "bh-slys.firebaseapp.com",
    databaseURL: "https://bh-slys-default-rtdb.firebaseio.com",
    projectId: "bh-slys",
    storageBucket: "bh-slys.appspot.com",
    messagingSenderId: "888579639008",
    appId: "1:888579639008:web:e775eb15f496fd3729f285"
  };

  const app = initializeApp(firebaseConfig); 
  const data = getDatabase(app);
  const auth = getAuth(app);

 export {data, get, set, ref};

// ------------- Ovserve user ------------------------>
  onAuthStateChanged(auth, currentUser => {
    const user = currentUser?.email;
    console.log(user);

    // setUser(user);
  });

// User Login form Manage
//  const loginFormBtn = document.getElementById('myLoginFormBtn');
//   if(loginFormBtn){
//     loginFormBtn.onclick = () => {
//       const formEmail = document.getElementById('email');
//       const formPassword = document.getElementById('password');
//       const email = formEmail.value;
//       const password = formPassword.value;
//       if(email === '' && password === ''){
//        alert('Must be type Email and Password');
//       }else if(email && password){
//         signInWithEmailAndPassword(auth, email, password);
//         console.log('Login Successfully...');
//       }
//     }
//   }

// Register User form Manage
//  const registerFormBtn = document.getElementById('registerFormBtn');
//   if(registerFormBtn){
//     registerFormBtn.onclick = () => {
//     const formEmail = document.getElementById('email');
//     const formPassword = document.getElementById('password');
//     const email = formEmail.value;
//     const password = formPassword.value;
//     if(email === '' && password === ''){
//      alert('Must be type Email and Password');
//     }else if(email && password){
//       createUserWithEmailAndPassword(auth, email, password);
//       console.log('Register user Successfully...');  
//     }
//   }
// }


  // Login Logout btn Handler---------------------------------->
  // const logStatus = document.getElementById('logStatus');
  //  logStatus.onclick = () => {
  //   if(logStatus.innerHTML === 'Logout'){
  //     signOut(auth);
  //     console.log('User Logout');
  //   }
  //   if(logStatus.innerHTML === 'Login'){
  //    location.assign('../layout/login.html');
  //   }
  // } 


//-Visitors Like Data Managements----------------------------------------->
// function visitorsDataManage() {
//  get(ref(data,'visitors-counter/'+'likes-data')).then((snapshot)=> { 
//   if(snapshot.exists()){
//   const dbLikeDatas = snapshot.val().datas;
//   }
// }); 
// }
// visitorsDataManage();



