import { InView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import BackgroundImage from '../assets/images/banner-background.svg';
import { fadeIn, fadeOut } from './common/FadeAnimation';

const Header = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Container ref={ref} active={inView}>
          UZUVERSE
          <Content>
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
          <Banner src={BackgroundImage} alt='banner' />
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
  ${({ active }) =>
    active
      ? css`
          animation: ${fadeIn} 0.8s linear;
        `
      : css`
          animation: ${fadeOut} 0.8s linear;
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
`;

const TopFont = styled.div`
  font-weight: 600;
  font-size: 22px;
  line-height: 70px;
  color: #ffffff;
`;
const MiddleFont = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 57px;
  color: #f6f6f6;
`;
const BottomFont = styled.div`
  margin-top: 27px;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #f2f2f2;
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
`;
export default Header;
