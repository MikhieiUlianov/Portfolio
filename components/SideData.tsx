import htmlIcon from "../public/icons/coding/html5.svg";
import cssIcon from "../public/icons/coding/css3.svg";
import jsIcon from "../public/icons/coding/java-script.svg";
import python from "../public/icons/coding/python.svg";
import reactIcon from "../public/icons/coding/react.svg";
import nodeIcon from "../public/icons/coding/node-js.svg";
import mongoIcon from "../public/icons/coding/mongo-db.svg";
import typeScript from "../public/icons/coding/typescript.svg";
import nextJs from "../public/icons/coding/next-js.svg";

//About
import webDevIcon from "../public/icons/skills/design.svg";
import mobileDevIcon from "../public/icons/skills/mobile-dev.svg";
import uiUxIcon from "../public/icons/skills/design.svg";

//Resume
import universityIcon from "../public/icons/advantages/University.svg";
import coursesIcon from "../public/icons/advantages/Courses.svg";
import developerIcon from "../public/icons/advantages/Developer.svg";
import designerIcon from "../public/icons/advantages/designer.svg";

// portfolioData.ts
import macaronShopImg from "../public/img/projects/macaronShop.svg";
import pulseImg from "../public/img/projects/pulse.jpeg";
import certificateIng from "../public/img/projects/certificate.jpg";
import marvelImg from "../public/img/projects/marvel.jpeg";
import ipadImg from "../public/img/projects/ipad.jpeg";
import tocarImg from "../public/img/projects/tocar.svg";

//certificates

import reactCert from "../public/img/certificates/react-the-complete-guide-incl-redux.jpg";
import nextJsCert from "../public/img/certificates/nextjs-react-the-complete-guide.jpg";
import webDevCert from "../public/img/certificates/webdeveloper.jpg";
import jsCert from "../public/img/certificates/javascript_full.jpg";
import pythonCert from "../public/img/certificates/bestpython.jpg";
import tsCert from "../public/img/certificates/understanding-typescript.jpg";
import tsReactCert from "../public/img/certificates/react-typescript-the-practical-guide.jpg";

