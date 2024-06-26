import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class About extends Component {
    render() {
        if (!this.props.data) return null;

        const profilepic = 'images/' + this.props.data.image;

        return (
            <section id="about">
                <div className="row">
                    <div className="five columns" style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <h2 style={{ textAlign: 'center' }}>About Me</h2>
                        <p style={{ textAlign: 'center' }}>
                            I'm a passionate developer as well as an entrepreneur. I have experience in mobile app
                            development, front-end development, and backend development. I am currently experimenting
                            with machine learning. I created an app called Priorityze with a vision to help people,
                            including myself, to be more organized with their tasks in ways that matter to them. The app
                            includes a to-do list and a calendar with many unique features. Thanks to Priorityze,
                            thousands of users have been able to become their most productive selves. With my current
                            position at Whiting-Turner being a VDC Engineer, I gained valuable experience in the field
                            of engineering. I learned about the various programs used in construction and how to utilize
                            it to become a good engineer. In addition to technical skills, I am a fast and enthusiastic
                            learn, fluent in spoken Punjabi and Hindi, and have a strong work ethic. I'm excited to
                            explore new technologies and continue to grow my skills as a developer.
                        </p>
                        <div
                            className="row"
                            style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                        >
                            <a href="https://www.instagram.com/vinay_kumar01/">
                                <i className="fa fa-instagram" style={{ fontSize: '3rem', marginRight: '3vw' }}></i>
                            </a>
                            <a href="https://www.linkedin.com/in/vinay-kumar-b7527a1b4/">
                                <i
                                    className="fa fa-linkedin-square"
                                    style={{ fontSize: '3rem', marginRight: '3vw' }}
                                ></i>
                            </a>

                            <a href="https://github.com/vinayk02">
                                <i className="fa fa-github" style={{ fontSize: '3rem', marginRight: '3vw' }}></i>
                            </a>

                            <a href="https://copper-bernete-67.tiiny.site">
                                <i className="fa fa-file" style={{ fontSize: '3rem' }}></i>
                            </a>
                        </div>
                    </div>

                    <div
                        className="two columns"
                        style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}
                    >
                        <img className="profile-pic" src={profilepic} alt-text="photo" />
                    </div>
                    <div className="five columns main-col">
                        <h2>
                            <span>Language</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p>
                                <span>Javascript, HTML, CSS, Typescript, SQL, Python, Java, C, C#, Linux</span>
                            </p>
                        </div>
                        <h2>
                            <span>Frameworks/ Libraries</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p>
                                <span>Juptyer Notebook, Google Collab, ReactJS, React Native, KnexJS, Pandas</span>
                            </p>
                        </div>
                        <h2>
                            <span>Developer Tools</span>
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <p>
                                <span>
                                    VS Code, HeidiSQL, Visual Studio, IntelliJ, Eclipse, XCode, Android Studio,
                                    MobaXterm
                                </span>
                            </p>
                        </div>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Me</h2>
                                <p className="address">
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
