import React from 'react'
import github1 from '../images/gitHub1.png'
import linkedIn from '../images/linkedIn.png'
import resume from '../images/resume.png'
import chrisResume from '../images/ChrisBehrensResume.pdf'

function Contact (){

function githubRedirect() {
    const url = "https://github.com/Bearpaw11"
    window.open(url, "_blank")
}

function linkedInRedirect() {
    const url = "https://www.linkedin.com/in/chris-behrens/"
    window.open(url, "_blank")
}

function resumeRedirect() {
    window.open(chrisResume, "_blank"); 
}

return(
<div className="title1">
<h2 className ="title">Contact</h2>
<br></br>
<h5>Here is my contact info. I'd love to hear from you.</h5>
<br></br>
    <h6>Phone: 602-295-5560</h6>
    <h6>Email: Christopherbehrens1984@gmail.com</h6>
    <br></br>
    <br></br>
    <img class="contactIMG" src={github1} alt="https://github.com/Bearpaw11" onClick={githubRedirect}></img>
    <img className="contactIMG" src={linkedIn} alt="https://www.linkedin.com/in/chris-behrens/"onClick={linkedInRedirect}></img>
    <img className="contactIMG1" src={resume} alt="https://www.linkedin.com/in/chris-behrens/"onClick={resumeRedirect}></img>
</div>
)
}
export default Contact