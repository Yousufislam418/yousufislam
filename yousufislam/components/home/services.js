import sectionHeading from "../shares/sectionHeading.js";

const serviceHeading = 'Our Services';
const serviceSubheading = 'We are provides all Services for free';

// Services data
const services = [
     {    id : 1,
          title : 'Landing Page',
          image : '../../images/Landing-page.jpg',
          url : 'https://todayfreelancing.net/yousuf'
     },
     {  
          id : 2,
          title : 'Portfolio Website',
          image : '../../images/portfolio.jpg',
          url : 'https://wpportfolio.net/website-portfolio'
     },
     {  
          id : 3,
          title : 'Framework',
          image : '../../images/framework.jpg',
          url : 'framework.html'
     },
     {  
          id : 4,
          title : 'Components',
          image : '../../images/components.jpg',
          url : 'components.html'
     }
]; 

export default function Services(){
 return(`
  <section class="bg-base">
   <div>${sectionHeading(serviceHeading, serviceSubheading)}</div> 
   <div>
    <div id="service-data" class="grid lg-grid-cols-2 pt-20 p-20">
 ${ services.map((service)=> 
  `<div class="bg-base m-20 p-30 mx-auto radius-10 shadow-5">
     <img class="w-100-pr max-w-500 radius-10 shadow-5" src="${service.image}">
     <div class="flex justify-between mt-20 align-items-center">
      <h1 class="fs-20 lg-fs-28 blue-7">${service.title}</h1>
      <a class="btn-md sm-fs-13 danger" href="${service.url}" target="_blank">See Design</a>
     </div>
     </div>`
  ).join('')
 } 
    </div>
   </div>
  </section>
 `);
}


 
// const serviceData = document.getElementById('service-data');
// if(serviceData){
//  services.map((service,index) => { 
//   serviceData.innerHTML += `
//      <div class="bg-base m-20 p-30 mx-auto radius-10 shadow-5">
//      <img class="w-100-pr max-w-500 radius-10 shadow-5" src="${service.image}">
//      <div class="flex justify-between mt-20 align-items-center">
//       <h1 class="fs-20 lg-fs-28 blue-7">${service.title}</h1>
//       <a class="btn-md sm-fs-13 danger" href="${service.url}" target="_blank">See Design</a>
//      </div>
//      </div>`;     
//  });
// }
