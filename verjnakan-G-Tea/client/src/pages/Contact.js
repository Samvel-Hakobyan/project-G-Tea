import React from 'react';
import Wrapper from "../components/Wrapper";
import ContactJs from "../components/ContactJs";
import {Helmet} from "react-helmet";


function Contact(props) {
    return (
<Wrapper>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Us</title>
    </Helmet>
        <div>
            <br/><br/><br/><br/>
          <ContactJs />
        </div>
</Wrapper>
    );
}

export default Contact;