import React from "react";
import iconStyle from "./iconstyles";

function Skills () {
    return (
        <div id="Skills">
            <div className="row">
                <div className="col">
                    <div className="skills-cont">
                    <div className="skills-container">
                        <h4>Full Stack Developer</h4>
                        <p>I'm a full-stack developer proficient in front-end and back-end web development, providing end-to-end solutions for web projects, from user-friendly interfaces to server-side applications and APIs.</p>
                    </div>
                    <div className="skills-container">
                        <h4>Cross Platform Developer</h4>
                        <p>I'm a skilled cross-platform developer specializing in creating efficient applications for both desktop and mobile platforms. I am able to use a single codebase for versatile, seamless applications across multiple devices.</p>
                    </div>
                    <div className="skills-container">
                        <h4>MERN Stack</h4>
                        <p>Specialist in MERN Stack. I can create end-to-end web solutions, from setting up databases, server configuration to building interactive user interfaces, I craft high-performance applications, ensuring an exceptional user experience.</p>
                    </div>
                    </div>
                    <div className="tech-icons">
                        <i className="fa-brands fa-html5" style={iconStyle.html5}></i>
                        <i className="fa-brands fa-css3-alt" style={iconStyle.css3}></i>
                        <i className="fa-brands fa-square-js" style={iconStyle.jsSquare}></i>
                        <i className="fa-brands fa-npm" style={iconStyle.npm}></i>
                        <i className="fa-brands fa-node" style={iconStyle.node}></i>
                        <i className="fa-brands fa-react" style={iconStyle.react}></i>
                        <i className="fa-brands fa-bootstrap" style={iconStyle.bootstrap}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;