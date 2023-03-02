import styled from 'styled-components';
import discord from '../../assets/images/logos/discord.svg';
import facebook from '../../assets/images/logos/facebook.svg';
import linkedin from '../../assets/images/logos/linkedin.svg';
import twitter from '../../assets/images/logos/twitter.svg';
import media from '../../constants/media';

const LogoTemplete = () => {
  return (
    <LogoContainer>
      <img src={discord} alt='discord' />
      <img src={facebook} alt='facebook' />
      <img src={linkedin} alt='linkedin' />
      <img src={twitter} alt='twitter' />
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  display: flex;
  gap: 20px;
  & > img {
    cursor: pointer;
    width: 24px;
    height: 24px;
    ${media.MOBILE} {
      width: 15px;
      height: 15px;
    }
  }
`;
export default LogoTemplete;
