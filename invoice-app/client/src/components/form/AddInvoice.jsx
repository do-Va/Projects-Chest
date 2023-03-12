import { useEffect } from 'react';

import Wrapper from './styles/addInvoice';
import { ClientSide, FormFooter, FormHeader, ItemContainer, UserSide } from '.';
import { useAppContext } from '../../context/appContext';
import randomName from '../helpers/form.functions';

const AddInvoice = () => {
  const { handleChange, isEditing } = useAppContext();

  useEffect(() => {
    !isEditing && handleChange({ name: 'name', value: randomName() });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  return (
    <Wrapper>
      <div className="form-container">
        <FormHeader />
        <UserSide />
        <ClientSide />
        <ItemContainer />
        <FormFooter />
      </div>
    </Wrapper>
  );
};

export default AddInvoice;
