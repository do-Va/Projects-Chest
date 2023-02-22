import styled from 'styled-components/macro';

const Wrapper = styled.form`
  width: 300px;
  background-color: var(--dark-2);

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: var(--br-md);
  margin: 50px auto;
  box-shadow: var(--bs-full);
  padding: 50px 20px 30px;
  gap: 25px;

  h3 {
    color: var(--theme-color);
    text-transform: uppercase;
  }

  .member {
    color: var(--gray-1);
    font-size: var(--f-sm);
  }

  .btn {
    border: none;
    background-color: transparent;
    color: var(--purple);
    font-size: var(--f-md);
  }
`;

export default Wrapper;
