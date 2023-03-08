import moment from 'moment';

export const fixedDate = date => {
  return moment(date).format('DD MMM YYYY');
};

export const formatter = array => {
  const total = array.reduce((acc, item) => acc + item.amount, 0);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(total)
    .replace('£', '')
    .trim();
};
