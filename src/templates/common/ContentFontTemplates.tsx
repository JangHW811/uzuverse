import styled from 'styled-components';
import media from '../../constants/media';

export const TitleFone = styled.div`
  font-weight: 700;
  font-size: 22px;
  line-height: 70px;
  color: #3649d2;
  ${media.MOBILE} {
    font-size: 18px;
    line-height: 35px;
  }
`;

export const TopContentFont = styled.div`
  font-weight: 700;
  font-size: 38px;
  line-height: 57px;
  color: #f6f6f6;
  word-break: keep-all;
  ${media.MOBILE} {
    font-size: 18px;
    line-height: 27px;
  }
`;

export const BottomContentFont = styled.div`
  margin-top: 24px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #f2f2f2;
  word-break: keep-all;
  ${media.MOBILE} {
    font-size: 12px;
    margin-top: 10px;
    line-height: 18px;
  }
`;
