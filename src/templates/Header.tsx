import { InView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import BackgroundMobileImage from '../assets/images/banner-background-mobile.png';
import BackgroundImage from '../assets/images/banner-background.svg';
import media from '../constants/media';
import useMediaQuery from '../hooks/useMediaQuery';
import { fadeIn } from './common/FadeAnimation';

const Header = () => {
  const isMobile = useMediaQuery(media.mobileMaxWidth);
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Container ref={ref} active={inView}>
          {isMobile || 'UZUVERSE'}
          <Content>
            {isMobile && 'UZUVERSE'}
            <TopFont>Community Platform & NFT</TopFont>
            <MiddleFont>
              UZUVERSE aims to realize
              <br />
              fair value for creators
            </MiddleFont>
            <BottomFont>
              Would you verse?
              <br />
              verse /vɜrs/ A form of artistic expression that uses language,
              <br />
              rhythm to convey ideas, emotions, or experiences.
            </BottomFont>
            <Button>Explore NOW</Button>
          </Content>
          <Banner src={isMobile ? BackgroundMobileImage : BackgroundImage} alt='banner' />
        </Container>
      )}
    </InView>
  );
};

const Container = styled.div<{ active: boolean }>`
  position: relative;
  padding-top: 35px;
  font-family: 'Goldman', cursive;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #3649d2;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 19px;
    justify-content: flex-start;
  }
  ${({ active }) =>
    active
      ? css`
          animation: ${fadeIn} 0.8s linear;
        `
      : css`
          opacity: 0;
        `}
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Banner = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 35px;
  }
`;

const TopFont = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 35px;
    margin-top: 19px;
  }
`;
const MiddleFont = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 57px;
  text-align: center;
  color: #f6f6f6;
  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 36px;
  }
`;
const BottomFont = styled.div`
  margin-top: 27px;
  font-weight: 400;
  font-size: 20px;
  text-align: center;
  line-height: 30px;
  color: #f2f2f2;
  max-width: 95vw;
  @media screen and (max-width: 768px) {
    font-size: 12px;
    line-height: 17px;
  }
`;

const Button = styled.button`
  width: 192px;
  height: 64px;
  margin-top: 100px;
  background: #3649d2;
  border-radius: 10px;
  border: 0;
  font-weight: 600;
  font-size: 22px;
  line-height: 70px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 96px;
    height: 32px;
    font-size: 11px;
    margin-top: 70px;
  }
`;
export default Header;
