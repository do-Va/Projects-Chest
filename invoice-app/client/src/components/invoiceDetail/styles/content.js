import styled from 'styled-components/macro';
import mediaQuery from '../../../styles/mediaQuery';

const Wrapper = styled.div`
  .header {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .content {
    margin-top: 31px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 61px;
    row-gap: 31px;

    .group {
      display: flex;
      flex-direction: column;
      gap: 31px;
    }
  }

  .text-group {
    & :nth-child(1) {
      margin-bottom: 13px;
    }

    & :nth-child(2) {
      margin-bottom: 7px;
    }
  }

  @media ${mediaQuery.tablet} {
    .header {
      flex-direction: row;
      align-items: baseline;
      justify-content: space-between;

      .name {
        display: flex;
        flex-direction: column;
        gap: 7px;
      }

      .user-address {
        text-align: right;
      }
    }

    .content {
      gap: 117px;
    }
  }
`;

export default Wrapper;
