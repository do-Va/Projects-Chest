import success from '../../assets/icon-success.svg';
import danger from '../../assets/icon-danger.svg';

export const getIcon = alertType =>
  alertType === 'success' ? success : danger;

export const changeText = value => {
  return `Net ${value} Day${value > 1 ? 's' : ''}`;
};

export const setupTransform = showAlert =>
  showAlert ? 'translate(-50%, 0%)' : 'translate(-50%, -200%)';

export const changeAlertColor = alertType =>
  alertType === 'success'
    ? '--st-green'
    : alertType === 'danger'
    ? '--red'
    : '--gray-3';
