import htmlIcon from "../public/icons/coding/html5.svg";
import cssIcon from "../public/icons/coding/css3.svg";
import jsIcon from "../public/icons/coding/java-script.svg";
import python from "../public/icons/coding/python.svg";
import reactIcon from "../public/icons/coding/react.svg";
import nodeIcon from "../public/icons/coding/node-js.svg";
import mongoIcon from "../public/icons/coding/mongo-db.svg";
import typeScript from "../public/icons/coding/typescript.svg";
import nextJs from "../public/icons/coding/next-js.svg";

import webDevIcon from "../public/icons/skills/design.svg";
import mobileDevIcon from "../public/icons/skills/mobile-dev.svg";
import uiUxIcon from "../public/icons/skills/design.svg";

import universityIcon from "../public/icons/advantages/University.svg";
import coursesIcon from "../public/icons/advantages/Courses.svg";
import developerIcon from "../public/icons/advantages/Developer.svg";
import designerIcon from "../public/icons/advantages/designer.svg";

import macaronShopImg from "../public/img/projects/macaronShop.svg";
import pulseImg from "../public/img/projects/pulse.jpeg";
import certificateIng from "../public/img/projects/certificate.jpg";
import marvelImg from "../public/img/projects/marvel.jpeg";
import ipadImg from "../public/img/projects/ipad.jpeg";
import tocarImg from "../public/img/projects/tocar.svg";

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
    title: "Web Development",
    description:
      "I build interactive and maintainable web interfaces using React and Next.js, focusing on functionality and code quality.",
  },
  {
    img: mobileDevIcon,
    alt: "responsive-web",
    title: "Responsive Design",
    description:
      "I ensure websites look great and work smoothly on all devices by creating responsive layouts and adaptive styles for different screen sizes.",
  },
  {
    img: uiUxIcon,
    alt: "design",
    title: "UI/UX Design",
    description:
      "I design intuitive and visually appealing interfaces, prioritizing user experience and accessibility in every project.",
  },
];
export const resumeData = {
  education: [
    {
      icon: universityIcon,
      alt: "school",
      title: "Secondary Education",
      location: "Ukraine | Completed 2023",
      description:
        "Completed secondary education with a focus on mathematics and computer science. Currently learning Swedish and preparing to enroll in a KTH university.",
    },
    {
      icon: coursesIcon,
      alt: "courses",
      title: "Web Development Courses",
      location: "Udemy / Self-learning",
      description:
        "Completed online courses on HTML, CSS, JavaScript, React, Next.js, and some more. Built practical projects to strengthen skills and develop a portfolio.",
    },
  ],
  work: [
    {
      icon: developerIcon,
      alt: "developer",
      title: "Front-End Developer / Personal Projects",
      location: "Self-learning | 2025–Present",
      description:
        "Developing web applications using React, Next.js, and TypeScript. Creating responsive interfaces and interactive components for my portfolio.",
    },
    {
      icon: designerIcon,
      alt: "designer",
      title: "UI/UX Designer / Personal Projects",
      location: "Self-learning | 2025–Present",
      description:
        "Designing intuitive and visually appealing user interfaces for personal projects. Focused on user experience, accessibility, and responsive design.",
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
    label: "Main Technology",
    filters: ["JavaScript", "TypeScript", "Python", "Go", "Rust"],
  },
  {
    label: "Last Updated",
    filters: ["This Month", "Last 3 Months", "Last Year", "Older"],
  },
  {
    label: "Stars",
    filters: ["< 10", "10–50", "50–200", "200+"],
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
