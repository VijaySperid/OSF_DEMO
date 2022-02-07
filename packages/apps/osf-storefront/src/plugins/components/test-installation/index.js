import React, { useContext } from "react";
import Styled from "@oracle-cx-commerce/react-components/styled";
import {connect} from '@oracle-cx-commerce/react-components/provider';
import { getProductName } from "../../selectors";

import Installed from "./components/Installed";
import Designed from "./components/Designed";
/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
// import { t } from "@oracle-cx-commerce/utils/generic";

import css from "./styles.css";

const TestInstallation = (props) => {
  let productDesc;
  if (typeof window !== "undefined") {
    if (props && props.catalogRepository) {
      productDesc = Object.values(props.catalogRepository.products)[0];
      console.log('productDesc from test Installation',productDesc);
    }
  }

  return (
    <Styled id="TestOSFWidget" css={css}>
    <Designed metaData={productDesc} />
    <Installed metaData={productDesc} />
    
  </Styled>
  );
};

export default connect(getProductName)(TestInstallation);
