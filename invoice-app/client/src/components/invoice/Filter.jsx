import { useState } from 'react';

import Wrapper from './styles/filter';
import img from '../../assets/icon-arrow-down.svg';
import { Checkbox } from '../common';

const Filter = ({ graterThanTablet }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <Wrapper showFilter={showFilter}>
      <div className="select" onClick={() => setShowFilter(!showFilter)}>
        <p className="title">
          {graterThanTablet ? 'Filter by status' : 'Filter'}
        </p>

        <img src={img} alt="" />
      </div>

      {showFilter && (
        <div className="float-container">
          <Checkbox name="draft" />
          <Checkbox name="pending" />
          <Checkbox name="paid" />
        </div>
      )}
    </Wrapper>
  );
};

export default Filter;
