import React, { Component } from 'react';
import ParticlesBg from 'particles-bg';

class Header extends Component {
    render() {
        return (
            <header id="home">
                <ParticlesBg num={200} color="#FFFFFF" type="cobweb" bg={true} />

                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
                        Show navigation
                    </a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">
                        Hide navigation
                    </a>

                    <ul id="nav" className="nav">
                        <li className="current">
                            <a className="smoothscroll" href="#home">
                                Home
                            </a>
                        </li>

                        <li>
                            <a className="smoothscroll" href="#about">
                                About
                            </a>
                        </li>

                        <li>
                            <a className="smoothscroll" href="#resume">
                                Resume
                            </a>
                        </li>

                        <li>
                            <a className="smoothscroll" href="#portfolio">
                                Portfolio
                            </a>
                        </li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">Vinay Kumar</h1>
                        <h3>
                            Computer science graduate from Rutgers University. Developer and entrepreneur with a passion
                            for creating innovative solutions with experience in front-end, back-end, and mobile
                            development.
                        </h3>
                        <hr />
                        <ul className="social">
                            <a
                                href="https://www.linkedin.com/in/vinay-kumar-b7527a1b4/"
                                className="button btn project-btn"
                            >
                                <i className="fa fa-linkedin-square"></i>Linkedin
                            </a>
                            <a href="https://github.com/vinayk02" className="button btn project-btn">
                                <i className="fa fa-github"></i>Github
                            </a>
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}

export default Header;
