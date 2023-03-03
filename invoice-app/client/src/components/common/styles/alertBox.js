import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 250px;
  height: 70px;
  background-color: var(--gray-2);
  transition: var(--transition-all-cb);
  border-radius: var(--br-sm);
  display: flex;
  align-items: center;

  gap: 20px;
  padding: 20px;

  position: fixed;
  z-index: 11;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -200%);
  border: 2px solid;
  border-color: var(${props => props.alert});
  animation: moveBottom 1s forwards cubic-bezier(0.68, -0.55, 0.265, 1.35);

  .icon {
    width: 30px;
    height: 30px;
  }

  .alert-title {
    font-size: var(--f-md);
    text-transform: uppercase;
    color: var(${props => props.alert});
  }

  .alert-message {
    font-size: var(--f-sm);
    color: var(--white);
  }

  @keyframes moveBottom {
    100% {
      transform: translate(-50%, 0%);
    }
  }
`;

export default Wrapper;
