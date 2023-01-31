import {v1} from "uuid";
import react from "../assets/image/imgFromSkills/react.svg";
import redux from "../assets/image/imgFromSkills/redux.svg";
import ts from "../assets/image/imgFromSkills/ts.svg";
import js from "../assets/image/imgFromSkills/js.svg";
import storybook from "../assets/image/imgFromSkills/storybook.svg";
import html from "../assets/image/imgFromSkills/html.svg";
import css from "../assets/image/imgFromSkills/css.svg";
import sass from "../assets/image/imgFromSkills/sass.svg";
import mui from "../assets/image/imgFromSkills/mui.svg";
import rest from "../assets/image/imgFromSkills/rest.svg";
import unitTest from "../assets/image/imgFromSkills/unitTest.svg";
import git from "../assets/image/imgFromSkills/git.svg";
import tdd from "../assets/image/imgFromSkills/tdd.svg";
import flux from "../assets/image/imgFromSkills/flux.svg";
import yarn from "../assets/image/imgFromSkills/yarn.svg";
import figma from "../assets/image/imgFromSkills/figma.svg";
import todoImg from "../assets/image/imgProjects/todo.jpg";
import socialImg from "../assets/image/imgProjects/social.jpg";
import counterImg from "../assets/image/imgProjects/counter.png";
import githubIcon from '../assets/image/icons/github.svg'
import linkedInIcon from '../assets/image/icons/linkedin-svgrepo-com.svg'
import telegramIcon from '../assets/image/icons/telegram-alt-svgrepo-com.svg'
import gmailIcon from '../assets/image/icons/gmail-svgrepo-com.svg'

export const initialState: InitialStateType = {
    main: {
        firstName: 'Kim',
        lastName: 'Harokhau',
        description: 'Frontend Developer based In Belarus'
    },
    skills: {
        title: 'Skills',
        description: 'I Work Hard to Improve My Skills Regularly',
        data: [
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
    },
    about: {
        title: 'About Me',
        description: 'A Passionate Developer Who Loves to Code',
        textMe: 'I’d describe myself as a goal-oriented and hardworking person with experience in creating SPA, usingReact(JS/TS), Redux, HTML & CSS. Now I am improving my skills in this direction and expanding them with new technologies. In the future, I would like to become a full-stack developer.'
    },
    projects: {
        title: 'Projects',
        description: 'Projects I have Worked On',
        data: [
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
                title: 'Counter',
                description: 'Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor',
                img: {
                    backgroundImage: `url(${counterImg})`,
                }
            }
        ]
    },
    contact: {
        title: 'Contact',
        description: 'I Want to Hear from You'
    },
    headerFooterIcons: [
        {id: v1(), backgroundImage: `url(${githubIcon})`, path: 'https://github.com/zemosamurai'},
        {id: v1(), backgroundImage: `url(${gmailIcon})`,  path: 'mailto:zemosamurai@gmail.com'},
        {id: v1(), backgroundImage: `url(${telegramIcon})` , path: 'https://t.me/zemosamurai'},
        {id: v1(), backgroundImage: `url(${linkedInIcon})` , path: '#'},
    ]
}


// types
export type MainType = {
    firstName: string
    lastName: string
    description: string
}
export type SkillType = {
    id: string,
    title: string,
    img: string
}
export type SkillsType = {
    title: string
    description: string
    data: SkillType[]
}
export type AboutType = {
    title: string,
    description: string,
    textMe: string
}
export type ProjectType = {
    id: string,
    title: string,
    description: string,
    img: {
        backgroundImage: string
    }
}
export type ProjectsType = {
    title: string,
    description: string,
    data: ProjectType[]
}
export type ContactsType = {
    title: string
    description: string
}
export type FooterType = {
    id: string
    backgroundImage: string
    path: string
}

type InitialStateType = {
    main: MainType
    skills: SkillsType
    about: AboutType
    projects: ProjectsType
    contact: ContactsType
    headerFooterIcons: FooterType[]
}
