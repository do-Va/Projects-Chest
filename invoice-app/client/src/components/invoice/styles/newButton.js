import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.button`
  width: 90px;
  height: 44px;
  background-color: var(--purple);
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: var(--br-xl);
  color: var(--white);
  font-weight: var(--fw-bold);
  font-size: var(--f-md);
  padding-left: 6px;
  flex-shrink: 0;
  transition: var(--transition-all);

  .icon-container {
    width: 32px;
    height: 32px;
    border-radius: var(--br-full);
    background-color: var(--white);
    color: var(--purple);
  }

  &:hover {
    background-color: var(--light-purple);
  }

  @media ${mediaQuery.tablet} {
    width: 150px;
    height: 48px;
    padding-left: 8px;
    gap: 16px;
  }
`;

export default Wrapper;
