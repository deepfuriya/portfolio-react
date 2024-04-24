import cci from './images/logo/unc-cci.png';
import usc from './images/logo/usc.png';
import top10 from './images/logo/top-10.png';
import mu from './images/logo/mu.png';
import uncc from './images/logo/uncc.png';
import scatterplot from './images/project-icon/scatterplot.png';
import iPhoneify from './images/project-icon/trade-project.png';
import message from './images/project-icon/message.png';
import trip from './images/project-icon/trip.png';
import weather from './images/project-icon/weather.png';
import trivia from './images/project-icon/trivia.png';
import fakeNews from './images/project-icon/fake-news.png';
import tic_tac_toe from './images/project-icon/tic_tac_toe.png';

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
        gpa: "GPA: 3.83",
        link: "https://www.charlotte.edu/",
        logo: uncc
    },
    be: {
        degree: "Bachelor of Engineering in Computer Science & Engineering",
        university: "Mumbai University",
        duration: "Aug 2017 - July 2021",
        gpa: "CGPI: 7.90",
        link: "https://www.sakec.ac.in/cs/",
        logo: mu
    }
}

export const PROJECTS = {
    web:[
        {
            title: "Tic-Tac-Toe React Game",
            description: "This project is a simple Tic-Tac-Toe game built using React. It features a clean and interactive user interface, allowing two players to play the game on the same computer. The game is developed using React components and the useState hook for state management.",
            icon: tic_tac_toe,
            link: "https://github.com/deepfuriya/react-tic-tac-toe-game"
        },
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
        },
        {
            title: "Fake New Detection on Tweets",
            description: "This project harnesses Python and Django to sift through tweets using a sophisticated machine learning model. By integrating with the Twitter API, it evaluates the authenticity of news, distinguishing real from fake, and presents the analysis through an intuitive web interface.",
            icon: fakeNews,
            link: "https://github.com/deepfuriya/fake-news-detection"
        }
    ],
    mobile:[
        {
            title: "Messaging App",
            description: "Developed a messaging app ensuring seamless, secure communication. Google Authentication protects accounts and sensitive data. Google Firestore provides uninterrupted service, keeping chats accessible. Communicate confidently, knowing privacy is safeguarded.",
            icon: message,
            link: "https://github.com/deepfuriya/messaging-app"
        },
        {
            title: "Trip Manager",
            description: "The Trip Manager app utilizes Google location services API and Google Firestore to provide secure login/signup using Firebase Authentication, accurate GPS-based location tracking, and secure data storage on Google Firebase Cloud. It offers live maps preview of trip details, integrating Google Maps for Android.",
            icon: trip,
            link: "https://github.com/deepfuriya/Trip-Manager"
        },
        {
            title: "Weather App",
            description: "The Weather App is an Android application that displays the current weather and 5-day forecast for various cities. It utilizes the Weather API for retrieving weather data. The app features city selection, an easy-to-read UI, and uses OkHttp for API calls and JSON parsing. Additionally, it incorporates the Picasso library for loading weather icons dynamically.",
            icon: weather,
            link: "https://github.com/deepfuriya/weather-app"
        },
        {
            title: "Trivia Game Application",
            description: "The Trivia Game Application is an Android app that allows users to play a trivia game. The JSON-formatted trivia questions are retrieved using HTTP connections and API queries. Using OkHttp, the app can parse JSON input and make API calls. In order to dynamically load graphics during gameplay, it also incorporates the Picasso library.",
            icon: trivia,
            link: "https://github.com/deepfuriya/trivia-application"
        }
    ]
}
