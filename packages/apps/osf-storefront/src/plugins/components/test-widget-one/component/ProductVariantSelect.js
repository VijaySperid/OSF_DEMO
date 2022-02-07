/*
 ** Copyright (c) 2020 Oracle and/or its affiliates.
 */

 import React from 'react';

 import Styled from '@oracle-cx-commerce/react-components/styled';
 import css from '@oracle-cx-commerce/react-widgets/product/product-variant-options/components/product-variant-select/styles.css';
 import PropTypes from 'prop-types';
 
 /**
  * Renders variant options in the form of drop down
  *
  * @param {Object} props the function payload
  * @param {number} props.selectedValue the selected value
  * @param {Array} props.options the variant options
  * @param {String} props.optionKey the selected option id
  * @param {String} props.handleVariantOptionChange handler method for option change
  * @param {String} props.textPleaseSelect text for no selection in drop down
  */
 const NO_SELECTION_VALUE = '.+';
 const ProductVariantSelect = props => {
   const {selectedValue, options, optionKey, handleVariantOptionChange, textPleaseSelect} = props;
 
   return (
     <Styled id="ProductVariantOptions__Dropdown" css={css}>
       <div className="ProductVariantOptions__Dropdown">
         <select
           name={optionKey}
           id={optionKey}
           value={selectedValue !== null ? selectedValue : options[0].value}
           // value={selectedValue && options.find(x => x.value === selectedValue).name}
           onChange={event => handleVariantOptionChange(event.target.value, optionKey)}
         >
           {/* <option value={NO_SELECTION_VALUE}>{textPleaseSelect}</option> */}
           {options.map(({name, value, disabled = false}) => {
             return (
               <option value={value} key={name} disabled={disabled}>
                 {name}
               </option>
             );
           })}
         </select>
       </div>
     </Styled>
   );
 };
 
 ProductVariantSelect.propTypes = {
   /*
    * Function to handle variant option change.
    */
   handleVariantOptionChange: PropTypes.func.isRequired,
   /*
    * Variant option key.
    */
   optionKey: PropTypes.string.isRequired,
   /*
    * Variant options array.
    */
   options: PropTypes.arrayOf(PropTypes.any).isRequired,
   /*
    * Selected variant value.
    */
   selectedValue: PropTypes.number.isRequired
 };
 
 export default React.memo(ProductVariantSelect);
 