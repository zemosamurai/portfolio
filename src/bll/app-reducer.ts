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
import githubIcon from "../assets/image/icons/github.svg";
import gmailIcon from "../assets/image/icons/gmail.svg";
import telegramIcon from "../assets/image/icons/telegram.svg";
import linkedInIcon from "../assets/image/icons/linkedin.svg";

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
                title: 'To-Do List',
                link: '#',
                description: 'Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor',
                img: {
                    backgroundImage: `url(${todoImg})`
                }
            },
            {
                id: v1(),
                title: 'Social Network',
                link: '#',
                description: 'Kobita tumi sopno charini hoye ersest labo met, consectetur adipi ctetur adipisicing eod tempor',
                img: {
                    backgroundImage: `url(${socialImg})`,
                }
            },
            {
                id: v1(),
                title: 'Counter',
                link: '#',
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
        {
            id: v1(),
            backgroundImage: `url(${githubIcon})`,
            path: 'https://github.com/zemosamurai',
            svgCode: 'M16 1.375c-8.282 0-14.996 6.714-14.996 14.996 0 6.585 4.245 12.18 10.148 14.195l0.106 0.031c0.75 0.141 1.025-0.322 1.025-0.721 0-0.356-0.012-1.3-0.019-2.549-4.171 0.905-5.051-2.012-5.051-2.012-0.288-0.925-0.878-1.685-1.653-2.184l-0.016-0.009c-1.358-0.93 0.105-0.911 0.105-0.911 0.987 0.139 1.814 0.718 2.289 1.53l0.008 0.015c0.554 0.995 1.6 1.657 2.801 1.657 0.576 0 1.116-0.152 1.582-0.419l-0.016 0.008c0.072-0.791 0.421-1.489 0.949-2.005l0.001-0.001c-3.33-0.375-6.831-1.665-6.831-7.41-0-0.027-0.001-0.058-0.001-0.089 0-1.521 0.587-2.905 1.547-3.938l-0.003 0.004c-0.203-0.542-0.321-1.168-0.321-1.821 0-0.777 0.166-1.516 0.465-2.182l-0.014 0.034s1.256-0.402 4.124 1.537c1.124-0.321 2.415-0.506 3.749-0.506s2.625 0.185 3.849 0.53l-0.1-0.024c2.849-1.939 4.105-1.537 4.105-1.537 0.285 0.642 0.451 1.39 0.451 2.177 0 0.642-0.11 1.258-0.313 1.83l0.012-0.038c0.953 1.032 1.538 2.416 1.538 3.937 0 0.031-0 0.061-0.001 0.091l0-0.005c0 5.761-3.505 7.029-6.842 7.398 0.632 0.647 1.022 1.532 1.022 2.509 0 0.093-0.004 0.186-0.011 0.278l0.001-0.012c0 2.007-0.019 3.619-0.019 4.106 0 0.394 0.262 0.862 1.031 0.712 6.028-2.029 10.292-7.629 10.292-14.226 0-8.272-6.706-14.977-14.977-14.977-0.006 0-0.013 0-0.019 0h0.001z'
        },
        {
            id: v1(),
            backgroundImage: `url(${gmailIcon})`,
            path: 'mailto:zemosamurai@gmail.com',
            svgCode: 'M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z'
        },
        {
            id: v1(),
            backgroundImage: `url(${telegramIcon})`,
            path: 'https://t.me/zemosamurai',
            svgCode: 'M29.919 6.163l-4.225 19.925c-0.319 1.406-1.15 1.756-2.331 1.094l-6.438-4.744-3.106 2.988c-0.344 0.344-0.631 0.631-1.294 0.631l0.463-6.556 11.931-10.781c0.519-0.462-0.113-0.719-0.806-0.256l-14.75 9.288-6.35-1.988c-1.381-0.431-1.406-1.381 0.288-2.044l24.837-9.569c1.15-0.431 2.156 0.256 1.781 2.013z'
        },
        {
            id: v1(),
            backgroundImage: `url(${linkedInIcon})`,
            path: 'https://www.linkedin.com/in/kim-harokhau-191b00264/',
            svgCode: 'M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z'
        },
    ]
}

export const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case 'xxx': {
            return state
        }
        default: {
            return state
        }

    }
}


//types
type InitialStateType = {
    main: MainType
    skills: SkillsType
    about: AboutType
    projects: ProjectsType
    contact: ContactsType
    headerFooterIcons: FooterType[]
}
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
    link: string
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
    svgCode: string
}
export type dataSendEmailType = {
    name: string
    email: string
    message: string
}