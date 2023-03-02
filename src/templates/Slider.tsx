import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import styled from 'styled-components';
import AVALANCHE from '../assets/images/logos/AVALANCHE.png';
import BCi from '../assets/images/logos/BCi.png';
import GLITCH from '../assets/images/logos/GLITCH.svg';
import Lifefourcuts from '../assets/images/logos/Lifefourcuts.svg';
import METABEAT from '../assets/images/logos/METABEAT.png';
import oxsa from '../assets/images/logos/oxsa.svg';
import smart from '../assets/images/logos/smart.png';
import TSBLOC from '../assets/images/logos/TSBLOC.svg';

const IMAGE_LIST = [AVALANCHE, BCi, GLITCH, Lifefourcuts, METABEAT, oxsa, smart, TSBLOC];

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
  height: 20px;
  margin: 50px;
  position: relative;
  @media screen and (max-width: 768px) {
    height: 12px;
    margin: 25px;
  }
`;

const SlickImage = styled.img`
  height: 100%;
`;
export default BannerSlider;
