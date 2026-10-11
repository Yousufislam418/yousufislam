
const yousufimage = "../../images/yousuf.jpg";

export const nabItems = `
   <li class="p-3"><a class="clr-white td-none" href="home.html">Home</a><li>
   <li class="p-3"><a class="clr-white td-none" href="tools.html">Tools</a><li>
   <li class="p-3"><a class="clr-white td-none" href="framework.html">Framework</a><li>
   <li class="p-3"><a class="clr-white td-none" href="components.html">Components</a><li>
   <li class="p-3"><a class="clr-white td-none" href="video.html">Video</a><li>
   <li class="p-3"><a class="clr-white td-none" href="about.html">About</a><li>`; 


export function NavBar(){ 
 return( `
   <section>
    <div class="content min-h-45 bg-8 d-flex items-center">
  <!----------------------------------->
    <div class="d-flex">
     <div class="brand-img m-10">
     <a href="home.html">
      <img class="w-40 h-40 brs-3" src="${yousufimage}">
     </a>
     </div>    
    </div>
  <!--------------------Main-menu--------------->
     <div class="nav-items">
      <div class="d-flex">
       <ul class="d-flex flex-wrap list-none items-center p-3 gap-5 fs-18">
         ${nabItems} 
       </ul>
      </div>
     </div> 
    </div>
   </section>` 
  );
}


