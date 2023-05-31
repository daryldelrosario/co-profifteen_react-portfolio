import MailchimpSubscribe from 'react-mailchimp-subscribe';

function MailchimpForm() {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return(
        <section>
            <MailchimpSubscribe 
                url={postUrl}
                render={({ subscribe, status, message }) => {
                    <></>
                }}
            />
        </section>
    );
}

export default MailchimpForm;
