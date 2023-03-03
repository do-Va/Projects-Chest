import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;

  p {
    color: var(--white);
  }

  &:active,
  &:focus {
    border-color: var(--border-active);
  }

  .sub-container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
    padding: 0 22px 0 20px;
    font-size: var(--f-md);
    cursor: pointer;
    background-color: var(--gray-3);
    border: var(--border);
    border-color: var(${props => props.showDropdown && '--purple'});
    border-radius: var(--br-xs);
    outline: none;
    text-transform: capitalize;
    user-select: none;

    p {
      flex: 1;
    }

    img {
      width: 12px;
      height: 7px;
      transform: ${props => props.showDropdown && 'rotate(180deg)'};
    }
  }

  .dropdown {
    width: calc(100% + 4px);
    position: absolute;
    left: -2px;
    top: calc(100% + 24px);
    border-radius: var(--br-md);
    background-color: var(--gray-2);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    z-index: 2;

    & > *:not(:last-child) {
      border-bottom: 1px solid var(--gray-3);
    }

    p {
      height: 46px;
      padding-left: 24px;
      line-height: 46px;
      cursor: pointer;

      &:hover {
        color: var(--light-purple);
      }
    }
  }
`;

export default Wrapper;
