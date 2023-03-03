import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  .item-container {
    display: flex;
    flex-direction: column;
    gap: 49px;
    margin-bottom: 49px;
  }

  .title {
    font-size: 18px;
    color: #777f98;
    font-weight: var(--fw-bold);
    margin-bottom: 22px;
  }

  @media ${mediaQuery.tablet} {
    .item-container {
      gap: 18px;
      margin-bottom: 18px;
    }
  }
`;

export default Wrapper;
