import { useNavigate } from 'react-router-dom';

import { useAppContext } from '../../context/appContext';
import { Button, Text } from '../common';
import Wrapper from './styles/deleteModal';

const DeleteModal = () => {
  const { singleInvoice, setDeleteInvoice, deleteInvoice } = useAppContext();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteInvoice();

    setTimeout(() => {
      navigate('/');
    }, 2000);
  };

  return (
    <Wrapper className="flex-center">
      <div className="modal-container radius-box">
        <h3 className="title">Confirm Deletion</h3>
        <Text className="small gray">
          Are you sure you want to delete invoice #{singleInvoice.name}? This
          action cannot be undone.
        </Text>

        <div className="button-container">
          <Button
            type="button"
            color="--white"
            background="--gray-2"
            hoverColor="--blue-gray"
            hoverBackground="--white"
            width="91px"
            onClick={() => setDeleteInvoice(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            color="--white"
            background="--red"
            hoverBackground="--light-red"
            width="89px"
            onClick={handleDelete}
          >
            Delete
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default DeleteModal;
