export default function sectionHeading(heading = '', subHeading = ''){
  const headingSubheading = ` 
   <section class="bg-base py-2"> 
    <div>
     <div class="text-center">
      <h1 class="fs-30 mb-0 clr-navy">${heading}</h1>
     </div>
     <div class="text-center mt-8">
      <p class="clr-navy fs-18">${subHeading}</p>
     </div>
    </div>
   </section>`;
  return headingSubheading;
}
