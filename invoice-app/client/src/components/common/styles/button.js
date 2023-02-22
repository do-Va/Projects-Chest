import styled from 'styled-components/macro';

const Wrapper = styled.button`
  height: 48px;
  border: none;
  border-radius: var(--br-xl);
  padding: 0 25px;
  transition: var(--transition-all);

  display: grid;
  place-content: center;

  background-color: var(${props => props.background});
  color: var(${props => props.color});

  &:hover {
    background-color: var(${props => props.hoverBackground});
    color: var(${props => props.hoverColor});
  }
`;

export default Wrapper;
