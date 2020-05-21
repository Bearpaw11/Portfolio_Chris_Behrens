import React, {Component} from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
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
       <h2 className="title">My Projects</h2>
      <br></br>
       <br></br>
        <Slider {...settings}>
          <div>
          <Card clasName="card"style={{ width: '400px', height: '620px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1558541966-d1071f7329bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Speech Therapy</Card.Title>
             <Card.Text>This app allows you to practice your speech using voice-to-text technology. You will receive analysis on filler words you may be saying and the length of your speech. </Card.Text>
             <p> Technologies used: React, MySQL/Sequelize, Nodemailer, Express, Node, Bootstrap, HTML, CSS, Sass, WebSpeech API, Passport, Heroku.</p>
             <a href="https://github.com/Bearpaw11/speech_app/" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://speechtherapyapp.herokuapp.com/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '620px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Bottoms Up</Card.Title>
             <Card.Text>This is a Full Stack social media app aimed at those who have an interest in consuming adult libations, whether at home or out and about, painting the town red! </Card.Text>
             <p>Technologies used: Node.js, express, bcrypt, Passport, MySQL, sequelize, CSS, Bootstrap, Heroku</p>
             <a href="https://github.com/zace118/BottomsUp" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://bottoms-up-app.herokuapp.com/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '620px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Weather Dashboard</Card.Title>
             <Card.Text>Enter a city in the search box and the current weather pops up including a 5 day forecast. The five most recent cities are saved in local stoarge and shown on the page.</Card.Text>
             <p>Technologies used: HTML, CSS, JavaScript, jQuery, OpenWeatherMap API and moment.js</p>
             <br></br>
             <a href="https://github.com/Bearpaw11/Unit_06_Weather_Dashboard" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://bearpaw11.github.io/Unit_06_Weather_Dashboard/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '620px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1552068751-34cb5cf055b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">ChatApp</Card.Title>
             <Card.Text>Join a chat room and live chat with other people. You can choose from multiple chat rooms to join. The Chat admin will notify you when others have joined and left the room</Card.Text>
             <p>Technologies used: CSS, JavaScript, Node.js, express, socket.io, MomentJS, Heroku</p>
             <br></br>
             <a href="https://github.com/Bearpaw11/ChatApp/" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://chatappchatroom.herokuapp.com/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '620px' }}>
           <Card.Img className="projectImg" variant="top" src= "https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Track That Track</Card.Title>
             <Card.Text>This is a music App that a group of developers and I created. This app was made for music lovers that are looking to learn more about bands/artists of their choosing. </Card.Text>
             <p>Technologies used: HTML, CSS, JavaScript, jQuery, LastFM API, BandsInTown API</p>
             <br></br>
             <a href="https://github.com/Bearpaw11/TrackThatTrack" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://bearpaw11.github.io/TrackThatTrack/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
          <div>
          <Card style={{ width: '400px', height: '620px' }}>
           <Card.Img className="projectImg" variant="top" src="https://images.unsplash.com/photo-1586205208101-b9da5ef6120d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
           <Card.Body>
             <Card.Title className="appTitle">Fitness Tracker</Card.Title>
             <Card.Text>This is a workout tracker that allows you to add new resistance or cardio workouts and then view all your workouts on a graph to see your progress.</Card.Text>
             <p>Technologies used: JavaScript, CSS, MonogDB, mongoose, express, morgan</p>
             <br></br>
             <a href="https://github.com/Bearpaw11/Workout_Tracker" target="_blank">Link to GitHub Repo</a><br></br>
             <a href="https://workoutapp2020.herokuapp.com/" target='-blank'>Link to App</a>
           </Card.Body>
          </Card>
          </div>
        </Slider>
      </div>
    );
  }
}

export default App;