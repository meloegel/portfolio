import React from 'react'


const Skills = () => {

    return (
        <div className="w-full text-center mb-1.5">
            <div className='hvr-grow relative bg-gray-500 p-1.5 rounded-3xl text-left mx-auto my-8 w-11/12'>
                <h3 ><i class="fas fa-medal"></i> Skills <i class="fas fa-medal"></i></h3>
                <div className="flex mb-8 flex-col md:flex-row">
                    <div className="m-auto text-white text-center p-1 md:p-0 ">
                        <ul>
                            <h4>Core Skills</h4>
                            <li><i className="fab fa-html5"></i> HTML</li>
                            <li><i className="fab fa-css3-alt"></i> CSS</li>
                            <li><i className="fab fa-js-square"></i> Javascript</li>
                            <li><i className="fab fa-python"></i> Python</li>
                            <li>Typescript</li>
                            <li>Java</li>
                            <li>Kotlin</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="m-auto text-white text-center p-1 md:p-0 ">
                        <ul>
                            <h4>Front-End</h4>
                            <li><i className="fab fa-react"></i> ReactJS</li>
                            <li><i class="fas fa-map-marked-alt"></i> Mapbox</li>
                            <li><i className="fab fa-bootstrap"></i> Bootstrap & ReactStrap</li>
                            <li><i class="fas fa-chart-bar"></i> Plotly-Js</li>
                            <li><i className="fab fa-less"></i> LESS</li>
                            <li><i class="fab fa-sass"></i> SASS</li>
                            <li>Redux</li>
                            <li>Tailwind Css</li>
                            <li>Semantic UI</li>
                            <li>Material UI</li>
                            <li>Styled-Components</li>
                        </ul>
                    </div>
                    <div className="m-auto text-white text-center p-1 md:p-0 ">
                        <ul>
                            <h4>Back-End</h4>
                            <li><i className="fab fa-node-js"></i> NodeJS</li>
                            <li>Spring</li>
                            <li>PostgreSQL</li>
                            <li>SQLite3</li>
                            <li>GraphQL</li>
                            <li>Docker</li>
                        </ul>
                    </div>
                    <div className="m-auto text-white text-center p-1 md:p-0 ">
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