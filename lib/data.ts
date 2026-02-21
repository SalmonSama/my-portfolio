export interface Education {
    institution: string;
    degree: string;
    period: string;
    url: string;
    description: string[];
    skills: string[];
}

export interface Project {
    title: string;
    year: number;
    madeAt: string;
    description: string;
    url: string;
    github?: string;
    image?: string;
    technologies: string[];
    stars?: number;
    featured?: boolean;
}

export interface Experience {
    company: string;
    title: string;
    period: string;
    url: string;
    description: string[];
    technologies: string[];
}

export const experiences: Experience[] = [];

export const education: Education[] = [
    {
        institution: "SCI19_3611",
        degree: "Artificial Intelligence",
        period: "Academic Course",
        url: "https://github.com/SalmonSama/SCI19_3611_ARTIFICIAL_INTELLIGENCE",
        description: [
            "Studied core concepts of Artificial Intelligence, including problem-solving, search algorithms, and knowledge representation.",
            "Completed practical projects, algorithms, and assignments as part of the university curriculum.",
        ],
        skills: ["Python", "Search Algorithms", "Logic", "AI Logic"],
    },
    {
        institution: "SCI19_3621",
        degree: "Machine Learning",
        period: "Academic Course",
        url: "https://github.com/SalmonSama/SCI19_3621_Machine_Learning",
        description: [
            "Explored fundamental machine learning concepts, including supervised and unsupervised learning, and neural networks.",
            "Applied various ML models to solve data-driven problems and analyzed model performance using Python-based tools.",
        ],
        skills: ["Python", "Scikit-Learn", "Neural Networks", "Data Analysis"],
    },
    {
        institution: "SCI19_2243",
        degree: "Operating Systems",
        period: "Academic Course",
        url: "https://github.com/SalmonSama/SCI19_2243_Operating_Systems",
        description: [
            "Studied core concepts of operating systems, including process management, CPU scheduling, and synchronization.",
            "Explored memory management techniques, file systems, and system security through practical assignments and theoretical analysis.",
        ],
        skills: ["C/C++", "Process Scheduling", "Memory Management", "System Architecture"],
    },
    {
        institution: "1101021",
        degree: "Software Development Foundation I",
        period: "Academic Course",
        url: "https://github.com/SalmonSama/1101021_SOFTWARE_DEVELOPMENT_FOUNDATION-I",
        description: [
            "Established a solid foundation in software development principles, focusing on structured programming and logic design.",
            "Developed core programming skills through hands-on practice, emphasizing clean code, basic algorithms, and efficient problem-solving techniques."
        ],
        skills: ["Programming Logic", "C/C++", "Algorithm Design", "Problem Solving"],
    },
    {
        institution: "1101022",
        degree: "Software Development Foundation II",
        period: "Academic Course",
        url: "https://github.com/SalmonSama/1101022_SOFTWARE_DEVELOPMENT_FOUNDATION_II",
        description: [
            "Mastered Full-stack web development basics, covering everything from semantic HTML/CSS to server-side scripting with PHP.",
            "Implemented relational database management using MySQL and developed dynamic web applications with state management and form handling.",
            "Designed and developed responsive user interfaces (UI) with a focus on UX principles and modern CSS techniques."
        ],
        skills: ["PHP", "MySQL", "HTML5/CSS3", "Responsive UI", "Web Security"],
    },
];

export const projects: Project[] = [
    {
        title: "Machine Learning: Hard Disk Drive",
        year: 2025,
        madeAt: "University",
        image: "/projects/hdd-ml/hhd.png",
        description: "A machine learning project focused on predictive analysis or classification for Hard Disk Drives. Developed robust models to analyze specific data patterns.",
        url: "https://github.com/ZearoByMc/Project1_SUT",
        github: "https://github.com/ZearoByMc/Project1_SUT",
        technologies: ["Python", "Machine Learning", "Data Analysis", "Scikit-Learn"],
        featured: true,
    },
    {
        title: "Sine-Cosine Algorithm",
        year: 2025,
        madeAt: "University",
        image: "/projects/sine-cosine/sine_cosin.png",
        description: "Implemented the Sine-Cosine optimization algorithm from scratch to solve complex mathematical and optimization problems efficiently.",
        url: "https://github.com/SalmonSama/Sine-cosine_algorithm",
        github: "https://github.com/SalmonSama/Sine-cosine_algorithm",
        technologies: ["Python", "Algorithms", "Optimization", "Math"],
        featured: true,
    },
    {
        title: "Smart Farming IoT",
        year: 2022,
        madeAt: "High school",
        image: "/projects/smart-farming/smart_farm.png",
        description: "An Internet of Things (IoT) solution designed for practical smart farming. Integrated hardware sensors with software to monitor and manage agricultural environments.",
        url: "https://github.com/SalmonSama/Smart_Farming_IoT",
        github: "https://github.com/SalmonSama/Smart_Farming_IoT",
        technologies: ["IoT", "C++", "Sensors", "Hardware"],
        featured: true,
    },
    {
        title: "Tukubkao",
        year: 2025,
        madeAt: "Personal",
        image: "/projects/tukubkao/tukubkao.jpg",
        description: "A practical application designed to manage food ingredients and recipes, helping users track what's in their kitchen and minimize food waste.",
        url: "https://github.com/CoriumCake/tukubkao",
        github: "https://github.com/CoriumCake/tukubkao",
        technologies: ["Web Development", "Frontend", "Backend"],
    },
    {
        title: "Minecat",
        year: 2024,
        madeAt: "Personal",
        image: "/projects/minecat/minecat.png",
        description: "An engaging interactive application/game project. Focused on creating a smooth user experience and implementing core application logic.",
        url: "https://github.com/CoriumCake/minecat",
        github: "https://github.com/CoriumCake/minecat",
        technologies: ["Application Design", "Logic", "UI/UX"],
    },
    {
        title: "Network Administration",
        year: 2024,
        madeAt: "University",
        image: "/projects/network/network.png",
        description: "A comprehensive project demonstrating practical skills in network setup, routing, security, and administration within a simulated environment.",
        url: "https://github.com/SalmonSama/1101183_PROJECT_IN_NETWORK_ADMINISTRATION",
        github: "https://github.com/SalmonSama/1101183_PROJECT_IN_NETWORK_ADMINISTRATION",
        technologies: ["Networking", "Security", "Infrastructure"],
    },
    {
        title: "Database Administration",
        year: 2024,
        madeAt: "University",
        image: "/projects/database/database.png",
        description: "Focused on database design, management, optimization, and security. Showcases the ability to handle complex data structures and queries.",
        url: "https://github.com/SalmonSama/1101173_PROJECT_IN_DATABASE_ADMINISTRATION",
        github: "https://github.com/SalmonSama/1101173_PROJECT_IN_DATABASE_ADMINISTRATION",
        technologies: ["SQL", "Database Design", "RDBMS"],
    },
];