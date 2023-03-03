import { useAppContext } from '../../context/appContext';
import { Button } from '../common';
import Wrapper from './styles/formFooter';

const FormFooter = () => {
  const { clearValues, displayForm, createInvoice } = useAppContext();

  const handleDiscard = () => {
    displayForm(false);
    clearValues();
  };

  const saveAndDraft = () => {
    createInvoice('draft');
  };

  const saveAndSend = () => {
    createInvoice('pending');
  };

  return (
    <Wrapper>
      <Button
        type="button"
        color="--white"
        background="--gray-2"
        hoverColor="--blue-gray"
        hoverBackground="--white"
        width="84px"
        tWidth="96px"
        margin="0 auto 0 0"
        onClick={handleDiscard}
      >
        Discard
      </Button>

      <Button
        type="button"
        color="--white-2"
        background="--gray-4"
        hoverColor="--gray"
        hoverBackground="--dark-2"
        width="117px"
        tWidth="133px"
        onClick={saveAndDraft}
      >
        Save as Draft
      </Button>

      <Button
        type="button"
        color="--white"
        background="--purple"
        hoverBackground="--light-purple"
        width="112px"
        tWidth="128px"
        onClick={saveAndSend}
      >
        Save & Send
      </Button>
    </Wrapper>
  );
};

export default FormFooter;
