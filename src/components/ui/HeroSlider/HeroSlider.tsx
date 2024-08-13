import {
  BackgroundImage,
  HeroContentWrapper,
  HeroWrapper,
} from './HeroSlider.style';
import Slider from 'react-slick';

interface SlideProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
}

interface HeroSliderProps {
  slides: SlideProps[];
}

const Slide: React.FC<SlideProps> = ({ src, alt, children }) => (
  <HeroWrapper>
    <BackgroundImage src={src} alt={alt} />
    <HeroContentWrapper>{children}</HeroContentWrapper>
  </HeroWrapper>
);

const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Slide key={index} src={slide.src} alt={slide.alt}>
          {slide.children}
        </Slide>
      ))}
    </Slider>
  );
};

export default HeroSlider;
