import { Container, Row, Col } from 'react-boostrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

function Banner () {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm daryldevcodes`}<span className="wrap">software developer</span></h1>
                        <p>
                            ABOUT ME: Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur alias dolore nesciunt obcaecati quo, eveniet quaerat repudiandae aliquam mollitia non, molestiae, quam maxime quibusdam impedit quis quia incidunt cupiditate magni.
                        </p>
                        <button onClick={() => console.log("connect")}>Let's Connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;