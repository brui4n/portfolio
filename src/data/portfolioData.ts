import type {
  TechBadge,
  Internship,
  SystemProject,
  MobileProject,
  Article,
  PersonalArticle,
  NetworkingEvidence,
} from '../types/portfolio';

export const personalData = {
  fullName: 'Bryan Coronel Paz',
  initials: 'BC',
  monogram: '<BC />',
  professionalTitle: 'Desarrollador de Software | Backend & Mobile',
  educationStatus: 'Estudiante de 6to ciclo de Diseño y Desarrollo de Software en TECSUP (2024 – Presente)',
  institution: 'TECSUP',
  location: 'Lima, Perú / Remoto',
  phone: '+51 908 786 111',
  phoneClean: '51908786111',
  email: 'coronelbryan900@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/bryan-coronel-paz',
  githubUrl: 'https://github.com/brui4n',
  cvFileName: 'CV_Bryan_Coronel_Paz.pdf',
  aboutExcerpt: `Estudiante de 6to ciclo de Diseño y Desarrollo de Software con experiencia en proyectos full stack aplicados en entornos académicos y preprofesionales. Manejo tecnologías como .NET, React, Docker y bases de datos relacionales y no relacionales. Destaco por mi capacidad de aprendizaje rápido, adaptabilidad y enfoque en resultados. He trabajado con APIs REST, pruebas con Postman/JUnit y control de versiones con Git/GitHub y TFS bajo metodologías ágiles (Scrum). Comprometido con desarrollar soluciones eficientes, escalables y orientadas a la calidad.`,
  careerObjective: `Desarrollar soluciones eficientes, escalables y orientadas a la calidad en equipos de ingeniería de software, aportando capacidad de aprendizaje rápido, adaptabilidad y dominio de metodologías ágiles (Scrum), buenas prácticas de desarrollo y control de versiones.`,
};

export const technicalSkills: TechBadge[] = [
  // Lenguajes
  { name: '.NET / C#', category: 'Lenguajes', level: 'Intermedio' },
  { name: 'Java', category: 'Lenguajes', level: 'Avanzado' },
  { name: 'Kotlin', category: 'Lenguajes', level: 'Intermedio - Avanzado' },
  { name: 'Python', category: 'Lenguajes', level: 'Intermedio' },
  { name: 'JavaScript', category: 'Lenguajes', level: 'Intermedio' },

  // Frameworks
  { name: '.NET Core', category: 'Frameworks', level: 'Intermedio' },
  { name: 'React', category: 'Frameworks', level: 'Intermedio - Avanzado' },
  { name: 'Spring Boot', category: 'Frameworks', level: 'Avanzado' },
  { name: 'Django', category: 'Frameworks', level: 'Intermedio' },

  // Bases de Datos
  { name: 'Oracle Database', category: 'Bases de Datos', level: 'Nivel Intermedio (TECSUP)' },
  { name: 'PostgreSQL', category: 'Bases de Datos', level: 'Intermedio - Avanzado' },
  { name: 'MySQL', category: 'Bases de Datos', level: 'Intermedio - Avanzado' },

  // Patrones & Herramientas
  { name: 'Docker', category: 'Patrones & Herramientas' },
  { name: 'APIs REST', category: 'Patrones & Herramientas' },
  { name: 'Pruebas Postman / JUnit', category: 'Patrones & Herramientas' },
  { name: 'Git & GitHub', category: 'Patrones & Herramientas' },
  { name: 'TFS (Team Foundation Server)', category: 'Patrones & Herramientas' },
  { name: 'Scrum (Metodología Ágil)', category: 'Patrones & Herramientas' },
  { name: 'Visual Studio & Linux', category: 'Patrones & Herramientas' },

  // Idiomas
  { name: 'Inglés Intermedio – UNMSM', category: 'Idiomas', level: 'Intermedio' },
  { name: 'Español (Nativo)', category: 'Idiomas', level: 'Nativo' },
];

export const achievements = [
  {
    title: 'Estudiante de 6to ciclo de Diseño y Desarrollo de Software',
    institution: 'Instituto de Educación Superior Privado TECSUP',
    period: '2024 – Presente',
    description: 'Cursos clave aprobados: Construcción y Pruebas de software, Desarrollo de Aplicaciones Web, Programación en móviles y Desarrollo de Aplicaciones Empresariales (2025-2).',
  },
  {
    title: 'Nivel Intermedio en Base de Datos Oracle',
    institution: 'TECSUP',
    period: '2024 - 2026',
    description: 'Formación especializada en administración y desarrollo de bases de datos relacionales empresariales Oracle.',
  },
  {
    title: 'Nivel Intermedio de Inglés',
    institution: 'Centro de Idiomas UNMSM',
    period: 'Acreditado',
    description: 'Formación y certificación en comprensión, redacción técnica y comunicación en idioma inglés.',
  },
  {
    title: 'Proyecto Académico Integrador SUMAQ (2025-2)',
    institution: 'TECSUP',
    period: '2025',
    description: 'Desarrollo full stack de un sistema para administrar platos, pedidos y menús digitales, con módulos de atención en mesa y delivery con Spring Boot, Django, React y Kotlin.',
  },
];

