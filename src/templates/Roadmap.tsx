import { InView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import Label from '../assets/images/logos/label.svg';
import Palette from '../assets/images/logos/palette.svg';
import People from '../assets/images/logos/people.svg';
import Wallet from '../assets/images/logos/wallet.svg';
import RoadmapImage from '../assets/images/roadmap-image.png';
import { TitleFone, TopContentFont } from './common/ContentFontTemplates';
import { fadeIn } from './common/FadeAnimation';
const Item = ({ icon, topFont, bottomFont }: { icon: string; topFont: string; bottomFont: string }) => {
  return (
    <ItemContainer>
      <img src={icon} alt='icon' />
      <ItemTopFont>{topFont}</ItemTopFont>
      <ItemBottomFont>{bottomFont}</ItemBottomFont>
    </ItemContainer>
  );
};

const Roadmap = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Wrapper ref={ref} active={inView}>
          <LeftContent>
            <TitleFone>RoadMap</TitleFone>
            <TopContentFont>Planning to make huge ecosystem with end-to-end creator services</TopContentFont>
            <Image src={RoadmapImage} alt='roadmap' />
          </LeftContent>
          <RightContent>
            <ItemGrid>
              <Item icon={People} topFont='UZUVERSE Launching' bottomFont='gather and spread content' />
              <Item icon={Wallet} topFont='Governance DAO' bottomFont='Run a community-based advertisement pool' />
              <Item icon={Palette} topFont='UZU LIVE Feature' bottomFont='Add cool live features' />
              <Item icon={Label} topFont='Sell NFTs' bottomFont='NFT membership to be released' />
            </ItemGrid>
          </RightContent>
        </Wrapper>
      )}
    </InView>
  );
};

const Wrapper = styled.div<{ active: boolean }>`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${({ active }) =>
    active
      ? css`
          animation: ${fadeIn} 0.8s linear;
        `
      : css`
          opacity: 0;
        `}
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 35vw;
`;
const RightContent = styled.div`
  width: 35vw;
  display: flex;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 120%;
  object-fit: contain;
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 16px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  padding: 40px 12px 12px;
  transition: all 0.3s ease-in-out;
  :hover {
    background: #3649d2;
    border: 0;
  }
  & > img {
    width: 70px;
    height: 70px;
  }
`;

const ItemTopFont = styled.div`
  margin-top: 30px;
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  color: #f6f6f6;
  text-align: center;
`;
const ItemBottomFont = styled.div`
  margin-top: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #f2f2f2;
  text-align: center;
  word-break: keep-all;
`;
export default Roadmap;
