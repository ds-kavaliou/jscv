type Course = {
  name: string;
  link: string;
};

export const courses: Course[] = [
  {
    name: "University: Francisk Skorina Gomel State University, Physics and IT (2021-2026)",
    link: "https://www.gsu.by/en/node/1138",
  },
  {
    name: "RS Schools Course 2022 Q2",
    link: "https://app.rs.school/certificate/axrekcog",
  },
  {
    name: "RS Schools Course 2022 Q3",
    link: "https://app.rs.school/certificate/c6ncbw3n",
  },
];

export const [firstName, lastName] = ["Denis", "Kovalev"];

type Info = {
  name: string;
  text: string;
};

export const info: Info[] = [
  {
    name: "Country",
    text: "Belarus",
  },
  {
    name: "City",
    text: "Gomel",
  },
  {
    name: "Phone",
    text: "+375296070757",
  },
  {
    name: "Email",
    text: "ds.kavaliou@gmail.com",
  },
  {
    name: "Telegram",
    text: "@Jle0MXv",
  },
  {
    name: "Github",
    text: "kovalev-ds",
  },
];

export const profile: string[] = [
  `Hello! I'm a JavaScript developer with a diverse skill set that includes expertise in React, Angular, Node.js, and ASP.NET. With a passion for web development, I have gained valuable experience working on various projects that have helped me refine my programming skills and problem-solving abilities.`,
  `In my journey as a developer, I have acquired a solid understanding of front-end frameworks like React and Angular, allowing me to create dynamic and responsive user interfaces. Additionally, my proficiency in Node.js enables me to build scalable and efficient server-side applications. I'm also well-versed in ASP.NET, which empowers me to develop robust web applications using Microsoft technologies. With a keen eye for detail and a drive for delivering high-quality code, I strive to contribute to innovative and impactful projects while continuously expanding my knowledge in the ever-evolving world of web development.`,
];

type Project = {
  name: string;
  href: string;
  picture: string;
  source: string;
};

export const projects: Project[] = [
  {
    name: "Online Store",
    href: "https://magenta-taffy-bbd959.netlify.app/",
    picture: "/images/store.png",
    source: "https://github.com/kovalev-ds/online-store",
  },
  {
    name: "Momentum",
    href: "https://rolling-scopes-school.github.io/kovalev-ds-JSFEPRESCHOOL2022Q2/momentum/",
    picture: "/images/momentum.png",
    source:
      "https://rolling-scopes-school.github.io/kovalev-ds-JSFEPRESCHOOL2022Q2/momentum/js/script.js",
  },
  {
    name: "Fifteen Game",
    href: "https://kovalev-ds.github.io/fifteen-game/dist/",
    picture: "/images/fifteen.png",
    source: "https://github.com/kovalev-ds/fifteen-game",
  },
  {
    name: "Bird Song",
    href: "https://kovalev-ds.github.io/bird-song/",
    picture: "/images/birds.png",
    source: "https://github.com/kovalev-ds/bird-song",
  },
  {
    name: "Travel",
    href: "https://rolling-scopes-school.github.io/kovalev-ds-JSFEPRESCHOOL2022Q2/Travel/",
    picture: "/images/travel.png",
    source: "",
  },
];

type Skill = {
  name: string;
  text: string;
};

export const skills: Skill[] = [
  {
    name: "HTML/CSS",
    text: "Strong understanding of HTML markup and CSS styling, including responsive design (using media queries, flexbox, or CSS grid layouts), CSS preprocessors (e.g., Sass), and CSS frameworks (e.g., Bootstrap, Tailwind CSS)",
  },
  {
    name: "JavaScript",
    text: "Proficient in JavaScript programming, with a strong understanding of its core concepts, features, and modern ES6+ syntax",
  },
  {
    name: "TypeScript",
    text: "Expertise in TypeScript, including its static typing system, interfaces, and ability to build scalable and maintainable applications.",
  },
  {
    name: "React",
    text: "Proficient in React library, including its component-based architecture, virtual DOM, and state management concepts. Experienced in building dynamic user interfaces and scalable web applications with its popular frameworks such as Next.js and Remix, leveraging their server-side rendering (SSR) capabilities, routing, and API integration features to create high-performance and SEO-friendly applications",
  },
  {
    name: "Angular",
    text: "Extensive experience with Angular framework, utilizing its powerful features like modules, components, services, and dependency injection to build robust and maintainable web applications",
  },
  {
    name: "Node.js",
    text: "Proficient in Node.js, utilizing its powerful runtime environment for server-side development. Experienced in frameworks like Express and Nest.js, enabling the creation of scalable and modular applications.",
  },
  {
    name: "RESTful APIs",
    text: "Understanding of RESTful principles and experience in consuming and integrating data from APIs, including handling requests, authentication, and data manipulation.",
  },
  {
    name: "Web Development Tools",
    text: "Proficient in using build tools like Webpack and Vite, task runners like Gulp, and package managers like npm or Yarn for efficient frontend development workflows.",
  },
  {
    name: "Software Design Principles",
    text: "Understanding and application of software design principles such as Design Patterns, SOLID (Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion), DRY (Don't Repeat Yourself), and YAGNI (You Ain't Gonna Need It) for writing clean, modular, and maintainable code.",
  },
  {
    name: "English",
    text: "B1",
  },
];
