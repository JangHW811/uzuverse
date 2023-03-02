import { InView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import { fadeIn } from './common/FadeAnimation';
import HorizontalBlank from './common/HorizontalBlank';
import LogoTemplete from './common/LogoTemplete';

const Footer = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Container active={inView} ref={ref}>
          <MenuGrid>
            <Column>
              <UzuverseFont>• UZUVERSE</UzuverseFont>
              <HorizontalBlank height={30} />
              <SmallFont>would you verse?</SmallFont>
              <HorizontalBlank height={26} />
              <LogoTemplete />
            </Column>
            <div>
              <MiddleFont>Information</MiddleFont>
              <HorizontalBlank height={20} />
              <MenuContainer>
                <SmallFont>{'> Collection'}</SmallFont>
                <SmallFont>{'> How to Mint'}</SmallFont>
                <SmallFont>{'> Community'}</SmallFont>
                <SmallFont>{'> Call Center'}</SmallFont>
              </MenuContainer>
            </div>
            <div>
              <MiddleFont>Pages</MiddleFont>
              <HorizontalBlank height={20} />
              <MenuContainer>
                <SmallFont>{'> Home'}</SmallFont>
                <SmallFont>{'> About Us'}</SmallFont>
                <SmallFont>{'> Services'}</SmallFont>
                <SmallFont>{'> Testimonial'}</SmallFont>
              </MenuContainer>
            </div>
            <div>
              <MiddleFont>Support</MiddleFont>
              <HorizontalBlank height={20} />
              <MenuContainer>
                <SmallFont>{'> About Ove'}</SmallFont>
                <SmallFont>{'> About NFT'}</SmallFont>
                <SmallFont>{'> FAQ'}</SmallFont>
                <SmallFont>{'> Help'}</SmallFont>
              </MenuContainer>
            </div>
          </MenuGrid>
        </Container>
      )}
    </InView>
  );
};

const Container = styled.footer<{ active: boolean }>`
  bottom: 0;
  background-color: #222831;
  padding: 200px 140px 110px;
  display: flex;
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
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const UzuverseFont = styled.div`
  font-family: 'Goldman';
  font-weight: 700;
  font-size: 28px;
  line-height: 20px;
  color: #3649d2;
`;

const MenuGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4fr 3fr 3fr 3fr;
  & > div {
    display: flex;
    flex-direction: column;
  }
`;

const MiddleFont = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
`;

const SmallFont = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
`;
export default Footer;
