import { InView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import Chart from '../assets/images/logos/chart.svg';
import Medal from '../assets/images/logos/medal.svg';
import Smile from '../assets/images/logos/smile.svg';
import People from '../assets/images/People.png';
import media from '../constants/media';
import { BottomContentFont, TitleFone, TopContentFont } from './common/ContentFontTemplates';
import { fadeIn } from './common/FadeAnimation';

const Item = ({ icon, topFont, bottomFont }: { icon: string; topFont: string; bottomFont: string }) => {
  return (
    <ItemContainer>
      <Row>
        <img src={icon} alt='icon' />
        <ItemNumberFont>{topFont}</ItemNumberFont>
      </Row>
      <ItemBottomFont>{bottomFont}</ItemBottomFont>
    </ItemContainer>
  );
};

const CallaborateWithUs = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Wrapper ref={ref} active={inView}>
          <LeftContent>
            <TitleFone>Callaborate with us</TitleFone>
            <TopContentFont>Don’t be shy to join, Let’s Talk with us now</TopContentFont>
            <BottomContentFont>
              UZUVERSE can deliver successful services with content creation experience and unique assets
            </BottomContentFont>
            <ItemWrapper>
              <Item icon={Smile} topFont={'20K'} bottomFont={'Satisfied Clients'} />
              <Item icon={Medal} topFont={'21,5'} bottomFont={'Years Experience'} />
              <Item icon={Chart} topFont={'+51K'} bottomFont={'Project Completed'} />
            </ItemWrapper>
          </LeftContent>
          <RightContent>
            <Image src={People} alt='People' />
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
  flex-wrap: wrap;
  gap: 30px 0;
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
  width: 30vw;
  min-width: 300px;
  ${media.MOBILE} {
    width: calc(100% - 50px);
  }
`;
const RightContent = styled.div`
  width: 50vw;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  min-width: 300px;
  ${media.MOBILE} {
    width: calc(100% - 50px);
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  ${media.MOBILE} {
    margin-top: 27px;
  }
  & > div > img {
    width: 45px;
    height: 45px;
    ${media.MOBILE} {
      width: 23px;
      height: 23px;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const ItemNumberFont = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 52px;
  color: #ffffff;
  margin-left: 4px;
  ${media.MOBILE} {
    font-size: 26px;
    line-height: 26px;
  }
`;
const ItemBottomFont = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 52px;
  color: #f2f2f2;
  ${media.MOBILE} {
    font-size: 12px;
    line-height: 26px;
  }
`;
export default CallaborateWithUs;
