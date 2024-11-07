import project1 from "../assets/projects/project-1.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Vue.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Vue.js, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2022 - Present",
    role: "Full Stack Developer",
    company: "GK Software",
    description: ` Developed and supported full stack features for a retail management application using Java, JavaScript (Node.js), mssql, and RESTful APIs. 
    Connected front-end interfaces (React, Vue.js) to back-end services, ensuring seamless data flow and real-time updates.
    Optimized SQL databases for efficient querying and reporting. Automated build and deployment pipelines using Maven, Gradle, Docker, and Jenkins, ensuring reliable releases. 
    Collaborated on bug fixes, feature improvements, and user-driven changes. `,
    technologies: ["Javascript", "React.js", "Vue.js", "mongoDB", "mssql", "docker", "Node.js"],
  },
  {
    year: "2022 - 2023",
    role: "Data Scientist",
    company: "ExploreAI",
    description: ` Developed and deployed machine learning models in Python, integrating them into full stack web applications hosted on AWS EC2.
    Used Power BI for front-end data visualization, creating clear and actionable insights.
    Created and optimized RESTful APIs for efficient communication between front-end and back-end systems. `,
    technologies: ["Python", "AWS", "BigQuery", "mssql"],
  },
  {
    year: " April 2022 - June 2022",
    role: "Software Developer Intern",
    company: "Momentum Investments",
    description: ` Enhanced application performance using Kubernetes and containerization. 
    Built dynamic web interfaces with Java and optimized back-end services for improved response times. `,
    technologies: ["Kubernetes", "Java"],
  },
  {
    year: "2021 - 2021",
    role: "Software Developer Intern",
    company: "Momentum Investment",
    description: ` Automated testing with Selenium and JUnit to ensure software reliability.
    Diagnosed and resolved software issues across front-end and back-end systems. `,
    technologies: ["Selenium", "JUnit"],
  },
];

export const PROJECTS = [
  {
    title: "EcoExplorer",
    image: project1,
    description:
      "The EcoExplorer allows users to explore a list of wildlife species and rate them based on their preferences (like or dislike). Users can interact with the app by viewing details of different wildlife, rating them, and sorting the list based on ratings. Ratings are stored in the browser’s cache using localStorage, ensuring that the ratings persist across sessions. The app is built using React, styled with Tailwind CSS, and tested with Jest",
    technologies: ["TailwindCSS", "React", "Node.js", "Jest"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "TailwindCSS"],
  }
];

export const CONTACT = {
  address: "Sandton, Johannesburg, South Africa ",
  phoneNo: "068 187 7547 ",
  email: "morglin.olivierm@gmail.com",
};
