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
   {name:'ThreeJS'}
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
            'Providing whole frontend page using tailwind css in react',
        date: 'June 2023 - present',
        icon: 'school'
    },
    {
        id: 2,
        title: "Backend Developer",
        location: 'Rwanda, Rubavu',
        description: 
            'Providing whole Backend for dime-trade project with my friend leo using mongodb and sanity during vacation',
        date: 'September 2020 - 2021',
        icon: 'work'
    },
    {
        id: 3,
        title: "ESTG",
        location: 'Rwanda, Kigali',
        description: 
            'After national exams I went at ESTG for my Level 3 software development',
        date: 'January 2020 - present',
        icon: 'school'
    },
]
export {links,socials,useWork,useFun,projects,expert}