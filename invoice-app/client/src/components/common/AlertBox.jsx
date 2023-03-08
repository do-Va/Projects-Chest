import { useAppContext } from '../../context/appContext';
import Wrapper from './styles/alertBox';

import {
  changeAlertColor,
  getIcon,
  setupTransform,
} from '../helpers/common.functions';

const AlertBox = () => {
  const { showAlert, alertType, alertText } = useAppContext();

  return (
    <Wrapper
      showAlert={showAlert}
      transform={setupTransform(showAlert)}
      alert={changeAlertColor(alertType)}
    >
      <img
        src={getIcon(alertType)}
        alt={`${alertType} icon`}
        className="icon"
      />
      <div className="alert-content">
        <p className="alert-title">{alertType}</p>
        <p className="alert-message">{alertText}</p>
      </div>
    </Wrapper>
  );
};

export default AlertBox;
