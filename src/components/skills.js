import React from 'react'


const Skills = () => {

    return (
        <div>
            <h3>Skills</h3>
            <div className="skills-div">
                <div className="skills">
                    <ul>
                        <h4>Core Skills</h4>
                        <li><i class="fab fa-html5"></i> HTML</li>
                        <li><i class="fab fa-css3-alt"></i> CSS</li>
                        <li><i class="fab fa-less"></i> LESS</li>
                        <li><i class="fab fa-js-square"></i> Javascript</li>
                        <li><i class="fab fa-python"></i> Python</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="skills">
                    <ul>
                        <h4>Front-End</h4>
                        <li><i class="fab fa-react"></i> ReactJS</li>
                        <li>Redux</li>
                        <li>Context</li>
                        <li><i class="fab fa-react"></i> React Native</li>
                        <li>MaterialUI</li>
                        <li><i class="fab fa-bootstrap"></i> Bootstrap & ReactStrap</li>
                        <li>Styled-Components</li>
                    </ul>
                </div>
                <div className="skills">
                    <ul>
                        <h4>Back-End</h4>
                        <li><i class="fab fa-node-js"></i> NodeJS</li>
                        <li>Express</li>
                        <li>PostgreSQL</li>
                        <li>SQLite</li>
                        <li>GraphQL</li>
                    </ul>
                </div>
                <div className="skills">
                    <ul>
                        <h4>Testing</h4>
                        <li>Cypress.io</li>
                        <li>Jest</li>
                        <li>Supertest</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;