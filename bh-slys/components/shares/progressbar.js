const loadingImg = '../../images/loading.gif'; 

export function ProgressBar(){
 return(
 `<section class="center">
    <div>
      <img src="${loadingImg}" class="w-100 h-100">
      <h1>Loading...</h1>
    </div>
   </section>`
 );
}
