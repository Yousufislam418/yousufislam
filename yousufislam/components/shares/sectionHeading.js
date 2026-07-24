export default function sectionHeading(heading = '', subHeading = ''){
  const headingSubheading = ` 
   <section class="py-25"> 
    <div>
     <div class="text-center">
      <h1 class="fs-20 md-fs-28 lg-fs-38 blue-5">${heading}</h1>
     </div>
     <div class="text-center mt-8">
      <p class="navy-5 fs-18">${subHeading}</p>
     </div>
    </div>
   </section>`;
  return headingSubheading;
}
