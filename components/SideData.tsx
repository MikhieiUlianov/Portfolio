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

// Example structure for repeated data (social links, menu items, etc.)
export const sidePanelLinks = [
  {
    href: "https://github.com/MikhieiUlianov",
    icon: "icon-github-circled",
    label: "GitHub",
  },
  {
    href: "#",
    icon: "icon-instagram",
    label: "Instagram",
  },
  {
    href: "#",
    icon: "icon-facebook",
    label: "Facebook",
  },
];

export const contactsSocialLinks = [
  {
    href: "#",
    icon: "icon-github-circled",
    label: "GitHub",
  },
  {
    href: "#",
    icon: "icon-telegram",
    label: "Telegram",
  },
  {
    href: "#",
    icon: "icon-instagram",
    label: "Instagram",
  },
];

// Example for menu items
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
export const filtersBlocks = [
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