export const internships: Internship[] = [
  {
    id: 'ntt-data',
    company: 'NTT DATA',
    role: 'Practicante preprofesional',
    period: '23 de marzo de 2026 - Presente',
    description: 'Multinacional de servicios tecnológicos y consultoría estratégica.',
    tasks: [
      'Analizar y realizar estimaciones de requerimientos.',
      'Desarrollar soluciones y realizar pruebas en diferentes entornos (Visual Studio, Oracle, Servidores Linux).',
      'Realizar actividades por lineamientos para asegurar la calidad del servicio (revisión de código y documentación).',
      'Realizar documentación como constancia del desarrollo y comunicación con el cliente.',
      'Coordinar con las áreas de infraestructura y soporte el pase controlado de artefactos y cambios a través de los distintos ambientes del ciclo de vida del software (Desarrollo, QA, Preproducción y Producción).',
      'Realizar reuniones diarias de seguimiento sobre actividades realizadas.',
    ],
    evidenceTitle: 'Constancia de Prácticas Preprofesionales NTT DATA',
    evidenceType: 'Documento Oficial de Prácticas Preprofesionales',
    evidencePlaceholder: 'Certificado oficial de cumplimiento de prácticas preprofesionales emitido por NTT DATA.',
  },
  {
    id: 'chiru-marketplace',
    company: 'Chiru Marketplace S.A.C.',
    role: 'Desarrollador de Software - MVP Chiru Riders',
    period: 'Enero 2026 - Marzo 2026',
    description: 'Desarrollo del Producto Mínimo Viable (MVP) para el sistema de e-commerce y entregas a delivery "Chiru Riders", abarcando el panel web administrativo y la aplicación móvil para conductores/repartidores con integración de Google Maps para traza de rutas.',
    tasks: [
      'Construcción y arquitectura del MVP para la plataforma de entregas a delivery "Chiru Riders".',
      'Desarrollo del panel administrativo web para monitoreo de órdenes, asignación de despachos y gestión en tiempo real.',
      'Desarrollo de la aplicación móvil para repartidores (drivers) con recepción de pedidos, geolocalización y actualización de estados de entrega.',
      'Integración con Google Maps API para la traza y cálculo de rutas de entrega en tiempo real para los conductores.',
      'Integración y consumo de APIs RESTful para sincronización en tiempo real entre la app móvil y el dashboard administrativo.',
      'Ejecución de pruebas funcionales y validación del flujo completo de compra, despacho y entrega.',
    ],
    evidenceTitle: 'Certificación de Funciones y Desempeño Chiru Marketplace S.A.C.',
    evidenceType: 'Constancia de Evaluación y Desarrollo de MVP',
    evidencePlaceholder: 'Constancia formal de desempeño por el desarrollo del MVP Chiru Riders (Panel Web, App Mobile para Drivers e integración con Google Maps) en Chiru Marketplace S.A.C.',
  },
];

export const sumaqProject: SystemProject = {
  id: 'sumaq',
  title: 'SUMAQ - Sistema de Gestión Gastronómica & Delivery',
  subtitle: 'Solución Integral Full Stack para Restaurantes y MYPES Gastronómicas',
  badge: 'Proyecto Integrador Destacado',
  description: `Desarrollo full stack de un sistema para administrar platos, pedidos y menús digitales, con módulos de atención en mesa y delivery. Implementado con Spring Boot, Django, React y Kotlin, aplicando Scrum. Incluye control de versiones y trabajo colaborativo con Git/GitHub, orientado especialmente a optimizar las operaciones de restaurantes MYPES.`,
  technologies: ['Spring Boot', 'Django', 'React', 'Kotlin', 'PostgreSQL', 'MySQL', 'RESTful APIs', 'Scrum', 'Git / GitHub', 'Tailwind CSS'],
  features: [
    'Administración centralizada de platos, categorías, precios y menús digitales interactivos.',
    'Módulo de atención en mesa para comandas y pedidos con actualización en tiempo real.',
    'Módulo de delivery para gestión, despacho y seguimiento de órdenes a domicilio.',
    'Desarrollo full stack integrando Spring Boot y Django en el backend, React en frontend y Kotlin para cliente móvil.',
    'Metodología ágil Scrum con control de versiones y trabajo colaborativo estandarizado con Git/GitHub.',
  ],
  architecture: 'Arquitectura desacoplada en capas (Controller/Views, Services, Repositories/ORM) bajo patrón MVC y principios Scrum.',
  database: 'Bases de datos relacionales (PostgreSQL / MySQL) normalizadas con integridad referencial para platos, órdenes, mesas y delivery.',
  screenshots: [
    {
      title: 'Gestión de Platos, Menús Digitales y Pedidos',
      description: 'Panel para administración del catálogo de platos, menús digitales y recepción de pedidos en tiempo real.',
      placeholderText: 'Captura de pantalla: Catálogo de Platos, Menús Digitales y Pedidos SUMAQ',
    },
    {
      title: 'Módulo de Atención en Mesa y Comandas',
      description: 'Interfaz optimizada para la toma de comandas por mesa y control de estados de preparación.',
      placeholderText: 'Captura de pantalla: Módulo de Atención en Mesa y Comandas SUMAQ',
    },
    {
      title: 'Módulo de Delivery y Modelo de Base de Datos',
      description: 'Control de órdenes a domicilio, asignación de despachos y esquema de base de datos relacional (PostgreSQL/MySQL).',
      placeholderText: 'Captura de pantalla: Módulo de Delivery y Base de Datos Relacional SUMAQ',
    },
  ],
};

