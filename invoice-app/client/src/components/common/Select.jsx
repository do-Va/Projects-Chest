import { useState } from 'react';

import icon from '../../assets/icon-arrow-down.svg';
import { useAppContext } from '../../context/appContext';
import { changeText } from '../helpers/common.functions';
import Wrapper from './styles/select';

const Select = ({ list }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { handleChange, paymentTerms } = useAppContext();

  const handleClick = item => {
    handleChange({ name: 'paymentTerms', value: item });
    setShowDropdown(false);
  };

  return (
    <Wrapper showDropdown={showDropdown}>
      <div
        className="sub-container"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <p>{changeText(paymentTerms)}</p>
        <img src={icon} alt="arrow icon" />
      </div>

      {showDropdown && (
        <div className="dropdown">
          {list.map((item, index) => (
            <p key={index} onClick={() => handleClick(item)}>
              {changeText(item)}
            </p>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default Select;
