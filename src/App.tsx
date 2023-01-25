import './App.css';
import {Header} from "./components/Header/Header";
import {Main} from "./components/Main/Main";
import {Skills} from "./components/Skills/Skills";
import {About} from "./components/About/About";
import {Projects} from "./components/Projects/Projects";
import {Contact} from "./components/Contact/Contact";
import {Footer} from "./components/Footer/Footer";

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
