import pro1 from "../assets/project1.png"
import pro2 from "../assets/project2.png"
import pro3 from "../assets/project3.png"

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "GreenCafe - A Restaurant Website",
        text: "A modern restaurant website that allows customers to browse the menu, place orders for delivery or pickup, and make payments online. Features include real-time order tracking and admin dashboard.",
        view: "https://greencafe-d390f.web.app/",
        source: "https://github.com/Sajeeb2186/GreenCafe-client",
        technologies: ["React.js", "Node.js", "MongoDB", "Firebase", "Stripe"]
    },
    {
        imgsrc: pro2,
        title: "E-Learning Management System",
        text: "A robust backend API built with Java Spring Boot and PostgreSQL for managing online courses, student enrollment, and progress tracking. Features secure authentication, role-based access control, and RESTful APIs.",
        view: "https://github.com/Sajeeb2186/elearning-api",
        source: "https://github.com/Sajeeb2186/elearning-api",
        technologies: ["Java Spring Boot", "PostgreSQL", "Spring Security", "JPA/Hibernate", "REST APIs"]
    },
    {
        imgsrc: pro3,
        title: "Food Donation Platform",
        text: "A social impact web application that connects food donors with organizations and individuals in need, helping to reduce food waste and combat hunger. Features location-based matching and impact tracking.",
        view: "https://foodflow-8400c.web.app/",
        source: "https://github.com/Sajeeb2186/food-donation",
        technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Google Maps API"]
    },
    
]

export default ProjectCardData;