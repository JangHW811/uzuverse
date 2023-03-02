import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import biotherm from '../assets/images/logos/biotherm.png';
import dyson from '../assets/images/logos/dyson.png';
import gillette from '../assets/images/logos/gillette.png';
import hyundai from '../assets/images/logos/hyundai.png';
import samsung from '../assets/images/logos/samsung.png';
import sbs from '../assets/images/logos/sbs.png';
import sk from '../assets/images/logos/sk.png';
import universal from '../assets/images/logos/universal.png';
import warner from '../assets/images/logos/warner.png';
import wing from '../assets/images/logos/wing.png';

const IMAGE_LIST = [samsung, sk, gillette, wing, biotherm, dyson, warner, hyundai, universal, sbs];

const BannerSlider = () => {
  const settings = {
    className: 'slider variable-width',
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    variableWidth: true,
    nextArrow: <></>,
    prevArrow: <></>,
  };
  return (
    <Slider {...settings}>
      {IMAGE_LIST.map((image, index) => (
        <SlickImageContainer key={index}>
          <SlickImage src={image} alt={`banner${index + 1}`} />
        </SlickImageContainer>
      ))}
    </Slider>
  );
};

const SlickImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin: 20px 50px;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 30px;
    margin: 20px;
  }
`;

const SlickImage = styled.img`
  height: 100%;
  /* transform: scale(0.3); */
`;
export default BannerSlider;
