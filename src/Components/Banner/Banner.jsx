import HeroSlider, {Slide} from 'hero-slider';

const Banner = () => {
    const images = [
        "https://i.ibb.co/4SmPdyb/tianyi-ma-Wi-ONHd-z-YI4-unsplash.jpg",
        "https://i.ibb.co/x7ftJMy/istockphoto-1219638428-1024x1024.jpg",
        "https://i.ibb.co/XVHXBnP/daniel-romero-0-D4m-QTd-GNHs-unsplash.jpg",
        "https://i.ibb.co/jTdLF4Z/istockphoto-467946398-1024x1024.jpg"
      ];
  return (
   <HeroSlider
   slidingAnimation="left_to_right"
   orientation="horizontal"
   initialSlide={1}
   onBeforeChange={(previousSlide, nextSlide ) =>console.log("onBeforeChange",previousSlide,nextSlide)}
   onChange={nextSlide=>console.log("onChange",nextSlide)}
   onAfterChange={nextSlide=>console.log("onAfterChange",nextSlide)}
   style={{
    backgroundColor:"rgba(0,0,0,0.33)"
   }}
   settings={{
    slidingDuration:250,
    slidingDelay: 100,
    shouldAutoPlay:true,
    shouldDisplayButtons:true,
    autoplayDuration:1000,
    height:"100vh"
   }}
   >
    {images.map((imageUrl, index) => (
        <Slide
          key={index}
          className=""
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'100% 100%'
          }}
        />
      ))}
   </HeroSlider>
  );
};

export default Banner;
