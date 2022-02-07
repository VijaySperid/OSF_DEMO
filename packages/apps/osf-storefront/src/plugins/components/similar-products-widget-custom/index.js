import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import { getProductName } from "../../selectors";
import { connect } from "@oracle-cx-commerce/react-components/provider";




/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';
import Recommendation from './components/recommendation';

const SimilarProductsWidgetCustom = props => {
  return (
    <Styled id="SimilarProductsWidgetCustom" css={css}>
      <div className="SimilarProductsWidgetCustom"> Base Component SimilarProductsWidgetCustom: {t('Hello')}</div>
      <Recommendation/>
    </Styled>
  );
};

export default connect(getProductName) (SimilarProductsWidgetCustom);
