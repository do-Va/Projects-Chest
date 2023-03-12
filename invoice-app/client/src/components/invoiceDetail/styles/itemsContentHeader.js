import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  display: none;

  @media ${mediaQuery.tablet} {
    display: flex;

    & :first-child {
      flex: 1;
    }

    & :nth-child(2) {
      width: 50px;
      text-align: center;
    }

    & :nth-child(3),
    & :nth-child(4) {
      width: 130px;
      text-align: right;
    }
  }
`;

export default Wrapper;
