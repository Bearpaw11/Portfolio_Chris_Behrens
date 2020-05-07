import React, {Component} from 'react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import Project from "../components/Projects"



class App extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
    
      speed: 500,
      slidesToShow: 1,
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
            <h5 className= "appName">Weather App</h5>
          <img className= "img" src="https://images.unsplash.com/photo-1508697014387-db70aad34f4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/>
          <h3>Applice</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
//   render(){
//     const settings = {
//       dots: true,
//       fade: true,
//       // infinite: true,
//       speed: 500,
//       slidesToShow: 2,
//       arrows: true,
//       slidesToScroll: 2,
//       className: "slides"
//     };

//     return(
//      <div>
//        <h1 className="header">"Inspire and Persevere"</h1>
//        <br></br>
//        <h3 className="header">My Projects</h3>
//        <br></br>
//        <br></br>
        
//     <Slider {...settings}>
//            <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//     </Slider>
//     </div>
//     );
//   }
// }



export default App;