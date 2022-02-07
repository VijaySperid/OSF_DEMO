import React ,{useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import { useSelector } from "@oracle-cx-commerce/react-components/provider";
/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';
import Reviews from './components/Revews';
import {connect} from '@oracle-cx-commerce/react-components/provider';
import { getProductName } from "../../selectors";
import { getProduct } from "@oracle-cx-commerce/commerce-utils/selector";
import {ProductContext} from '@oracle-cx-commerce/react-ui/contexts';

const ReviewsWidgetCustom = props => {
  // const RepoID = "CAR0000002";
  // console.log(
  //   "get product endpoint in details page",
  //   useSelector(getProduct,RepoID)
  // );

  const ProdCTX= useContext(ProductContext);
  console.log('ProdCTX in Deatails page',ProdCTX);
  return (
    <Styled id="ReviewsWidgetCustom" css={css}>
    <Reviews/>
    </Styled>
  );
};

export default connect(getProductName)(ReviewsWidgetCustom);
