import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Contact() {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});
    const [inputChanged, setInputChanged] = useState(false);

    const validateForm = () => {
        let isValid = true;
        const errors = {};

        if(!formDetails.firstName.trim()) {
            errors.firstName = "*required";
            isValid = false;
        }

        if(!formDetails.email.trim()) {
            errors.email = "*required";
            isValid = false;
        } else if(!/\S+@\S+.\S+/.test(formDetails.email)) {
            errors.email = "*invalid format";
            isValid = false;
        }


        if(!formDetails.phone.trim()) {
            errors.phone = "*required";
            isValid = false;
        } else if(!/^\d+$/.test(formDetails.phone)) {
            errors.phone = "*must contain only numbers";
            isValid = false;
        }


        if(!formDetails.message.trim()) {
            errors.message = "*required";
            isValid = false;
        }

        return { isValid, errors };
    };

    const onInputHandler = (category) => {
        setStatus((prevStatus) => ({
            ...prevStatus,
            errors: {
                ...prevStatus.errors,
                [category]: '',
            },
            message: '',
        }));

        setInputChanged(true);

        if(inputChanged) {
            setButtonText('Send');
        }
    };

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value,
        })

        setInputChanged(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { isValid, errors } = validateForm();

        if(isValid) {
            setButtonText('Sending ...');

            setTimeout(() => {
                setButtonText('Successfully Sent');
                setStatus({ success: true, message: 'Message sent successfully' });
    
                setTimeout(() => {
                    setFormDetails(formInitialDetails);
                    window.location.reload();
                }, 2000);
            }, 1000);
        } else {
            setButtonText("Sending ...");

            setTimeout(() => {
                setButtonText('Whoops');
                setStatus({ success: false, message: 'Please check the form and try again.', errors });
            }, 1000);
        }

        setInputChanged(false);
    };

    return (
        <section className="contact">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <TrackVisibility offset={500}>
                        {({ isVisible }) => 
                            <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="contact us image"/>
                        }
                        </TrackVisibility>
                    </Col>
                    <Col md={6}>
                        <h2 id="contact">Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col xs={12} sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.firstName} 
                                        placeholder="First Name" 
                                        className={`${
                                            status.errors && 
                                            status.errors.firstName ? 
                                            'contact-error' : 
                                            'contact-normal'} 
                                            ${
                                                status.success ?
                                                'contact-success' :
                                                ''
                                            }`}
                                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                        onInput={() => onInputHandler('firstName')}
                                    />
                                    {
                                        status.errors &&
                                        status.errors.firstName &&
                                        (
                                            <p className="contact-error-message contact-center">
                                                {status.errors.firstName}
                                            </p>
                                        )
                                    }
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                    <input 
                                        type="text" 
                                        value={formDetails.lastName} 
                                        placeholder="Last Name" 
                                        className={`${
                                            status.errors && 
                                            status.errors.lastName ? 
                                            'contact-error' : 
                                            'contact-normal'} 
                                            ${
                                                status.success ?
                                                'contact-success' :
                                                ''
                                            }`}
                                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                        onInput={() => onInputHandler('lastName')}
                                    />
                                    {
                                        status.errors &&
                                        status.errors.lastName &&
                                        (
                                            <p className="contact-error-message contact-center">
                                                {status.errors.lastName}
                                            </p>
                                        )
                                    }
                                </Col>
                                <Col xs={12} sm={6} className="px-1">
                                    <input 
                                        type="email" 
                                        value={formDetails.email} 
                                        placeholder="Email Address" 
                                        className={`${
                                            status.errors && 
                                            status.errors.email ? 
                                            'contact-error' : 
                                            'contact-normal'} 
                                            ${
                                                status.success ?
                                                'contact-success' :
                                                ''
                                            }`}
                                        onChange={(e) => onFormUpdate('email', e.target.value)}
                                        onInput={() => onInputHandler('email')}
                                    />
                                    {
                                        status.errors &&
                                        status.errors.email &&
                                        (
                                            <p className="contact-error-message contact-center">
                                                {status.errors.email}
                                            </p>
                                        )
                                    }
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                        type="tel" 
                                        value={formDetails.phone} 
                                        placeholder="Phone No." 
                                        className={`${
                                            status.errors && 
                                            status.errors.phone ? 
                                            'contact-error' : 
                                            'contact-normal'} 
                                            ${
                                                status.success ?
                                                'contact-success' :
                                                ''
                                            }`}
                                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                                        onInput={() => onInputHandler('phone')}
                                    />
                                    {
                                        status.errors &&
                                        status.errors.phone && 
                                        (
                                            <p className="contact-error-message contact-center">
                                                {status.errors.phone}
                                            </p>
                                        )
                                    }
                                </Col>
                            </Row>
                            <Col xs={12}>
                                <textarea 
                                    rows="6" 
                                    value={formDetails.message} 
                                    placeholder="Message" 
                                    className={`${
                                        status.errors && 
                                        status.errors.message ? 
                                        'contact-error' : 
                                        'contact-normal'} 
                                        ${
                                            status.success ? 
                                            'contact-success' :
                                            ''
                                        }`}

                                    onChange={(e) => onFormUpdate('message', e.target.value)}
                                    onInput={() => onInputHandler('message')}
                                />
                                {
                                    status.errors &&
                                    status.errors.message &&
                                    (
                                        <p className='contact-error-message contact-center'>
                                            {status.errors.message}
                                        </p>
                                    )
                                }
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? 'contact-error-message' : 'contact-success-message'}>{status.message}</p>
                                </Col>
                            }
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>  
    );
}

export default Contact;