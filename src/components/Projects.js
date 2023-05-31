import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCards';
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
import colorSharp2 from '../assets/img/color-sharp2.png';

function Projects() {
    const projects = [
        {
            title: "Business Statup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Statup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Statup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Statup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Statup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Statup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate quod eius ut a incidunt iste amet iusto praesentium explicabo qui.
                        </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
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
                                                );  
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Lorem Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Lorem Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}

export default Projects;