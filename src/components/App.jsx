import React from "react";
import Home from "../components/index/index";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";
import Contact from "../components//contact/contact";
import Footer from "./footer/footer";

function App () {
    return (
        <div className="container">
            <div>
                <Home />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Projects />
            </div>
            <div>
                <Contact/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default App;