import React from "react";
import FootLogo from "../images/footer-logo-1.png";
import "font-awesome/css/font-awesome.min.css";
const Footer = () => (
<div className="bg-black footr">
    <div className="wrapping split-wrap">	
      <div className="split text-white">
        <p className="soc-iconz"><a href="#" className="font-bold no-underline text-white" target="_blank" rel="noopener noreferrer">
		<span className="iconz"><i className="fa fa-facebook"></i></span></a>  
        <a href="#" className="font-bold no-underline text-white" target="_blank" rel="noopener noreferrer">
		<span className="iconz"><i className="fa fa-instagram"></i></span></a></p>
CONTACT | FAQ | PERFORM | JOBS | TERMS<br/>
<a href="#" className="font-bold no-underline text-white">
NEON COPYRIGHT (C)</a> 2018 All Rights Reserved
      </div>
      <div className="split">
<img src={FootLogo} alt="Footer Logo"/>
      </div>
    </div>
  </div>
);

export default Footer;
