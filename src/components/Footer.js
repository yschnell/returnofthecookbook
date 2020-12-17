import React from 'react';
import './Footer.css';

const Footer = () => {
    return(
        <div className="main-footer">
          <div className='container'>
              <div className='row'>
                  {/* Column 1 */}
                    <div className='col'>
                        <h4 className='footer-h4'>Group 1</h4>
                        <ul className='list-unstyled'>
                            <li>Ezgi</li>
                            <li>Yann</li>
                            <li>Spyridon</li>
                        </ul>
                    </div>
                  {/* Column 2 */}
                  <div className='col'>
                        <h4 className='footer-h4'>About</h4>
                            <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                            </p>
                    </div>
                  {/* Column 3 */}
                  <div className='col'>
                        <h4 className='footer-h4'>Contact Us</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                            </p>
                    </div>
              </div>
              <hr />
              <div className='row-last'>
                  
                   <span> &copy;{new Date().getFullYear()} Group 1 | All rights reserved | Terms of service | Privacy </span>  
                 
              </div>
          </div>
        </div>
    )
}

export default Footer;