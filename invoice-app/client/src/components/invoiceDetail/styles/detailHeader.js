import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.header`
  height: 91px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 31px;

  .status {
    font-size: var(--f-sm);
    text-transform: capitalize;
    color: var(--white-2);
    font-weight: var(--fw-medium);
  }

  @media ${mediaQuery.tablet} {
    height: 88px;
    justify-content: stretch;
    gap: 20px;
  }
`;

export default Wrapper;
