import React from "react";
import ParticlesBackground from "../ParticlesBackground";

function Home () {
    return (
        <div className="home" id="Home">
            <ParticlesBackground />
            <div className="row">
                <div className="col">
                    <div className="navbar">
                        <ul>
                            <li><a href="#Home">Home</a></li>
                            <li><a href="#Skills">Skills</a></li>
                            <li><a href="#Projects">Projects</a></li>
                            <li><a href="#Contact">Contact</a></li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                        <div className="title text-center">
                            <h1>Hi, I'm Jack</h1>
                            <h3>Full Stack Web Developer</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;