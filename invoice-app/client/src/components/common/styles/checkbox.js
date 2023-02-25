import styled from 'styled-components/macro';

const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 13px;
  cursor: pointer;
  user-select: none;

  input,
  img {
    display: none;
  }

  .box {
    width: 16px;
    height: 16px;
    border-radius: 2px;
    background-color: var(--gray-3);
  }

  &:hover .box {
    outline: 1px solid var(--purple);
  }

  input:checked + .box {
    background-color: var(--purple);

    img {
      display: block;
    }
  }

  p {
    text-transform: capitalize;
    line-height: 1;
    color: var(--white);
    font-size: var(--f-md);
  }
`;

export default Wrapper;
