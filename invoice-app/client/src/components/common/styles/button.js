import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.button`
  height: 48px;
  width: ${props =>
    props.swidth ? props.swidth : props.width ? props.width : '100%'};
  border: none;
  border-radius: var(--br-xl);
  transition: var(--transition-all);
  font-weight: var(--fw-bold);
  font-size: var(--f-md);
  margin: ${props => props.margin};

  display: grid;
  place-content: center;

  background-color: var(${props => props.background});
  color: var(${props => props.color});

  &:hover {
    background-color: var(${props => props.hoverBackground});
    color: var(${props => props.hoverColor});
  }

  @media ${mediaQuery.phone} {
    width: ${props => (props.width ? props.width : '100%')};
  }

  @media ${mediaQuery.tablet} {
    width: ${props => (props.tWidth ? props.tWidth : '100%')};
  }
`;

export default Wrapper;
