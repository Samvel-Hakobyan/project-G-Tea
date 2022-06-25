import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import {useForm} from "react-hook-form";


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_n4iyw8w",
                "template_bhguz84",
                form.current,
                "J7OWpciYrkDcJ-_VN"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div className="contact">
            <div className="titlepage">
                <h2>Contact Now</h2>
            </div>
            <div className="container">
                <div className="row">

                    <StyledContactForm>
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <form ref={form} onSubmit={sendEmail} className="main_form">
                                    <div className="row">
                                        <div className="col-md-12 ">
                                            <label>Name</label>
                                            <input  className="contactus" type="text" name="user_name" />
                                        </div>
                                        <div className="col-md-12 ">
                                            <label>Email</label>
                                            <input className="contactus" type="email" name="user_email" />
                                        </div>
                                        <div className="col-md-12 ">
                                            <label>Message</label>
                                            <textarea className="textarea" name="message" />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="submit" value="Send" className="send_btn" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </StyledContactForm>
                </div>
            </div>
        </div>
    );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    font-size: 16px;

    input {
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    textarea {
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }
    label{
      color: white;
    }
  }
`;
