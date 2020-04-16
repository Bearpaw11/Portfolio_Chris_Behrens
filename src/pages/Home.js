import React from 'react'
import MenuImg from '../images/background1.jpeg'
import Chris from '../images/chris.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function Home (){
return(
<div>
    <img className="background" src={MenuImg}></img>
    <h2 className = 'title'> Full Stack Web Developer</h2>
    <img className="chris" src={Chris}></img>
    <h5 className="about"> I am a Full Stack Web Developer who is a critical thinker, team player and loves a challenge. Recently received a Full Stack Development certificate from The University of Arizona. I have built this portfolio to help showcases my skills with front end programs such as HTML5, CSS, JavaScript, Bootstrap, ReactJs and back end programs and frameworks such as Node.js, express and MySQL. My experience as a Systems Engineer has given me knowledge of the cutting edge hardware and software being used to accelerate growth and new technologies in this space. I also have a strong business background that includes a Bachelor’s degree in Finance that can be used to put a monetary perspective on projects as well. I am excited to leverage my expertise, education and knowledge and become an asset to a software development team.</h5>
    <h3 className='skillsHeader'>Current Technologies and Skill Set</h3>
    <Row>
    <Col>
    <h4>Front End</h4>
    <div className= "skills">HTML</div>
        </Col>
    
        <Col>
    <h4>Back End</h4>
    <div className= "skills">HTML</div>
        </Col>
  </Row>
 </div>


)
}

export default Home