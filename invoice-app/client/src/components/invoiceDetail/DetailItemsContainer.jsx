import Wrapper from './styles/detailItemsContainer';
import { DetailItemsContent, DetailItemsTotal } from '.';

const DetailItemsContainer = ({ items }) => {
  return (
    <Wrapper>
      <DetailItemsContent items={items} />
      <DetailItemsTotal items={items} />
    </Wrapper>
  );
};

export default DetailItemsContainer;
