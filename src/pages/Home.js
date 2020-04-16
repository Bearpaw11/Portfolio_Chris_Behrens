import React from 'react'
import MenuImg from '../images/background1.jpeg'
import Chris from '../images/chris.png'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import HTML from '../images/html.png'
import CSS from '../images/css.png'
import JavaScript from '../images/js.png'
import ReactLogo from '../images/react.png'
import Bootstrap from '../images/bootstrap.png'
import jQuery from '../images/jquery.png'
import Json from '../images/json.png'
import Github from '../images/github.png'
import NPM from '../images/npm.png'
import Mongo from '../images/mongo.png'
import MySql from '../images/mysql.png'
import Heroku from '../images/heroku.png'
import Node from '../images/node.png'

function Home (){
return(
<div>
    <img className="background" src={MenuImg}></img>
    <h2 className = 'title'> About Me</h2>
    <img className="chris" src={Chris}></img>
    <h5 className="about"> Hi, I'm Chris! I am a Full Stack Web Developer who is a critical thinker, team player and loves a challenge. Recently received a Full Stack Web Development certificate from The University of Arizona. I have built this portfolio to help showcases my skills with front end programs such as HTML5, CSS, JavaScript, Bootstrap, ReactJs and back end programs and frameworks such as Node.js, express and MySQL. My experience as a Systems Engineer has given me knowledge of the cutting edge hardware and software being used to accelerate growth and new technologies in this space. I also have a strong business background that includes a Bachelor’s degree in Finance that can be used to put a monetary perspective on projects as well. I am excited to leverage my expertise, education and knowledge and become an asset to a software development team.</h5>
    <h3 className='skillsHeader'>Current Technologies and Skill Set</h3>
    <Row className="allSkills">
    <Col>
    <h4>Front-End</h4>
    <div className= "skills">HTML <img className="logo"src={HTML} alt="HTML"></img></div>
    <div className= "skills">CSS <img className="logo"src={CSS} alt="CSS"></img></div>
    <div className= "skills">JavaScript <img className="logo"src={JavaScript} alt="JavaScript"></img></div>
    <div className= "skills">BootStrap <img className="logo"src={Bootstrap} alt="Bootstrap"></img></div>
    <div className= "skills">React <img className="logo"src={ReactLogo} alt="React"></img></div>
    <div className= "skills">ES6</div>
    <div className= "skills">jQuery <img className="logo"src={jQuery} alt="jQuery"></img></div>
        </Col>
    
        <Col>
    <h4>Back-End</h4>
    <div className= "skills">Express.js</div> 
    <div className= "skills">Node <img className="logo"src={Node} alt="Node"></img></div>
    <div className= "skills">NPM <img className="logo"src={NPM} alt="NPM"></img></div>
    <div className= "skills">MySQL<img className="logoM"src={MySql} alt="mySql"></img></div>
    <div className= "skills">MongoDB <img className="logoM"src={Mongo} alt="mongo"></img></div>
    <div className= "skills">Mongoose</div>
    <div className= "skills">IndexDB</div>
        </Col>
     
        <Col>
    <h4>Other Skills</h4>
    <div className= "skills">MVC</div>
    <div className= "skills">TDD</div>
    <div className= "skills">Heroku <img className="logo"src={Heroku} alt="Node"></img></div>
    <div className= "skills">GitHub <img className="logo"src={Github} alt="Github"></img></div>
    <div className= "skills">JSON <img className="logo"src={Json} alt="json"></img></div>
    <div className= "skills">AJAX</div>
    <div className= "skills">API</div>

        </Col>

  </Row>
 </div>


)
}

export default Home