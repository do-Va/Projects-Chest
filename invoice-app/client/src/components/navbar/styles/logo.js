import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  width: 72px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  border-radius: 0 var(--br-lg) var(--br-lg) 0;
  position: relative;
  overflow: hidden;
  padding: 25px;
  cursor: pointer;

  img {
    position: relative;
    z-index: 1;
    flex: 1;
  }

  &::after {
    content: '';
    width: 100%;
    height: 50%;
    position: absolute;
    background-color: var(--light-purple);
    top: 50%;
    left: 0;
    border-top-left-radius: var(--br-lg);
  }

  @media ${mediaQuery.phone} {
    width: 80px;
    height: 80px;
  }

  @media ${mediaQuery.desktop} {
    width: 103px;
    height: 103px;
  }
`;

export default Wrapper;
