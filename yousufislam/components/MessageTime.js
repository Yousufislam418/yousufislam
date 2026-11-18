export default function MessageTime(sms , time = 3) {
 document.body.insertAdjacentHTML('beforeend',`
  <section id="messageTimeSection" class="wp-100 z-30 pos-absolute left-0 top-0"> 
   <div class="container d-flex justify-center mt-130">
    <div class="content wp-80"> 
      <div class="text-center"> 
       <span class="bg-base fs-30 fw-580 p-20 brs-10 bs-5">${sms}</span>
      </div>
    </div> 
   </div> 
  </section>`); 

 const times = time * 1000;

  MessageTimeSet(times);

}

function MessageTimeSet(times) {
 setTimeout(()=> { 
  document.body.removeChild(document.getElementById('messageTimeSection'));
 }, times);
}