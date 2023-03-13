import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  z-index: 100;

  .modal-container {
    width: 100%;
    max-width: 480px;
    height: 220px;
    padding: 32px;

    .title {
      font-size: var(--f-lg);
      color: var(--white);
      font-weight: var(--fw-bold);
    }

    .small {
      text-transform: none;
      margin-top: 8px;
      width: 225px;
    }

    .button-container {
      display: flex;
      justify-content: flex-end;
      margin-top: 22px;
      gap: 8px;
    }
  }

  @media ${mediaQuery.tablet} {
    .modal-container {
      height: 249px;
    }
  }
`;

export default Wrapper;
