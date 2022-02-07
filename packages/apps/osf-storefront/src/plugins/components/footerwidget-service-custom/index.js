import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';

const FooterwidgetServiceCustom = props => {
  return (
    <Styled id="makefootercarrierone" css={css}>
      <div className="makefootercarrierone"> 
      <div className="row carrier-footer-top">
  <div className="footer-border-top"></div>
  <section className="carrier-services">
    <div className="o-container">
      <div className="carrier-services__main">
        <div className="carrier-services__main--holder support">
          <div className="services-content">
            <h6>Support 24/7</h6>
            <ul> 
              <li>Ready to cater to your every need</li>   
              <li>
                  <a a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['ServiceOrigin']+'/app/home/ask/1'}">Ask a question</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="carrier-services__main--holder tested">
          <div className="services-content">
            <h6>Tried. Tested. Trusted</h6>
            <ul>
              <li>Our rigorous tests and original parts ensure excellent quality</li>
            </ul>
          </div>
        </div>

        <div className="carrier-services__main--holder authorized">
          <div className="services-content">
            <h6>Carrier Authorized</h6>
            <ul>
              <li>Our skilled technicians undergo extensive training so your unit is in good hands</li>
              <li><a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['ServiceOrigin']+'/app/home'}">Visit Customer Care</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

      </div>
    </Styled>
  );
};

export default FooterwidgetServiceCustom;
