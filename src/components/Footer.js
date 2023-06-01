import { Container, Row, Col } from 'react-bootstrap';
import MailchimpForm from './MailchimpForm';
import logo from '../assets/img/daryl-logo_white.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm />
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} /></a>
                            <a href=""><img src={navIcon2} /></a>
                            <a href=""><img src={navIcon3} /></a>
                        </div>
                        <p>Daryl del Rosario &#169; {currentYear}. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;