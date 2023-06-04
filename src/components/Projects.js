import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projectFiller1 from '../assets/img/project-filler1.png';
import projectFiller2 from '../assets/img/project-filler2.png';
import projectFiller3 from '../assets/img/project-filler3.png';
import projectFiller4 from '../assets/img/project-filler4.png';
import projectFiller5 from '../assets/img/project-filler5.png';
import projectFiller6 from '../assets/img/project-filler6.png';

import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects() {
    const projects = [
        {
            title: "Frontend",
            description: "These are",
            imgUrl: projectFiller1,
        },
        {
            title: "Framework",
            description: "fillers for now.",
            imgUrl: projectFiller2,
        },
        {
            title: "Focused",
            description: "Will update",
            imgUrl: projectFiller3,
        },
        {
            title: "Showcase",
            description: "this section once",
            imgUrl: projectFiller4,
        },
        {
            title: "Projects",
            description: "sifted and sorted",
            imgUrl: projectFiller5,
        },
        {
            title: "Thank You!",
            description: "through my github repo.",
            imgUrl: projectFiller6,
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility offset={100}>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__zoomInRight" : ""}>
                                <div className="project-bx">
                                    <h2>Projects</h2>
                                    <p>
                                        Completed projects that showcase frontend frameworks including html, css, javascript and react. Backend frameworks including jquery and mysql. Fullstack apps created with java, thymeleaf and springboot. Currently just fillers.
                                    </p>
                                </div>
                            </div>
                        }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Frontend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Backend</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Fullstack</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard 
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Backend Framework Focused Projects
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Fullstack Web Applications
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    );
}

export default Projects;