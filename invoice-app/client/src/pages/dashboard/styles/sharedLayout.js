import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.section`
  @media ${mediaQuery.desktop} {
    display: flex;
  }
`;

export default Wrapper;
