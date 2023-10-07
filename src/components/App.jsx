import React from "react";
import Home from "../components/index/index";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";
import Contact from "../components//contact/contact";

function App () {
    return (
        <div className="container">
            <div>
                <Home />
            </div>
            <div>
                <Skills />
            </div>
        </div>
    )
}

export default App;