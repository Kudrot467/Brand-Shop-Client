import HeroSlider, {Slide} from 'hero-slider';

const HomeBanner = () => {
    const images = [
        "https://i.ibb.co/k8Dzhbc/black-friday2.png",
        "https://i.ibb.co/fkHJrhS/Black-friday.png",
        "https://i.ibb.co/kX0GVmb/2.png",
        "https://i.ibb.co/DM8j67j/super.png"
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

export default HomeBanner;
