import { useState } from 'react';

import Wrapper from './styles/avatar';
import { useAppContext } from '../../context/appContext';

const Avatar = () => {
  const [showBtn, setShowBtn] = useState(false);
  const { user, logoutUser } = useAppContext();

  const handleClick = () => {
    logoutUser();
    setShowBtn(false);
  };

  return (
    <Wrapper>
      <div className="circle" onClick={() => setShowBtn(!showBtn)}>
        {user?.name[0]}
      </div>

      {showBtn && (
        <div className="logout-btn grid-center" onClick={handleClick}>
          Logout
        </div>
      )}
    </Wrapper>
  );
};

export default Avatar;
