import React, { Component } from 'react';
import Zmage from 'react-zmage';

class Portfolio extends Component {
    render() {
        if (!this.props.data) return null;

        const projects = this.props.data.projects.map(function (project, index) {
            let projectImage = 'images/portfolio/' + project.image;

            return (
                <div key={index} className="columns portfolio-item four columns">
                    <div className="item-wrap">
                        <Zmage alt={project.title} src={projectImage} />
                        <div style={{ textAlign: 'center' }}>
                            {project.link && (
                                <a href={project.link} style={{ textDecoration: 'none' }}>
                                    {project.title}
                                </a>
                            )}
                            {!project.link && (
                                <p style={{ textDecoration: 'none', color: 'black', marginBottom: 0 }}>
                                    {project.title}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <section id="portfolio">
                <div className="row">
                    {
                        //make a 2x5 grid
                    }
                    <div>
                        <h1>Projects</h1>
                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
