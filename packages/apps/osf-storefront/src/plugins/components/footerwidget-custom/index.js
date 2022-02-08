import React, {useContext} from 'react';
import Styled from '@oracle-cx-commerce/react-components/styled';

/*
 * Uncomment the following line to get the parameter substitution
 * function, e.g. t(someParameterizedResourceString, "someValue").
 */
import {t} from '@oracle-cx-commerce/utils/generic';

import css from './styles.css';

const FooterwidgetCustom = props => {
  return (
    <Styled id="MakeFooterOsfWidget" css={css}>
      <div className="MakeFooterOsfWidget"> 
      <div className="row site-footer-main">
  <footer id="colophon" className="site-footer">
    <div className="o-container">
      <div className="site-footer__logo">
        <a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['WordpressOrigin']}"> 
        <picture>
        <source srcSet="/file/general/carrier-logo-make.png" media="(min-width: 768px)" />
        <img src="/file/general/mobile-logo.png" />
        </picture>
        </a>
        <div className="social-fb-mob">
          <span><a href="www.facebook.com">Followw uss on Facebook</a></span>
        </div>
      </div>
      
      <div className="site-footer__content">
        <div className="footer-info">
          <p className="footer-address">Concepcion-Carrier Air Conditioning Company (CCAC) Km 20 East Service Road, South Superhighway, Alabang, Muntinlupa</p>
        </div>
        <div className="footer-menu">
          <ul>
            <li><a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['WordpressOrigin'] + '/about-us' }">About</a></li>
            <li><a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['ShopOrigin']+'/carrier/airconditioner/all-products'}">Shop</a></li>
            
          </ul>
          <ul>
            <li><a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['WordpressOrigin']+'/store-finder'}">Store Finder</a></li>
            <li><a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['ShopOrigin']+'/app/home'}">Customer Care</a></li>
            <li><a href="#">Contact Us</a></li>
          
          </ul>
        </div>
        
        <div className="footer-newsletter">
          <div className="site-footer__logo">
            <div className="social-fb">
              <span><a href="https://www.facebook.com/" target="_blank">Follow us on Facebook</a></span>
            </div>
            <div className="news-letter">
              <span className="join-newsletter">Join our newsletter</span>
              <span className="newsletter-content">Be the first to know about our special offers.</span>
            </div>
          </div>
          <form className="form-inline">
            <div className="form-group">
              <input type="email" className="form-control" id="InputEmail1Newsletter" aria-describedby="emailHelp" placeholder="Enter your e-mail address"/>
            </div>
            <button type="submit" className="btn btn-primary mb-2" data-bind="click:subscribeNewsletter">Subscribe</button>
          </form>
          <div className="subscribeSuccessContent">
            <p className="successMessageNewsLetter"></p>
          </div>
        </div>
      </div>
      
      <div className="site-footer__bottom">
        <div className="site-footer__bottom--holder">
          <div className="copyrights">
            <span><a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['WordpressOrigin']+'/privacy-policy'}">Privacy Policy</a></span>
            <span><a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['WordpressOrigin']+'/terms-and-conditions'}">Terms &amp; Conditions</a></span>
            <span><a data-bind="attr: { href: $data.site().extensionSiteSettings['URLSiteSettings']['ServiceOrigin']+'/app/answers/list'}">FAQ</a></span>
            <p>Copyright © 2021 Concepcion-Carrier Air-Conditioning Company. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</div>

      </div>
    </Styled>
  );
};

export default FooterwidgetCustom;
