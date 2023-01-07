import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {About} from "./Components/About/About";
import {Projects} from "./Components/Projects/Projects";
import {Contact} from "./Components/Contact/Contact";
import {Footer} from "./Components/Footer/Footer";
import {v1} from "uuid";
import todoImg from "./assets/image/todo.jpg";
import socialImg from "./assets/image/social.jpg";
import react from './assets/image/imgFromSkills/react.svg'
import redux from './assets/image/imgFromSkills/redux.svg'
import ts from './assets/image/imgFromSkills/ts.svg'
import js from './assets/image/imgFromSkills/js.svg'
import storybook from './assets/image/imgFromSkills/storybook.svg'
import html from './assets/image/imgFromSkills/html.svg'
import css from './assets/image/imgFromSkills/css.svg'
import sass from './assets/image/imgFromSkills/sass.svg'
import mui from './assets/image/imgFromSkills/mui.svg'
import rest from './assets/image/imgFromSkills/rest.svg'
import unitTest from './assets/image/imgFromSkills/unitTest.svg'
import git from './assets/image/imgFromSkills/git.svg'
import figma from './assets/image/imgFromSkills/figma.svg'
import tdd from './assets/image/imgFromSkills/tdd.svg'
import flux from './assets/image/imgFromSkills/flux.svg'
import yarn from './assets/image/imgFromSkills/yarn.svg'

function App() {
    const skillsArr = [
        {
            id: v1(),
            title: 'REACT',
            img: react
        },
        {
            id: v1(),
            title: 'REDUX',
            img: redux
        },
        {
            id: v1(),
            title: 'TS',
            img: ts
        },
        {
            id: v1(),
            title: 'JS',
            img: js
        },
        {
            id: v1(),
            title: 'STORYBOOK',
            img: storybook
        },
        {
            id: v1(),
            title: 'HTML',
            img: html
        },
        {
            id: v1(),
            title: 'CSS',
            img: css
        },
        {
            id: v1(),
            title: 'SASS/SCSS',
            img: sass
        },
        {
            id: v1(),
            title: 'MUI',
            img: mui
        },
        {
            id: v1(),
            title: 'REST API',
            img: rest
        },
        {
            id: v1(),
            title: 'UNIT TEST',
            img: unitTest
        },
        {
            id: v1(),
            title: 'GIT',
            img: git
        },
        {
            id: v1(),
            title: 'TDD',
            img: tdd
        },
        {
            id: v1(),
            title: 'FLUX',
            img: flux
        },
        {
            id: v1(),
            title: 'YARN',
            img: yarn
        },
        {
            id: v1(),
            title: 'FIGMA',
            img: figma
        }

    ]
    const projectsArr = [
        {
            id: v1(),
            title: 'To Do List',
            description: 'Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor',
            img: {
                backgroundImage: `url(${todoImg})`
            }
        },
        {
            id: v1(),
            title: 'Social Network',
            description: 'Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor',
            img: {
                backgroundImage: `url(${socialImg})`,
            }
        },
        {
            id: v1(),
            title: 'Social Network',
            description: 'Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor',
            img: {
                backgroundImage: `url(${socialImg})`,
            }
        }
    ]

    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills skillsArr={skillsArr}/>
            <About/>
            <Projects projectsArr={projectsArr}/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;
