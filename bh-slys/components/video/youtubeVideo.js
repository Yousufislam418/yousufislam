import sectionHeading from "../shares/sectionHeading.js";

const video_datas = [
   {
      id: 1,
      title: 'how to remove icon "Learn more about this picture" windows 11 • Bangla tutorial • slys',
      url: 'https://youtu.be/wTeN2WcDmJs?si=4mQP159ydMi9CXNi',
      embed: 'wTeN2WcDmJs?si=OIwI3ZITdRRrBHSJ',
      description: 'nouthing'
   },
   {
      id: 2,
      title: 'How to change windows default browser and set Chrome browser Windows 11',
      url: 'https://youtu.be/0xwFFffuIzk?si=5QeOBmL4IZrQuDQ9',
      embed: '0xwFFffuIzk?si=O278NE-vD9jA4076',
      description: 'windows 11 Bangla tutorial'
   },
   {
      id: 3,
      title: 'Create a Github Repository and upload your Project file',
      url: 'https://youtu.be/EBn8vYBK8Y8?si=GSz7aVcTglgZdmZN',
      embed: 'EBn8vYBK8Y8?si=1Ktyk5Oogzbwozx7',
      description: `Welcome to Slys, Dear viewers i hope you are good. Create a Github Repository and upload your Project file. Using : Command Prompt, Chome Browser, Visual Studio`
   },
   {
      id: 4,
      title: 'Guessing Game তৈরি করা শিখুন | html css JavaScript Project',
      url: 'https://youtu.be/FmOKb0lDOZE?si=H7nLhAXSUZ3PCza-',
      embed: 'FmOKb0lDOZE?si=H7nLhAXSUZ3PCza-',
      description: 'Content Name : Guessing Game Using : html css JavaScript Tutorial : Bangla slys We are proud if you can learn something from this video'
   },
   {
      id: 5,
      title: 'Video tag | 2 way Video player and Video Add | only HTML | দুইটি উপায় ভিডিও এড করা শিখুন।',
      url: 'https://youtu.be/lCtZL3ZD5bo?si=knOXkkJWLiIjeaiW',
      embed: 'lCtZL3ZD5bo?si=knOXkkJWLiIjeaiW',
      description: '---'
   },
   {
      id: 6,
      title: 'Snake game using html css js | সাপের গেইম তৈরি |',
      url: 'https://youtu.be/uBnyR16XOiI?si=bTnISWCwQA8NnhT1',
      embed: 'uBnyR16XOiI?si=bTnISWCwQA8NnhT1',
      description: 'Project : Snake Game Using : html css JavaScript প্রোজেক্ট ফাইল ডাউনলোড করুন - (zip file) https://drive.google.com/file/d/1OReTJ_MpRXCo46j2t4_MOkhVNDp6kEEl/view'
   },
];



export default function YouTubeVideo(){ 
 return(
  `<div class="bg-color-0">${sectionHeading('YouTube Content Video','You can watch are you need for free')}</div>` +
 video_datas.map((videoData) => 
  `<section class="">
     <div>
      <div class="mx-auto w-11-12 shadow-1 m-20 p-20 bg-base">
<!------------------------------------------>
   <div class="title-description px-20">
    <h1 class="fs-25 darkblue mb-15">${videoData.title}</h1>
    <p class="blue-5 mb-20">${videoData.description}</p>
    <div class="text-end">
     <a class="fs-25 btn-md primary" target="_blank" href="${videoData.url}">Click to see video</a>
    </div>
   </div>
<!------------------------------------------>
      </div>
     </div>
    </section>`
  )
 );
}
