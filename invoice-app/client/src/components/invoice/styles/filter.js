import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  position: relative;

  .select {
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;

    img {
      transform: rotate(${props => props.showFilter && '180deg'});

      transition: var(--transition-all);
    }
  }

  .title {
    font-size: var(--f-md);
    color: var(--white);
  }

  .float-container {
    position: absolute;
    width: 192px;
    padding: 24px;
    top: 37px;
    transform: translateX(-30%);

    display: flex;
    flex-direction: column;
    gap: 17px;
    z-index: 10;

    background-color: var(--gray-2);
    border-radius: var(--br-md);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  }

  @media ${mediaQuery.tablet} {
    .select {
      gap: 14px;
    }
  }
`;

export default Wrapper;
