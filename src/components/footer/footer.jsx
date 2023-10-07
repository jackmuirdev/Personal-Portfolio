import React from "react";
import iconStyle from "../skills/iconstyles";
import currentYear from "./getYear";

function Footer () {
    return (
        <div id="Footer">
            <div className="row">
                <div className="col">
                    <div className="footer">
                        <p>© {currentYear()} Jack Muir</p>
                        <div className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/jack-muir-462689281/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-linkedin" style={iconStyle.linkedin}></i>
                            </a>
                            <a
                                href="https://github.com/jackmuirdev"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fa-brands fa-github" style={iconStyle.github}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;