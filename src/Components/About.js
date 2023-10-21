import React, { Component } from 'react';

class About extends Component {
    render() {
        if (!this.props.data) return null;

        const profilepic = 'images/' + this.props.data.image;

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt-text="photo" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>
                            I'm a passionate developer as well as an entrepreneur. I have experience in mobile app
                            development, front-end development, and backend development. I am currently experimenting
                            with machine learning. I created an app called Priorityze with a vision to help people,
                            including myself, to be more organized with their tasks in ways that matter to them. The app
                            includes a to-do list and a calendar with many unique features. Thanks to Priorityze,
                            thousands of users have been able to become their most productive selves. In the fall of
                            2021, I created Alloy Solutions, a company that provides services such as branding, web
                            development, and app development. With my current position at Whiting-Turner being a VDC
                            Engineer, I gained valuable experience in the field of engineering. I learned about the
                            various programs used in construction and how to utilize it to become a good engineer. In
                            addition to technical skills, I am a fast and enthusiastic learn, fluent in spoken Punjabi
                            and Hindi, and have a strong work ethic. I'm excited to explore new technologies and
                            continue to grow my skills as a developer.{' '}
                        </p>
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
