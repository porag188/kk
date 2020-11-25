import React from 'react';
import './style/footer.css'
function Footer() {
  return (
    <div className="footer">
    <div className="col-md-12">  
    <div className="row">
      <div className="col-md-4">
        <h2 className="footer_h2">Company Logo</h2>
        <ul>
          <li>Address</li>
          <li>Mail</li>
          <li>Phone</li>
        </ul>
      </div>
      <div className="col-md-4">
        <h2 className="footer_h2">Who we are</h2>
        <p>  fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
       
      </div>
      <div className="col-md-4">
        <h2 className="footer_h2">Other Links</h2>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Career</li>
        </ul>
      </div>
    </div>
    </div>
    
    </div>
  );
}

export default Footer;