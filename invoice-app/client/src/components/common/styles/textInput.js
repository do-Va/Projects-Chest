import styled from 'styled-components/macro';

const Wrapper = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 20px;
  font-size: var(--f-md);
  color: var(--white);
  background-color: var(--gray-3);
  border: var(--border);
  border-radius: var(--br-xs);
  outline: none;

  &:required {
    border-color: var(--red);
  }

  &::placeholder {
    text-transform: capitalize;
  }

  &:active,
  &:focus {
    border-color: var(--border-active);
  }
`;

export default Wrapper;
