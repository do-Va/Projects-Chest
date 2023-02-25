import { useEffect, useState } from 'react';

import Wrapper from './styles/newButton';
import img from '../../assets/icon-plus.svg';

const NewButton = ({ graterThanTablet }) => {
  return (
    <Wrapper type="button">
      <div className="icon-container grid-center">
        <img src={img} alt="plus icon" />
      </div>

      <p className="text">{graterThanTablet ? 'New Invoice' : 'New'}</p>
    </Wrapper>
  );
};

export default NewButton;
