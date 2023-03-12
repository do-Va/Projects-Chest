import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  border-radius: var(--br-md);
  overflow: hidden;
  margin-top: 38px;

  @media ${mediaQuery.tablet} {
    margin-top: 47px;
  }
`;

export default Wrapper;
