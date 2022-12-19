import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {About} from "./Components/About/About";
import {Projects} from "./Components/Projects/Projects";
import {Contact} from "./Components/Contact/Contact";
import {Footer} from "./Components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <About/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
