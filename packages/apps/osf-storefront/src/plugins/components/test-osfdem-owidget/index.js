import React, { useContext, useEffect, useState } from "react";
import Styled from "@oracle-cx-commerce/react-components/styled";
import { connect } from "@oracle-cx-commerce/react-components/provider";
import {
  getCurrentPriceListGroup,
  getEndpointOrigins,
  getCurrentProduct,
} from "@oracle-cx-commerce/commerce-utils/selector";
import { useSelector } from "@oracle-cx-commerce/react-components/provider";
import { StoreContext } from "@oracle-cx-commerce/react-ui/contexts";
// import axios from "axios";
/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import { t } from "@oracle-cx-commerce/utils/generic";

import css from "./styles.css";
import { getProductName } from "../../selectors";
import Demooutput from "./components/Demooutput";
let productDesc;
const TestOSFDEMOwidget = (props) => {
  console.log("props in DEMO widget", props);
  if (typeof window !== "undefined") {
    if (props && props.catalogRepository) {
      productDesc = Object.values(props.catalogRepository.products)[0];
    }

  console.log(
    "getCurrent PriceListGroup",
    useSelector(getCurrentPriceListGroup)
  );

  console.log(
    "Currency Symbol",
    useSelector(getEndpointOrigins)
  );

  console.log(
    "Current product from details page-v",
    useSelector(getCurrentProduct)
  );
  }

  const[text,SetText]=useState(false)
    const ShowTextHandler=()=>{
      SetText(showText=>!showText);
    }
    
      // console.log("renderProductIds hi", productDetails);
      const {action}=useContext(StoreContext)
      useEffect(()=>{
async function fetchMyData(){
  const renderProductIds=await action('listProducts');
  console.log('renderProductIds',renderProductIds);
}
fetchMyData();

function fetchData(){
  const emailId='vijayhegde888@888'
  fetch('/ccstorex/custom/v1/storeEmailNewsletter?email=' + emailId, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(function(response) {
    console.log(response)
    return response.json();
  })
  .then(function(json) {
    console.log(json, "subscribe response");
  });
}
fetchData();
},[])

        
    
    
  return (
    <Styled id="TestOSFDEMOwidget" css={css}>
      <div className="TestOSFDEMOwidget">
        {" "}
        Base Component TestOSFDEMOwidget: {t("Hello")}
       {/* {text && <p>hello text ---</p>} */}
       
       <Demooutput show={text}/>
       <button onClick={ShowTextHandler}>Click here</button>
      </div>
    </Styled>
  );
};

export default connect(getProductName)(TestOSFDEMOwidget);
