import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner () {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const leftBlock = "I'm ";
    const rightBlock = ".";
    const toRotate = [
        "a Software Developer",
        "equipped with JavaScript",
        "a Full Stack Developer",
        "stacked with Java and MySQL",
        "an Elite Problem Solver",
        "a Life Long Learner",
        "a Grateful Husband and Father"
    ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); 
        setText(updatedText);

        if(isDeleting) {
            setDelta(50);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(100);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility partialVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomInDown" : ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1>{`My name is Daryl`}
                                <br/>
                                    <span className="txt-rotate">
                                        {leftBlock}
                                        <span className="wrap">
                                            {text}
                                        </span>
                                        {rightBlock}
                                    </span>
                                    
                                </h1>
                                <p className="about-me">
                                    Hello world! I'm a software developer equipped with JavaScript. Able to full stack with Java and MySQL. On top of that, I'm an elite problem solver, life long learner and a very grateful husband and father!
                                </p>
                                <button onClick={() => console.log("connect")}>Let's Connect <ArrowRightCircle size={25}/></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility partialVisibility>
                        {({ isVisible }) => 
                            <div className={isVisible ? "animate__animated animate__zoomInUp" : ""}>
                                <img src={headerImg} alt="header image"/>
                            </div>
                        }
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Banner;