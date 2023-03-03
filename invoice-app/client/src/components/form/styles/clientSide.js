import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  .sub-container.space {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }

  @media ${mediaQuery.tablet} {
    .sub-container.space {
      flex-direction: row;
    }
  }
`;

export default Wrapper;
