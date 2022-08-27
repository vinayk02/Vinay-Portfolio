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

            <p>I’m interested in app development and in web development. 
              My previous experiences include developing and releasing my own app called Priorityze on the Apple app store and on the Google Play Store. 
              I have also made several websites such as the Alloy Solutions website, MasterDate, Noel's Barbershop and some mock dashboards. 
              I had an internship at Whiting-Turner in the summer of 2022 which taught me about several programs 
              that are used in construction and how to use them in order to be a good engineer. 
              I have previously managed the social media and website presence for Taste of India.
             
              I’m a fast and enthusiastic learner and am fluent in spoken Punjabi and Hindi. </p>
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
