import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;

  @media ${mediaQuery.tablet} {
    gap: 40px;
  }
`;

export default Wrapper;
