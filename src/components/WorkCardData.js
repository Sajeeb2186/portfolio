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
        title: "Scholarship Management System",
        text: "A comprehensive web application designed to streamline the scholarship application process for students and administrators. Features include application tracking, document management, and automated notifications.",
        view: "https://scholarship-management-c82d9.web.app/",
        source: "https://github.com/Sajeeb2186/scholarship-management",
        technologies: ["React.js", "Express.js", "MongoDB", "JWT", "Material-UI"]
    },
    {
        imgsrc: pro3,
        title: "Food Donation Platform",
        text: "A social impact web application that connects food donors with organizations and individuals in need, helping to reduce food waste and combat hunger. Features location-based matching and impact tracking.",
        view: "https://foodflow-8400c.web.app/",
        source: "https://github.com/Sajeeb2186/food-donation",
        technologies: ["React.js", "Node.js", "MongoDB", "Socket.io", "Google Maps API"]
    }
]

export default ProjectCardData;