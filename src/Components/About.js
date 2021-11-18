import React, { Component } from "react";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    
    const profilepic = "images/" + this.props.data.image;
    

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={profilepic} alt-text="photo"  />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>I’m interested mainly in web development and mobile development and my side interests are in data science and game development. My previous experiences include managing the social media and website presence for Taste of India II, interning at Hill West Architects, and volunteering at Jacques Marchais Museum of Tibetan Art and Staten Island Hindu Temple. I’m a fast and enthusiastic learner and am fluent in spoken Punjabi and Hindi. </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Me</h2>
                <p className="address">
                  <span>Name: Vinay Kumar</span>
                  <br />
                  <span>Email: kumarv242471@gmail.com</span>
                  <br />
                  <span>Phone Number: 646-691-4303</span>
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
