//Contact icons
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

//Skill icons
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import { SiAxios } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

//Navbar menu items

let menu = [

    {
        li:"Skills",
        link:"#skills",
    },
    {
        li:"Work",
        link:"#work",
    },
    {
        li:"Achivements",
        link:"#",
    },
    {
        li:"Contact",
        link:"#contact",
    },
  
];
let buttons = [
    {
        icon: IoLogoWhatsapp,
        link: 'https://wa.me/+923198991271',
    },
    {
        icon: FaLinkedin ,
        link: 'https://www.linkedin.com/in/subhan-tahir-471215307/',
    },
    {
        icon: MdEmail ,
        link: 'mailto:subhantahir2006@gmail.com',
    },
    {
        icon: FaGithub ,
        link: 'https://github.com/subhan-tahir',
    },

];


let mySkills = [
    {
        img:FaHtml5 ,
        title:'HTML 5', 
    },
    {
        img:FaCss3Alt,
        title:'CSS 3', 
    },
    {
        img:IoLogoJavascript,
        title:'JavaScript',
        
    },
    {
        img:FaReact ,
        title:'React JS',
        
    },

  {
        img:RiTailwindCssFill ,
        title:'Tailwind CSS',
        
    },
    {
        img:FaBootstrap ,
        title:'Bootstrap',
        
    },
    
    {
        img:SiAxios,
        title:'Axios',
        
    },
  {
        img:TfiMicrosoftAlt ,
        title:'MS Office',
        
    },
];

let myWork = [
    {
        title:"To-Do List",
        description:"A simple and efficient to-do list application built using HTML, CSS and JavaScript.",
        btn:'live Preview',
        link:'https://subhan-tahir.github.io/Project-todo-app/',
    },
    {
        title:"Digital Clock",
        description:"A sleek and modern digital clock built using HTML, CSS and JavaScript.",
        btn:'live Preview',
        
    },
    {
        title:"Form Validation",
        description:"A simple and effective form validation built using HTML, CSS and JavaScript.",
        btn:'live Preview',
        link:'https://subhan-tahir.github.io/javascript-form/',
    },
    {
        title:"Currency Converter",
        description:"A effective and modern currency converter built using HTML, CSS JavaScript and API.",
        btn:'live Preview',
        link:'https://subhan-tahir.github.io/currency-converter/',
    },
    {
        title:"BMI Calculator",
        description:"A effective and modern BMI-calculator to calculate your BMI built using HTML, CSS and JavaScript.",
        btn:'live Preview',
        link:'https://subhan-tahir.github.io/BMI-calculator/',
    },
    {
        title:"Transition Website",
        description:"A complete and modern transition website  built using HTML, CSS JavaScript and Bootstap",
        btn:'live Preview',
        link:'https://subhan-tahir.github.io/Transition-website/',
    },
    {
        title:"NIC Website",
        description:"A complete and modern NIC website  built using HTML, CSS JavaScript and Bootstap",
        btn:'live Preview',
        link:'https://subhan-tahir.github.io/NIC-Project/',
    },
    {
        title:"Transition Website",
        description:"A complete and modern transition website  built using HTML, CSS JavaScript and Bootstap",
        btn:'live Preview',
        link:'https://subhan-tahir.github.io/Transition-website/',
    },
    {
        title:"The four'cs",
        description:"A complete and modern Thefourcs website  built using HTML, CSS JavaScript and Bootstap",
        btn:'live Preview',
        link:'https://subhan-tahir.github.io/The-four-cs-1/',
    },




]
export {
    buttons,
    mySkills,
    menu,
    myWork,
}