export const menuItems = [
  { href: "#promo", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#resume", label: "Resume" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#price", label: "Price" },
  { href: "#contacts", label: "Contacts" },
];

export const aboutSkills = [
  {
    img: webDevIcon,
    alt: "web-dev",
    title: "Web-development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: mobileDevIcon,
    alt: "mobile-dev",
    title: "Application development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    img: uiUxIcon,
    alt: "design",
    title: "UI/UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const resumeData = {
  education: [
    {
      icon: universityIcon,
      alt: "university",
      title: "МГТУ им. Н. Э. Баумана",
      location: "Диплом магистра | Москва (2014-2020)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: coursesIcon,
      alt: "courses",
      title: "Udemy",
      location: "Web-development courses",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
  work: [
    {
      icon: developerIcon,
      alt: "developer",
      title: "Front-End Developer",
      location: "EPAM | Москва (2018-2019)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      icon: designerIcon,
      alt: "designer",
      title: "UI/UX Designer",
      location: "Squad Team | Москва (2018)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};
export const skillsItems = [
  {
    date: "2025-07-03",
    img: htmlIcon,
    alt: "html5",
    title: "HTML5",
    description:
      "It is what creates the framework of your website or application, and the fifth version will allow me to create a more SEO-optimized structure for your product.",
  },
  {
    date: "2025-07-03",
    img: cssIcon,
    alt: "css3",
    title: "CSS3",
    description:
      "This style language allows me to create absolutely any look for your website or application. The only limit is your imagination.",
  },
  {
    date: "2025-03-02",
    img: jsIcon,
    alt: "java script",
    title: "Java Script",
    description:
      "This programming language allows you to animate anything: sliders, windows, tooltips, tabs, receiving data from the server and much more.",
  },
  {
    date: "2024-10-20",
    img: python,
    alt: "Python",
    title: "Python",
    description:
      "A versatile programming language popular for backend development, data analysis, automation, and more.",
  },
  {
    date: "2025-05-03",
    img: reactIcon,
    alt: "React",
    title: "React",
    description:
      "This library allows you to create web applications. We can create the most interactive product specifically for your purposes.",
  },
  {
    date: "2025-08-10",
    img: nodeIcon,
    alt: "Node.js",
    title: "Node.js",
    description:
      "This platform allows you to create a backend for your product - the “brains” that will perform actions that the user does not see.",
  },
  {
    date: "2025-08-01",
    img: mongoIcon,
    alt: "Mongo.db",
    title: "Mongo.db",
    description:
      "This is a non-relational database that will store the data of your website or application.",
  },
  {
    date: "2025-06-01",
    img: typeScript,
    alt: "TypeScript",
    title: "TypeScript",
    description:
      "A typed superset of JavaScript that helps write more reliable and maintainable code.",
  },
  {
    date: "2025-07-10",
    img: nextJs,
    alt: "Next.js",
    title: "Next.js",
    description:
      "A React framework for building fast, scalable web applications with server-side rendering and static site generation.",
  },
];
export const skillsRatings = [
  { title: "Website creation", percent: 100 },
  { title: "Creating applications", percent: 85 },
  { title: "Working with data", percent: 90 },
  { title: "Creativity", percent: 75 },
  { title: "Design creation", percent: 90 },
  { title: "Soft skills", percent: 95 },
];

export const portfolioItems = [
  {
    href: "https://github.com/MikhieiUlianov/macaron_shop",
    img: macaronShopImg,
    alt: "Macaron shop",
    className: "",
  },
  { href: "#", img: pulseImg, alt: "pulse", className: "" },
  {
    href: "https://github.com/MikhieiUlianov/ReactMentoring",
    img: certificateIng,
    alt: "React mentoring project",
    className: "",
  },
  {
    href: "https://github.com/MikhieiUlianov/MarvelProject",
    img: marvelImg,
    alt: "Marvel project",
    className: "vertical",
  },
  { href: "#", img: ipadImg, alt: "ipad", className: "" },
  {
    href: "https://github.com/MikhieiUlianov/Tokar",
    img: tocarImg,
    alt: "Tocar company",
    className: "horizontal",
  },
];
export const toolsFiltersBlocks = [
  {
    label: "Programming Languages",
    filters: ["JavaScript", "TypeScript", "Python", "Go", "Rust"],
  },
  {
    label: "Frameworks & Libraries",
    filters: ["React", "Next.js", "Vue", "Svelte", "Express", "Django"],
  },
  {
    label: "UI & Styling",
    filters: ["Tailwind CSS", "SCSS", "Styled Components", "MUI", "Bootstrap"],
  },
  {
    label: "Databases",
    filters: ["PostgreSQL", "MongoDB", "SQLite", "MySQL", "Redis"],
  },
  {
    label: "DevOps & Tools",
    filters: ["Docker", "Kubernetes", "GitHub Actions", "Vercel", "AWS"],
  },
  {
    label: "Design Tools",
    filters: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
  },
];
export const projectsFiltersBlocks = [
  {
    label: "Project Type",
    filters: [
      "Web App",
      "CLI Tool",
      "Library",
      "API Service",
      "Portfolio Project",
      "Experiment",
    ],
  },
  {
    label: "Main Technology",
    filters: ["JavaScript", "TypeScript", "Python", "Go", "Rust"],
  },
  {
    label: "Framework / Library",
    filters: ["React", "Next.js", "Express", "Django", "Vue", "Svelte"],
  },
  {
    label: "License",
    filters: ["MIT", "Apache 2.0", "GPL", "Unlicense", "Other"],
  },
  {
    label: "Last Updated",
    filters: ["This Month", "Last 3 Months", "Last Year", "Older"],
  },
  {
    label: "Stars",
    filters: ["< 10", "10–50", "50–200", "200+"],
  },
  {
    label: "Hosting / Deployment",
    filters: ["Vercel", "Netlify", "AWS", "Heroku", "Other"],
  },
];

export const certificatesItems = [
  {
    image: tsCert,
    title: "Understanding TypeScript",
    description:
      "With help of this course, I am now able to write cleaner, more robust TypeScript code, which is easier to read, debug, and maintain in large projects.",
    link: "https://www.udemy.com/course/understanding-typescript/",
    slug: "understanding-typescript",
    rating: 5,
  },
  {
    image: reactCert,
    title: "React - The Complete Guide 2025 (incl. Next.js, Redux)",
    description:
      "This comprehensive course deepened my understanding of React and related technologies like Next.js and Redux, enabling me to build scalable and performant web applications.",
    link: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/",
    slug: "react-the-complete-guide-incl-redux",
    rating: 5,
  },
  {
    image: webDevCert,
    title: "WEB-разработчик",
    description:
      "This course helped me master HTML, CSS, and responsive design principles to create beautiful, user-friendly interfaces that look great on both desktop and mobile devices.",
    link: "https://www.udemy.com/course/webdeveloper/",
    slug: "webdeveloper",
    rating: 5,
  },
  {
    image: pythonCert,
    title: "Полное руководство по Python 3: от новичка до специалиста",
    description:
      "My first programming course ever — it introduced me to Python fundamentals and best practices, setting a strong foundation for further learning in backend and automation.",
    link: "https://www.udemy.com/course/bestpython/",
    slug: "bestpython",
    rating: 3.5,
  },
  {
    image: jsCert,
    title: "Полный курс по JavaScript + React - с нуля до результата",
    description:
      "This course sparked my passion for web development with clear explanations, practical examples, and a great tutor who made complex topics accessible and fun.",
    link: "https://www.udemy.com/course/javascript_full/",
    slug: "javascript_full",
    rating: 5,
  },
  {
    image: nextJsCert,
    title: "Next.js 15 & React - The Complete Guide",
    description:
      "Learning Next.js here helped me optimize app performance with SSR, SSG, and image optimization, as well as improve SEO and user experience in React projects.",
    link: "https://www.udemy.com/course/nextjs-react-the-complete-guide/",
    slug: "nextjs-react-the-complete-guide",
    rating: 5,
  },
  {
    image: tsReactCert,
    title: "React & TypeScript - The Practical Guide",
    description:
      "This course gave me a solid foundation on where and how to use TypeScript with React, improving type safety and code reliability in my applications.",
    link: "https://www.udemy.com/course/react-typescript-the-practical-guide/",
    slug: "react-typescript-the-practical-guide",
    rating: 5,
  },
];
