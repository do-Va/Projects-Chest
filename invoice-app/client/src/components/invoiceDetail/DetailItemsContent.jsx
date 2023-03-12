import { useEffect, useState } from 'react';

import Wrapper from './styles/detailItemsContent';
import { checkResize } from '../helpers/invoice.functions';
import { ItemsContentHeader, ItemsContentMobile, ItemsContentTablet } from '.';

const DetailItemsContent = ({ items }) => {
  const [graterThanTablet, setGraterThanTablet] = useState(false);

  useEffect(() => {
    checkResize(setGraterThanTablet);
  }, []);

  return (
    <Wrapper>
      <ItemsContentHeader />

      {items?.map(item =>
        graterThanTablet ? (
          <ItemsContentTablet key={item._id} {...item} />
        ) : (
          <ItemsContentMobile key={item._id} {...item} />
        )
      )}
    </Wrapper>
  );
};

export default DetailItemsContent;
