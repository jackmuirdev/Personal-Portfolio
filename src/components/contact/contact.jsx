import React from "react";
import iconStyle from "../skills/iconstyles"

function Contact() {
    return (
        <div id="Contact">
            <div className="row contact-container">
                <div className="left-contact">
                        <h3>Contact Me</h3>
                        <hr />
                        <p><i class="fa-solid fa-envelope" style={iconStyle.phone}></i> jmuirbusiness@gmail.com</p>
                        <p><i class="fa-solid fa-phone" style={iconStyle.phone}></i> 07715938017</p>
                    </div>
                    <div className="right-contact">
                        <form method="post" action="mailto:jmuirbusiness@gmail.com">
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                />
                                <br />
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Your Email"
                                    required
                                />
                                <br />
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
    );
}

export default Contact;
