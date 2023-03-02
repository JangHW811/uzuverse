import { InView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import media from '../constants/media';
import useMediaQuery from '../hooks/useMediaQuery';
import { fadeIn } from './common/FadeAnimation';
import HorizontalBlank from './common/HorizontalBlank';
import LogoTemplete from './common/LogoTemplete';

const Footer = () => {
  const isMobile = useMediaQuery(media.MOBILE);
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <div>
          <Container active={inView} ref={ref}>
            <MenuGrid>
              <Column>
                <UzuverseFont>• UZUVERSE</UzuverseFont>
                <HorizontalBlank height={30} />
                <SmallFont>would you verse?</SmallFont>
                <HorizontalBlank height={26} />
                <LogoTemplete />
              </Column>
              <LeftContainer>
                <MiddleFont>Information</MiddleFont>
                <HorizontalBlank height={isMobile ? 15 : 20} />
                <MenuContainer>
                  <SmallFontMenu>{'> Collection'}</SmallFontMenu>
                  <SmallFontMenu>{'> How to Mint'}</SmallFontMenu>
                  <SmallFontMenu>{'> Community'}</SmallFontMenu>
                  <SmallFontMenu>{'> Call Center'}</SmallFontMenu>
                </MenuContainer>
              </LeftContainer>
              <MiddleContainer>
                <MiddleFont>Pages</MiddleFont>
                <HorizontalBlank height={isMobile ? 15 : 20} />
                <MenuContainer>
                  <SmallFontMenu>{'> Home'}</SmallFontMenu>
                  <SmallFontMenu>{'> About Us'}</SmallFontMenu>
                  <SmallFontMenu>{'> Services'}</SmallFontMenu>
                  <SmallFontMenu>{'> Testimonial'}</SmallFontMenu>
                </MenuContainer>
              </MiddleContainer>
              <RightContainer>
                <MiddleFont>Support</MiddleFont>
                <HorizontalBlank height={isMobile ? 15 : 20} />
                <MenuContainer>
                  <SmallFontMenu>{'> About Ove'}</SmallFontMenu>
                  <SmallFontMenu>{'> About NFT'}</SmallFontMenu>
                  <SmallFontMenu>{'> FAQ'}</SmallFontMenu>
                  <SmallFontMenu>{'> Help'}</SmallFontMenu>
                </MenuContainer>
              </RightContainer>
            </MenuGrid>
          </Container>
          <BottomContent>
            <Row>
              <SmallFont>Terms & Condition</SmallFont>
              <SmallFont>Privacy & Policy</SmallFont>
            </Row>
            <SmallFont> © 2022 UZUVERSE All Rights Reserved</SmallFont>
          </BottomContent>
        </div>
      )}
    </InView>
  );
};

const Container = styled.footer<{ active: boolean }>`
  background-color: #222831;
  padding: 200px 140px 110px;
  display: flex;
  ${media.MOBILE} {
    padding: 60px 25px;
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

const MenuContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  ${media.MOBILE} {
    gap: 4px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  ${media.MOBILE} {
    grid-column: span 3;
  }
`;

const UzuverseFont = styled.div`
  font-family: 'Goldman';
  font-weight: 700;
  font-size: 28px;
  line-height: 20px;
  color: #3649d2;
  ${media.MOBILE} {
    font-size: 14px;
    line-height: 10px;
  }
`;

const MenuGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 3fr 3fr 3fr;
  ${media.MOBILE} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 64px 0;
  }
  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LeftContainer = styled(MiddleContainer)`
  align-items: flex-start;
`;
const RightContainer = styled(MiddleContainer)`
  align-items: flex-end;
`;

const MiddleFont = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  ${media.MOBILE} {
    font-size: 17px;
    line-height: 25px;
  }
`;

const SmallFont = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  ${media.MOBILE} {
    font-size: 7px;
    line-height: 6px;
  }
`;

const SmallFontMenu = styled(SmallFont)`
  ${media.MOBILE} {
    font-size: 12px;
    line-height: unset;
  }
`;

const BottomContent = styled.div`
  box-sizing: border-box;
  height: 82px;
  background-color: #3649d2;
  width: 100%;
  padding: 0 140px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  ${media.MOBILE} {
    justify-content: flex-start;
    padding: 0 25px;
    height: 86px;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 50px;
  min-width: 300px;
`;
export default Footer;
