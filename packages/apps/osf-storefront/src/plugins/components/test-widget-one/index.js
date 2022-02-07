import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {StoreContext, ProductContext, ContainerContext} from '@oracle-cx-commerce/react-ui/contexts';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import {getProductName} from '../../selectors';
import {getProductNameFetcher} from '../../fetchers';
import {useGetProduct} from '../../fetchers/hook';
import {
  getProduct,
  getCurrencyCode,
  getCurrencySymbol
} from '@oracle-cx-commerce/commerce-utils/selector';
import {useSelector} from '@oracle-cx-commerce/react-components/provider';
/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';
import ProductVariantOptions from './component/ProductVariantOptions'

export const fetchers = [getProductNameFetcher];

let productDesc = {};

const TestWidgetOne = props => {

  console.log("Props", props)
  const store = useContext(StoreContext);

  console.log('hi', store)
  useGetProduct(store);

  if (typeof window !== 'undefined') {
    if(props && props.catalogRepository){
      productDesc = Object.values(props.catalogRepository.products)[0]
    }
  }


  return (
    <Styled id="TestWidgetOne" css={css}>
      {/* <div className="TestWidgetOne"> Base Component TestWidgetOne: {t('Hello')}</div> */}
      <div>
        {
          productDesc && (
            <h1 className='ProductName'>
              {productDesc.displayName}
            </h1>
          )
        }
        <ProductVariantOptions productDesc={productDesc} action={store.action} />
        {/* <ProductPrice /> */}
      </div>
    </Styled>
  );
};

export default connect(getProductName)(TestWidgetOne);
