/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */
/* eslint-disable jsx-a11y/no-onchange */

import {ContainerContext, ProductContext, StoreContext} from '@oracle-cx-commerce/react-ui/contexts';
import React, {useContext, useState, useCallback, useEffect } from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';
import css from '@oracle-cx-commerce/react-widgets/product/product-variant-options/styles.css';
import {getCurrentPageId} from '@oracle-cx-commerce/commerce-utils/selector';
import {useNumberFormatter} from '@oracle-cx-commerce/react-components/utils/hooks';
import { getLocationBasedInventory } from '@oracle-cx-commerce/commerce-utils/selector';
import {getTotalItemQuantityFromOtherSGs} from '@oracle-cx-commerce/react-components/utils/cart';
import {useSelector} from '@oracle-cx-commerce/react-components/provider';
import {noop} from '@oracle-cx-commerce/utils/generic';
import ProductVariantSelect from './ProductVariantSelect';

const OPTIONS = {style: 'currency'};
/**
 * Utility method to get the currently selected variant
 * @param {Object} pVariantOptions the variant options
 * @return {String} the selected option
 */
const getCurrentSelectedItem = (pVariantOptions = []) => {
  return Object.keys(pVariantOptions).reduce((previous, current) => {
    const {selectedValue} = pVariantOptions[current];

    return `${previous}${current}=${selectedValue !== null ? selectedValue : '.+'};`;
  }, '');
};

const isValidQty = qty => {
  return qty > 0;
};

/**
 * A widget for displaying product variant options in the form of drop down, buttons or swatches based on configuration.
 * The temporary selections of the variant options and sku are maintained at the ContainerContext level.
 * This information is used by other widgets to get selected Sku, selected Sku images, selected Sku stock status.
 * Only valid Sku options can be selected, invalid options or unavailable options are disabled.
 */
