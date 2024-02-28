import cci from './images/logo/unc-cci.png';
import usc from './images/logo/usc.png';
import top10 from './images/logo/top-10.png';
import mu from './images/logo/mu.png';
import uncc from './images/logo/uncc.png';
import scatterplot from './images/project-icon/scatterplot.png';
import iPhoneify from './images/project-icon/trade-project.png';
import message from './images/project-icon/message.png';

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

export const EDUCATION = {
    ms: {
        degree: "Masters in Computer Science",
        university: "University of North Carolina at Charlotte",
        duration: "Aug 2022 - May 2024",
        gpa: "GPA: 3.83 ( On a Scale of 4.0 )",
        link: "https://www.charlotte.edu/",
        logo: uncc
    },
    be: {
        degree: "Bachelor of Engineering in Computer Science & Engineering",
        university: "Mumbai University",
        duration: "Aug 2017 - July 2021",
        gpa: "CGPI: 7.90 ( On a Scale of 10.0 )",
        link: "https://www.sakec.ac.in/cs/",
        logo: mu
    }
}

export const PROJECTS = {
    web:[
        {
            title: "Scatter Plot using D3.js",
            description: "Explore data relationships with an interactive scatter plot created using D3.js. Customize visuals, zoom, brush, and toggle data groups. Gain valuable insights and make informed decisions in a visually captivating way. Perfect for finance, healthcare, and social sciences.",
            icon: scatterplot,
            link: "https://github.com/deepfuriya/scatter-plot-one"
        },
        {
            title: "iPhoneify Web Application",
            description: "TradeHub is a web application that facilitates item trading between users. Built using Node.js and Express.js, it integrates MongoDB for data storage. Users can make trade offers, add items to their watch list, and view their trading history. Security measures include XSS prevention, password hashing, and authentication request limiting.",
            icon: iPhoneify,
            link: "https://github.com/deepfuriya/tradehub"
        }
    ],
    mobile:[
        {
            title: "Messaging App",
            description: "Developed a messaging app ensuring seamless, secure communication. Google Authentication protects accounts and sensitive data. Google Firestore provides uninterrupted service, keeping chats accessible. Communicate confidently, knowing privacy is safeguarded.",
            icon: message,
            link: "https://github.com/deepfuriya/messaging-app"
        }
    ]
}
