



import {
  logo,
  backend,
  web,
  github,
  menu,
  close,
  css,
  project2,
  project3,
  mysql,
  express,
  aws,
  bs5,
  gsap,
  framer,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
} from "../assets";

import luminar from "../assets/company/luminar.png";
import employeeCrud from "../assets/projects/employee-crud.png";
import studentPortal from "../assets/projects/student-portal.png";
import project_fare from "../assets/projects/project_fare.png"
import appointment_booking from "../assets/projects/appointmentbooking.png"


// ✅ Navbar Links
export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

// ✅ Services
export const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Version Control & Deployment Using Git/GitHub",
    icon: git,
  },
];

// ✅ Technologies
export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Bootstrap", icon: bs5 },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "MongoDB", icon: mongodb },
  // { name: "MySQL", icon: mysql },
  { name: "Git", icon: git },
  // { name: "GSAP", icon: gsap },
  // { name: "Framer Motion", icon: framer },
  // { name: "Three JS", icon: threejs },
  // { name: "AWS", icon: aws },
];

// ✅ Experience
export const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Luminar Technolab, Calicut",
    icon: luminar,
    iconBg: "#383E56",
    date: "March 2025 – Present",
    points: [
      "Developed full-stack apps using MongoDB, Express.js, React.js, and Node.js.",
      "Built projects like Student Portal and Employee Manager with full CRUD functionality.",
      "Used Redux Toolkit, image upload, API integration, and chart visualizations.",
      "Deployed projects on Vercel (frontend) and Render (backend).",
      "Collaborated using Git/GitHub and participated in peer code reviews.",
    ],
  },
];

// ✅ Testimonials
export const testimonials = [
  {
    testimonial:
      "Sidharth's projects reflect strong fundamentals in full-stack development. His skills in React and Node.js stood out clearly.",
    name: "Mentor",
    designation: "Lead Trainer",
    company: "Luminar Technolab",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    testimonial:
      "Sidharth has shown excellent growth as a developer. His understanding of MERN stack and real-world project handling is commendable.",
    name: "Senior Developer",
    designation: "Tech Team",
    company: "Luminar Technolab",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    testimonial:
      "Great communication and problem-solving mindset. He's a team player and always ready to learn and contribute.",
    name: "Instructor",
    designation: "Technical Mentor",
    company: "Luminar Technolab",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

// ✅ Projects
export const projects = [
  {
    name: "Redux Shopping Cart",
    description:
      "A functional shopping cart application built using React and Redux Toolkit. Supports add to cart, quantity change, total price calculation, and responsive UI.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "ReduxToolkit", color: "green-text-gradient" },
      { name: "Bootstrap5", color: "pink-text-gradient" },
    ],
    image: project2,
    source_code_link: "https://github.com/zid-dotcom/redux-cart",
    live_link: "https://redux-cart-tau-weld.vercel.app/",
  },
  {
    name: "Employee Manager Dashboard",
    description:
      "An employee management dashboard with CRUD features, image uploads, Redux Toolkit integration, and real-time pie chart updates. Built with React, Bootstrap 5, and deployed on Vercel.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "ReduxToolkit", color: "green-text-gradient" },
      { name: "Bootstrap5", color: "pink-text-gradient" },
    ],
    image: employeeCrud,
    source_code_link: "https://github.com/zid-dotcom/employee-crud",
    live_link: "https://emply-crud.vercel.app/", // ✅ FIXED
  },
  {
    name: "Student Portal",
    description:
      "A responsive student management CRUD app using React and JSON Server with full add/edit/delete/search features. Frontend on Vercel, backend on Render.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "JSON Server", color: "green-text-gradient" },
      { name: "Bootstrap5", color: "pink-text-gradient" },
    ],
    image: studentPortal,
    source_code_link: "https://github.com/zid-dotcom/student-portal",
    live_link: "https://student-portal-orcin-nu.vercel.app/", // ✅ FIXED
  },
  {
    name: "Parallax Website",
    description:
      "A visually attractive parallax scrolling website built with HTML and CSS. Features layered background effects and smooth transitions for an engaging user experience.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Parallax", color: "pink-text-gradient" },
    ],
    image: project3,
    source_code_link: "https://github.com/zid-dotcom/parallax-website",
    live_link: "https://parallax-website-rho-pearl.vercel.app/",
  },
  {
  name: "Project Fare",
  description:
    "A full-stack project management application with secure user authentication using JWT. Users can register, log in, and manage their own projects with add, edit, and update functionality. Built with a responsive UI using Bootstrap 5 and a modern MERN stack architecture.",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "Bootstrap5", color: "pink-text-gradient" },
    { name: "NodeJS", color: "green-text-gradient" },
  ],
  image: project_fare,
  source_code_link: "https://github.com/zid-dotcom/pf-front-updated",
  live_link: "https://pf-front-updated.vercel.app/",
},
{
  name: "Doctor Appointment Booking System",
  
  description:
    "A complete MERN stack doctor appointment booking application with role-based authentication for users, doctors, and admin. Users can register, log in, book appointments, make online payments via Razorpay, and cancel appointments. Admin can manage doctors and appointments, while doctors can view and update their schedules. Built with secure JWT authentication and a responsive UI.",
  tags: [
    { name: "React", color: "blue-text-gradient" },
    { name: "NodeJS", color: "green-text-gradient" },
    { name: "MongoDB", color: "pink-text-gradient" },
    { name: "JWT", color: "orange-text-gradient" },
    { name: "Razorpay", color: "purple-text-gradient" },
  ],
  image: appointment_booking,
  source_code_link: "https://github.com/zid-dotcom/Appointment_booking_frontend",
  live_link: "https://appointment-booking-frontend-e2bz.vercel.app/",
}


];




