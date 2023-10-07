import React from "react";
import projectsArray from "./projectsArray";
import iconStyle from "../skills/iconstyles";

function Projects () {
    return (
        <div id="Projects">
            <div className="row">
                <div className="col">
                    <h3>My Latest Work</h3>
                    <div className="project-container">
                        <div className="project-left">
                            <h4>The Kellen Collection</h4>
                            <p>An e-commerce store built for a dance company to promote, sell and distribute their clothing range.</p>
                            <div className="icons">
                                <i className="fa-brands fa-html5" style={iconStyle.html5}></i>
                                <i className="fa-brands fa-css3-alt" style={iconStyle.css3}></i>
                                <i className="fa-brands fa-square-js" style={iconStyle.jsSquare}></i>
                                <i className="fa-brands fa-npm" style={iconStyle.npm}></i>
                                <i className="fa-brands fa-node" style={iconStyle.node}></i>
                                <i className="fa-brands fa-react" style={iconStyle.react}></i>
                                <i className="fa-brands fa-bootstrap" style={iconStyle.bootstrap}></i>
                            </div>
                            <div className="btns">
                                <button>See Live</button>
                                <button>Source Code</button>
                            </div>
                        </div>
                        <div className="project-right">
                            <img src="/images/comingsoonred.png" alt="project"/>
                        </div>    
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Projects;