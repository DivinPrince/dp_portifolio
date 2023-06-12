import { discord_ico,github_ico, linkedin_ico, twitter_ico,about,projects_ico,contact,experience,home, } from '../../public/icons'
import {lightme,dime,tic} from '../../public/images'
const links = [
    {
        title: 'home',
        icon: home,
        id:0
    },
    {
        title: 'about',
        icon: about,
        id:1
    },
    {
        title: 'projects',
        icon: projects_ico,
        id:2
    },
    {
        title: 'experience',
        icon: experience,
        id:3
    },
    {
        title: 'contact',
        icon: contact,
        id:4
    },

]
const socials = [
    {
        img: discord_ico,
        link: '',
        id:0
    },
    {
        img: github_ico,
        link: '',
        id:1
    },
    {
        img: linkedin_ico,
        link: '',
        id:2
    },
    {
        img: twitter_ico,
        link: '',
        id:3
    }
]
const useWork = [
   {name:'javascript'},
   {name:'html'},
   {name:'css'},
   {name:'NodeJS'},
   {name:'NextJs'},
   {name:'GitHub'},
   {name:'Vercel'}, 
   {name:'MongoDB'},
   {name:'ThreeJS'},
]
const useFun = [
    {name:'tailwind'},
    {name:'python'},
    {name:'figma'},
    {name:'fastAPI'},
    {name:'React'},
]
const projects = [
    {
        img: lightme,
        name: 'LightMe',
        langs: [
            {name:'NextJs'},
            {name:'tailwind'},
            {name:'NodeJS'},
            {name:'MongoDB'}
        ],
        details: 'Real time Project sharing website for students to light there projects'
    },
    {
        img: dime,
        name: 'Dime Trade',
        langs: [
            {name:'NextJs'},
            {name:'tailwind'},
            {name:'NodeJS'},
            {name:'MongoDB'},
            {name:'stripe'},
            {name:'threeJS'},
        ],
        details: 'innovative 3d eccommerce website that allow the user to interact with every coner of a product '
    },
    {
        img: tic,
        name: 'tic tac toe clone',
        langs: [
            {name:'HTML'},
            {name:'CSS'},
            {name:'JS'},
        ],
        details:'multiplayer tic tac toe clone my favorite'
    }
]
const expert = [
    {
        id: 1,
        title: "Frontend Developer",
        location: 'Rwanda, Kigali',
        company: 'LightMe',
        description: 
        `At LightMe, a leading tech company, I serve as a Frontend Developer, where I'm responsible for providing comprehensive frontend solutions using React and Tailwind CSS. Collaborating with a talented team, I bring designs to life, ensuring seamless user experiences and captivating interfaces. By leveraging the power of Tailwind CSS, I create visually stunning and responsive web pages that engage and captivate users.`,
        date: 'June 2023 - present',
        icon: 'school'
    },
    {
        id: 2,
        title: "Backend Developer",
        location: 'Rwanda, Rubavu',
        company: 'Dime-Trade Project (with Leo)',
        description: 
            'During a vacation project, I took on the role of Backend Developer, working alongside my friend Leo on the ambitious Dime-Trade project. Together, we built the entire backend infrastructure using MongoDB as our database and Sanity as our content management system. Through effective collaboration and efficient code implementation, we developed robust and scalable solutions that facilitated smooth data management and seamless functionality.',
        date: 'September 2020 - 2021',
        icon: 'work'
    },
    {
        id: 3,
        title: "ESTG",
        location: 'Rwanda, Kigali',
        description: 
            'Following my exceptional performance in the national exams, I embarked on a rewarding journey at ESTG, where I am currently pursuing my Level 3 software development education. Here, I have been equipped with a solid foundation in programming principles, software engineering methodologies, and industry best practices. Through rigorous coursework, practical projects, and engaging discussions, I have honed my skills and expanded my knowledge, preparing me for the exciting challenges that lie ahead.',
        date: 'January 2020 - present',
        icon: 'school'
    },
]
export {links,socials,useWork,useFun,projects,expert}