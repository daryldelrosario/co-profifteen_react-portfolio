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
                        <a href="#home"><img src={logo} alt="logo" /></a>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/daryldelrosario/" target="_blank"><img src={navIcon1} alt="linkedin icon"/></a>
                            <a href="https://www.facebook.com/darylxdr/" target="_blank"><img src={navIcon2} alt="facebook icon"/></a>
                            <a href="https://www.instagram.com/dnaxdr9407/" target="_blank"><img src={navIcon3} alt="instagram icon"/></a>
                        </div>
                        <p>Daryl del Rosario &#169; {currentYear}. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;