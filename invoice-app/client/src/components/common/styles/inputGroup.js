import styled from 'styled-components/macro';

const Wrapper = styled.div`
  min-width: ${props => (props.width ? props.width : '152px')};
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 9px;

  label {
    text-transform: capitalize;
    font-weight: var(--fw-medium);
    font-size: var(--f-sm);
    color: var(--white-2);
    line-height: var(--lh-sm);
  }
`;

export default Wrapper;
