import VideoSlider from "../components/VideoSlider/VideoSlider";
import AnimCounter from "../components/NumberTicker/AnimatedCounters"
import Galleryel from "./gallery"
import YouTubeChannelVideos from "../components/Youtube/YoutubeChannelVideos";
import EnvironmentDebug from "../components/EnvironmentDebug/EnvironmentDebug"
import MyParallaxProvider from "../components/ScrollParallax/MyParallaxProvider";
import AboutUsIntro from "../components/AboutUs/AboutUsIntro";
import ServiceSection from "../components/ServiceSection/ServiceSection";

function Home() {
  return (
    <div>
      <VideoSlider />
      <AnimCounter/>
      <AboutUsIntro/>
      <ServiceSection/>
      <Galleryel/>
      <MyParallaxProvider/>
      <YouTubeChannelVideos/>
      <EnvironmentDebug/>
    </div>
  )
}

export default Home;