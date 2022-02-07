import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';

const SortResultsWidget = props => {
  return (
    <Styled id="SortResultsWidget" css={css}>
      <div className="SortResultsWidget"> Base Component SortResultsWidget: {t('Hello')}</div>
    </Styled>
  );
};

export default SortResultsWidget;
