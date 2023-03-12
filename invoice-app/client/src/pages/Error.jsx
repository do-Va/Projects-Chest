import { Link } from 'react-router-dom';

import Wrapper from './styles/error';
import img from '../assets/404.svg';

const ErrorPage = () => {
  return (
    <Wrapper className="max-container">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <p className="alert">
        <span>WOops!</span> This page isn't available.
      </p>
      <Link to="/" className="btn grid-center">
        Go to back
      </Link>
    </Wrapper>
  );
};

export default ErrorPage;
