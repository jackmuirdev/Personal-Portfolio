import React from "react";

function Home () {
    return (
        <div>
            <div className="navbar">
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>
            <div className="title">
                <h1>Hi, I'm Jack</h1>
                <h3>Full Stack Web Developer</h3>
            </div>
        </div>
    )
}

export default Home;