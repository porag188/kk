import React from 'react';

function Footer() {
  return (
    <div className="container">
    
    <div className="row">
      <div className="col-md-4">
        <h2>Company Logo</h2>
        <ul>
          <li>Address</li>
          <li>Mail</li>
          <li>Phone</li>
        </ul>
      </div>
      <div className="col-md-4">
        <h2>Who we are</h2>
        <p>  fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
       
      </div>
      <div className="col-md-4">
        <h2>Other Links</h2>
        <ul>
          <li>About</li>
          <li>Blog</li>
          <li>Career</li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default Footer;