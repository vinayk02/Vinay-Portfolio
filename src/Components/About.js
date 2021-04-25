import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    
    const profilepic = "images/" + this.props.data.image;
    

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic}  />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I'm a student at Rutgers University pursuing a bachelor degree in computer science. 
            I have work experience in different industries. 
            I'm from Staten Island, New York. I am a fast and enthusiastic learner. 
             am also fluent in spoken Punjabi and Hindi</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>General Information</h2>
                <p className="address">
                  <span>Name: Vinay Kumar</span>
                  <br />
                  <span>
                    Age: 19 years old
                    <br />
                    Phone: 646-691-4303
                  </span>
                  <br />
                  <span>Email: kumarv242471@gmail.com</span>
                  <br />
                  <span>Address: Staten Island, New York</span>
                </p>
              </div>
            
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
