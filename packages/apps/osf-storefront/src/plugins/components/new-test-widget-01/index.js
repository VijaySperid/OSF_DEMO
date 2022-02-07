import React, { useContext, useState, useEffect } from "react";
import Styled from "@oracle-cx-commerce/react-components/styled";
import { connect } from "@oracle-cx-commerce/react-components/provider";
import { useSelector } from "@oracle-cx-commerce/react-components/provider";
import { getProducts } from "@oracle-cx-commerce/commerce-utils/selector";
import { StoreContext } from "@oracle-cx-commerce/react-ui/contexts";
// import {getProductName,useComponentData} from '../../selectors';
import { getProductName } from "../../selectors";
import MealItem from "./components/MealItem";
// import {ProductContext} from '@oracle-cx-commerce/react-ui/contexts';

/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import { t } from "@oracle-cx-commerce/utils/generic";

import css from "./styles.css";

let productList, siteId;
const NewTestWidget01 = (props) => {
  // const [productDetails, setProductDetails] = useState([]);
  const [isProductDetailsPresent, setisProductDetailsPresent] = useState(false);
  //initilising context.
  const { action } = useContext(StoreContext);
  useEffect(() => {
    async function fetchMyData() {
      const renderProductIds = await props.searchRepository.pages[
        "/airconditioner/all-products/?occsite=300001"
      ].results.records.map((productIdValue) => {
        return action("getProduct", {
          productId: productIdValue.attributes["product.repositoryId"],
        });
      });
      await Promise.all(renderProductIds).then((values) => {
        setProductDetails(values);
        setisProductDetailsPresent(true);
      });
    }

    //ListProducts API to get all products
    // async function fetchData() {
    //   const productsArr = await action("listProducts", {
    //     categoryId: "catId",
    //     search: "orderLimit gt 5 and orderLimit lt 10",
    //     includeChildren: true,
    //     offset: 0,
    //     limit: 12,
    //     totalResults: true,
    //   });
    //   return productsArr;
    // }
    fetchMyData();
    // console.log("renderProductIds hi", productDetails);
  }, []);
  // console.log("renderProductIds hi", productDetails);

  console.log(
    "product list in catalog pageRepositoryyy",
    props.catalogRepository.products
  );
  // if( productDetails.length>0){
  //   setisProductDetailsPresent(true)
  // }
  // productList = Object.values(props.searchRepository.pages)[0].results.records;
  // siteId = Object.values(props.pageRepository.pages)[0].siteId;
  // if (
  //   isProductDetailsPresent
  // ) {
  //   productList = Object.values(props.catalogRepository.products);
  const mealList =
    props.catalogRepository &&
    props.catalogRepository.products &&
    Object.values(props.catalogRepository.products).map((item, index) => {
      return (
        <MealItem
          id={item.id}
          key={index}
          name={item.displayName}
          price={item.listPrice}
          description={item.repositoryId}
          imageURL={item.smallImageURLs}
          siteID={siteId}
        ></MealItem>

        // console.log("item", item.displayName)

        // <MealItem
        //   id={index}
        //   key={index}
        //   name={item.attributes["product.primaryImageAltText"][0]}
        //   price={item.attributes["sku.maxActivePrice"][0]}
        //   description={item.attributes["product.primaryImageAltText"][0]}
        //   imageURL={item.attributes["product.primaryFullImageURL"][0]}
        //   siteID={siteId}
        // ></MealItem>
      );
    });

  // selectors to get product

  // const prodCTX = getProductName();

  // productList.map((item) => {
  //   console.log(
  //     "get product endpoint in collection page",
  //     useSelector(getProduct, item.attributes["product.repositoryId"][0])
  //   );
  // });

  return (
    <Styled id="NewTestWidget01" css={css}>
      <div className="NewTestWidget01"> no0000000</div>
      {/* <ul>
        {mealList}
      </ul> */}
      {/* <div className="cards">{mealList}</div> */}
      {props.catalogRepository && props.catalogRepository.products &&
      <div className="cards">
        {
          Object.values(props.catalogRepository.products).map((item, index) => {
            return (
              <MealItem
                id={item.id}
                key={index}
                name={item.displayName}
                price={item.listPrice}
                description={item.repositoryId}
                imageURL={item.smallImageURLs}
                siteID={siteId}
              ></MealItem>
            );
          })}
      </div>
}
    </Styled>
  );
};

export default connect(getProductName)(NewTestWidget01);
