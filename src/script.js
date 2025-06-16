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
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import MaterialLogo from "./assets/material-ui.svg";
import contextLogo from "./assets/contextAPI.png";
import reduxLogo from "./assets/redux.svg";
import postmanLogo from "./assets/postman.svg";
import githubLogo from "./assets/github.jpg";
import gitLogo from "./assets/git.png";
//Navbar menu items

let menu = [
  {
    li: "Skills",
    link: "#skills",
  },
  {
    li: "Work",
    link: "#work",
  },
  {
    li: "Achivements",
    link: "#",
  },
  {
    li: "Contact",
    link: "#contact",
  },
];
let buttons = [
  {
    icon: IoLogoWhatsapp,
    link: "https://wa.me/+923702835443",
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/muhammad-subhan-tahir-bb9a20368",
  },
  {
    icon: MdEmail,
    link: "mailto:subhantahir430@gmail.com",
  },
  {
    icon: FaGithub,
    link: "https://github.com/m-subhan-tahir",
  },
];

let mySkills = [
  {
    img: FaHtml5,
    title: "HTML 5",
  },
  {
    img: FaCss3Alt,
    title: "CSS 3",
  },
  {
    img: IoLogoJavascript,
    title: "JavaScript",
  },
  {
    img: FaReact,
    title: "React JS",
  },
  {
    img: SiMongodb,
    title: "Mongo DB",
  },
  {
    img: DiNodejs,
    title: "Node Js",
  },

  {
    img: SiExpress,
    title: "Express Js",
  },

  {
    img: RiTailwindCssFill,
    title: "Tailwind CSS",
  },
  {
    img: FaBootstrap, //React Component
    title: "Bootstrap",
  },
  {
    img: MaterialLogo, //Image Path
    title: "Material UI",
  },

  {
    img: SiAxios,
    title: "Axios",
  },

  {
    img: reduxLogo,
    title: "Redux toolkit",
  },
  {
    img: contextLogo,
    title: "Context API",
  },
  {
    img: postmanLogo,
    title: "Postman",
  },
  {
    img: gitLogo,
    title: "git",
  },
  {
    img: githubLogo,
    title: "github",
  },

  {
    img: TfiMicrosoftAlt,
    title: "MS Office",
  },
];

let myWork = [
  {
    title: "Greener Pakistan",
    description:
      "Greener Pakistan is a group of solar energy experts offering a wide range of solar energy solutions, including underground cabling services. I developed their website using React JS and Tailwind css",
    btn: "live Preview",
    link: "https://greener-pakistan.netlify.app/",
  },
  {
    title: "Devop360 Demo",
    description:
      "A complete and modern Devop360 website  built using HTML, CSS JavaScript, Bootstap and using gsap for interactivity and animations.",
    btn: "live Preview",
    link: "https://subhan-tahir.github.io/Devop360-Demo/",
  },
  {
    title: "React Uber App.",
    description:
      "A simple and effective uber app built using React JS and Tailwind css.",
    btn: "live Preview",
    link: "https://uber-frontend-gilt.vercel.app/",
  },
  {
    title:"React Auth App.",
    description:"A complete mern app built using React JS, Tailwind css, MongoDB, Express Js, Node Js and JWT. Covered features like login, signup, code verification, token generation and protected routes.",
    btn:"live Preview",
    link:"https://auth-frontened.vercel.app/",

  },
  {
    title: "To-Do List",
    description:
      "A simple and efficient to-do list application built using HTML, CSS and JavaScript.",
    btn: "live Preview",
    link: "https://subhan-tahir.github.io/Project-todo-app/",
  },
  {
    title: "Digital Clock",
    description:
      "A sleek and modern digital clock built using HTML, CSS and JavaScript.",
    btn: "live Preview",
  },
  {
    title: "Form Validation",
    description:
      "A simple and effective form validation built using HTML, CSS and JavaScript.",
    btn: "live Preview",
    link: "https://subhan-tahir.github.io/javascript-form/",
  },
  {
    title: "Currency Converter",
    description:
      "A effective and modern currency converter built using HTML, CSS JavaScript and API.",
    btn: "live Preview",
    link: "https://subhan-tahir.github.io/currency-converter/",
  },
  {
    title: "BMI Calculator",
    description:
      "A effective and modern BMI-calculator to calculate your BMI built using HTML, CSS and JavaScript.",
    btn: "live Preview",
    link: "https://subhan-tahir.github.io/BMI-calculator/",
  },
  {
    title: "Transition Website",
    description:
      "A complete and modern transition website  built using HTML, CSS JavaScript and Bootstap",
    btn: "live Preview",
    link: "https://subhan-tahir.github.io/Transition-website/",
  },
  {
    title: "NIC Website",
    description:
      "A complete and modern NIC website  built using HTML, CSS JavaScript and Bootstap",
    btn: "live Preview",
    link: "https://subhan-tahir.github.io/NIC-Project/",
  },
  {
    title: "Transition Website",
    description:
      "A complete and modern transition website  built using HTML, CSS JavaScript and Bootstap",
    btn: "live Preview",
    link: "https://subhan-tahir.github.io/Transition-website/",
  },
  {
    title: "The four'cs",
    description:
      "A complete and modern Thefourcs website  built using HTML, CSS JavaScript and Bootstap",
    btn: "live Preview",
    link: "https://subhan-tahir.github.io/The-four-cs-1/",
  },
];
export { buttons, mySkills, menu, myWork };
