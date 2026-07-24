import {NavBar} from "../components/shares/navbar.js";
import YouTubeVideo from "../components/video/youtubeVideo.js";

import Footer from "../components/shares/footer.js";

function Video(eve) {
 const display = document.getElementById('yousuf');
  display.innerHTML += eve;
}

Video(NavBar());
Video(YouTubeVideo());


Video(Footer());