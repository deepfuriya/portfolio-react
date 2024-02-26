import { DATA } from '../constants';

export default function AboutMe(){
    return (
        <div class="text-center my-5">
            <h2 class="display-5 fw-bolder"><span class="text-gradient d-inline">About Me</span></h2>
            <p class="lead fw-light mb-2">I'm Deep Rajesh Furiya, a passionate software engineer.</p>
            <p class="text-muted mb-3" style={{fontSize: '1.2rem'}}>I am currently pursuing Masters in Computer Science at University of North Carolina at Charlotte.</p>       
            <p class="text-muted mb-3" style={{fontSize: '1.2rem'}}>Proficient in Kotlin, Java, SQL, Python, PHP, Android and Web Development. Experienced as a Research Assistant and Full Stack Web Developer.</p>
            <p class="text-muted mb-3" style={{fontSize: '1.2rem'}}>As a Research Assistant, I developed backend scripts for PHP server and created RESTful APIs in Propel using Object-Relational Mapping to enable communication between the app and the MySQL database. Additionally, I collaborated closely with the research team to gather requirements, provide technical solutions, and design user-friendly web pages for an app and the associated research website.</p>
            <p class="text-muted mb-3" style={{fontSize: '1.2rem'}}>Additionally, I have worked as a Full Stack Web Developer, successfully delivering web-based ERP software with various modules like billing module, inventory module, vendor management.</p>
            <p class="text-muted mb-3" style={{fontSize: '1.2rem'}}>Passionate about sharing and gaining knowledge on software development, mobile applications, and web technologies.
            </p>
            <div class="d-flex justify-content-center fs-2 gap-4">
                <a class="text-gradient" target="_blank" href={DATA.LINKEDIN}><i class="bi bi-linkedin"></i></a>
                <a class="text-gradient" target="_blank" href={DATA.GITHUB}><i class="bi bi-github"></i></a>
                <a class="text-gradient" href={"mailto:"+DATA.EMAIL}><i class="bi bi-envelope-fill"></i></a>
            </div>
        </div>
    );
}