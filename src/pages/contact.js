import React from "react";
import Layout from '../components/layout';
const ContactPage = () => (
<Layout>
<div className="wrapping home">
  <div className="third-wrap">
  
  <div className="two-thirds">
<iframe className="ourMap" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d12108.712272540175!2d-74.017745!3d40.648005!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1537158629224" title="iframe-map"></iframe>
  </div>

  <div className="one-third">
<h3>Contact Codescholar.ly</h3>
<ul className="CList">
<li>1(917)-379-6497 / info@codescholarly.com</li>
<li>Mon to Fri - 08:00 to 16:30</li>
<li>Brooklyn, New York</li>
</ul>
  <form className="ctack mx-auto">
    <p><input className="" id="first-name" type="text" placeholder="First Name"/></p>
    <p><input className="" id="last-name" type="text" placeholder="Last Name"/></p>
    <p><textarea className="" placeholder="Say something..." rows="8"/></p>
	<p>
    <button className="border-b-4 border-grey-darker hover:border-grey-dark bg-grey-dark hover:bg-grey font-bold px-6 py-3 rounded text-sm text-white">Submit</button>
	</p>
  </form>  
  </div>
  
  </div>
  </div>
</Layout>
);

export default ContactPage;
