import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import { getProductName } from "../../selectors";
import Specifications from './components/Specifications'
/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';
let productDesc,currentSkuDetails;
const SpecificationsWidgetCustom = props => {

  if (typeof window !== 'undefined') {
    // Perform localStorage action
    //const item = localStorage.getItem('currentProduct');
    const currentSku = localStorage.getItem('currentSku');
    // if(item)
    // {
    //   productDesc = useSelector(getProduct, item);
    // }
    if(props && props.catalogRepository){
        productDesc = Object.values(props.catalogRepository.products)[0]
    }
    for (const [key, value] of Object.entries(props.catalogRepository.skus)) {
      if (key === currentSku) {
        currentSkuDetails = value;
      }
    }
    
    // console.log('data', productDesc, currentSku)
  }
  return (
    <Styled id="SpecificationsWidgetCustom" css={css}>
         <Specifications metaData={currentSkuDetails} />
    </Styled>
  );
};

export default  connect(getProductName)(SpecificationsWidgetCustom);
