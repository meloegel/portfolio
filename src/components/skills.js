import React from 'react'


const Skills = () => {

    return (
        <div id='centerSkills'>
            <div id='skillsDiv' className='hvr-grow'  >
                <h3 ><i class="fas fa-medal"></i> Skills <i class="fas fa-medal"></i></h3>
                <div className="skills-div">
                    <div className="skills">
                        <ul>
                            <h4>Core Skills</h4>
                            <li><i className="fab fa-html5"></i> HTML</li>
                            <li><i className="fab fa-css3-alt"></i> CSS</li>
                            <li><i className="fab fa-less"></i> LESS</li>
                            <li><i class="fab fa-sass"></i> SASS</li>
                            <li><i className="fab fa-js-square"></i> Javascript</li>
                            <li><i className="fab fa-python"></i> Python</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <ul>
                            <h4>Front-End</h4>
                            <li><i className="fab fa-react"></i> ReactJS</li>
                            <li>Redux</li>
                            <li>Context</li>
                            <li>Ant Design</li>
                            <li>Semantic UI</li>
                            <li>Material UI</li>
                            <li><i class="fas fa-map-marked-alt"></i> Mapbox</li>
                            <li><i className="fab fa-bootstrap"></i> Bootstrap & ReactStrap</li>
                            <li>Styled-Components</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <ul>
                            <h4>Back-End</h4>
                            <li><i className="fab fa-node-js"></i> NodeJS</li>
                            <li>Express</li>
                            <li>Nodemon</li>
                            <li>PostgreSQL</li>
                            <li>SQLite</li>
                            <li>GraphQL</li>
                        </ul>
                    </div>
                    <div className="skills">
                        <ul>
                            <h4>Testing</h4>
                            <li>Cypress</li>
                            <li>Jest</li>
                            <li>Supertest</li>
                            <li>React-Testing-Library</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;