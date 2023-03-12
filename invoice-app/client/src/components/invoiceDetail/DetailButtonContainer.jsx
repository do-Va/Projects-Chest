import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../../context/appContext';
import { Button } from '../common';
import Wrapper from './styles/detailButtonContainer';

const DetailButtonContainer = ({ margin }) => {
  const { setEditJob, changeInvoiceStatus, deleteInvoice } = useAppContext();
  const navigate = useNavigate();

  const handleEdit = () => {
    setEditJob();
  };

  const handleDelete = () => {
    deleteInvoice();

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <Wrapper margin={margin}>
      <Button
        type="button"
        color="--white"
        background="--gray-2"
        hoverColor="--blue-gray"
        hoverBackground="--white"
        swith="65px"
        width="73px"
        tWidth="73px"
        onClick={handleEdit}
      >
        Edit
      </Button>

      <Button
        type="button"
        color="--white"
        background="--red"
        hoverBackground="--light-red"
        swidth="70px"
        width="89px"
        tWidth="89px"
        onClick={handleDelete}
      >
        Delete
      </Button>
      <Button
        type="button"
        color="--white"
        background="--purple"
        hoverBackground="--light-purple"
        swidth="110px"
        width="149px"
        tWidth="131px"
        onClick={() => changeInvoiceStatus('paid')}
      >
        Mark as Paid
      </Button>
    </Wrapper>
  );
};

export default DetailButtonContainer;
