import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I'm a frontend developer with 3 years of experience building clean, responsive, and scalable web applications. My primary focus is React, where I specialize in creating user-friendly interfaces, integrating RESTful APIs, and improving performance. I’ve contributed to enterprise retail systems, internal tools, and personal projects, always with a strong emphasis on code quality and usability.`;

export const ABOUT_TEXT = `I'm a frontend developer with a strong focus on building high-quality, user-first web applications using React, TypeScript, and JavaScript. With 3 years of hands-on experience, I’ve worked in Agile teams delivering solutions for enterprise retail systems and internal tools. I'm passionate about clean code, performance optimization, and designing reusable UI components. While I’ve had exposure to backend technologies like Node.js and SQL, my strength lies in the frontend. Outside of work, I enjoy learning new technologies, improving my skills, and contributing to personal side projects.`;

export const EXPERIENCES = [
  {
    year: "2022 – Present",
    role: "Frontend Developer",
    company: "GK Software Africa",
    description: `Built responsive user interfaces for retail management applications using React and SAPUI5. Connected frontend components to RESTful APIs for real-time stock and transaction updates. Improved performance by refactoring components and reducing re-renders. Participated in Agile sprints, code reviews, and UI enhancements in collaboration with designers and backend developers.`,
    technologies: ["JavaScript", "React", "SAPUI5", "Node.js", "MSSQL", "Docker"],
  },
  {
    year: "2022 – 2023",
    role: "Full Stack Developer Intern",
    company: "ExploreAI",
    description: `Built data-driven interfaces using lightweight JavaScript frameworks and integrated machine learning model outputs into dashboards hosted on AWS EC2. Created and tested RESTful APIs and visualized results using Power BI.`,
    technologies: ["Python", "Node.js", "AWS", "Power BI", "REST APIs"],
  },
  {
    year: "Apr 2022 – Jun 2022",
    role: "Software Developer Intern",
    company: "Momentum Investments",
    description: `Enhanced frontend functionality using Vue.js and contributed to backend optimization and containerized deployments using Docker and Kubernetes.`,
    technologies: ["Vue.js", "Java", "Docker", "Kubernetes"],
  },
  {
    year: "May 2021 – Aug 2021",
    role: "Software Developer Intern",
    company: "Momentum Investments",
    description: `Assisted in frontend and backend testing using Selenium and JUnit. Worked closely with QA to ensure quality releases and bug resolution.`,
    technologies: ["Selenium", "JUnit"],
  },
];

export const PROJECTS = [
  {
    title: "EcoExplorer",
    image: project1,
    description:
      "EcoExplorer is a wildlife browser app where users can view species, rate them, and sort based on preferences. Built with React and styled using Tailwind CSS, it stores ratings in localStorage and includes Jest tests for reliability.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Jest"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A responsive personal website built with React and Tailwind CSS to showcase my skills, experience, and projects.",
    technologies: ["React", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "CoreIntel-web",
    image: project5,
    description:
      "An e-commerce website built with React and Tailwind. Create profile, order and pay for items. Showcase variety of available hardware items on sale",
    technologies: ["React", "Tailwind CSS", "HTML", "CSS"],
  }
];
 
export const CONTACT = {
  address: "Sandton, Johannesburg, South Africa ",
  phoneNo: "068 187 7547 ",
  email: "morglin.olivierm@gmail.com",
};
