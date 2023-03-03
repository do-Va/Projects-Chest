const randomLetter = () => {
  return String.fromCharCode(65 + Math.floor(Math.random() * 26));
};

const randomNumber = () => {
  return Math.floor(Math.random() * 10);
};

const randomName = () => {
  const name = [];

  for (let i = 0; i <= 5; i++) {
    if (i < 2) {
      name.push(randomLetter());
    } else {
      name.push(randomNumber());
    }
  }

  return name.join('');
};

export default randomName;
