import React from 'react';
 import Region from '@oracle-cx-commerce/react-components/region';
 import Styled from '@oracle-cx-commerce/react-components/styled';
 import css from './styles.css';

 const Container = props => {
  const {regions = [], configuration = {}} = props;
  const {className = ''} = configuration || {};

  return (
    <Styled id="Container" css={css}>
      {/* render each child region */}
      <section className={`Container__Section ${className}`}>
        {regions.map(regionId => ( 
          <Region key={regionId} regionId={regionId} />
        ))}
      </section>
    </Styled>
  );
 };
 export default Container;