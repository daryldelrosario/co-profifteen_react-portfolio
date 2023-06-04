import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import projImg1 from '../assets/img/project-filler1.png';
import projImg2 from '../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects() {
    const projects = [
        {
            title: "Frontend",
            description: "These are",
            imgUrl: projImg1,
        },
        {
            title: "Framework",
            description: "fillers for now.",
            imgUrl: projImg2,
        },
        {
            title: "Focused",
            description: "Will update",
            imgUrl: projImg3,
        },
        {
            title: "Showcase",
            description: "this section once",
            imgUrl: projImg1,
        },
        {
            title: "Projects",
            description: "sifted and sorted",
            imgUrl: projImg2,
        },
        {
            title: "Thank You!",
            description: "through my github repo.",
            imgUrl: projImg3,
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