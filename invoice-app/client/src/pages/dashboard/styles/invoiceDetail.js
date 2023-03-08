import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 32px;

  @media ${mediaQuery.tablet} {
    padding-top: 61px;
  }

  @media ${mediaQuery.desktop} {
    padding-top: 77px;
  }
`;

export default Wrapper;
