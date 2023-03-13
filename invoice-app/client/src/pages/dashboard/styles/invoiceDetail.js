import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 32px;
  flex: 1;

  @media ${mediaQuery.tablet} {
    padding-top: 61px;
    padding-bottom: 50px;
  }

  @media ${mediaQuery.desktop} {
    padding-top: 77px;
    padding-left: 103px;
  }
`;

export default Wrapper;
