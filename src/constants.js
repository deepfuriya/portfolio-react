import cci from './images/logo/unc-cci.png';
import usc from './images/logo/usc.png';
import top10 from './images/logo/top-10.png';

export const DATA = {
    LINKEDIN: "https://www.linkedin.com/in/deepfuriya/",
    GITHUB: "https://github.com/deepfuriya",
    EMAIL: "dfuriya@uncc.edu"
};

export const headingArray = ['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects'];

export const SKILLS = {
    programmingLanguages: {
        title: "Programming Languages",
        icon: 'bi-code-slash',
        content: ["HTML & CSS", "Java / Kotlin", "JavaScript", "C / C++", "Python"]
    },
    databases: {
        title: "Databases",
        icon: 'bi-database',
        content: ["MySQL", "SQL", "Firebase", "MongoDB"]
    },
    applicationDevlopment: {
        title: "Application Development",
        icon: "bi-braces",
        content: ["Android Development ( Java / Kotlin )", "Web Development ( Node.js )", "API Development ( PHP )"]
    }
};

export const EXPERIENCE = {
    ta: {
        title: "Graduate Teaching Assistant",
        duration: "Jan 2023 - Present",
        location: "Charlotte, NC",
        employer: "College of Computing & Informatics",
        link: "https://cci.charlotte.edu/",
        logo: cci
    },
    ra: {
        title: "Research Assistant",
        duration: "June 2023 - August 2023",
        location: "Columbia, SC",
        employer: "University of South Carolina",
        link: "https://sc.edu/",
        logo: usc
    },
    fullStackDev: {
        title: "Full Stack Developer",
        duration: "August 2021 - July 2022",
        location: "Mumbai, India",
        employer: "Top 10 Mobiles",
        link: "https://top10mobiles.com/",
        logo: top10
    }
};
