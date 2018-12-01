import React from "react";
import cautiousDog from "../images/big_educated.jpg";
import styled from 'styled-components';
import Layout from '../components/layout';
const ColThreeContainer = styled.div`
clear:all;overflow:auto;margin:2.5rem 0 1.5rem;
`
const AboutPage = () => (
<Layout>
<div className="wrapping home">
<div className="third-wrap">
 <div className="two-thirds">
<h2>WHO WE ARE</h2>
<p className="leading-loose">
We empower students to learn how to code by nurturing their preexisting goals and ambitions within their school environment. We have been working woth schools for over 3 Years and have taught over 100 students and lectured in classrooms to over 2500 students during that stretch of time.
</p>

<h2>OUR VISION</h2>
<p className="leading-loose">
Create an interactive ecosystem that engages students to learn how to code, develop team building skills, and a strong roadmap to be successful in next-generation technology fields. This environment includes leveraging existing technology resources currently available at schools, provide mentors that are further along in thier academic path and exposure to companies and college environments.
</p>

<h2>CODESCHOLARLY LABS</h2>
<p className="leading-loose">
Focuses on creating learning environments that has support to get through obstacles associated with learning how to code. Similar to an incubator, we use best practices from industry and develop an autonomous atmosphere that is geared towards building confidence towards mastery. As the student progress they will develop their skill set to discover what aspects of the industry inspies them so that they could work with our team, mentors and colleagues to rapidly find their purpose.
</p>
</div>
<div className="one-third">
    <img src={cautiousDog} alt="sidebar-img"/>	  
</div>
</div>
<ColThreeContainer>
<h2 className="cheading text-center">OUR TEAM</h2>
<div className="ColThree">
<h3 className="text-center">Jean Borgella</h3>
<p className="leading-loose text-center">
Formally Project Manager at Joint Program Office supporting Vehicle Communication Technologies and GWU and Old Westbury Alum
</p>
</div>
<div className="ColThree">
<h3 className="text-center">Dr. Kadidja Diallo</h3>
<p className="leading-loose text-center">
New York University
</p>
</div>
<div className="ColThree">
<h3 className="text-center">William Massey</h3>
<p className="leading-loose text-center">
Assosciate Professor for Mathematics at Princeton University
</p>
</div>
</ColThreeContainer>
</div>
</Layout>
);
export default AboutPage;
