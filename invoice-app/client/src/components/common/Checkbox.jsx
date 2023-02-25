import Wrapper from './styles/checkbox';
import img from '../../assets/icon-check.svg';

const Checkbox = ({ name }) => {
  return (
    <Wrapper htmlFor={name}>
      <input
        type="checkbox"
        name={name}
        id={name}
        onChange={evn => console.log(evn.target.name)}
      />

      <div className="box grid-center">
        <img src={img} alt="check icon" />
      </div>
      <p>{name}</p>
    </Wrapper>
  );
};

export default Checkbox;
