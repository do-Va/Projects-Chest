import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';
import InputGroup from '../../common/styles/inputGroup';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 16px;
  row-gap: 25px;

  .sub-container {
    display: flex;
    gap: 16px;

    .amount {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100%;
      color: var(--gray);
      font-size: var(--f-md);
      font-weight: var(--fw-bold);
    }

    .img-container {
      cursor: pointer;

      &:hover img {
        filter: invert(55%) sepia(90%) saturate(2740%) hue-rotate(326deg)
          brightness(97%) contrast(90%);
      }
    }
  }

  @media ${mediaQuery.tablet} {
    flex-direction: row;

    &:not(:nth-of-type(1)) ${InputGroup} > label {
      display: none;
    }
  }
`;

export default Wrapper;
