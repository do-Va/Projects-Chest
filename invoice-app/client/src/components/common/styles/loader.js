import styled from 'styled-components/macro';

const Wrapper = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  .line {
    width: 50px;
    height: 5px;
    background-color: var(--white-2);
    position: relative;
    animation: rotate 1s linear alternate infinite;
    border-radius: 3px 0 3px 0;

    &::before,
    &::after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: inherit;
      top: 0;
      left: 0;
      border-radius: inherit;
    }

    &::after {
      animation: rotate45 1s linear infinite;
    }

    &::before {
      animation: rotate90 1s linear infinite;
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
      opacity: 0;
    }

    50% {
      transform: rotate(180deg);
      opacity: 0.2;
    }

    100% {
      transform: rotate(1080deg);
      opacity: 1;
    }
  }

  @keyframes rotate45 {
    0% {
      transform: rotate(45deg);
      box-shadow: 0px 0px 0px var(--white-2);
      opacity: 0.2;
    }

    50% {
      transform: rotate(270deg);
      box-shadow: 0px 0px 2px 2px var(--white-2);
      opacity: 0.3;
    }

    100% {
      transform: rotate(1170deg);
      box-shadow: 0px 0px 2px 2px var(--white-2);
      opacity: 0.5;
    }
  }

  @keyframes rotate90 {
    0% {
      box-shadow: 0px 0px 0px var(--white-2);
      opacity: 0.2;
    }

    50% {
      box-shadow: 0px 0px 20px var(--white-2);
      opacity: 0.3;
    }

    100% {
      box-shadow: 0px 0px 0px 0px var(--white-2);
      opacity: 0.5;
    }
  }
`;

export default Wrapper;
