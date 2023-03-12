import styled from 'styled-components/macro';

const Wrapper = styled.p`
  font-size: var(--f-md);
  font-weight: var(--fw-bold);
  color: var(--white);

  span {
    color: var(--blue-gray);
  }

  &.gray {
    color: var(--gray);
  }

  &.small {
    font-size: var(--f-sm);
    font-weight: var(--f-sm);
    text-transform: capitalize;
  }
`;

export default Wrapper;
