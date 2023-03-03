import styled from 'styled-components/macro';

import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.form`
  height: max-content;
  position: absolute;
  inset: 0;
  z-index: 9;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 72px;

  .form-container {
    width: 100%;
    max-width: var(--form-max-width);
    background-color: var(--dark-1);

    display: flex;
    flex-direction: column;
    gap: 49px;

    & > *:not(:last-child) {
      padding: 33px 24px 0;
    }

    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 24px;
    }
  }

  @media ${mediaQuery.tablet} {
    padding-top: 80px;

    .form-container {
      border-radius: 0 var(--br-lg) var(--br-lg) 0;

      & > *:not(:last-child) {
        padding: 59px 56px 0;
      }
    }
  }

  @media ${mediaQuery.desktop} {
    padding-top: 0px;
    padding-left: 103px;
  }
`;

export default Wrapper;
