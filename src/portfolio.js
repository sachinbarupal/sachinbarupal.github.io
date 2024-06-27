const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

const greeting = {
  title: "Hello 👋!!",
  title2: "Sachin",
  logo_name: "sachin.b()",
  nickname: "sachin",
  full_name: "Sachin Barupal",
  subTitle:
    "Competitive Programmer, MERN Stack Developer, DSA Enthusiast 🔥. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/14UPZxjPTi8AVsvt0UJbnECktpLiSl0dT/view?usp=sharing",
  mail: "mailto:sachinbarupal@gmail.com",
};

const socialMediaLinks = {
  github: "https://github.com/sachinbarupal",
  linkedin: "https://www.linkedin.com/in/sachinbarupal",
  gmail: "sachinbarupal@gmail.com",
  instagram: "https://www.instagram.com/the_sachinbarupal/",
};

const skills = [
  {
    title: "FullStack Development",
    fileName: "FullStackImg",
    skills: [
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
      "⚡ Building responsive website front end using ReactJS",
      "⚡ Developing mobile applications using React Native",
      "⚡ Creating application backend in Node.js and Express",
      "⚡ Integration of third party services such as Firebase / AWS",
    ],
    softwareSkills: [
      {
        skillName: "HTML5",
        fontAwesomeClassname: "simple-icons:html5",
        style: {
          color: "#E34F26",
        },
      },
      {
        skillName: "CSS3",
        fontAwesomeClassname: "fa-css3",
        style: {
          color: "#1572B6",
        },
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "simple-icons:javascript",
        style: {
          backgroundColor: "#FFFFFF",
          color: "#F7DF1E",
        },
      },

      {
        skillName: "ReactJS",
        fontAwesomeClassname: "simple-icons:react",
        style: {
          color: "#61DAFB",
        },
      },
      {
        skillName: "NodeJS",
        fontAwesomeClassname: "simple-icons:nodedotjs",
        style: {
          color: "#339933",
        },
      },
      {
        skillName: "NPM",
        fontAwesomeClassname: "simple-icons:npm",
        style: {
          color: "#CB3837",
        },
      },
      {
        skillName: "MongoDB",
        fontAwesomeClassname: "simple-icons:mongodb",
        style: {
          color: "#439743",
        },
      },
      {
        skillName: "MySQL",
        fontAwesomeClassname: "simple-icons:mysql",
        style: {
          color: "#4479A1",
        },
      },
      {
        skillName: "Git",
        fontAwesomeClassname: "simple-icons:git",
        style: {
          color: "#E94E32",
        },
      },

      {
        skillName: "",
        fontAwesomeClassname: "simple-icons:",
        style: {
          color: "#f89820",
        },
      },
      {
        skillName: "C",
        fontAwesomeClassname: "simple-icons:c",
        style: {
          color: "#E94E32",
        },
      },
      {
        skillName: "C++",
        fontAwesomeClassname: "simple-icons:cplusplus",
        style: {
          color: "#E94E32",
        },
      },
      {
        skillName: "Python",
        fontAwesomeClassname: "simple-icons:python",
        style: {
          color: "#3776AB",
        },
      },
      {
        skillName: "",
        fontAwesomeClassname: "simple-icons:",
        style: {
          color: "#f89820",
        },
      },
      {
        skillName: "",
        fontAwesomeClassname: "simple-icons:",
        style: {
          color: "#f89820",
        },
      },
      {
        skillName: "",
        fontAwesomeClassname: "simple-icons:",
        style: {
          color: "#f89820",
        },
      },
    ],
  },
];

