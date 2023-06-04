import { Alert, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Newsletter({ onValidated, status, message }) {
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);

    const clearFields = () => {
        setEmail('');
        window.location.reload();
    }
    
    useEffect(() => {
        if(status === "success")  clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();

        if(email && email.indexOf('@') > -1 ) {
            onValidated({
                EMAIL: email
            });
            setShowError(false);
        } else {
            setShowError(true);
        }
    };

    

    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe To Our Newsletter</h3>
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email-bx">
                                <input 
                                    value={email} 
                                    type="email" 
                                    onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"
                                />
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </Col>
                    <div className="newsletter-message">
                        {status === "sending" && <Alert>Sending ...</Alert>}
                        {status === "error" && <Alert variant="danger">{message}</Alert>}
                        {status === "success" && <Alert variant="success">{message}</Alert>}
                        {showError && <Alert variant="danger">Please enter a valid email address</Alert>}
                    </div>
                </Row>
            </div>
        </Col>
    );
}

export default Newsletter;