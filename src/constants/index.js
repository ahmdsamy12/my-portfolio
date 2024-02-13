import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  snap,
  wild,
  world,
  pizza,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React js Developer",
    icon: mobile,
  },
  {
    title: "api",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "React.js Developer Internship",
    company_name: "Raya",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "smart-it",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using HTML CSS JS and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer Reactjs",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Snapgram",
    description:
      "SnapGram: Empowering creativity, edit and create stunning posts seamlessly. Customize, share, and collaborate effortlessly with SnapGram's intuitive platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: snap,
    source_code_link: "https://github.com/ahmdsamy12/Snapgram",
    video_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7160364156980740096/"
  },
  {
    name: "The Wild Oasis ",
    description:
    "Wild Oasis: Your serene escape awaits. Experience hospitality redefined at Wild Oasis, where comfort, adventure, and relaxation converge in a desert haven.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "styled-component",
        color: "pink-text-gradient",
      },
    ],
    image: wild,
    source_code_link: "https://github.com/ahmdsamy12/The-Wild-Oasis",
    video_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7154566740897628160/"
  },
  {
    name: "Worldwise",
    description:
    "WorldWise: Your ultimate navigation companion. Seamlessly store and access location data on maps with WorldWise, your trusted travel partner.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: " context-api",
        color: "green-text-gradient",
      },
      {
        name: "css modules",
        color: "pink-text-gradient",
      },
    ],
    image: world,
    source_code_link: "https://github.com/ahmdsamy12/worldwise",
    video_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7145879170802237440/"
  },
  {
    name: "pizza-app",
    description:
      "PizzaApp: Savor the flavors of Italy at your fingertips. Explore a delectable range of pizzas crafted with premium ingredients and order with ease for a taste sensation.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux toolkit",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: pizza,
    source_code_link: "https://github.com/ahmdsamy12/pizza-app",
    video_code_link: "https://www.linkedin.com/feed/update/urn:li:activity:7149145592210907136/"
  }
];

export { services, technologies, experiences, testimonials, projects };