const codingProfiles = [
  {
    id: 1,
    title: "LeetCode",
    profile: "https://leetcode.com/u/sachinbarupal/",
    iconLight: "./src/containers/codingProfiles/leetcode.svg",
    iconDark: "./src/containers/codingProfiles/leetcodeDark.svg",
    lines: [
      "⚡ Guardian (TOP 0.8%)",
      "⚡ Max. Rating : 2266",
      "⚡ Problems Solved : 900+",
      "⚡ AIR 29 (Leetcode Weekly 391)",
    ],
  },
  {
    id: 2,
    title: "Codeforces",
    iconLight: "./src/containers/codingProfiles/code-forces.svg",
    iconDark: "./src/containers/codingProfiles/code-forces.svg",
    profile: "https://codeforces.com/profile/sachinbarupal",
    lines: [
      "⚡ Specialist",
      "⚡ Max. Rating : 1558",
      "⚡ Problems Solved : 200+",
      "⚡ (AIR 90) Codeforces Round 952 (Div 4)",
    ],
  },

  {
    id: 3,
    title: "CodeChef",
    iconLight: `./src/containers/codingProfiles/cc-logo.svg`,
    iconDark: `./src/containers/codingProfiles/cc-logo.svg`,
    profile: "https://www.codechef.com/users/sachinbarupal",
    lines: [
      "⚡4 ⭐",
      "⚡Max. Rating : 1917",
      "⚡Global Rank 118 Starters 137 (Div 2)",
    ],
  },
  {
    id: 4,
    title: "GeeksforGeeks",
    iconLight: "./src/containers/codingProfiles/gfg.svg",
    iconDark: "./src/containers/codingProfiles/gfg.svg",
    fileName: "FullStackImg",
    profile: "https://www.geeksforgeeks.org/user/sachinbarupal/",
    lines: [
      "⚡ 5 ⭐ ",
      "⚡ Institute Rank : 1",
      "⚡ Max. Rating : 2121",
      "⚡ Problems Solved : 900+",
      "⚡ AIR 3 (GFG Weekly 145)",
    ],
  },
  // {
  //   title: "Cloud Infra-Architecture",
  //   fileName: "CloudInfraImg",
  //   skills: [
  //     "⚡ Experience working on multiple cloud platforms",
  //     "⚡ Experience hosting and managing websites",
  //     "⚡ Experience with Continuous Integration",
  //   ],
  //   softwareSkills: [
  //     {
  //       skillName: "AWS",
  //       fontAwesomeClassname: "simple-icons:amazonaws",
  //       style: {
  //         color: "#FF9900",
  //       },
  //     },
  //     {
  //       skillName: "Netlify",
  //       fontAwesomeClassname: "simple-icons:netlify",
  //       style: {
  //         color: "#38AFBB",
  //       },
  //     },
  //     {
  //       skillName: "Heroku",
  //       fontAwesomeClassname: "simple-icons:heroku",
  //       style: {
  //         color: "#6863A6",
  //       },
  //     },
  //     {
  //       skillName: "Firebase",
  //       fontAwesomeClassname: "simple-icons:firebase",
  //       style: {
  //         color: "#FFCA28",
  //       },
  //     },
  //     {
  //       skillName: "PostgreSQL",
  //       fontAwesomeClassname: "simple-icons:postgresql",
  //       style: {
  //         color: "#336791",
  //       },
  //     },
  //     {
  //       skillName: "MongoDB",
  //       fontAwesomeClassname: "simple-icons:mongodb",
  //       style: {
  //         color: "#47A248",
  //       },
  //     },
  //     {
  //       skillName: "Docker",
  //       fontAwesomeClassname: "simple-icons:docker",
  //       style: {
  //         color: "#1488C6",
  //       },
  //     },
  //     {
  //       skillName: "GitHub Actions",
  //       fontAwesomeClassname: "simple-icons:githubactions",
  //       style: {
  //         color: "#5b77ef",
  //       },
  //     },
  //   ],
  // },
];

const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, React and React Native Projects. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

const ContactData = {
  title: "Contact Me",
  description:
    "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
};

