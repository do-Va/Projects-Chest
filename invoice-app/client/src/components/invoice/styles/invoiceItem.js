import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.article`
  padding: 25px 24px 22px;
  cursor: pointer;

  &:hover {
    outline: 1px solid var(--purple);
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 27px;
  }

  .text {
    font-size: var(--f-md);
    color: var(--white);
    font-weight: var(--fw-bold);

    span {
      color: var(--blue-gray);
    }
  }

  .text2 {
    font-size: var(--f-sm);
    font-weight: var(--f-sm);
    color: var(--white);
    text-transform: capitalize;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .sub-container {
      display: flex;
      flex-direction: column;
      gap: 9px;
    }
  }

  @media ${mediaQuery.tablet} {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & > *:first-child {
      margin-right: auto;
    }

    & > *:nth-of-type(2) {
      margin-right: auto;
    }

    & > *:nth-of-type(4) {
      margin: auto;
    }
  }
`;

export default Wrapper;
