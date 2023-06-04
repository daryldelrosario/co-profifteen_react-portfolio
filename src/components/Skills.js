import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import icon1 from '../assets/img/icons1.svg';
import icon2 from '../assets/img/icons2.svg';
import icon3 from '../assets/img/icons3.svg';
import icon4 from '../assets/img/icons4.svg';
import icon5 from '../assets/img/icons5.svg';
import colorSharp from '../assets/img/color-sharp.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <section className="skill">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility offset={500}>
                    {({ isVisible }) => 
                        <div className={isVisible ? "animate__animated animate__zoomInLeft" : ""}>
                            <div className="skill-bx" id="skills">
                                <h2>
                                    Skills
                                </h2>
                                <p>
                                    Began coding in the month of August 2021. Since then I've developed skills in several frontend and backend technologies including jQuery, Java, and MySQL. Below is a snapshot of some other tech stack I've experienced. 
                                </p>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className="item">
                                        <img src={icon1} alt="html5 icon badge"/>
                                        <h5>HTML5</h5>
                                    </div>
                                    <div className="item">
                                        <img src={icon2} alt="css3 icon badge"/>
                                        <h5>CSS3</h5>
                                    </div>
                                    <div className="item">
                                        <img src={icon3} alt="javascript icon badge"/>
                                        <h5>JavaScript</h5>
                                    </div>
                                    <div className="item">
                                        <img src={icon4} alt="react icon badge"/>
                                        <h5>React</h5>
                                    </div>
                                    <div className="item">
                                        <img src={icon5} alt="github icon badge"/>
                                        <h5>GitHub</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </div>
                    }
                    </TrackVisibility>
                        
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}

export default Skills;