import styled from 'styled-components/macro';

const Wrapper = styled.div`
  width: 104px;
  height: 40px;
  border-radius: var(--br-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: ${props => props.margin};
  user-select: none;

  .circle {
    width: 8px;
    height: 8px;
    border-radius: var(--br-full);
  }

  &.pending {
    color: var(--st-orange);
    background-color: var(--st-dark-orange);

    .circle {
      background-color: var(--st-orange);
    }
  }

  &.draft {
    color: var(--st-grey);
    background-color: var(--st-dark-grey);

    .circle {
      background-color: var(--st-grey);
    }
  }

  &.paid {
    color: var(--st-green);
    background-color: var(--st-dark-green);

    .circle {
      background-color: var(--st-green);
    }
  }

  p {
    text-transform: capitalize;
    font-size: var(--f-md);
    font-weight: var(--fw-bold);
  }
`;

export default Wrapper;
