import { InView } from 'react-intersection-observer';
import styled, { css } from 'styled-components';
import Haha from '../assets/images/haha.png';
import { BottomContentFont, TitleFone, TopContentFont } from './common/ContentFontTemplates';
import { fadeIn } from './common/FadeAnimation';
import LogoTemplete from './common/LogoTemplete';

const Community = () => {
  return (
    <InView>
      {({ inView, ref, entry }) => (
        <Wrapper ref={ref} active={inView}>
          <LeftContent>
            <Image src={Haha} alt='haha' />
          </LeftContent>
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
            <LogoTemplete />
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
  width: 40vw;
`;
const RightContent = styled.div`
  width: 45vw;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  max-height: 60vh;
`;

export default Community;
