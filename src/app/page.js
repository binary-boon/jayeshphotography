import HeroSlider from "../components/HeroSlider/HeroSlider";
import AnimCounter from "../components/NumberTicker/AnimatedCounters"
import Galleryel from "./gallery"
import YouTubeChannelVideos from "../components/Youtube/YoutubeChannelVideos";
import EnvironmentDebug from "../components/EnvironmentDebug/EnvironmentDebug"

 function Home() {
  return (
    
    <div>
    <HeroSlider/>
    <AnimCounter/>
    <Galleryel/>
    <YouTubeChannelVideos/>
    <EnvironmentDebug/>
    
    </div>
    
    

  )
}

export default Home;