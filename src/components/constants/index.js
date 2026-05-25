import { BiEnvelope } from 'react-icons/bi'
import { github_ico, linkedin_ico, twitter_ico } from '@public/icons'
import {
  AboutIcon,
  ContactIcon,
  ExperienceIcon,
  HomeIcon,
  ProjectsIcon,
} from '@/components/icons/nav'
import { wreny } from '@public/images'

const links = [
  { title: 'home', Icon: HomeIcon, id: 0 },
  { title: 'about', Icon: AboutIcon, id: 1 },
  { title: 'projects', Icon: ProjectsIcon, id: 2 },
  { title: 'experience', Icon: ExperienceIcon, id: 3 },
  { title: 'contact', Icon: ContactIcon, id: 4 },
]
const socials = [
    {
        img: github_ico,
        link: 'https://github.com/divinprince',
        title: 'GitHub',
        id: 0
    },
    {
        img: linkedin_ico,
        link: 'https://www.linkedin.com/in/divinprince/',
        title: 'LinkedIn',
        id: 1
    },
    {
        img: twitter_ico,
        link: 'https://twitter.com/divinprnc',
        title: 'Twitter',
        id: 2
    },
    {
        Icon: BiEnvelope,
        link: 'mailto:irasubizadivinprince@gmail.com',
        title: 'Email',
        id: 3
    }
]
const useWork = [
    { name: 'TypeScript' },
    { name: 'React' },
    { name: 'Next.js' },
    { name: 'TanStack' },
    { name: 'Tailwind' },
    { name: 'PostgreSQL' },
    { name: 'Convex' },
    { name: 'Supabase' },
    { name: 'Bun' },
    { name: 'Docker' },
    { name: 'Vercel' },
]
const useFun = [
    { name: 'Hono' },
    { name: 'Laravel' },
    { name: 'Tauri' },
    { name: 'SST' },
    { name: 'Cloudflare' },
    { name: 'AWS' },
    { name: 'Cursor' },
]
const projects = [
    {
        img: wreny,
        name: 'Wreny',
        link: 'https://wreny.app',
        langs: [
            { name: 'Next.js' },
            { name: 'TypeScript' },
            { name: 'Tailwind' },
            { name: 'Convex' },
        ],
        details:
            'AI-assisted resume and cover letter builder with export workflows, auth, billing, and a free-to-paid model around PDF export and premium features.'
    },
]
const contactInfo = {
    email: 'irasubizadivinprince@gmail.com',
    items: [
        {
            label: 'Email',
            value: 'irasubizadivinprince@gmail.com',
            href: 'mailto:irasubizadivinprince@gmail.com',
            icon: 'email',
        },
        {
            label: 'Location',
            value: 'Kigali, Rwanda',
            icon: 'location',
        },
        {
            label: 'Availability',
            value: 'Open to freelance & full-time roles',
            icon: 'availability',
        },
    ],
}
const expert = [
    {
        id: 1,
        title: 'Community Ambassador',
        location: 'Kigali City, Rwanda',
        company: 'Cursor Community',
        description:
            'Host in-person events like Cafe Cursor Kigali so local developers can try Cursor, share workflows, and debug real projects. Represent Cursor in the Kigali builder community, help teams adopt AI-assisted development responsibly, and funnel structured product feedback back to the community team.',
        date: 'February 2026 - Present',
        icon: 'work'
    },
    {
        id: 2,
        title: 'Founder',
        location: 'Kigali City, Rwanda',
        company: 'Wreny',
        description:
            'Own product and engineering for an AI-assisted resume and cover letter platform — from pricing and packaging to auth, billing, app UX, and production releases at wreny.app.',
        date: 'February 2025 - Present',
        icon: 'work'
    },
    {
        id: 3,
        title: 'Chief Technology Officer',
        location: 'Kigali, Rwanda',
        company: 'Dime Inc Ltd',
        description:
            'Lead delivery for client projects across mobile apps, e-commerce sites, and internal management tools. Architect implementation, deployment, and handover — including an education marking platform with structured student feedback and teacher workflows that surface who is struggling and where gaps are.',
        date: 'December 2024 - Present',
        icon: 'work'
    },
    {
        id: 4,
        title: 'Software Developer',
        location: 'Kigali City, Rwanda',
        company: 'Kayko',
        description:
            'Extended and maintained internal tools for day-to-day operations. Shipped features end to end — requirements, implementation, tests where applicable, and release — while collaborating with stakeholders to prioritize fixes on tight timelines.',
        date: 'November 2024 - December 2024',
        icon: 'work'
    },
]
export {links,socials,useWork,useFun,projects,expert,contactInfo}