const ProductVariantOptions = ({productDesc, action}) => {

  const [ selections, setSelections] = useState({
    qty: 1,
    selectedStore: {},
    isPickupInStoreOptionSelected: false,
    shippingGroups: {}
  });
  const [ currentQty, setCurrentQty] = useState(selections.qty);
  // resources
  const swatchVariantOption = 'color';

  // context
  // const {getState} = useContext(StoreContext);

  // const pageId = '';

  const {
    id: productId,
    variantOptionPermutations,
    variantOptionsSeed,
    variantToSkuLookup
  } = productDesc;
  // state
  const [optionChanged, setOptionChanged] = useState(false);
  const [currentSkuId, setCurrentSkuId] = useState('');
  const [currentSkuPrice, setCurrentSkuPrice] = useState('');
  const [currentSeleIt, setCurrentSeleIt] = useState('');
  const [duplicateVarinatOptions, setDuplicateVarinatOptions] = useState({...variantOptionsSeed});
  const [addToCartInProgress, setAddToCartInProgress] = useState(false);
  let variantOptions = {...variantOptionsSeed};

  const formatCurrency = useNumberFormatter(OPTIONS);

  useEffect(() => {
    if (currentSkuId) {
      action('getSkusPrices', {skuIds: [currentSkuId]}).then(val => setCurrentSkuPrice(val));
    }
  }, [currentSkuId]);
  // console.log('currentSkuPrice', currentSkuPrice);

  useEffect(() => {
    const color_option =  variantOptions['sku-AirConditioner_x_color'].options;
    variantOptions['sku-AirConditioner_x_color'].selectedValue = color_option[0].value;
    // console.log('Color', variantOptions)

    // default value to power
    const power_option = variantOptions['sku-AirConditioner_x_power'].options;
    variantOptions['sku-AirConditioner_x_power'].selectedValue = power_option[0].value;

    // default value to soldBy
    const option = variantOptions['sku-AirConditioner_x_soldBy'].options;
    const indexVal = option.find((x) => x.name === 'Carrier');
    variantOptions['sku-AirConditioner_x_soldBy'].selectedValue = indexVal.value;

    setDuplicateVarinatOptions({
      ...duplicateVarinatOptions,
        'sku-AirConditioner_x_color': { 
          ...duplicateVarinatOptions['sku-AirConditioner_x_color'],
          selectedValue: color_option[0].value
        },
        'sku-AirConditioner_x_power': { 
          ...duplicateVarinatOptions['sku-AirConditioner_x_power'],
          selectedValue: power_option[0].value
        },
        'sku-AirConditioner_x_soldBy': { 
          ...duplicateVarinatOptions['sku-AirConditioner_x_soldBy'],
          selectedValue: indexVal.value
        },

    })

    const currentSelectedItem = getCurrentSelectedItem(variantOptions);
    const xskuId = variantToSkuLookup[currentSelectedItem];
    setCurrentSkuId(xskuId);
    setCurrentSeleIt(currentSelectedItem);
    // console.log('new Vals, ', duplicateVarinatOptions, currentSelectedItem, xskuId)
    variantOptions = duplicateVarinatOptions;
    localStorage.setItem('currentSku', xskuId);
  }, []);

  const locationId = selections.isPickupInStoreOptionSelected && selections.selectedStore && selections.selectedStore.locationId ? selections.selectedStore.locationId : '';
  const {stockStatus, orderableQuantity} = useSelector(getLocationBasedInventory, {
    currentSkuId,
    locationId
  });

  /**
   * Failure handler for Add To Cart button
   */
   const onNotOk = ({error: {message = ''} = {}} = {}) => {
    action('notify', {level: 'error', message});
  };

  /**
   * When the action completes, clear add to cart progress state
   */
  const onComplete = () => {
    setAddToCartInProgress(false);
  };
  
  /**
   * Update and return the variant options with selections from URL, if any
   */
  const updateSelections = useCallback(() => {
    // get the latest selected item from the options
    const currentSelectedItem = getCurrentSelectedItem(duplicateVarinatOptions);
    const variantOptionsLite = {};

    // console.log('variantOptions', currentSelectedItem, duplicateVarinatOptions);
    // loop through each variant and enable/disable options
    Object.entries(duplicateVarinatOptions || {}).forEach(([optionKey, {selectedValue, optionId, optionName, options = {}}]) => {
      variantOptionsLite[optionKey] = {
        optionName,
        optionId,
        selectedValue
      };
      // loop through each variant option
      options.forEach(option => {
        const optionKeyValuePair = `${optionKey}=${option.value};`;
        // replace any matching value between = and ; with the option key, handles number or '.+' placeholder
        const newSelectedItemKey = currentSelectedItem.replace(new RegExp(`${optionKey}=.+?;`), optionKeyValuePair);
        const newSelectedItemKeyRegEx = new RegExp(newSelectedItemKey);
        // if the selected variant combination is not in the variantOptionPermutations then disable that variant
        option.disabled = !newSelectedItemKeyRegEx.test(new RegExp(variantOptionPermutations));
      });
    });
    setCurrentSkuId(variantToSkuLookup[currentSelectedItem])
    setSelections({
      ...selections,
      variantOptions: variantOptionsLite,
      skuId: variantToSkuLookup[currentSelectedItem],
      selectedStore: {},
      isPickupInStoreOptionSelected: false,
    });
  }, [selections, setSelections, variantOptionPermutations, variantOptions, variantToSkuLookup, duplicateVarinatOptions]);

  /**
   * Update and return the variant options with selections from URL, if any
   */
  (() => {
    // for the first time loading the page
    if (!optionChanged && variantOptions) {
      // const queryPart = pageId.split('?')[1];
      const urlParams = new URLSearchParams( {});
      const optionNameURL = urlParams.get('variantName');
      const optionValUrl = urlParams.get('variantValue');
      Object.entries(variantOptions).forEach(([, variantOption]) => {
        const {optionName, options = []} = variantOption;
        variantOption.selectedValue = null;
        if (optionNameURL && optionValUrl && optionName === optionNameURL) {
          const optionFound = options.find(({name}) => name === optionValUrl);
          if (optionFound) {
            variantOption.selectedValue = optionFound.value;
            setOptionChanged(true);
            updateSelections();
          }
        }
      });
    }
  })();

  /**
   * Handle the variant change for drop down, button & swatches
   * @param {String} value The value of the selected option
   * @param {String} optionKey The name of the selected option
   */
  const handleVariantOptionChange = useCallback(
    (value, optionKey) => {
      value = parseInt(value, 10);

      if (isNaN(value) || variantOptions[optionKey].selectedValue === value) {
        value = null;
      }
      // if(optionKey !== 'sku-AirConditioner_x_soldBy' ) {
      //   const option = variantOptions['sku-AirConditioner_x_soldBy'].options;
      //   console.log('option', option);
        
      //   const indexVal = option.find((x, index) => x.name === 'Carrier');
      //   console.log('indexVal', indexVal);
      //   variantOptions['sku-AirConditioner_x_soldBy'].selectedValue = indexVal.value;
      // }
      variantOptions[optionKey].selectedValue = value;
      duplicateVarinatOptions[optionKey].selectedValue = value;
      !optionChanged && setOptionChanged(true);
      updateSelections();
    },
    [optionChanged, updateSelections, variantOptions, duplicateVarinatOptions]
  );

  /**
   * Decides the type of variant picker to use
   *
   * @param {Object} props the function payload
   * @param {number} props.optionKey the variant id
   * @param {Array} props.options the available options for variant
   * @param {String} props.selectedValue selected option value
   */
  const renderVariantSelectorType = (optionKey, options, selectedValue) => {

    return (
    <ProductVariantSelect
        options={options}
        optionKey={optionKey}
        selectedValue={selectedValue}
        handleVariantOptionChange={handleVariantOptionChange}
    />
    );
    
  };

  /**
   * Handler for Add to Cart click.
   * Dispatches action when add to cart is clicked.
   * Throws validation errors if quantity added is invalid
   * @param  {Event} event
   */
     const handleAddToCart = event => {
      event.preventDefault();
      action('notifyClearAll');
      const form = event.target;
  
      if (form.checkValidity()) {
        // const payload = formToJson(form);
        const payload = {
          "productId": productDesc.id ? productDesc.id : '',
          "catRefId": '2001001103_Aben',
          "quantity": currentQty.toString()
        };
        console.log("PYLOAD", payload);
        // if (isPickupInStoreOptionSelected === true && selectedStore.locationId) {
        //   payload.locationId = selectedStore.locationId;
        // }
        const {isQtyValid, maxQtyAllowed, itemQtyInCart} = validateQty(currentQty, selections);
        if (isQtyValid) {
          setAddToCartInProgress(true);
          onAddToCart({payload, onNotOk, onComplete});
        } else {
          action('notify', {
            level: 'error',
            message: t(alertTotalItemQuantityExceeded, {stockAvailable: maxQtyAllowed, itemQuantityInCart: itemQtyInCart})
          });
        }
      }
    };

  /**
   * Returns true if quantity of item added passes below rules
   * 1. more than 0
   * 2. less than qtyAvailable which is (Lower value of (Inventory Count - Stock Threshold Value) OR Order Limit )
   *
   * @param  {String} qty Quantity to be added to cart
   * @return {Object} Object with Quantity validation data
   */
   const validateQty = (qty, selections) => {
    const {skuId, selectedStore, isPickupInStoreOptionSelected, shippingGroups} = selections;
    // console.log('Selections', selections);
    const qtyAdded = qty ? parseInt(qty, 10) : 0;
    const itemQtyInCart = getTotalItemQuantityFromOtherSGs({
      skuId,
      selectedStore,
      isPickupInStoreOptionSelected,
      shippingGroups
    });
    const qtyAvailable = orderableQuantity && orderableQuantity > 0 ? orderableQuantity : 1;
    const maxQtyAllowed = productDesc.orderLimit && productDesc.orderLimit < qtyAvailable ? productDesc.orderLimit : qtyAvailable;

    return {
      isQtyValid: qtyAdded && qtyAdded > 0 && qtyAdded + itemQtyInCart <= maxQtyAllowed,
      maxQtyAllowed,
      itemQtyInCart
    };
  };

  /**
   * Handler for Product Add to Cart.
   * Dispatches action when add to cart is clicked.
   * Throws validation errors if quantity added is invalid
   * @param  {Object} Object
   */
   const onAddToCart = useCallback(
    ({payload, onOk = noop, onNotOk = noop, onComplete = noop}) => {
      action('addItemsToCart', {
        items: [{...payload}]
      })
        .then(response => {
          if (response.ok === true) {
            onOk(response);
          } else {
            onNotOk(response);
          }
        })
        .catch(error => {
          onNotOk({error});
        })
        .finally(onComplete);
    },
    [action]
  );



  return (
  <>
    <Styled id="ProductVariantOptions" css={css}>
      <div class="ProductPrice">
        <span>
          {currentSkuPrice && currentSkuPrice.ok && Object.values(currentSkuPrice.delta.priceRepository.skus)[0] ? formatCurrency(Object.values(currentSkuPrice.delta.priceRepository.skus)[0].listPrice) : ''}
        </span>
      </div>
  
      <div className="ProductVariantOptions">
        {Object.entries(variantOptions || {}).map(
          ([optionKey, {options = [], selectedValue, optionId, optionName}], index) => {
            if( index == 2) {
              return
            }
            let optionNameDisplay = optionName;
            if (optionId.endsWith(swatchVariantOption) && selectedValue !== null) {
              const {name} = options.find(option => option.value === selectedValue);
              optionNameDisplay += `: ${name}`;
            }

            return (
              <div key={`${optionId}-${optionKey}`} className="ProductVariantOptions__Wrapper">
                <span className="ProductVariantOptions__OptionName">{optionNameDisplay}</span>
                {renderVariantSelectorType(optionKey, options, selectedValue)}
              </div>
            );
          }
        )}
      </div>

      <span class="pro-code" data-bind="text: productModel">{productDesc && productDesc.id}</span>

      <div>
        {
          productDesc.description && productDesc.description.split('\n').map((elem) => elem.split('.')[1]).join()
        }
        .
      </div>
      
      <div>
        {/* {
          productDesc.longDescription && <div
          dangerouslySetInnerHTML={{
              __html: productDesc.longDescription
          }}>
      </div>
        } */}
      </div>

      
  
    </Styled>
    <Styled id="AddToCartButton" css={css}>
      <div className="AddToCartButton__Wrapper">
        <div class="quantity-wrapper">
          <button class="button-add" onClick={() => {
              if (currentQty - 1 !== 0) setCurrentQty(currentQty-1)
            }}
          >-</button>
            <input class="quantity" name="quantity" value={currentQty} readOnly />
            <button class="button-add" onClick={() => setCurrentQty(currentQty+1)}>+</button>
          </div>
        <form onSubmit={handleAddToCart}>
          <input type="hidden" name="productId" />
          <input type="hidden" name="catRefId" />
          <button className="Buynowbutton" >BuyNow</button>
          <button class="add-to-cart" data-testid="Add-To-Cart-Button" type="submit" 
          // disabled={isAddToCartButtonDisabled()}
          >
            {/* {getAddToCartButtonText()} */}
            Add to Cart
          </button>
          
        </form>
      </div>
    </Styled>
  </>
  );
};

export default ProductVariantOptions;