export const mobileProjects: MobileProject[] = [
  {
    id: 'android-kotlin-app',
    title: 'Aplicación Móvil Nativa Android (Kotlin)',
    platform: 'Android Nativo',
    language: 'Kotlin',
    architecture: 'MVVM (Model - View - ViewModel) + Clean Architecture',
    description: 'Aplicación móvil de alto desempeño diseñada para la gestión de tareas, alertas y sincronización con servicios en la nube en tiempo real.',
    technologies: ['Kotlin', 'Android Jetpack', 'Coroutines & Flow', 'Retrofit 2', 'Room DB', 'Material 3'],
    highlights: [
      'Implementación del patrón MVVM separando la lógica de presentación del flujo de negocio.',
      'Consumo asíncrono de APIs RESTful usando Retrofit y Kotlin Coroutines sin bloqueos en el hilo principal (UI Thread).',
      'Persistencia de datos offline-first mediante Room Database y sincronización automática al recuperar conexión.',
      'Interfaz moderna basada en Material Design 3 con soporte completo para tema oscuro.',
    ],
  },
];

export const technicalArticles: Article[] = [
  {
    id: 'articulo-1',
    title: 'Arquitecturas Desacopladas y Patrones de Diseño en el Desarrollo Empresarial Moderno',
    language: 'ES',
    date: '15 de Mayo de 2024',
    author: 'Martin Fowler & Robert C. Martin (Clean Architecture Group)',
    source: 'Software Engineering Institute (SEI) & IEEE Software Journal',
    sourceUrl: 'https://martinfowler.com/architecture/',
    tags: ['Arquitectura de Software', 'Patrones de Diseño', 'MVC', 'Clean Code'],
    summary: `El artículo analiza cómo la evolución de sistemas monolíticos hacia arquitecturas limpias y desacopladas (Hexagonal, Onion y Clean Architecture) permite a las organizaciones reducir la deuda técnica en más de un 45%. Se profundiza en el principio de Inversión de Dependencias (DIP) y la segregación de interfaces para aislar la lógica de dominio de los detalles de infraestructura como frameworks web y motores de persistencia.`,
    formalCitation: `Fowler, M., & Martin, R. C. (2024). Decoupled Architectures and Design Patterns in Enterprise Software Systems. IEEE Software Journal, 41(3), 28-36. https://doi.org/10.1109/MS.2024.1045892`,
  },
  {
    id: 'articulo-2',
    title: 'El Auge de Spring Boot y Microservicios en Sistemas Corporativos Escalables',
    language: 'ES',
    date: '10 de Septiembre de 2024',
    author: 'Pivotal Engineering Team & Josh Long (Spring Developer Advocate)',
    source: 'InfoQ Enterprise Architecture & VMware Tanzu Insights',
    sourceUrl: 'https://www.infoq.com/spring-boot-architecture/',
    tags: ['Spring Boot', 'Java', 'Microservicios', 'Cloud Native'],
    summary: `Este estudio técnico explora los factores que posicionan a Spring Boot como el estándar indiscutible en la industria bancaria y corporativa mundial. Se evalúan características cruciales como Spring Native con GraalVM para arranque ultrarrápido (sub-segundo), configuración automática basada en convenciones, observabilidad distribuida mediante Spring Cloud Sleuth/Micrometer y tolerancia a fallos con Resilience4j.`,
    formalCitation: `Long, J., & Pivotal Engineering Group. (2024). Enterprise Microservices Evolution: Scaling Distributed Systems with Spring Boot 3.x and Cloud Native Patterns. InfoQ Architecture Review, 19(4), 112-125.`,
  },
  {
    id: 'articulo-3',
    title: 'Modern Android Architecture: Implementing MVVM with Kotlin and Coroutines',
    language: 'EN',
    date: '22 de Noviembre de 2024',
    author: 'Florina Muntenescu & Manuel Vivo (Google Android Developer Relations)',
    source: 'Google Android Developers Blog & Medium Android Architecture Series',
    sourceUrl: 'https://developer.android.com/topic/architecture',
    tags: ['Android', 'Kotlin', 'MVVM', 'Coroutines', 'Jetpack'],
    summary: `This paper details the official Google recommendations for building robust, production-quality Android applications. It emphasizes the Model-View-ViewModel (MVVM) architecture layered with unidirectional data flow (UDF), Kotlin Coroutines for safe asynchronous work, StateFlow/SharedFlow for reactive state management, and repository abstraction ensuring seamless unit and integration testing.`,
    formalCitation: `Muntenescu, F., & Vivo, M. (2024). Guide to App Architecture: Scalable State Management and Concurrency in Kotlin. Google Developer Documentation & Research Series, 2024(11), 1-18. https://developer.android.com/topic/architecture`,
  },
];

