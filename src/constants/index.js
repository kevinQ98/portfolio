import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  c_logo,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "acerca",
    title: "Acerca De",
  },
  {
    id: "proyectos",
    title: "Proyectos",
  },
  {
    id: "contacto",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Ingeniería de Software",
    icon: web,
  },
  {
    title: "Desarrollo de Aplicaciones Web, Móvil y Escritorio",
    icon: mobile,
  },
  {
    title: "Soporte Técnico",
    icon: creator,
  },
  {
    title: "Creación de Contenido",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: c_logo,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Desarrollador Junior",
    company_name: "",
    icon: starbucks,
    iconBg: "#b2bec3",
    date: "2018-2019",
    points: [
      "Proyectos de aplicaciones de escritorio utilizando Java y NetBeans, así como aplicaciones web con HTML, CSS, JavaScript.",
    ],
  },
  {
    title: "Desarrollador Web",
    company_name: "",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "2019-2020",
    points: [
      "Proyectos de desarrollo de sitios web con HTML, CSS, JavaScript y ReactJS.",
      "Desarrollo de una aplicación en React para buscar películas utilizando la API themoviedb.",
    ],
  },
  {
    title: "Desarrollador de aplicaciones web y móviles",
    company_name: "",
    icon: shopify,
    iconBg: "#b2bec3",
    date: "2021-2022",
    points: [
      "Desarrollador de aplicaciones web y móviles con NodeJS y bases de datos como MongoDB y MySQL.",
      "Desarrollo de una API de noticias de Ecuador en NodeJS utilizando 7 periódicos reconocidos en el país Ecuador.",
      "Desarrollo de una aplicación en la nube llamada 'Becuador' para el seguimiento de pequeñas empresas, controlando recibos, clientes y productos.",
    ],
  },
  {
    title: "Ingeniero de Software",
    company_name: "",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023 - Presente",
    points: [
      "Tuve la oportunidad de aplicar mis habilidades y conocimientos en el desarrollo de mi proyecto de tesis en la universidad.",
      "En este proyecto, me propuse crear un motor de generación de código basado en modelos, utilizando la plataforma NodeJS y la herramienta Obeo Designer.",
      "Este proyecto no solo me permitió aplicar mis habilidades de programación y diseño, sino que también me permitió desarrollar mi capacidad de investigación y análisis de requisitos.",
      "Fue una experiencia desafiante pero gratificante, que me permitió poner en práctica todo lo que había aprendido hasta el momento y que contribuyó significativamente a mi formación como ingeniero de software.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "El equipo de desarrollo creó una página increíblemente rápida y hermosa para mi negocio. ¡Gracias!",
    name: "Sofía González",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Gracias al soporte técnico que recibí, pude solucionar los problemas de mi computadora en poco tiempo!",
    name: "Javier Gutiérrez",
    designation: "",
    company: " ",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "BytePulse creó una base de datos MySQL para mi proyecto de investigación y estoy muy impresionado con la calidad del servicio.",
    name: "Ana Pérez",
    designation: "",
    company: "",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Becuador",
    description:
      "Becuador es una aplicación web en la nube que te permite tener el control de tu pequeña empresa, gestionando tus facturas, clientes y productos de manera eficiente",
    tags: [
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "white-text-gradient",
      },
      {
        name: "Bootstrap 5",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kevinQ98/Becuador",
  },
  {
    name: "BuscaPelis",
    description:
      "Descubre el mundo del cine con nuestra aplicación en React, que te permite explorar y descubrir películas a través de la potente API de The Movie Database",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "themoviedb",
        color: "white-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://kevinq98.github.io/BuscaPelis/",
  },
  {
    name: "Página web Jocequin",
    description:
      "Ahora, los clientes pueden fácilmente explorar y comprar productos de la imprenta en línea, mientras que la página ofrece una experiencia de usuario intuitiva y atractiva",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://jocequin.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
