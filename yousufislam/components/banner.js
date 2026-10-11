import sectionHeading from "../components/sectionHeading.js";

const bannerImg = "../../images/service-provider.jpg";
const bannerTitle = "Welcome to our web page";
const bannerPara = "Please Stay with us!";

export default function Banner(){ 
 return(`
 <section class=""> 
  <div>${sectionHeading(bannerTitle, bannerPara)}</div> 
  <div class="text-center p-20">
   <img class="wp-100 brs-5" src="${bannerImg}">
  </div>
 </section>`
 );
}
