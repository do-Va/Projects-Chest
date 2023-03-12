import moment from 'moment';

export const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);

  return result;
};

export const fixedDate = date => {
  return moment(date).format('DD MMM YYYY');
};

export const numberFormat = number => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(number)
    .replace('£', '')
    .trim();
};

export const formatter = array => {
  const total = array?.reduce((acc, item) => acc + item.amount, 0);

  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(total)
    .replace('£', '')
    .trim();
};

export const checkResize = setGraterThanTablet => {
  function handleResize() {
    if (window.innerWidth >= 768) {
      setGraterThanTablet(true);
    } else {
      setGraterThanTablet(false);
    }
  }

  handleResize();

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
};
