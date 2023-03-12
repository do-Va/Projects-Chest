import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: calc(100vh - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 30px;

  .img-container {
    width: 80vw;
    max-width: 800px;
  }

  .alert {
    color: var(--white-1);
    font-size: var(--f-lg);

    span {
      font-size: var(--f-xl);
      color: var(--purple);
    }
  }

  .btn {
    width: 100px;
    height: 50px;
    border: none;
    border-radius: var(--br-sm);
    background-color: var(--purple);
    color: var(--white-1);
    font-weight: var(--fw-bold);
    font-size: var(--f-md);
    transition: var(--transition-all);

    &:hover {
      background-color: var(--light-purple);
    }
  }
`;

export default Wrapper;
