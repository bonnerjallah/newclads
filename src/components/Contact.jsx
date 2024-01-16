import { useRef } from "react";
import emailjs from '@emailjs/browser';

import contactformstyle from "../styles/contactformstyle.module.css"


import Footer from "../components/Footer";
import ScrollToTop from "./ScrollToTop";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gmzc0bi', 'template_ruy6ds9', form.current, 'Zmd1mse9A9KmBkXmK')
            .then((result) => {
                console.log(result.text);
                alert('Email sent successfully!');
            }, (error) => {
                console.log(error.text);
                alert('Error sending email. Please try again later.');
        });

        e.target.reset();
    };

    return (
        <>
            <ScrollToTop />
            <div className={contactformstyle.formWrapper}>
                <form ref={form} onSubmit={sendEmail}>
                    <h2>Contact Us</h2>
                    <fieldset>
                        <label htmlFor="name"></label>
                        <input type="text" name="user_name" id="name" placeholder="NAME*" required />

                        <label htmlFor="email"></label>
                        <input type="email" name="user_email" id="email" placeholder="EMAIL*" required />

                        <label htmlFor="clientmessage"></label>
                        <textarea name="message" id="clientmessage" cols="30" rows="10" placeholder="Tell us about what we can do to support you"></textarea>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>  
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Contact;
