import sectionHeading from "../shares/sectionHeading.js";

const bannerImg = "../../images/service-provider.jpg";
const bannerTitle = "Comming soon our service";
const bannerPara = "We are trying very soon bring a good service";

export default function Banner(){ 
 return(`
 <section class=""> 
  <div>${sectionHeading(bannerTitle, bannerPara)}</div> 
  <div class="text-center pb-30">
   <img class="w-98-pr radius-3" src="${bannerImg}">
  </div>
 </section>`
 );
}
