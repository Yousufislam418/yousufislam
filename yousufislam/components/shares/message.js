const section = document.createElement('section');
 section.className = 'absolute top-8 right-8 z-100';
 document.body.appendChild(section);

export default function Message(message){
 const div = document.createElement('div');
  div.className = 'bg-blue shadow-5 m-10 p-15 border-2 -pink-3 radius-10';
  div.innerHTML = `<p class="white fs-20 bold-800">${message}</p>`;
  section.appendChild(div);

 const progress = document.createElement('div');
  progress.className = 'w-100-pr h-5 mt-10 bg-lime radius-1';
  progress.style.transition = 'width 8s linear';
  div.appendChild(progress);

 setTimeout(()=>{ progress.style.width = '0%'; },80);
 setTimeout(()=>{ div.remove(); },8000);

 div.onclick =()=>{ div.remove(); } 

}