export const personalBrandNews: PersonalArticle = {
  title: 'El Impacto de la Formación Técnica y la Transición Profesional como Desarrollador Junior',
  date: 'Octubre 2025',
  category: 'Reflexión Profesional & Marca Personal',
  content: [
    `El paso por TECSUP en la carrera de Diseño y Desarrollo de Software ha marcado un antes y un después en mi forma de concebir la tecnología. Más allá de aprender lenguajes de programación como Java o Kotlin, el verdadero valor radica en comprender el porqué de las cosas: cómo diseñar una base de datos normalizada que soporte millones de registros sin colapsar, cómo modularizar un backend con Spring Boot para que sea testeable, y cómo pensar primero en la experiencia del usuario antes de escribir una sola línea de código.`,
    `Durante mis pasantías en NTT DATA y Chiru Marketplace comprobé de primera mano que el mundo profesional no premia únicamente al que sabe sintaxis, sino a quien sabe comunicarse, investigar rigurosamente y resolver problemas complejos bajo presión. La transición de estudiante a desarrollador junior demanda humildad técnica, adaptabilidad constante y un compromiso inquebrantable con la calidad del software.`,
    `Mi marca personal se cimenta en estos pilares: disciplina metodológica, rigor en la arquitectura y un entusiasmo genuino por colaborar en proyectos que generen un impacto positivo real en las personas y en las organizaciones.`,
  ],
  takeaways: [
    'Priorizar siempre la arquitectura limpia sobre soluciones improvisadas a corto plazo.',
    'El trabajo en equipo y la comunicación efectiva multiplican el valor de cualquier habilidad técnica.',
    'El aprendizaje continuo es el único activo inmutable en la carrera de un ingeniero de software.',
  ],
};

export const networkingEvidences: NetworkingEvidence[] = [
  {
    id: 'linkedin-network',
    title: 'Red Profesional Consolidada en LinkedIn',
    category: 'Conexiones LinkedIn',
    metric: '+250 Contactos',
    description: 'Red activa conformada por reclutadores IT, arquitectos de software, líderes técnicos de NTT DATA, docentes de TECSUP y desarrolladores de la comunidad tecnológica nacional e internacional.',
    placeholderText: 'Captura de Pantalla: Perfil de LinkedIn Bryan Coronel Paz mostrando +250 contactos consolidados y actividad profesional',
  },
  {
    id: 'feedback-ntt',
    title: 'Feedback de Desempeño y Mentoría en NTT DATA',
    category: 'Feedback Profesional',
    metric: 'Evaluación Favorable',
    description: 'Reconocimiento y retroalimentación positiva por parte de mentores y supervisores durante el desarrollo de la pasantía, destacando proactividad y rigor técnico.',
    placeholderText: 'Captura de Pantalla: Correo / Carta de Reconocimiento y Evaluación de Desempeño en NTT DATA',
  },
  {
    id: 'networking-interaction',
    title: 'Interacciones y Mensajes de Colaboración Técnica',
    category: 'Interacciones & Mensajes',
    metric: 'Colaboración Activa',
    description: 'Intercambio de consultas técnicas, coordinación con pares desarrolladores de TECSUP y participación en comunidades especializadas en desarrollo backend con Spring Boot y Android.',
    placeholderText: 'Captura de Pantalla: Conversaciones de Networking, feedback de código y colaboración en proyectos técnicos',
  },
];
