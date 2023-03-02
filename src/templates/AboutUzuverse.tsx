import { InView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import Android from '../assets/images/Android.png';
import IPhone from '../assets/images/IPhone.png';
import media from '../constants/media';
import { BottomContentFont, TitleFone, TopContentFont } from './common/ContentFontTemplates';
import { fadeIn } from './common/FadeAnimation';

const Item = ({ count, whiteFont, blueFont }: { count: number; whiteFont: string; blueFont: string }) => {
  return (
    <ItemContainer>
      <CountFont>{count.toLocaleString()}</CountFont>
      <WhiteFont>{whiteFont}</WhiteFont>
      <BlueFont>{blueFont}</BlueFont>
    </ItemContainer>
  );
};

const AboutUzuverse = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Wrapper ref={ref} active={inView}>
          <LeftContent>
            <TitleFone>About UZUVERSE</TitleFone>
            <TopContentFont>Your social will soon become money.</TopContentFont>
            <BottomContentFont>
              Social media is a new source of livelihood for creators. Don't just watch ads – get rewarded for your creativity.
              Verse to earn fair reward Would you verse?
            </BottomContentFont>
            <ItemGrid>
              <Item count={500} whiteFont={'Channel VIEW'} blueFont={'100 million views +'} />
              <Item count={300} whiteFont={'Participated Creators'} blueFont={'10.000 content +'} />
            </ItemGrid>
          </LeftContent>
          <RightContent>
            <PhoneContainer>
              <div>
                <img src={IPhone} alt='iphone' />
              </div>
              <div>
                <img src={Android} alt='andriod' />
              </div>
            </PhoneContainer>
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
  gap: 34px 0;
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
  min-width: 300px;
  ${media.MOBILE} {
    width: calc(100% - 50px);
  }
`;
const RightContent = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 35vw;
  min-width: 300px;
  ${media.MOBILE} {
    height: unset;
    width: calc(100% - 50px);
  }
`;

const PhoneContainer = styled.div`
  display: flex;
  gap: 40px;
  height: 40vw;
  max-height: 100%;
  ${media.MOBILE} {
    width: 100%;
    height: auto;
    display: flex;
    gap: 35px;
    grid-template-columns: 1fr 1fr;
  }

  & > div {
    & > img {
      object-fit: contain;
      height: 100%;
      ${media.MOBILE} {
        width: 100%;
        height: auto;
        flex: 1;
        display: flex;
      }
    }
  }
`;

const ItemGrid = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
  width: 100%;
  ${media.MOBILE} {
    margin-top: 20px;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const CountFont = styled.span`
  font-weight: 700;
  font-size: 42px;
  line-height: 52px;
  color: #f6f6f6;
  ${media.MOBILE} {
    font-size: 21px;
    line-height: 26px;
  }
`;

const WhiteFont = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 52px;
  color: #f2f2f2;
  ${media.MOBILE} {
    font-size: 12px;
    line-height: 26px;
  }
`;

const BlueFont = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #3649d2;
  ${media.MOBILE} {
    font-size: 12px;
    line-height: 18px;
  }
`;
export default AboutUzuverse;
