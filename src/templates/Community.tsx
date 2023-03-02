import { InView } from 'react-intersection-observer';
import styled from 'styled-components';
import discord from '../assets/images/logos/discord.svg';
import facebook from '../assets/images/logos/facebook.svg';
import linkedin from '../assets/images/logos/linkedin.svg';
import twitter from '../assets/images/logos/twitter.svg';
import { BottomContentFont, TitleFone, TopContentFont } from './common/ContentFontTemplates';

const Community = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Wrapper ref={ref} active={inView}>
          <LeftContent></LeftContent>
          <RightContent>
            <TitleFone>Community</TitleFone>
            <TopContentFont>Join our Community Social activities make money</TopContentFont>
            <BottomContentFont>
              Creator pool is a way for viewers to support creators by providing UZU to them through a special mechanism
              <ul>
                <li>
                  Creators obtain future revenue in advance by withdrawing tokens from the pool and financing them early in their
                  career.
                </li>
              </ul>
              <ul>
                <li>
                  As a result, the platform's revenue will be automatically split with the pool shareholders, along with their
                  respective shares and the percentage initially set by the creator.​
                </li>
              </ul>
            </BottomContentFont>
            <LogoContainer>
              <img src={discord} alt='discord' />
              <img src={facebook} alt='facebook' />
              <img src={linkedin} alt='linkedin' />
              <img src={twitter} alt='twitter' />
            </LogoContainer>
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
`;

const LeftContent = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  width: 35vw;
`;
const RightContent = styled.div`
  width: 50vw;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  display: flex;
  margin-top: 46px;
  gap: 20px;
  & > img {
    cursor: pointer;
    width: 24px;
    height: 24px;
  }
`;
export default Community;