const projects = [
  {
    id: "0",
    name: "MBM-Communications",
    url: "https://github.com/sachinbarupal/MBM-Communication",
    description:
      "An Android Application aimed for providing a centralized communication medium for the official university works. It focuses on enhancing student connectivity and information accessibility, and resulting in decrease in missed updates.",
    languages: [
      {
        name: "React Native",
        iconifyClass: "logos-react",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
      {
        name: "NodeJs",
        iconifyClass: "logos-nodejs",
      },
      {
        name: "MongoDB",
        iconifyClass: "logos-mongodb-icon",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/sachinbarupal/MBM-Communication",
        iconifyClass: "ri:github-fill",
      },
    ],
  },
  {
    id: "1",
    name: "Socialify",
    url: "https://github.com/sachinbarupal/socialify",
    description:
      "A Full Stack Social Media web application for online communication, including features like sharing posts, likes, comments and real-time chat with other users.  Utilized jsonwebtoken for authentication and authorization.",
    languages: [
      {
        name: "MongoDB",
        iconifyClass: "logos-mongodb-icon",
      },
      {
        name: "Express",
        iconifyClass: "simple-icons:express",
      },
      {
        name: "ReactJs",
        iconifyClass: "logos-react",
      },
      {
        name: "NodeJs",
        iconifyClass: "logos-nodejs",
      },
      {
        name: "WebSocket",
        iconifyClass: "logos:websocket",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/sachinbarupal/socialify",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Live Demo",
        url: "https://socialify-ruby.vercel.app/",
        iconifyClass: "mdi:web",
      },
    ],
  },
  {
    id: "2",
    name: "Todo-Web App",
    url: "https://github.com/sachinbarupal/Todo-App",
    description:
      "A simple Todo Web Application where user can create and manage their tasks with any signup / signin. The Todos are stored in the localStorage with proper state management using Context API.",
    languages: [
      {
        name: "ReactJs",
        iconifyClass: "logos-react",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/sachinbarupal/Todo-App",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Live Demo",
        url: "https://todo-task-manager-app.vercel.app/",
        iconifyClass: "mdi:web",
      },
    ],
  },
  {
    id: "3",
    name: "House Price Predictor",
    url: "https://github.com/sachinbarupal/Real-Estate-Price-Predictor",
    description: `This web tool lets you input details about a property and get an estimated price. Perfect for home buyers, sellers, and real estate agents looking to make informed decisions.`,
    languages: [
      {
        name: "Python",
        iconifyClass: "logos-python",
      },
      {
        name: "Flask",
        iconifyClass: "logos-flask",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/sachinbarupal/Real-Estate-Price-Predictor",
        iconifyClass: "ri:github-fill",
      },
    ],
  },
  {
    id: "4",
    name: "Weather App",
    url: "https://github.com/sachinbarupal/Love_Babbar-Dot-Batch/tree/main/Weather%20App",
    description:
      "This Weather web app provides real-time weather information for any location. Users can easily enter a city name to get current weather conditions. Perfect for anyone needing quick and accurate weather updates on the go.",
    languages: [
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/sachinbarupal/Love_Babbar-Dot-Batch/tree/main/Weather%20App",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Live Demo",
        url: "https://sachinbarupal.github.io/Love_Babbar-Dot-Batch/Weather App/",
        iconifyClass: "mdi:web",
      },
    ],
  },
  {
    id: "5",
    name: "Tic-Tac-Toe",
    url: "https://github.com/sachinbarupal/Love_Babbar-Dot-Batch/tree/main/Tic-Tac-Toe",
    description:
      "Simple Tic-Tac-Toe game. User can play in two modes : vs Human or vs Computer. Implimented the minMax Algorithm for the vs Computer Mode to find the best move.",
    languages: [
      {
        name: "HTML5",
        iconifyClass: "vscode-icons:file-type-html",
      },
      {
        name: "CSS3",
        iconifyClass: "vscode-icons:file-type-css",
      },
      {
        name: "JavaScript",
        iconifyClass: "logos-javascript",
      },
    ],
    links: [
      {
        name: "Github",
        url: "https://github.com/sachinbarupal/Love_Babbar-Dot-Batch/tree/main/Tic-Tac-Toe",
        iconifyClass: "ri:github-fill",
      },
      {
        name: "Live Demo",
        url: "https://sachinbarupal.github.io/Love_Babbar-Dot-Batch/Tic-Tac-Toe/",
        iconifyClass: "mdi:web",
      },
    ],
  },
];

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  codingProfiles,
  projectsHeader,
  ContactData,
  projects,
};
