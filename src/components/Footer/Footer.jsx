import React from "react";
import "./footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <>
      <section
  style={{
    backgroundColor: 'var(--primary-color)',
    padding: "1rem",
    borderRadius: "30px 30px 0 0",
  }}
>
  {/* Flex container for first line text + icons */}
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap'}}>
    
    {/* Left side: first line text */}
    <p style={{ color: 'white', fontWeight: 'bold', margin: 0 ,paddingLeft:'40px'}}>
      We're here to help
    </p>
    
    {/* Right side: all icons + texts */}
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', paddingRight:'40px' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <FontAwesomeIcon className="Allicon" icon={faCircleQuestion} style={{ fontSize: '1.5rem' }} />
        <div style={{ marginLeft: '8px' }}>
          <p style={{ margin: 0 }}>Help Center</p>
          <p style={{ margin: 0 }}>Help.SnapCart.com</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <FontAwesomeIcon  className="Allicon" icon={faPhoneVolume} style={{ fontSize: '1.5rem' }} />
        <div style={{ marginLeft: '8px' }}>
          <p style={{ margin: 0 }}>Phone</p>
          <p style={{ margin: 0 }}>+91 8928063612</p>
        </div>
      </div>
    <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
        <FontAwesomeIcon className="Allicon" icon={faMailBulk} style={{ fontSize: '1.5rem' }} />
        <div style={{ marginLeft: '8px' }}>
          <p style={{ margin: 0 }}>Email Support</p>
          <p style={{ margin: 0 }}>Online@SnapCart.com</p>
        </div>
      </div>
      
    </div>
  </div>

  {/* Second line text below */}
  <p style={{ color: 'white', fontWeight: 'bold', marginTop: '0.5rem',paddingLeft:'40px' }}>
    You can get help by choosing from any of these options
  </p>
</section>

<footer style={{ 
  backgroundColor: "var(--tertiary-color)", 
  color: "white", 
  textAlign: "center", 
  padding: "1rem", 
 
}}>
  <div  style={{ marginBottom: "0.5rem" }}>
    <FontAwesomeIcon className="FooetrIcon" icon={faFacebookF} style={{ margin: "0 10px", cursor: "pointer" ,fontSize: '1.5rem'}} />
    <FontAwesomeIcon className="FooetrIcon" icon={faTwitter} style={{ margin: "0 10px", cursor: "pointer" ,fontSize: '1.5rem'}} />
    <FontAwesomeIcon className="FooetrIcon" icon={faLinkedinIn} style={{ margin: "0 10px", cursor: "pointer" ,fontSize: '1.5rem'}} />
  </div>
  <p style={{ margin: 0 }}>©2024 SnapCart. All rights reserved.</p>
</footer>

    </>
  );
};

export default Footer;
