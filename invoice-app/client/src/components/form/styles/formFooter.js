import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.footer`
  width: 100%;
  height: 91px;
  background-color: var(--gray-3);
  margin-top: 88px;
  display: flex;
  padding: 22px 10px;
  gap: 5px;

  @media ${mediaQuery.phone} {
    padding: 22px 33px;
    gap: 7px;
  }

  @media ${mediaQuery.tablet} {
    padding: 22px 56px;
    gap: 8px;
    margin-top: 36px;
  }
`;

export default Wrapper;
