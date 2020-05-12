import React, {Component} from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Project from "../components/Projects"
import Card from 'react-bootstrap/Card'




class App extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
       <h1 className="header">Inspire and Persevere</h1>
      <br></br>
       <h3 className="header">My Projects</h3>
      <br></br>
       <br></br>
        <Slider {...settings}>
          <div>
          <Card clasName="card"style={{ width: '400px', height: '550px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1558541966-d1071f7329bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Speech Therapy</Card.Title>
             <Card.Text>This app allows you to practice your speech. You will recieve analysis on filler words you might be saying and the length of your speech. This app was devleoped by myself and 3 other developers. I was the backend lead for this project.</Card.Text>
             <a href="https://speechtherapyapp.herokuapp.com/" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://github.com/Bearpaw11/speech_app" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '550px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Bottoms Up</Card.Title>
             <Card.Text>This is Full Stack social media app for the drinker that a group of developers and I made. This app uses Passport for user verification, MySql for the database and sequelize as middleware</Card.Text>
             <br></br>
             <a href="https://github.com/Bearpaw11/Unit_06_Weather_Dashboard" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://bearpaw11.github.io/Unit_06_Weather_Dashboard/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '550px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Weather Dashboard</Card.Title>
             <Card.Text>This is a weather app I made using jQuery and the OpenWeather API. You may check the current weather of any major city and get a 5 day forcast</Card.Text>
             <br></br>
             <br></br>
             <a href="https://github.com/Bearpaw11/Unit_06_Weather_Dashboard" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://bearpaw11.github.io/Unit_06_Weather_Dashboard/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '550px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Weather Dashboard</Card.Title>
             <Card.Text>This is a weather app I made using jQuery and the OpenWeather API. You may check the current weather of any major city and get a 5 day forcast</Card.Text>
             <a href="https://github.com/Bearpaw11/Unit_06_Weather_Dashboard" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://bearpaw11.github.io/Unit_06_Weather_Dashboard/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '550px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Weather Dashboard</Card.Title>
             <Card.Text>This is a weather app I made using jQuery and the OpenWeather API. You may check the current weather of any major city and get a 5 day forcast</Card.Text>
             <a href="https://github.com/Bearpaw11/Unit_06_Weather_Dashboard" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://bearpaw11.github.io/Unit_06_Weather_Dashboard/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '550px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Weather Dashboard</Card.Title>
             <Card.Text>This is a weather app I made using jQuery and the OpenWeather API. You may check the current weather of any major city and get a 5 day forcast</Card.Text>
             <a href="https://github.com/Bearpaw11/Unit_06_Weather_Dashboard" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://bearpaw11.github.io/Unit_06_Weather_Dashboard/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;