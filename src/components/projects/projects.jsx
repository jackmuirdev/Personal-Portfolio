import React from "react";
import iconStyle from "../skills/iconstyles";

function Projects() {
    return (
        <div id="Projects">
            <div className="row">
                <div className="col-12">
                    <h3>My Latest Work</h3>
                </div>
            </div>
            <div className="projects-container">
                <div className="project">
                    <img src="images/comingsoon.png" alt="" />
                    <h4>The Kellen Collection</h4>
                    <p>An e-commerce store for a dance clothing brand to promote, sell and distribute their products.</p>
                    <i className="fa-brands fa-html5" style={iconStyle.html5}></i>
                        <i className="fa-brands fa-css3-alt" style={iconStyle.css3}></i>
                        <i className="fa-brands fa-square-js" style={iconStyle.jsSquare}></i>
                        <i className="fa-brands fa-node" style={iconStyle.node}></i>
                        <i className="fa-brands fa-react" style={iconStyle.react}></i>
                        <br />
                    <button>See Live</button>
                    <button>Source Code</button>
                </div>
            </div>
        </div>
    );
}

export default Projects;


// need to create an onlick alert for coming soon projects.
// add the tech icons