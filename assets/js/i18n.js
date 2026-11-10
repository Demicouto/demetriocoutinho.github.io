// ========================================
// Sistema de Internacionalização (i18n)
// ========================================

const translations = {
    'pt-BR': {
        // Navbar
        'nav.about': 'Sobre',
        'nav.technologies': 'Tecnologias',
        'nav.projects': 'Projetos',
        'nav.experience': 'Experiência',
        'nav.blog': 'Artigos',
        'nav.contact': 'Contato',
        'blog.loading': 'Carregando conteúdo...',
        'blog.fetching': 'Buscando artigos...',
        'blog.latestTitle': 'Últimos Artigos',
        'blog.latestSubtitle': 'Os artigos mais recentes sobre estudos, projetos e aprendizados da minha jornada em software.',
        'blog.readPost': 'Ler artigo',
        'blog.viewAll': 'Ver todos os artigos',
        'blog.showMore': 'Ver Mais Artigos',
        'blog.showLess': 'Ver Menos',
        
        // Hero Section
        'hero.name': 'Demétrio Coutinho',
        'hero.title': 'Engenharia de Software | Full Stack Developer',
        'hero.description': 'Desenvolvedor apaixonado por criar soluções robustas com Java e NestJS.',
        'hero.viewProjects': 'Ver Projetos',
        'hero.contact': 'Entrar em Contato',
        
        // About Section
        'about.title': 'Sobre Mim',
        'about.p1': 'Atualmente cursando o quinto período de Engenharia de Software, minha trajetória é marcada pela disciplina e pela busca constante por excelência.',
        'about.universityDesc': 'Eng. Software (2028)',
        'about.certificates': 'Certificados & Cursos',
        'about.viewCertificates': 'Ver Lista Completa',
        'about.englishLevel': 'INGLÊS INTERMEDIÁRIO (B2)',
        'about.degree': 'BACHARELADO ENG. SOFTWARE',
        
        // Tech Stack Section
        'tech.title': 'Stack Tecnológico',
        'tech.subtitle': 'Ferramentas que utilizo no dia a dia. Passe o mouse para saber mais.',
        'tech.showMore': 'Ver Mais Tecnologias',
        'tech.showLess': 'Ver Menos',
        'tech.divider': 'Aprendendo Agora',
        'tech.postgresql': 'Sistema de gerenciamento de banco de dados relacional.',
        'tech.nextjs': 'Framework para desenvolvimento de aplicações React server-side.',
        'tech.react': 'Biblioteca JavaScript para construir interfaces de usuário reativas.',
        'tech.angular': 'Framework front-end para aplicações web robustas (em estudo).',
        'tech.java': 'Linguagem robusta para sistemas backend corporativos.',
        'tech.javascript': 'Interatividade no frontend e lógica no backend.',
        'tech.nodejs': 'Ambiente de execução JavaScript para APIs e aplicações backend escaláveis.',
        'tech.python': 'Linguagem versátil para automação, análise de dados e desenvolvimento backend.',
        'tech.html': 'Estrutura semântica e estilização e layout responsivo para aplicações web.',
        'tech.sql': 'Modelagem e consulta eficiente de bancos de dados.',
        'tech.git': 'Controle de versão e colaboração em equipe.',
        'tech.docker': 'Containerização para ambientes de deploy consistentes.',
        'tech.spring': 'Framework Spring Boot para desenvolvimento de microserviços e APIs REST.',
        'tech.security': 'Proteção de dados, vulnerabilidades e OWASP.',
        'tech.ai': 'Integração de modelos de IA e execução de inferências.',
        'tech.agile': 'Metodologias ágeis (Scrum/Kanban) para projetos.',
        
        
        // Other Projects
        'projects.title': 'Projetos',
        'projects.showMore': 'Ver Mais Projetos',
        'projects.showLess': 'Ver Menos',
        'projects.almanaque.title': 'Almanaque',
        'projects.almanaque.description': 'Um sistema de gerenciamento de biblioteca desenvolvido em Java (CLI) com persistência de dados no PostgreSQL. O projeto segue boas práticas de arquitetura em camadas e utiliza o padrão MVC (Model, View e Controller).',
        'projects.petPrime.title': 'Pet-Prime',
        'projects.petPrime.description': 'Um sistema de terminal em Java puro para gestão de um PetShop completo, com funcionalidades voltadas para controle de funcionários, produtos, atendimentos e serviços veterinários. Ênfase no aprendizado de programação orientada a objetos.',
        'projects.BibSync.title': 'BibSync',
        'projects.BibSync.description': 'O BibSync é uma ferramenta desenvolvida em Java (JDK 25) para importação, análise e busca em bases bibliográficas .bib provenientes de repositórios científicos como IEEE e MDPI. foi desenvolvido utilizando padrões clássicos de engenharia de software, garantindo modularidade e extensibilidade.',
        'projects.marieclaire.title': 'Marie Claire Doceria',
        'projects.marieclaire.description': 'Sistema full-stack para catálogo, carrinho, checkout autenticado e gestão administrativa de uma doceria, com foco em pedidos pelo WhatsApp e controle operacional.',
        
        // Experience Section
        'experience.title': 'Experiência Profissional e Acadêmica',
        'experience.current': 'Atual',

        
        // Footer
        'footer.title': 'Vamos conversar?',
        'footer.description': 'Estou aberto a oportunidades em desenvolvimento web (Backend/Fullstack).',
        'footer.sendEmail': 'Enviar Email',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': 'Código do site',
        'footer.copyright': '© 2026 Demétrio Coutinho - All Rights Reserved',
        
        // Contact Modal
        'contact.title': 'Enviar Mensagem',
        'contact.emailLabel': 'Seu Email',
        'contact.emailPlaceholder': 'nome@exemplo.com',
        'contact.messageLabel': 'Mensagem',
        'contact.messagePlaceholder': 'Como posso ajudar?',
        'contact.sendButton': 'Enviar Agora',
        'contact.successTitle': 'Mensagem Enviada!',
        'contact.successMessage': 'Obrigado pelo contato. Retornarei em breve.',
        'contact.errorTitle': 'Erro ao enviar',
        'contact.errorMessage': 'Houve um problema. Tente novamente ou use meu email direto.',
        'contact.tryAgain': 'Tentar Novamente',
        'contact.close': 'Fechar',
        
        // Certificates Modal
        'certs.title': 'Certificados & Cursos',
        'certs.facepe': 'Programa de Formação tecnologias 4.0: Soluções com IA.',
        'certs.facepe.org': 'ESCOLA POLITÉCNICA DA UNIVERSIDADE DE PERNAMBUCO',
        'certs.efset': 'Certificado EF SET',
        'certs.efset.org': 'EF Standard English Test',
        'certs.info': 'Clique no ícone para visualizar o certificado',
        
        // Mobile Menu
        'mobile.menu': 'Menu',
        'mobile.navigation': 'Navegação',
        'mobile.contactButton': 'Vamos conversar',
        'mobile.language': 'Idioma',
        
        // Tooltips
        'tooltip.university': 'Universidade de Pernambuco',
        'tooltip.englishLevel': 'Nível intermediário de inglês. Sendo capaz de compreender textos complexos e me comunicar em alguns contextos.',
        'tooltip.degree': 'Cursando o 5º período da faculdade de Engenharia de Software na UPE',
        'tooltip.viewCertificate': 'Clique no ícone para visualizar o certificado',
    },
    
    'en': {
        // Navbar
        'nav.about': 'About',
        'nav.technologies': 'Technologies',
        'nav.projects': 'Projects',
        'nav.experience': 'Experience',
        'nav.blog': 'Articles',
        'nav.contact': 'Contact',
        'blog.loading': 'Loading content...',
        'blog.fetching': 'Fetching articles...',
        'blog.latestTitle': 'Latest Articles',
        'blog.latestSubtitle': 'The newest posts about studies, projects, and lessons from my software journey.',
        'blog.readPost': 'Read article',
        'blog.viewAll': 'View all articles',
        'blog.showMore': 'Show More Articles',
        'blog.showLess': 'Show Less',
        
        // Hero Section
        'hero.name': 'Demétrio Coutinho',
        'hero.title': 'Software Engineering | Full Stack Developer',
        'hero.description': 'Developer passionate about creating robust solutions with Java and NestJS.',
        'hero.viewProjects': 'View Projects',
        'hero.contact': 'Get in Touch',
        
        // About Section
        'about.title': 'About Me',
        'about.p1': 'Currently in my fifth term of Software Engineering, my journey is marked by discipline and the constant pursuit of excellence.',
        'about.university': 'UPE',
        'about.universityDesc': 'Software Eng. (2028)',
        'about.certificates': 'Certificates & Courses',
        'about.viewCertificates': 'View Full List',
        'about.englishLevel': 'INTERMEDIATE ENGLISH (B2)',
        'about.degree': 'SOFTWARE ENG. BACHELOR',
        
        // Tech Stack Section
        'tech.title': 'Tech Stack',
        'tech.subtitle': 'Tools I use on a daily basis. Hover to learn more.',
        'tech.showMore': 'Show More Technologies',
        'tech.showLess': 'Show Less',
        'tech.divider': 'Currently Learning',
        'tech.java': 'Robust language for corporate backend systems.',
        'tech.javascript': 'Frontend interactivity and backend logic.',
        'tech.nodejs': 'JavaScript runtime for APIs and scalable backend applications.',
        'tech.python': 'Versatile language for automation, data analysis, and backend development.',
        'tech.react': 'JavaScript library for building reactive user interfaces.',
        'tech.angular': 'Front-end framework for building robust web applications (learning).',
        'tech.html': 'Semantic structure and responsive visual styling.',
        'tech.sql': 'Efficient database modeling and querying.',
        'tech.git': 'Version control and team collaboration.',
        'tech.docker': 'Containerization for consistent deployment environments.',
        'tech.spring': 'Spring Boot framework for building microservices and REST APIs.',
        'tech.security': 'Data protection, vulnerabilities, and OWASP.',
        'tech.ai': 'AI model integration and inference execution.',
        'tech.agile': 'Agile methodologies (Scrum/Kanban) for projects.',

        // Other Projects
        'projects.title': 'Projects',
        'projects.showMore': 'Show More Projects',
        'projects.showLess': 'Show Less',
        'projects.almanaque.title': 'Almanaque',
        'projects.almanaque.description': 'Library management system developed in Java (CLI) with PostgreSQL data persistence. The project follows layered architecture best practices and uses the MVC pattern.',
        'projects.petPrime.title': 'Pet-Prime',
        'projects.petPrime.description': 'Pure Java terminal system for managing a complete PetShop, with features for employee, product, service, and veterinary management. Focus on learning object-oriented programming.',
        'projects.BibSync.title': 'BibSync',
        'projects.BibSync.description': 'Tool developed in Java (JDK 25) for importing, analyzing, and searching bibliographic .bib databases from scientific repositories like IEEE and MDPI. Developed using classic software engineering patterns, ensuring modularity and extensibility.',
        'projects.marieclaire.title': 'Marie Claire Doceria',
        'projects.marieclaire.description': 'Full-stack system for a bakery catalog, cart, authenticated checkout, and admin management, with focus on WhatsApp orders and operational control.',
        
        // Experience Section
        'experience.title': 'Professional and Academic Experience',
        'experience.current': 'Current',
        
        // Footer
        'footer.title': 'Let\'s talk?',
        'footer.description': 'I am open to opportunities in web development (Backend/Fullstack).',
        'footer.sendEmail': 'Send Email',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': 'Site source code',
        'footer.copyright': '© 2026 Demétrio Coutinho - All Rights Reserved',
        
        // Contact Modal
        'contact.title': 'Send Message',
        'contact.emailLabel': 'Your Email',
        'contact.emailPlaceholder': 'name@example.com',
        'contact.messageLabel': 'Message',
        'contact.messagePlaceholder': 'How can I help?',
        'contact.sendButton': 'Send Now',
        'contact.successTitle': 'Message Sent!',
        'contact.successMessage': 'Thank you for contacting me. I will get back to you soon.',
        'contact.errorTitle': 'Error sending',
        'contact.errorMessage': 'There was a problem. Please try again or use my direct email.',
        'contact.tryAgain': 'Try Again',
        'contact.close': 'Close',
        
        // Certificates Modal
        'certs.title': 'Certificates & Courses',
        'certs.facepe': 'Technology Training Program 4.0: AI Solutions.',
        'certs.facepe.org': 'POLYTECHNIC SCHOOL OF PERNAMBUCO UNIVERSITY',
        'certs.efset': 'EF SET Certificate',
        'certs.efset.org': 'EF Standard English Test',
        'certs.info': 'Click the icon to view the certificate',
        
        // Mobile Menu
        'mobile.menu': 'Menu',
        'mobile.navigation': 'Navigation',
        'mobile.contactButton': 'Let\'s talk',
        'mobile.language': 'Language',
        
        // Tooltips
        'tooltip.university': 'UPE - Universidade de Pernambuco',
        'tooltip.englishLevel': 'Intermediate English level according to the Common European Framework of Reference for Languages',
        'tooltip.degree': 'Currently in the 5th term of Software Engineering at UPE',
        'tooltip.viewCertificate': 'Click the icon to view the certificate',
    },
    
    'es': {
        // Navbar
        'nav.about': 'Sobre Mí',
        'nav.technologies': 'Tecnologías',
        'nav.projects': 'Proyectos',
        'nav.experience': 'Experiencia',
        'nav.blog': 'Artículos',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.name': 'Demétrio Coutinho',
        'hero.title': 'Ingeniería de Software | Desarrollador Full Stack',
        'hero.description': 'Desarrollador apasionado por crear soluciones robustas con Java y NestJS.',
        'hero.viewProjects': 'Ver Proyectos',
        'hero.contact': 'Ponerse en Contacto',
        
        // About Section
        'about.title': 'Sobre Mí',
        'about.p1': 'Actualmente cursando el quinto período de Ingeniería de Software, mi trayectoria está marcada por la disciplina y la búsqueda constante de excelencia.',
        'about.university': 'UPE',
        'about.universityDesc': 'Ing. Software (2028)',
        'about.certificates': 'Certificados y Cursos',
        'about.viewCertificates': 'Ver Lista Completa',
        'about.englishLevel': 'INGLÉS INTERMEDIO (B2)',
        'about.degree': 'LICENCIATURA ING. SOFTWARE',
        
        // Tech Stack Section
        'tech.title': 'Stack Tecnológico',
        'tech.subtitle': 'Herramientas que uso a diario. Pasa el cursor para saber más.',
        'tech.showMore': 'Ver Más Tecnologías',
        'tech.showLess': 'Ver Menos',
        'tech.divider': 'Aprendiendo Ahora',
        'tech.java': 'Lenguaje robusto para sistemas backend corporativos.',
        'tech.javascript': 'Interactividad en frontend y lógica en backend.',
        'tech.nodejs': 'Entorno de ejecución de JavaScript para APIs y aplicaciones backend escalables.',
        'tech.python': 'Lenguaje versátil para automatización, análisis de datos y desarrollo backend.',
        'tech.react': 'Biblioteca JavaScript para construir interfaces de usuario reactivas.',
        'tech.angular': 'Framework front-end para construir aplicaciones web robustas (estudiando).',
        'tech.html': 'Estructura semántica y estilización visual responsiva.',
        'tech.sql': 'Modelado y consulta eficiente de bases de datos.',
        'tech.git': 'Control de versiones y colaboración en equipo.',
        'tech.docker': 'Contenedorización para entornos de despliegue consistentes.',
        'tech.security': 'Protección de datos, vulnerabilidades y OWASP.',
        'tech.ai': 'Integración de modelos de IA y ejecución de inferencias.',
        'tech.agile': 'Metodologías ágiles (Scrum/Kanban) para proyectos.',
        'tech.spring': 'Framework Spring Boot para el desarrollo de microservicios y APIs REST.',

        // Other Projects
        'projects.title': 'Proyectos',
        'projects.showMore': 'Ver Más Proyectos',
        'projects.showLess': 'Ver Menos',
        'projects.almanaque.title': 'Almanaque',
        'projects.almanaque.description': 'Sistema de gestión de biblioteca desarrollado en Java (CLI) con persistencia de datos en PostgreSQL. El proyecto sigue buenas prácticas de arquitectura en capas y utiliza el patrón MVC.',
        'projects.petPrime.title': 'Pet-Prime',
        'projects.petPrime.description': 'Sistema de terminal en Java puro para la gestión completa de una PetShop, con funcionalidades para el control de empleados, productos, servicios y gestión veterinaria. Énfasis en el aprendizaje de programación orientada a objetos.',
        'projects.BibSync.title': 'BibSync',
        'projects.BibSync.description': 'Herramienta desarrollada en Java (JDK 25) para importación, análisis y búsqueda en bases de datos bibliográficas .bib de repositorios científicos como IEEE y MDPI. Desarrollado utilizando patrones clásicos de ingeniería de software, garantizando modularidad y extensibilidad.',
        'projects.marieclaire.title': 'Marie Claire Doceria',
        'projects.marieclaire.description': 'Sistema full-stack para catálogo, carrito, checkout autenticado y gestión administrativa de una docería, con foco en pedidos por WhatsApp y control operativo.',
        
        // Experience Section
        'experience.title': 'Experiencia Profesional y Académica',
        'experience.current': 'Actual',
        
        // Footer
        'footer.title': '¿Hablamos?',
        'footer.description': 'Estoy abierto a oportunidades en desarrollo web (Backend/Fullstack).',
        'footer.sendEmail': 'Enviar Email',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': 'Código del sitio',
        'footer.copyright': '© 2026 Demétrio Coutinho - All Rights Reserved',
        
        // Contact Modal
        'contact.title': 'Enviar Mensaje',
        'contact.emailLabel': 'Tu Email',
        'contact.emailPlaceholder': 'nombre@ejemplo.com',
        'contact.messageLabel': 'Mensaje',
        'contact.messagePlaceholder': '¿Cómo puedo ayudarte?',
        'contact.sendButton': 'Enviar Ahora',
        'contact.successTitle': '¡Mensaje Enviado!',
        'contact.successMessage': 'Gracias por contactar. Te responderé pronto.',
        'contact.errorTitle': 'Error al enviar',
        'contact.errorMessage': 'Hubo un problema. Inténtalo de nuevo o usa mi email directo.',
        'contact.tryAgain': 'Intentar de Nuevo',
        'contact.close': 'Cerrar',
        
        // Certificates Modal
        'certs.title': 'Certificados y Cursos',
        'certs.facepe': 'Programa de Formación tecnologías 4.0: Soluciones con IA.',
        'certs.facepe.org': 'ESCUELA POLITÉCNICA DE LA UNIVERSIDAD DE PERNAMBUCO',
        'certs.efset': 'Certificado EF SET',
        'certs.efset.org': 'EF Standard English Test',
        'certs.info': 'Haz clic en el icono para ver el certificado',
        
        // Mobile Menu
        'mobile.menu': 'Menú',
        'mobile.navigation': 'Navegación',
        'mobile.contactButton': 'Hablemos',
        'mobile.language': 'Idioma',
        
        // Tooltips
        'tooltip.university': 'UPE - Universidade de Pernambuco',
        'tooltip.englishLevel': 'Nivel intermedio de inglés según el Marco Común Europeo de Referencia para las Lenguas',
        'tooltip.degree': 'Cursando actualmente el 5to período de Ingeniería de Software en UPE',
        'tooltip.viewCertificate': 'Haz clic en el icono para ver el certificado',
    },
    
    'zh': {
        // Navbar
        'nav.about': '关于',
        'nav.technologies': '技术',
        'nav.projects': '项目',
        'nav.experience': '经验',
        'nav.blog': '文章',
        'nav.contact': '联系',
        
        // Hero Section
        'hero.name': 'Demétrio Coutinho',
        'hero.title': '软件工程 | 全栈开发者',
        'hero.description': '热衷于使用 Java 和 NestJS 创建强大解决方案的开发者。',
        'hero.viewProjects': '查看项目',
        'hero.contact': '联系我',
        
        // About Section
        'about.title': '关于我',
        'about.p1': '目前正在攻读软件工程第五学期，我的旅程以纪律和对卓越的不断追求为特征。',
        'about.university': 'UPE',
        'about.universityDesc': '软件工程 (2028)',
        'about.certificates': '证书与课程',
        'about.viewCertificates': '查看完整列表',
        'about.englishLevel': '中级英语 (B2)',
        'about.degree': '软件工程学士',
        
        // Tech Stack Section
        'tech.title': '技术栈',
        'tech.subtitle': '我日常使用的工具。悬停以了解更多。',
        'tech.showMore': '查看更多技术',
        'tech.showLess': '收起',
        'tech.divider': '正在学习',
        'tech.java': '用于企业后端系统的强大语言。',
        'tech.javascript': '前端交互和后端逻辑。',
        'tech.nodejs': '用于 API 和可扩展后端应用的 JavaScript 运行时。',
        'tech.python': '适用于自动化、数据分析和后端开发的多功能语言。',
        'tech.react': '用于构建响应式用户界面的 JavaScript 库。',
        'tech.angular': '用于构建强大 Web 应用的前端框架（学习中）。',
        'tech.html': '语义结构和响应式视觉样式。',
        'tech.sql': '高效的数据库建模和查询。',
        'tech.git': '版本控制和团队协作。',
        'tech.docker': '容器化以获得一致的部署环境。',
        'tech.security': '数据保护、漏洞和 OWASP。',
        'tech.ai': '人工智能模型集成与推理执行。',
        'tech.agile': '项目的敏捷方法论（Scrum/Kanban）。',
        'tech.spring': '用于构建微服务和 REST API 的 Spring Boot 框架。',

        // Other Projects
        'projects.title': '项目',
        'projects.showMore': '查看更多项目',
        'projects.showLess': '收起',
        'projects.almanaque.title': 'Almanaque',
        'projects.almanaque.description': '使用 Java (CLI) 开发的图书馆管理系统，具有 PostgreSQL 数据持久化。该项目遵循分层架构最佳实践并使用 MVC 模式。',
        'projects.petPrime.title': 'Pet-Prime',
        'projects.petPrime.description': '用纯 Java 编写的终端系统，用于管理完整的宠物店，具有员工、产品、服务和兽医管理功能。重点放在学习面向对象编程。',
        'projects.BibSync.title': 'BibSync',
        'projects.BibSync.description': '使用 Java (JDK 25) 开发的工具，用于从 IEEE 和 MDPI 等科学存储库导入、分析和搜索书目 .bib 数据库。使用经典软件工程模式开发，确保模块化和可扩展性。',
        'projects.marieclaire.title': 'Marie Claire Doceria',
        'projects.marieclaire.description': '用于甜品店目录、购物车、认证结账和后台管理的全栈系统，重点支持 WhatsApp 下单和运营控制。',
        
        // Experience Section
        'experience.title': '职业与学术经历',
        'experience.current': '当前',
        
        // Footer
        'footer.title': '让我们谈谈？',
        'footer.description': '我愿意接受 Web 开发（后端/全栈）方面的机会。',
        'footer.sendEmail': '发送电子邮件',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': '网站源码',
        'footer.copyright': '© 2026 Demétrio Coutinho - All Rights Reserved',
        
        // Contact Modal
        'contact.title': '发送消息',
        'contact.emailLabel': '您的电子邮件',
        'contact.emailPlaceholder': 'name@example.com',
        'contact.messageLabel': '消息',
        'contact.messagePlaceholder': '我能帮您什么？',
        'contact.sendButton': '立即发送',
        'contact.successTitle': '消息已发送！',
        'contact.successMessage': '感谢您的联系。我会尽快回复您。',
        'contact.errorTitle': '发送错误',
        'contact.errorMessage': '出现问题。请重试或使用我的直接电子邮件。',
        'contact.tryAgain': '重试',
        'contact.close': '关闭',
        
        // Certificates Modal
        'certs.title': '证书与课程',
        'certs.facepe': '技术培训计划 4.0：人工智能解决方案。',
        'certs.facepe.org': '伯南布哥大学理工学院',
        'certs.efset': 'EF SET 证书',
        'certs.efset.org': 'EF 标准英语测试',
        'certs.info': '点击图标查看证书',
        
        // Mobile Menu
        'mobile.menu': '菜单',
        'mobile.navigation': '导航',
        'mobile.contactButton': '让我们谈谈',
        'mobile.language': '语言',
        
        // Tooltips
        'tooltip.university': 'UPE - 伯南布哥大学',
        'tooltip.englishLevel': '根据欧洲语言共同参考框架的中级英语水平',
        'tooltip.degree': '目前在 UPE 就读软件工程第五学期',
        'tooltip.viewCertificate': '点击图标查看证书',
    },
    
    'de': {
        // Navbar
        'nav.about': 'Über',
        'nav.technologies': 'Technologien',
        'nav.projects': 'Projekte',
        'nav.experience': 'Erfahrung',
        'nav.blog': 'Artikel',
        'nav.contact': 'Kontakt',
        
        // Hero Section
        'hero.name': 'Demétrio Coutinho',
        'hero.title': 'Software-Engineering | Full-Stack-Entwickler',
        'hero.description': 'Entwickler mit Leidenschaft für robuste Lösungen mit Java und NestJS.',
        'hero.viewProjects': 'Projekte ansehen',
        'hero.contact': 'Kontakt aufnehmen',
        
        // About Section
        'about.title': 'Über mich',
        'about.p1': 'Ich befinde mich derzeit im fünften Semester des Software-Engineerings, und mein Weg ist geprägt von Disziplin und dem ständigen Streben nach Exzellenz.',
        'about.university': 'UPE',
        'about.universityDesc': 'Software-Eng. (2028)',
        'about.certificates': 'Zertifikate & Kurse',
        'about.viewCertificates': 'Vollständige Liste anzeigen',
        'about.englishLevel': 'MITTLERES ENGLISCH (B2)',
        'about.degree': 'SOFTWARE-ENG. BACHELOR',
        
        // Tech Stack Section
        'tech.title': 'Tech-Stack',
        'tech.subtitle': 'Tools, die ich täglich verwende. Fahren Sie mit der Maus darüber, um mehr zu erfahren.',
        'tech.showMore': 'Mehr Technologien anzeigen',
        'tech.showLess': 'Weniger anzeigen',
        'tech.divider': 'Derzeit lerne ich',
        'tech.java': 'Robuste Sprache für Unternehmens-Backend-Systeme.',
        'tech.javascript': 'Frontend-Interaktivität und Backend-Logik.',
        'tech.nodejs': 'JavaScript-Laufzeitumgebung für APIs und skalierbare Backend-Anwendungen.',
        'tech.python': 'Vielseitige Sprache für Automatisierung, Datenanalyse und Backend-Entwicklung.',
        'tech.react': 'JavaScript-Bibliothek zum Erstellen reaktiver Benutzeroberflächen.',
        'tech.angular': 'Frontend-Framework zum Erstellen robuster Webanwendungen (lernend).',
        'tech.html': 'Semantische Struktur und responsives visuelles Styling.',
        'tech.sql': 'Effiziente Datenbankmodellierung und -abfrage.',
        'tech.git': 'Versionskontrolle und Teamzusammenarbeit.',
        'tech.docker': 'Containerisierung für konsistente Bereitstellungsumgebungen.',
        'tech.security': 'Datenschutz, Schwachstellen und OWASP.',
        'tech.ai': 'Integration von KI-Modellen und Ausführung von Inferenzen.',
        'tech.agile': 'Agile Methoden (Scrum/Kanban) für Projekte.',

            'tech.spring': 'Spring Boot Framework zum Erstellen von Microservices und REST-APIs.',
        'projects.title': 'Projekte',
        'projects.showMore': 'Mehr Projekte anzeigen',
            'tech.agile': 'Agile Methoden (Scrum/Kanban) zum Erstellen robuster Webanwendungen.',
        'projects.almanaque.title': 'Almanaque',
        'projects.almanaque.description': 'Bibliotheksverwaltungssystem, das in Java (CLI) mit PostgreSQL-Datenpersistenz entwickelt wurde. Das Projekt folgt Best Practices für mehrschichtige Architektur und verwendet das MVC-Muster.',
        'projects.petPrime.title': 'Pet-Prime',
        'projects.petPrime.description': 'Reines Java-Terminalsystem zur Verwaltung einer kompletten Tierpflege mit Funktionen für Mitarbeiter-, Produkt-, Service- und Veterinärverwaltung. Fokus auf das Erlernen der objektorientierten Programmierung.',
        'projects.BibSync.title': 'BibSync',
        'projects.BibSync.description': 'Mit Java (JDK 25) entwickeltes Tool zum Importieren, Analysieren und Suchen in bibliografischen .bib-Datenbanken aus wissenschaftlichen Repositorys wie IEEE und MDPI. Entwickelt mit klassischen Software-Engineering-Mustern und gewährleistet Modularität und Erweiterbarkeit.',
        'projects.marieclaire.title': 'Marie Claire Doceria',
        'projects.marieclaire.description': 'Full-Stack-System für Katalog, Warenkorb, authentifizierten Checkout und Verwaltungsfunktionen einer Konditorei mit Fokus auf WhatsApp-Bestellungen und operative Steuerung.',
        
        // Experience Section
        'experience.title': 'Berufliche und akademische Erfahrung',
        'experience.current': 'Aktuell',
        
        // Footer
        'footer.title': 'Lass uns reden?',
        'footer.description': 'Ich bin offen für Möglichkeiten in der Webentwicklung (Backend/Fullstack).',
        'footer.sendEmail': 'E-Mail senden',
        'footer.linkedin': 'LinkedIn',
        'footer.sourceCode': 'Quellcode der Website',
        'footer.copyright': '© 2026 Demétrio Coutinho - All Rights Reserved',
        
        // Contact Modal
        'contact.title': 'Nachricht senden',
        'contact.emailLabel': 'Ihre E-Mail',
        'contact.emailPlaceholder': 'name@beispiel.com',
        'contact.messageLabel': 'Nachricht',
        'contact.messagePlaceholder': 'Wie kann ich helfen?',
        'contact.sendButton': 'Jetzt senden',
        'contact.successTitle': 'Nachricht gesendet!',
        'contact.successMessage': 'Vielen Dank für Ihre Kontaktaufnahme. Ich werde mich in Kürze bei Ihnen melden.',
        'contact.errorTitle': 'Fehler beim Senden',
        'contact.errorMessage': 'Es gab ein Problem. Bitte versuchen Sie es erneut oder verwenden Sie meine direkte E-Mail.',
        'contact.tryAgain': 'Erneut versuchen',
        'contact.close': 'Schließen',
        
        // Certificates Modal
        'certs.title': 'Zertifikate & Kurse',
        'certs.facepe': 'Schulungsprogramm für Technologien 4.0: KI-Lösungen.',
        'certs.facepe.org': 'POLYTECHNIK DER UNIVERSITÄT PERNAMBUCO',
        'certs.efset': 'EF SET Zertifikat',
        'certs.efset.org': 'EF Standard English Test',
        'certs.info': 'Klicken Sie auf das Symbol, um das Zertifikat anzuzeigen',
        
        // Mobile Menu
        'mobile.menu': 'Menü',
        'mobile.navigation': 'Navigation',
        'mobile.contactButton': 'Lass uns reden',
        'mobile.language': 'Sprache',
        
        // Tooltips
        'tooltip.university': 'UPE - Universität von Pernambuco',
        'tooltip.englishLevel': 'Mittleres Englischniveau nach dem Gemeinsamen Europäischen Referenzrahmen für Sprachen',
        'tooltip.degree': 'Derzeit im 5. Semester Software-Engineering an der UPE',
        'tooltip.viewCertificate': 'Klicken Sie auf das Symbol, um das Zertifikat anzuzeigen',
    }
};

// Textos dos projetos com apresentação detalhada.
const projectTranslations = {
    'pt-BR': {
        'projects.details.close': 'Fechar detalhes do projeto',
        'projects.details.imageHint': 'Capturas reais do aplicativo · clique para ampliar',
        'projects.details.role': 'Minha contribuição:',
        'projects.details.technologies': 'Tecnologias utilizadas',
        'projects.details.challenge': 'O desafio',
        'projects.details.solution': 'Como resolvemos',
        'projects.details.frontend': 'Ver front-end',
        'projects.details.backend': 'Ver back-end',
        'projects.gameList.meta': 'Mobile e web · Projeto em equipe',
        'projects.gameList.cardSummary': 'Biblioteca pessoal de jogos com progresso, favoritos e avaliações, integrada a uma API com autenticação.',
        'projects.gameList.dialogLabel': 'Game List · Detalhes do projeto',
        'projects.gameList.homeAlt': 'Tela inicial do Game List em execução, com Elden Ring na biblioteca e cartões de progresso.',
        'projects.gameList.selectionAlt': 'Seleção de jogos no aplicativo, com busca e títulos predefinidos para adicionar à biblioteca.',
        'projects.gameList.homeCaption': 'Início e biblioteca pessoal',
        'projects.gameList.selectionCaption': 'Seleção de jogos',
        'projects.gameList.summary': 'Uma biblioteca pessoal para reunir jogos de diferentes plataformas, acompanhar o progresso e organizar favoritos e avaliações.',
        'projects.gameList.role': 'Participei da construção das interfaces, do back-end e da integração do aplicativo com a API.',
        'projects.gameList.challenge': 'Manter a biblioteca vinculada à conta correta no navegador e no celular, além de impedir o cadastro duplicado do mesmo jogo na mesma plataforma.',
        'projects.gameList.solution': 'A equipe integrou autenticação com cookies no navegador e tokens no aplicativo. A API identifica o usuário pela sessão e combina validações e transações no banco para controlar duplicações.',
        'projects.gameList.statusCount': '4 status',
        'projects.gameList.statusDescription': 'Quero jogar, jogando, pausado e concluído.',
        'projects.gameList.platforms': 'Web + mobile',
        'projects.gameList.platformDescription': 'Mesma base de interface conectada à API.'
    },
    'en': {
        'projects.details.close': 'Close project details',
        'projects.details.imageHint': 'Actual app screenshots · click to enlarge',
        'projects.details.role': 'My contribution:',
        'projects.details.technologies': 'Technologies used',
        'projects.details.challenge': 'The challenge',
        'projects.details.solution': 'How we solved it',
        'projects.details.frontend': 'View front-end',
        'projects.details.backend': 'View back-end',
        'projects.gameList.meta': 'Mobile and web · Team project',
        'projects.gameList.cardSummary': 'A personal game library with progress tracking, favorites and ratings, connected to an API with authentication.',
        'projects.gameList.dialogLabel': 'Game List · Project details',
        'projects.gameList.homeAlt': 'The running Game List app home screen, showing Elden Ring in the library and progress cards.',
        'projects.gameList.selectionAlt': 'Game selection in the app, with search and preset titles to add to the library.',
        'projects.gameList.homeCaption': 'Home and personal library',
        'projects.gameList.selectionCaption': 'Game selection',
        'projects.gameList.summary': 'A personal library to bring together games from different platforms, track progress and organize favorites and ratings.',
        'projects.gameList.role': 'I contributed to the interfaces, the back-end and the integration between the app and the API.',
        'projects.gameList.challenge': 'Keeping each library linked to the correct account on web and mobile, while preventing duplicate entries for the same game on the same platform.',
        'projects.gameList.solution': 'The team integrated authentication using browser cookies and app tokens. The API identifies the user through the session and combines validation with database transactions to prevent duplicates.',
        'projects.gameList.statusCount': '4 statuses',
        'projects.gameList.statusDescription': 'Wishlist, playing, paused and completed.',
        'projects.gameList.platforms': 'Web + mobile',
        'projects.gameList.platformDescription': 'A shared interface codebase connected to the API.'
    },
    'es': {
        'projects.details.close': 'Cerrar detalles del proyecto',
        'projects.details.imageHint': 'Capturas reales de la aplicación · haz clic para ampliar',
        'projects.details.role': 'Mi contribución:',
        'projects.details.technologies': 'Tecnologías utilizadas',
        'projects.details.challenge': 'El desafío',
        'projects.details.solution': 'Cómo lo resolvimos',
        'projects.details.frontend': 'Ver front-end',
        'projects.details.backend': 'Ver back-end',
        'projects.gameList.meta': 'Móvil y web · Proyecto en equipo',
        'projects.gameList.cardSummary': 'Biblioteca personal de juegos con seguimiento del progreso, favoritos y valoraciones, conectada a una API con autenticación.',
        'projects.gameList.dialogLabel': 'Game List · Detalles del proyecto',
        'projects.gameList.homeAlt': 'Pantalla de inicio de Game List en funcionamiento, con Elden Ring en la biblioteca y tarjetas de progreso.',
        'projects.gameList.selectionAlt': 'Selección de juegos en la aplicación, con búsqueda y títulos predefinidos para añadir a la biblioteca.',
        'projects.gameList.homeCaption': 'Inicio y biblioteca personal',
        'projects.gameList.selectionCaption': 'Selección de juegos',
        'projects.gameList.summary': 'Una biblioteca personal para reunir juegos de diferentes plataformas, seguir el progreso y organizar favoritos y valoraciones.',
        'projects.gameList.role': 'Participé en la construcción de las interfaces, el back-end y la integración de la aplicación con la API.',
        'projects.gameList.challenge': 'Mantener la biblioteca vinculada a la cuenta correcta en el navegador y el móvil, e impedir registros duplicados del mismo juego en la misma plataforma.',
        'projects.gameList.solution': 'El equipo integró autenticación con cookies en el navegador y tokens en la aplicación. La API identifica al usuario mediante la sesión y combina validaciones y transacciones en la base de datos para evitar duplicados.',
        'projects.gameList.statusCount': '4 estados',
        'projects.gameList.statusDescription': 'Quiero jugar, jugando, pausado y completado.',
        'projects.gameList.platforms': 'Web + móvil',
        'projects.gameList.platformDescription': 'Una misma base de interfaz conectada a la API.'
    },
    'zh': {
        'projects.details.close': '关闭项目详情',
        'projects.details.imageHint': '应用实际截图 · 点击放大',
        'projects.details.role': '我的贡献：',
        'projects.details.technologies': '使用的技术',
        'projects.details.challenge': '面临的挑战',
        'projects.details.solution': '解决方案',
        'projects.details.frontend': '查看前端代码',
        'projects.details.backend': '查看后端代码',
        'projects.gameList.meta': '移动端与网页端 · 团队项目',
        'projects.gameList.cardSummary': '个人游戏库，支持进度管理、收藏和评分，并连接具有身份验证功能的 API。',
        'projects.gameList.dialogLabel': 'Game List · 项目详情',
        'projects.gameList.homeAlt': 'Game List 应用运行中的首页，展示游戏库中的《艾尔登法环》和进度卡片。',
        'projects.gameList.selectionAlt': '应用中的游戏选择界面，支持搜索并将预设游戏添加到游戏库。',
        'projects.gameList.homeCaption': '首页与个人游戏库',
        'projects.gameList.selectionCaption': '游戏选择',
        'projects.gameList.summary': '将不同平台的游戏集中到个人游戏库，跟踪游玩进度，管理收藏与评分。',
        'projects.gameList.role': '我参与了界面、后端以及应用与 API 集成的开发。',
        'projects.gameList.challenge': '确保网页端和移动端的游戏库始终关联正确的账户，并防止同一平台的同一游戏被重复添加。',
        'projects.gameList.solution': '团队在浏览器中使用 Cookie、在应用中使用令牌进行身份验证。API 根据会话识别用户，并结合数据校验和数据库事务来防止重复记录。',
        'projects.gameList.statusCount': '4 种状态',
        'projects.gameList.statusDescription': '想玩、正在玩、已暂停和已完成。',
        'projects.gameList.platforms': '网页端 + 移动端',
        'projects.gameList.platformDescription': '共享界面代码，并连接 API。'
    },
    'de': {
        'projects.details.close': 'Projektdetails schließen',
        'projects.details.imageHint': 'Echte App-Screenshots · zum Vergrößern anklicken',
        'projects.details.role': 'Mein Beitrag:',
        'projects.details.technologies': 'Verwendete Technologien',
        'projects.details.challenge': 'Die Herausforderung',
        'projects.details.solution': 'Unsere Lösung',
        'projects.details.frontend': 'Front-end ansehen',
        'projects.details.backend': 'Back-end ansehen',
        'projects.gameList.meta': 'Mobil und Web · Teamprojekt',
        'projects.gameList.cardSummary': 'Persönliche Spielebibliothek mit Fortschritt, Favoriten und Bewertungen, verbunden mit einer API mit Authentifizierung.',
        'projects.gameList.dialogLabel': 'Game List · Projektdetails',
        'projects.gameList.homeAlt': 'Startbildschirm der laufenden Game List App mit Elden Ring in der Bibliothek und Fortschrittskarten.',
        'projects.gameList.selectionAlt': 'Spieleauswahl in der App mit Suche und vordefinierten Titeln zum Hinzufügen zur Bibliothek.',
        'projects.gameList.homeCaption': 'Startseite und persönliche Bibliothek',
        'projects.gameList.selectionCaption': 'Spieleauswahl',
        'projects.gameList.summary': 'Eine persönliche Bibliothek für Spiele verschiedener Plattformen, um den Fortschritt zu verfolgen sowie Favoriten und Bewertungen zu verwalten.',
        'projects.gameList.role': 'Ich habe an den Oberflächen, dem Back-end und der Integration zwischen App und API mitgearbeitet.',
        'projects.gameList.challenge': 'Die Bibliothek im Browser und auf dem Smartphone dem richtigen Konto zuzuordnen und doppelte Einträge desselben Spiels auf derselben Plattform zu verhindern.',
        'projects.gameList.solution': 'Das Team integrierte die Authentifizierung mit Cookies im Browser und Tokens in der App. Die API erkennt den Nutzer anhand der Sitzung und verhindert Duplikate durch Validierung und Datenbanktransaktionen.',
        'projects.gameList.statusCount': '4 Statuswerte',
        'projects.gameList.statusDescription': 'Wunschliste, wird gespielt, pausiert und abgeschlossen.',
        'projects.gameList.platforms': 'Web + Mobil',
        'projects.gameList.platformDescription': 'Eine gemeinsame Codebasis für die Oberfläche, verbunden mit der API.'
    }
};

Object.entries(projectTranslations).forEach(([language, entries]) => {
    Object.assign(translations[language], entries);
});

const maidaiTranslations = {
    'pt-BR': {
        'projects.details.privateRepository': 'Repositório privado',
        'projects.details.privateAccess': 'Acesso ao código mediante solicitação e minha autorização.',
        'projects.details.requestCode': 'Solicitar apresentação do código',
        'projects.maidai.meta': 'Monitoramento fotovoltaico · FACEPE',
        'projects.maidai.accessBadge': 'Repositório privado · Acesso sob consulta',
        'projects.maidai.cardSummary': 'Monitoramento fotovoltaico com sensores ESP32, integração com Firebase e análise de dados históricos por inteligência artificial.',
        'projects.maidai.dialogLabel': 'Mai-Dai · Detalhes do projeto',
        'projects.maidai.overviewAlt': 'Interface do Mai-Dai com previsão da IA sobre o CSV histórico, dados do ambiente e do conversor.',
        'projects.maidai.sensorsAlt': 'Interface do Mai-Dai com medições de sensores ESP32 vindas do Firebase e indicação de dados indisponíveis.',
        'projects.maidai.overviewCaption': 'Visão geral · CSV e inteligência artificial',
        'projects.maidai.sensorsCaption': 'Sensores ESP32 · Firebase',
        'projects.maidai.detailMeta': 'Pesquisa aplicada · Bolsa FACEPE',
        'projects.maidai.summary': 'Uma plataforma para acompanhar medições de sistemas fotovoltaicos e analisar dados históricos com um modelo de inteligência artificial.',
        'projects.maidai.role': 'Atuação full-stack como bolsista FACEPE, desde outubro de 2026, nas interfaces, na API, na integração com sensores e IA e nos testes automatizados.',
        'projects.maidai.challenge': 'Integrar fontes diferentes — registros históricos em CSV e medições de sensores ESP32 — preservando as fórmulas do modelo e identificando leituras ausentes ou inválidas.',
        'projects.maidai.solution': 'A API separa o fluxo CSV com inferência do fluxo de sensores pelo Firebase. A integração valida as medições e seus horários, trata falhas de comunicação e preserva a normalização das 20 entradas do modelo. A interface consulta a API automaticamente a cada 30 segundos.',
        'projects.maidai.recordCount': '5.080 registros',
        'projects.maidai.recordDescription': 'Base histórica utilizada na comparação da refatoração.',
        'projects.maidai.inputCount': '20 entradas',
        'projects.maidai.inputDescription': 'Normalização preservada para a inferência do modelo.',
        'projects.maidai.modelNote': 'A previsão usa o CSV histórico. As medições dos sensores são exibidas com sua disponibilidade; esse fluxo ainda não fornece todas as entradas exigidas pela IA.'
    },
    'en': {
        'projects.details.privateRepository': 'Private repository',
        'projects.details.privateAccess': 'Code access is available upon request and with my authorization.',
        'projects.details.requestCode': 'Request a code walkthrough',
        'projects.maidai.meta': 'Photovoltaic monitoring · FACEPE',
        'projects.maidai.accessBadge': 'Private repository · Access upon request',
        'projects.maidai.cardSummary': 'Photovoltaic monitoring using ESP32 sensors, Firebase integration and AI analysis of historical data.',
        'projects.maidai.dialogLabel': 'Mai-Dai · Project details',
        'projects.maidai.overviewAlt': 'Mai-Dai interface showing AI predictions from historical CSV data, environmental readings and converter measurements.',
        'projects.maidai.sensorsAlt': 'Mai-Dai interface showing ESP32 sensor readings from Firebase and identifying unavailable data.',
        'projects.maidai.overviewCaption': 'Overview · CSV and artificial intelligence',
        'projects.maidai.sensorsCaption': 'ESP32 sensors · Firebase',
        'projects.maidai.detailMeta': 'Applied research · FACEPE scholarship',
        'projects.maidai.summary': 'A platform for monitoring photovoltaic system measurements and analyzing historical data with an artificial intelligence model.',
        'projects.maidai.role': 'Full-stack work as a FACEPE scholarship holder since October 2026, covering interfaces, the API, sensor and AI integration, and automated tests.',
        'projects.maidai.challenge': 'Integrating historical CSV records and ESP32 sensor readings while preserving the model formulas and identifying missing or invalid measurements.',
        'projects.maidai.solution': 'The API separates CSV inference from Firebase sensor data. The integration validates measurements and timestamps, handles communication failures and preserves normalization of the 20 model inputs. The interface queries the API automatically every 30 seconds.',
        'projects.maidai.recordCount': '5,080 records',
        'projects.maidai.recordDescription': 'Historical dataset used to compare behavior before and after refactoring.',
        'projects.maidai.inputCount': '20 inputs',
        'projects.maidai.inputDescription': 'Normalization preserved for model inference.',
        'projects.maidai.modelNote': 'Predictions use historical CSV data. Sensor readings indicate data availability; this flow does not yet provide every input required by the AI model.'
    },
    'es': {
        'projects.details.privateRepository': 'Repositorio privado',
        'projects.details.privateAccess': 'Acceso al código previa solicitud y con mi autorización.',
        'projects.details.requestCode': 'Solicitar una presentación del código',
        'projects.maidai.meta': 'Monitoreo fotovoltaico · FACEPE',
        'projects.maidai.accessBadge': 'Repositorio privado · Acceso bajo consulta',
        'projects.maidai.cardSummary': 'Monitoreo fotovoltaico con sensores ESP32, integración con Firebase y análisis de datos históricos mediante inteligencia artificial.',
        'projects.maidai.dialogLabel': 'Mai-Dai · Detalles del proyecto',
        'projects.maidai.overviewAlt': 'Interfaz de Mai-Dai con predicciones de IA sobre el CSV histórico, datos ambientales y mediciones del conversor.',
        'projects.maidai.sensorsAlt': 'Interfaz de Mai-Dai con mediciones de sensores ESP32 desde Firebase e indicación de datos no disponibles.',
        'projects.maidai.overviewCaption': 'Vista general · CSV e inteligencia artificial',
        'projects.maidai.sensorsCaption': 'Sensores ESP32 · Firebase',
        'projects.maidai.detailMeta': 'Investigación aplicada · Beca FACEPE',
        'projects.maidai.summary': 'Una plataforma para consultar mediciones de sistemas fotovoltaicos y analizar datos históricos con un modelo de inteligencia artificial.',
        'projects.maidai.role': 'Trabajo full-stack como becario FACEPE desde octubre de 2026, en interfaces, API, integración con sensores e IA y pruebas automatizadas.',
        'projects.maidai.challenge': 'Integrar registros históricos en CSV y mediciones de sensores ESP32, preservando las fórmulas del modelo e identificando lecturas ausentes o inválidas.',
        'projects.maidai.solution': 'La API separa la inferencia sobre CSV del flujo de sensores de Firebase. La integración valida mediciones y horarios, trata fallos de comunicación y conserva la normalización de las 20 entradas del modelo. La interfaz consulta la API automáticamente cada 30 segundos.',
        'projects.maidai.recordCount': '5.080 registros',
        'projects.maidai.recordDescription': 'Base histórica utilizada para comparar la refactorización.',
        'projects.maidai.inputCount': '20 entradas',
        'projects.maidai.inputDescription': 'Normalización preservada para la inferencia del modelo.',
        'projects.maidai.modelNote': 'La predicción utiliza el CSV histórico. Las mediciones de sensores indican la disponibilidad de datos; este flujo todavía no proporciona todas las entradas que requiere la IA.'
    },
    'zh': {
        'projects.details.privateRepository': '私有代码仓库',
        'projects.details.privateAccess': '如需查看代码，请提出申请并获得我的授权。',
        'projects.details.requestCode': '申请代码演示',
        'projects.maidai.meta': '光伏监测 · FACEPE',
        'projects.maidai.accessBadge': '私有代码仓库 · 访问需申请',
        'projects.maidai.cardSummary': '使用 ESP32 传感器和 Firebase 进行光伏监测，并通过人工智能分析历史数据。',
        'projects.maidai.dialogLabel': 'Mai-Dai · 项目详情',
        'projects.maidai.overviewAlt': 'Mai-Dai 界面展示基于历史 CSV 数据的人工智能预测、环境数据和变流器测量值。',
        'projects.maidai.sensorsAlt': 'Mai-Dai 界面展示来自 Firebase 的 ESP32 传感器读数，并标明不可用的数据。',
        'projects.maidai.overviewCaption': '概览 · CSV 与人工智能',
        'projects.maidai.sensorsCaption': 'ESP32 传感器 · Firebase',
        'projects.maidai.detailMeta': '应用研究 · FACEPE 奖学金',
        'projects.maidai.summary': '用于监测光伏系统测量值，并使用人工智能模型分析历史数据的平台。',
        'projects.maidai.role': '自 2026 年 10 月起担任 FACEPE 奖学金项目全栈开发者，参与界面、API、传感器与人工智能集成及自动化测试。',
        'projects.maidai.challenge': '整合历史 CSV 记录和 ESP32 传感器读数，同时保留模型公式，并识别缺失或无效的测量值。',
        'projects.maidai.solution': 'API 将 CSV 推理流程与 Firebase 传感器流程分离。集成层验证测量值及其时间，处理通信故障，并保留模型 20 个输入的归一化方式。界面每 30 秒自动查询一次 API。',
        'projects.maidai.recordCount': '5,080 条记录',
        'projects.maidai.recordDescription': '用于比较重构前后结果的历史数据集。',
        'projects.maidai.inputCount': '20 个输入',
        'projects.maidai.inputDescription': '保留模型推理所需的归一化方式。',
        'projects.maidai.modelNote': '预测基于历史 CSV 数据。传感器界面标明数据的可用性；此流程目前尚未提供人工智能模型所需的全部输入。'
    },
    'de': {
        'projects.details.privateRepository': 'Privates Repository',
        'projects.details.privateAccess': 'Zugang zum Code auf Anfrage und mit meiner Genehmigung.',
        'projects.details.requestCode': 'Codevorstellung anfragen',
        'projects.maidai.meta': 'Photovoltaik-Monitoring · FACEPE',
        'projects.maidai.accessBadge': 'Privates Repository · Zugang auf Anfrage',
        'projects.maidai.cardSummary': 'Photovoltaik-Monitoring mit ESP32-Sensoren, Firebase-Integration und KI-Analyse historischer Daten.',
        'projects.maidai.dialogLabel': 'Mai-Dai · Projektdetails',
        'projects.maidai.overviewAlt': 'Mai-Dai-Oberfläche mit KI-Vorhersagen aus historischen CSV-Daten sowie Umwelt- und Wechselrichterwerten.',
        'projects.maidai.sensorsAlt': 'Mai-Dai-Oberfläche mit ESP32-Sensorwerten aus Firebase und Kennzeichnung nicht verfügbarer Daten.',
        'projects.maidai.overviewCaption': 'Übersicht · CSV und künstliche Intelligenz',
        'projects.maidai.sensorsCaption': 'ESP32-Sensoren · Firebase',
        'projects.maidai.detailMeta': 'Angewandte Forschung · FACEPE-Stipendium',
        'projects.maidai.summary': 'Eine Plattform zur Überwachung von Photovoltaik-Messwerten und zur Analyse historischer Daten mit einem KI-Modell.',
        'projects.maidai.role': 'Full-Stack-Entwicklung als FACEPE-Stipendiat seit Oktober 2026: Oberflächen, API, Sensor- und KI-Integration sowie automatisierte Tests.',
        'projects.maidai.challenge': 'Historische CSV-Daten und ESP32-Sensormessungen integrieren, dabei die Modellformeln erhalten und fehlende oder ungültige Werte erkennen.',
        'projects.maidai.solution': 'Die API trennt die CSV-Inferenz vom Firebase-Sensordatenfluss. Die Integration validiert Messwerte und Zeitstempel, behandelt Kommunikationsfehler und erhält die Normalisierung der 20 Modelleingaben. Die Oberfläche fragt die API automatisch alle 30 Sekunden ab.',
        'projects.maidai.recordCount': '5.080 Datensätze',
        'projects.maidai.recordDescription': 'Historischer Datenbestand für den Vergleich vor und nach der Refaktorierung.',
        'projects.maidai.inputCount': '20 Eingaben',
        'projects.maidai.inputDescription': 'Normalisierung für die Modellinferenz erhalten.',
        'projects.maidai.modelNote': 'Vorhersagen verwenden historische CSV-Daten. Sensorwerte werden mit ihrer Verfügbarkeit angezeigt; dieser Datenfluss liefert noch nicht alle erforderlichen Modelleingaben.'
    }
};

Object.entries(maidaiTranslations).forEach(([language, entries]) => {
    Object.assign(translations[language], entries);
});

const marieClaireTranslations = {
    'pt-BR': {
        'projects.details.repository': 'Ver código no GitHub',
        'projects.marieclaire.meta': 'Full-stack · Em desenvolvimento',
        'projects.marieclaire.cardSummary': 'Vitrine digital e gestão de uma doceria, com catálogo, carrinho, pedidos pelo WhatsApp e painel administrativo.',
        'projects.marieclaire.dialogLabel': 'Marie Claire Doceria · Detalhes do projeto',
        'projects.marieclaire.homeAlt': 'Página inicial da doceria, com identidade visual, promoção e entrada para o catálogo.',
        'projects.marieclaire.adminAlt': 'Painel administrativo do Marie Claire com indicadores financeiros, pedidos recentes, produtos mais vendidos e alerta de estoque, usando dados demonstrativos.',
        'projects.marieclaire.catalogAlt': 'Catálogo do Marie Claire, com produtos, fotos, preços demonstrativos e acesso ao carrinho.',
        'projects.marieclaire.homeCaption': 'Página inicial · Vitrine da doceria',
        'projects.marieclaire.adminCaption': 'Painel administrativo · Pedidos, indicadores e estoque · Dados demonstrativos',
        'projects.marieclaire.catalogCaption': 'Catálogo · Produtos e carrinho',
        'projects.marieclaire.imageHint': 'Capturas do ambiente de desenvolvimento, com dados de exemplo. Clique nas imagens para ampliar.',
        'projects.marieclaire.summary': 'Um sistema para apresentar os produtos de uma doceria, organizar encomendas e apoiar a gestão de pedidos, produtos e ingredientes.',
        'projects.marieclaire.role': 'Participei das interfaces, da API e do banco de dados, conectando a experiência de compra às funcionalidades administrativas.',
        'projects.marieclaire.challenge': 'Conectar o catálogo e o carrinho à operação da doceria, com registro de pedidos, identificação do cliente e controle de produtos e estoque de ingredientes.',
        'projects.marieclaire.solution': 'A solução combina uma interface Next.js com uma API Express organizada por módulos e persistência no PostgreSQL via Prisma. O carrinho é mantido no navegador; o checkout autenticado registra o pedido e prepara uma mensagem com os itens para o WhatsApp. A área administrativa reúne pedidos, produtos e movimentações de ingredientes.',
        'projects.marieclaire.areas': 'Vitrine + gestão',
        'projects.marieclaire.areasDescription': 'Área pública para clientes e painel administrativo.',
        'projects.marieclaire.whatsappDescription': 'Fluxo de encomendas com pedido estruturado.',
        'projects.marieclaire.stageTitle': 'Projeto em desenvolvimento.',
        'projects.marieclaire.stageDescription': 'As capturas mostram a interface com dados de exemplo, incluindo o painel administrativo. Resultados de vendas e uso real ainda não foram medidos.'
    },
    'en': {
        'projects.details.repository': 'View code on GitHub',
        'projects.marieclaire.meta': 'Full-stack · In development',
        'projects.marieclaire.cardSummary': 'A bakery storefront and management system with a catalog, shopping cart, WhatsApp orders and an administration panel.',
        'projects.marieclaire.dialogLabel': 'Marie Claire Doceria · Project details',
        'projects.marieclaire.homeAlt': 'Bakery home page with branding, a promotion and access to the catalog.',
        'projects.marieclaire.adminAlt': 'Marie Claire administration panel with financial indicators, recent orders, top products and a low-stock alert, using demonstration data.',
        'projects.marieclaire.catalogAlt': 'Marie Claire catalog with products, photos, demonstration prices and shopping cart access.',
        'projects.marieclaire.homeCaption': 'Home page · Bakery storefront',
        'projects.marieclaire.adminCaption': 'Administration · Orders, indicators and stock · Demonstration data',
        'projects.marieclaire.catalogCaption': 'Catalog · Products and shopping cart',
        'projects.marieclaire.imageHint': 'Development screenshots with sample data. Click the images to enlarge.',
        'projects.marieclaire.summary': 'A system to showcase bakery products, organize orders and support the management of orders, products and ingredients.',
        'projects.marieclaire.role': 'I contributed to the interfaces, API and database, connecting the shopping experience to administrative features.',
        'projects.marieclaire.challenge': 'Connecting the catalog and cart to bakery operations, including order recording, customer identification, product management and ingredient inventory.',
        'projects.marieclaire.solution': 'The solution combines a Next.js interface with a modular Express API and PostgreSQL persistence through Prisma. The cart is stored in the browser; authenticated checkout records the order and prepares a WhatsApp message with its items. The administration area brings together orders, products and ingredient stock movements.',
        'projects.marieclaire.areas': 'Storefront + management',
        'projects.marieclaire.areasDescription': 'A public customer area and an administration panel.',
        'projects.marieclaire.whatsappDescription': 'An ordering flow with structured order details.',
        'projects.marieclaire.stageTitle': 'Project in development.',
        'projects.marieclaire.stageDescription': 'The screenshots show the interface with sample data, including the administration panel. Real usage and sales outcomes have not yet been measured.'
    },
    'es': {
        'projects.details.repository': 'Ver código en GitHub',
        'projects.marieclaire.meta': 'Full-stack · En desarrollo',
        'projects.marieclaire.cardSummary': 'Vitrina digital y gestión de una pastelería, con catálogo, carrito, pedidos por WhatsApp y panel administrativo.',
        'projects.marieclaire.dialogLabel': 'Marie Claire Doceria · Detalles del proyecto',
        'projects.marieclaire.homeAlt': 'Página inicial de la pastelería con identidad visual, promoción y acceso al catálogo.',
        'projects.marieclaire.adminAlt': 'Panel administrativo de Marie Claire con indicadores financieros, pedidos recientes, productos más vendidos y alerta de existencias, con datos demostrativos.',
        'projects.marieclaire.catalogAlt': 'Catálogo de Marie Claire con productos, fotos, precios demostrativos y acceso al carrito.',
        'projects.marieclaire.homeCaption': 'Página inicial · Vitrina de la pastelería',
        'projects.marieclaire.adminCaption': 'Administración · Pedidos, indicadores e inventario · Datos demostrativos',
        'projects.marieclaire.catalogCaption': 'Catálogo · Productos y carrito',
        'projects.marieclaire.imageHint': 'Capturas del entorno de desarrollo con datos de ejemplo. Haz clic en las imágenes para ampliarlas.',
        'projects.marieclaire.summary': 'Un sistema para presentar productos de una pastelería, organizar pedidos y apoyar la gestión de productos e ingredientes.',
        'projects.marieclaire.role': 'Participé en las interfaces, la API y la base de datos, conectando la experiencia de compra con las funcionalidades administrativas.',
        'projects.marieclaire.challenge': 'Conectar el catálogo y el carrito con la operación de la pastelería, registrando pedidos, identificando clientes y gestionando productos e ingredientes.',
        'projects.marieclaire.solution': 'La solución combina una interfaz Next.js con una API Express organizada por módulos y persistencia en PostgreSQL mediante Prisma. El carrito se conserva en el navegador; el checkout autenticado registra el pedido y prepara un mensaje con los artículos para WhatsApp. El área administrativa reúne pedidos, productos y movimientos de ingredientes.',
        'projects.marieclaire.areas': 'Vitrina + gestión',
        'projects.marieclaire.areasDescription': 'Área pública para clientes y panel administrativo.',
        'projects.marieclaire.whatsappDescription': 'Flujo de pedidos con información estructurada.',
        'projects.marieclaire.stageTitle': 'Proyecto en desarrollo.',
        'projects.marieclaire.stageDescription': 'Las capturas muestran la interfaz con datos de ejemplo, incluido el panel administrativo. Los resultados de ventas y uso real todavía no se han medido.'
    },
    'zh': {
        'projects.details.repository': '在 GitHub 查看代码',
        'projects.marieclaire.meta': '全栈项目 · 开发中',
        'projects.marieclaire.cardSummary': '甜品店线上展示和管理系统，包含商品目录、购物车、WhatsApp 下单和管理面板。',
        'projects.marieclaire.dialogLabel': 'Marie Claire Doceria · 项目详情',
        'projects.marieclaire.homeAlt': '甜品店首页，展示品牌形象、促销内容和商品目录入口。',
        'projects.marieclaire.adminAlt': 'Marie Claire 管理面板，使用演示数据展示财务指标、近期订单、畅销商品和低库存提醒。',
        'projects.marieclaire.catalogAlt': 'Marie Claire 商品目录，包含商品图片、演示价格和购物车入口。',
        'projects.marieclaire.homeCaption': '首页 · 甜品店展示',
        'projects.marieclaire.adminCaption': '管理面板 · 订单、指标和库存 · 演示数据',
        'projects.marieclaire.catalogCaption': '商品目录 · 商品与购物车',
        'projects.marieclaire.imageHint': '开发环境截图，包含示例数据。点击图片可放大。',
        'projects.marieclaire.summary': '用于展示甜品、组织订单并管理商品和原料的系统。',
        'projects.marieclaire.role': '我参与了界面、API 和数据库的开发，将购物体验与管理功能连接起来。',
        'projects.marieclaire.challenge': '将商品目录和购物车连接到甜品店的运营流程，包括订单记录、客户识别、商品管理和原料库存管理。',
        'projects.marieclaire.solution': '方案结合 Next.js 界面、模块化 Express API，以及通过 Prisma 访问的 PostgreSQL 数据库。购物车保存在浏览器中；登录后的结账流程记录订单，并为 WhatsApp 生成包含商品信息的消息。管理区域集中展示订单、商品和原料出入库记录。',
        'projects.marieclaire.areas': '展示 + 管理',
        'projects.marieclaire.areasDescription': '面向客户的公开页面和管理面板。',
        'projects.marieclaire.whatsappDescription': '包含结构化订单信息的下单流程。',
        'projects.marieclaire.stageTitle': '项目开发中。',
        'projects.marieclaire.stageDescription': '截图使用示例数据展示界面，包括管理面板。目前尚未衡量实际使用情况和销售成果。'
    },
    'de': {
        'projects.details.repository': 'Code auf GitHub ansehen',
        'projects.marieclaire.meta': 'Full-Stack · In Entwicklung',
        'projects.marieclaire.cardSummary': 'Digitales Schaufenster und Verwaltung einer Konditorei mit Katalog, Warenkorb, WhatsApp-Bestellungen und Administrationsbereich.',
        'projects.marieclaire.dialogLabel': 'Marie Claire Doceria · Projektdetails',
        'projects.marieclaire.homeAlt': 'Startseite der Konditorei mit Markenauftritt, Werbeaktion und Zugang zum Katalog.',
        'projects.marieclaire.adminAlt': 'Marie-Claire-Administrationsbereich mit Finanzkennzahlen, letzten Bestellungen, meistverkauften Produkten und Lagerwarnung anhand von Beispieldaten.',
        'projects.marieclaire.catalogAlt': 'Marie-Claire-Katalog mit Produkten, Fotos, Beispielpreisen und Warenkorb.',
        'projects.marieclaire.homeCaption': 'Startseite · Schaufenster der Konditorei',
        'projects.marieclaire.adminCaption': 'Administration · Bestellungen, Kennzahlen und Lager · Beispieldaten',
        'projects.marieclaire.catalogCaption': 'Katalog · Produkte und Warenkorb',
        'projects.marieclaire.imageHint': 'Aufnahmen aus der Entwicklungsumgebung mit Beispieldaten. Bilder zum Vergrößern anklicken.',
        'projects.marieclaire.summary': 'Ein System zur Präsentation von Konditoreiprodukten, zur Organisation von Bestellungen und zur Verwaltung von Produkten und Zutaten.',
        'projects.marieclaire.role': 'Ich habe an den Oberflächen, der API und der Datenbank mitgearbeitet und den Einkauf mit den Verwaltungsfunktionen verbunden.',
        'projects.marieclaire.challenge': 'Katalog und Warenkorb mit dem Betrieb der Konditorei verbinden: Bestellungen erfassen, Kunden identifizieren sowie Produkte und Zutatenbestände verwalten.',
        'projects.marieclaire.solution': 'Die Lösung verbindet eine Next.js-Oberfläche mit einer modularen Express-API und PostgreSQL über Prisma. Der Warenkorb bleibt im Browser gespeichert; der authentifizierte Checkout erfasst die Bestellung und bereitet eine WhatsApp-Nachricht mit den Artikeln vor. Im Administrationsbereich werden Bestellungen, Produkte und Lagerbewegungen der Zutaten zusammengeführt.',
        'projects.marieclaire.areas': 'Schaufenster + Verwaltung',
        'projects.marieclaire.areasDescription': 'Öffentlicher Kundenbereich und Administrationsbereich.',
        'projects.marieclaire.whatsappDescription': 'Bestellablauf mit strukturierten Bestelldaten.',
        'projects.marieclaire.stageTitle': 'Projekt in Entwicklung.',
        'projects.marieclaire.stageDescription': 'Die Aufnahmen zeigen die Oberfläche einschließlich des Administrationsbereichs mit Beispieldaten. Reale Nutzung und Verkaufsergebnisse wurden noch nicht gemessen.'
    }
};

Object.entries(marieClaireTranslations).forEach(([language, entries]) => {
    Object.assign(translations[language], entries);
});

const stackTranslations = {
    'pt-BR': {
        typescript: 'Tipagem estática para aplicações web, mobile e APIs.',
        reactNative: 'Interfaces mobile com React e código compartilhado para web.',
        expo: 'Desenvolvimento, navegação e recursos nativos no Game List.',
        nestjs: 'APIs Node.js organizadas em módulos, controllers e services.',
        express: 'APIs REST e regras de negócio para aplicações Node.js.',
        prisma: 'Modelagem, consultas e migrations em bancos relacionais.',
        firebase: 'Consulta de medições de sensores no Realtime Database.',
        tailwind: 'Estilização de interfaces com classes utilitárias.',
        nativewind: 'Classes utilitárias no React Native e no Expo.',
        jest: 'Testes automatizados de serviços, autenticação e APIs.',
        vitest: 'Testes automatizados das regras de negócio e da API.',
        supertest: 'Verificação de rotas HTTP e respostas das APIs.',
        swagger: 'Documentação interativa de contratos e endpoints.',
        maven: 'Gerenciamento de dependências e build de projetos Java.',
        jdbc: 'Conexão e consultas entre aplicações Java e PostgreSQL.'
    },
    'en': {
        typescript: 'Static typing for web applications, mobile apps and APIs.',
        nextjs: 'A React framework for web applications with server-side rendering.',
        postgresql: 'A relational database management system.',
        reactNative: 'Mobile interfaces with React and shared code for the web.',
        expo: 'Development, navigation and native capabilities in Game List.',
        nestjs: 'Node.js APIs organized into modules, controllers and services.',
        express: 'REST APIs and business logic for Node.js applications.',
        prisma: 'Modeling, queries and migrations for relational databases.',
        firebase: 'Retrieving sensor measurements from Realtime Database.',
        tailwind: 'Interface styling with utility classes.',
        nativewind: 'Utility classes for React Native and Expo.',
        jest: 'Automated tests for services, authentication and APIs.',
        vitest: 'Automated tests for business logic and the API.',
        supertest: 'Checking HTTP routes and API responses.',
        swagger: 'Interactive documentation for API contracts and endpoints.',
        maven: 'Dependency management and builds for Java projects.',
        jdbc: 'Connections and queries between Java applications and PostgreSQL.'
    },
    'es': {
        typescript: 'Tipado estático para aplicaciones web, móviles y APIs.',
        nextjs: 'Framework React para aplicaciones web con renderizado en el servidor.',
        postgresql: 'Sistema de gestión de bases de datos relacionales.',
        reactNative: 'Interfaces móviles con React y código compartido para la web.',
        expo: 'Desarrollo, navegación y recursos nativos en Game List.',
        nestjs: 'APIs Node.js organizadas en módulos, controladores y servicios.',
        express: 'APIs REST y reglas de negocio para aplicaciones Node.js.',
        prisma: 'Modelado, consultas y migraciones en bases de datos relacionales.',
        firebase: 'Consulta de mediciones de sensores en Realtime Database.',
        tailwind: 'Estilización de interfaces con clases utilitarias.',
        nativewind: 'Clases utilitarias en React Native y Expo.',
        jest: 'Pruebas automatizadas de servicios, autenticación y APIs.',
        vitest: 'Pruebas automatizadas de reglas de negocio y de la API.',
        supertest: 'Verificación de rutas HTTP y respuestas de las APIs.',
        swagger: 'Documentación interactiva de contratos y endpoints.',
        maven: 'Gestión de dependencias y compilación de proyectos Java.',
        jdbc: 'Conexión y consultas entre aplicaciones Java y PostgreSQL.'
    },
    'zh': {
        typescript: '为网页应用、移动应用和 API 提供静态类型。',
        nextjs: '支持服务端渲染的 React 网页应用框架。',
        postgresql: '关系数据库管理系统。',
        reactNative: '使用 React 构建移动界面，并与网页端共享代码。',
        expo: '用于 Game List 的开发、导航和原生功能。',
        nestjs: '通过模块、控制器和服务组织 Node.js API。',
        express: '为 Node.js 应用构建 REST API 和业务逻辑。',
        prisma: '关系数据库建模、查询和迁移。',
        firebase: '从 Realtime Database 获取传感器测量数据。',
        tailwind: '使用实用类设置界面样式。',
        nativewind: '在 React Native 和 Expo 中使用实用类。',
        jest: '服务、身份验证和 API 的自动化测试。',
        vitest: '业务逻辑和 API 的自动化测试。',
        supertest: '验证 HTTP 路由和 API 响应。',
        swagger: 'API 契约和端点的交互式文档。',
        maven: 'Java 项目的依赖管理和构建。',
        jdbc: 'Java 应用与 PostgreSQL 之间的连接和查询。'
    },
    'de': {
        typescript: 'Statische Typisierung für Webanwendungen, mobile Apps und APIs.',
        nextjs: 'React-Framework für Webanwendungen mit serverseitiger Darstellung.',
        postgresql: 'Ein relationales Datenbankmanagementsystem.',
        reactNative: 'Mobile Oberflächen mit React und gemeinsamem Code für das Web.',
        expo: 'Entwicklung, Navigation und native Funktionen in Game List.',
        nestjs: 'Node.js-APIs mit Modulen, Controllern und Services.',
        express: 'REST-APIs und Geschäftslogik für Node.js-Anwendungen.',
        prisma: 'Modellierung, Abfragen und Migrationen relationaler Datenbanken.',
        firebase: 'Sensormesswerte aus Realtime Database abrufen.',
        tailwind: 'Oberflächen mit Hilfsklassen gestalten.',
        nativewind: 'Hilfsklassen für React Native und Expo.',
        jest: 'Automatisierte Tests für Services, Authentifizierung und APIs.',
        vitest: 'Automatisierte Tests für Geschäftslogik und API.',
        supertest: 'HTTP-Routen und API-Antworten überprüfen.',
        swagger: 'Interaktive Dokumentation von API-Verträgen und Endpunkten.',
        maven: 'Abhängigkeiten verwalten und Java-Projekte bauen.',
        jdbc: 'Verbindungen und Abfragen zwischen Java-Anwendungen und PostgreSQL.'
    }
};

Object.entries(stackTranslations).forEach(([language, entries]) => {
    Object.entries(entries).forEach(([key, description]) => {
        translations[language]['tech.' + key] = description;
    });
});

const experienceTranslations = {
    'pt-BR': {
        professionalLabel: 'Experiência profissional',
        academicLabel: 'Experiência acadêmica',
        'facepe.title': 'Bolsista FACEPE — Desenvolvedor Full-Stack',
        'facepe.project': 'Projeto Mai-Dai · Monitoramento de sistemas fotovoltaicos',
        'facepe.period': 'Out/2026 – atual',
        'facepe.interfaces': 'Desenvolvimento e modernização das interfaces web e da API do <strong>Mai-Dai</strong>, com HTML, CSS, JavaScript, TypeScript e NestJS.',
        'facepe.sensors': 'Integração de medições de <strong>sensores ESP32 com Firebase</strong>, com validação das leituras e tratamento de falhas de comunicação.',
        'facepe.ai': 'Integração e execução de um <strong>modelo de IA com 20 entradas normalizadas</strong> para análise de dados históricos.',
        'facepe.quality': 'Refatoração e testes automatizados, com comparação de <strong>dados, normalização e previsões em 5.080 registros</strong> para verificar a preservação dos resultados.',
        'academic.title': 'Engenharia de Software — UPE',
        'academic.context': 'Projetos da graduação em Engenharia de Software',
        'academic.fullstack': 'Desenvolvimento de aplicações <strong>Full-Stack</strong> em projetos da graduação, aplicando conceitos de POO, SOLID, Clean Code, APIs REST e persistência de dados.',
        'academic.architecture': 'Implementação de regras de negócio, integração entre frontend e backend e organização de projetos seguindo princípios de <strong>arquitetura de software</strong>.',
        'academic.collaboration': 'Colaboração com outros desenvolvedores utilizando <strong>Git/GitHub</strong> para versionamento, organização do código e integração das diferentes partes dos projetos.',
        'academic.problemSolving': 'Participação na resolução de problemas técnicos, revisão de código e tomada de decisões em conjunto com a equipe.',
        'academic.quality': 'Desenvolvimento de soluções com foco em <strong>organização, modularidade, manutenção e qualidade do software</strong>.'
    },
    'en': {
        professionalLabel: 'Professional experience',
        academicLabel: 'Academic experience',
        'facepe.title': 'FACEPE Scholarship Holder — Full-Stack Developer',
        'facepe.project': 'Mai-Dai Project · Photovoltaic System Monitoring',
        'facepe.period': 'Oct 2026 – present',
        'facepe.interfaces': 'Development and modernization of the <strong>Mai-Dai</strong> web interfaces and API using HTML, CSS, JavaScript, TypeScript and NestJS.',
        'facepe.sensors': 'Integration of <strong>ESP32 sensor measurements with Firebase</strong>, including reading validation and communication failure handling.',
        'facepe.ai': 'Integration and execution of an <strong>AI model with 20 normalized inputs</strong> to analyze historical data.',
        'facepe.quality': 'Refactoring and automated testing, comparing <strong>data, normalization and predictions across 5,080 records</strong> to check that results were preserved.',
        'academic.title': 'Software Engineering — UPE',
        'academic.context': 'Undergraduate Software Engineering projects',
        'academic.fullstack': 'Development of <strong>full-stack</strong> applications in undergraduate projects, applying OOP, SOLID, Clean Code, REST APIs and data persistence.',
        'academic.architecture': 'Implementation of business rules, integration between frontend and backend, and project organization following <strong>software architecture</strong> principles.',
        'academic.collaboration': 'Collaboration with other developers using <strong>Git/GitHub</strong> for version control, code organization and integration of different project components.',
        'academic.problemSolving': 'Participation in technical problem solving, code review and shared decisions with the team.',
        'academic.quality': 'Development of solutions focused on <strong>organization, modularity, maintainability and software quality</strong>.'
    },
    'es': {
        professionalLabel: 'Experiencia profesional',
        academicLabel: 'Experiencia académica',
        'facepe.title': 'Becario FACEPE — Desarrollador Full-Stack',
        'facepe.project': 'Proyecto Mai-Dai · Monitoreo de sistemas fotovoltaicos',
        'facepe.period': 'Oct 2026 – actualidad',
        'facepe.interfaces': 'Desarrollo y modernización de las interfaces web y la API de <strong>Mai-Dai</strong> con HTML, CSS, JavaScript, TypeScript y NestJS.',
        'facepe.sensors': 'Integración de mediciones de <strong>sensores ESP32 con Firebase</strong>, con validación de lecturas y tratamiento de fallos de comunicación.',
        'facepe.ai': 'Integración y ejecución de un <strong>modelo de IA con 20 entradas normalizadas</strong> para analizar datos históricos.',
        'facepe.quality': 'Refactorización y pruebas automatizadas, comparando <strong>datos, normalización y predicciones en 5.080 registros</strong> para comprobar la preservación de los resultados.',
        'academic.title': 'Ingeniería de Software — UPE',
        'academic.context': 'Proyectos de la carrera de Ingeniería de Software',
        'academic.fullstack': 'Desarrollo de aplicaciones <strong>Full-Stack</strong> en proyectos académicos, aplicando POO, SOLID, Clean Code, APIs REST y persistencia de datos.',
        'academic.architecture': 'Implementación de reglas de negocio, integración entre frontend y backend y organización de proyectos siguiendo principios de <strong>arquitectura de software</strong>.',
        'academic.collaboration': 'Colaboración con otros desarrolladores mediante <strong>Git/GitHub</strong> para versionamiento, organización del código e integración de las distintas partes de los proyectos.',
        'academic.problemSolving': 'Participación en la resolución de problemas técnicos, revisión de código y toma de decisiones en equipo.',
        'academic.quality': 'Desarrollo de soluciones centradas en <strong>organización, modularidad, mantenimiento y calidad del software</strong>.'
    },
    'zh': {
        professionalLabel: '职业经历',
        academicLabel: '学术经历',
        'facepe.title': 'FACEPE 奖学金项目 — 全栈开发者',
        'facepe.project': 'Mai-Dai 项目 · 光伏系统监测',
        'facepe.period': '2026 年 10 月至今',
        'facepe.interfaces': '使用 HTML、CSS、JavaScript、TypeScript 和 NestJS 开发及改进 <strong>Mai-Dai</strong> 的网页界面与 API。',
        'facepe.sensors': '将 <strong>ESP32 传感器测量数据与 Firebase 集成</strong>，验证读数并处理通信故障。',
        'facepe.ai': '集成并运行具有 <strong>20 个归一化输入的人工智能模型</strong>，用于分析历史数据。',
        'facepe.quality': '进行重构与自动化测试，对 <strong>5,080 条记录的数据、归一化结果及预测值</strong>进行比较，验证结果得到保留。',
        'academic.title': '软件工程 — UPE',
        'academic.context': '软件工程本科课程项目',
        'academic.fullstack': '在本科课程项目中开发<strong>全栈</strong>应用，运用面向对象编程、SOLID、Clean Code、REST API 和数据持久化。',
        'academic.architecture': '实现业务规则，集成前后端，并遵循<strong>软件架构</strong>原则组织项目。',
        'academic.collaboration': '通过 <strong>Git/GitHub</strong> 与其他开发者协作，进行版本控制、代码组织及项目各部分的集成。',
        'academic.problemSolving': '参与技术问题解决、代码审查和团队共同决策。',
        'academic.quality': '开发注重<strong>组织结构、模块化、可维护性和软件质量</strong>的解决方案。'
    },
    'de': {
        professionalLabel: 'Berufliche Erfahrung',
        academicLabel: 'Akademische Erfahrung',
        'facepe.title': 'FACEPE-Stipendiat — Full-Stack-Entwickler',
        'facepe.project': 'Projekt Mai-Dai · Überwachung von Photovoltaikanlagen',
        'facepe.period': 'Okt. 2026 – heute',
        'facepe.interfaces': 'Entwicklung und Modernisierung der Weboberflächen und API von <strong>Mai-Dai</strong> mit HTML, CSS, JavaScript, TypeScript und NestJS.',
        'facepe.sensors': 'Integration von <strong>ESP32-Sensormesswerten mit Firebase</strong>, einschließlich Validierung und Behandlung von Kommunikationsfehlern.',
        'facepe.ai': 'Integration und Ausführung eines <strong>KI-Modells mit 20 normalisierten Eingaben</strong> zur Analyse historischer Daten.',
        'facepe.quality': 'Refaktorierung und automatisierte Tests mit Vergleich von <strong>Daten, Normalisierung und Vorhersagen für 5.080 Datensätze</strong>, um die Erhaltung der Ergebnisse zu prüfen.',
        'academic.title': 'Software Engineering — UPE',
        'academic.context': 'Projekte im Bachelorstudium Software Engineering',
        'academic.fullstack': 'Entwicklung von <strong>Full-Stack</strong>-Anwendungen in Studienprojekten mit OOP, SOLID, Clean Code, REST-APIs und Datenpersistenz.',
        'academic.architecture': 'Umsetzung von Geschäftsregeln, Integration von Frontend und Backend sowie Projektorganisation nach Prinzipien der <strong>Softwarearchitektur</strong>.',
        'academic.collaboration': 'Zusammenarbeit mit anderen Entwicklern über <strong>Git/GitHub</strong> für Versionskontrolle, Codeorganisation und Integration der Projektteile.',
        'academic.problemSolving': 'Mitarbeit bei der Lösung technischer Probleme, Code-Reviews und gemeinsamen Entscheidungen im Team.',
        'academic.quality': 'Entwicklung von Lösungen mit Fokus auf <strong>Organisation, Modularität, Wartbarkeit und Softwarequalität</strong>.'
    }
};

Object.entries(experienceTranslations).forEach(([language, entries]) => {
    Object.entries(entries).forEach(([key, description]) => {
        translations[language]['experience.' + key] = description;
    });
});

// Language configurations
const languages = {
    'pt-BR': { name: 'Português', flag: '🇧🇷' },
    'en': { name: 'English', flag: '🇺🇸' },
    'es': { name: 'Español', flag: '🇪🇸' },
    'zh': { name: '中文', flag: '🇨🇳' },
    'de': { name: 'Deutsch', flag: '🇩🇪' }
};

// Initialize i18n
let currentLanguage = localStorage.getItem('language') || 'pt-BR';

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    updatePageLanguage();
    updateLanguageSelector();
}

function updatePageLanguage() {
    const t = translations[currentLanguage];
    if (!t) return;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (t[key]) {
            // Check if the element should use innerHTML (for elements with HTML tags)
            if (element.hasAttribute('data-i18n-html')) {
                element.innerHTML = t[key];
            } else {
                element.textContent = t[key];
            }
        }
    });
    
    // Update image descriptions along with the visible project text.
    document.querySelectorAll('[data-i18n-alt]').forEach(element => {
        const key = element.getAttribute('data-i18n-alt');
        if (t[key]) element.alt = t[key];
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (t[key]) {
            element.placeholder = t[key];
        }
    });
    
    // Update tooltips only if Bootstrap is available
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
        // Update tooltips - dispose all first, then recreate
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(element => {
            const tooltipInstance = bootstrap.Tooltip.getInstance(element);
            if (tooltipInstance) {
                tooltipInstance.dispose();
            }
        });
        
        // Now update tooltip text and recreate them
        document.querySelectorAll('[data-i18n-tooltip]').forEach(element => {
            const key = element.getAttribute('data-i18n-tooltip');
            if (t[key]) {
                // Update the data-bs-title attribute
                element.setAttribute('data-bs-title', t[key]);
            }
        });
        
        // Reinitialize all tooltips
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        [...tooltipTriggerList].forEach(tooltipTriggerEl => {
            new bootstrap.Tooltip(tooltipTriggerEl);
        });
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

function updateLanguageSelector() {
    const currentLang = languages[currentLanguage];
    
    // Update desktop selector
    const desktopBtn = document.getElementById('languageSelectorBtn');
    if (desktopBtn) {
        desktopBtn.innerHTML = `${currentLang.flag} <i class="fas fa-chevron-down ms-1"></i>`;
    }
    
    // Update mobile selector
    const mobileBtn = document.getElementById('mobileLanguageBtn');
    if (mobileBtn) {
        mobileBtn.innerHTML = `<span class="flag-emoji">${currentLang.flag}</span>`;
    }
    
    // Update active state in dropdowns
    document.querySelectorAll('[data-lang]').forEach(item => {
        const lang = item.getAttribute('data-lang');
        if (lang === currentLanguage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure Bootstrap tooltips are initialized first
    setTimeout(function() {
        // Set initial language
        updatePageLanguage();
        updateLanguageSelector();
    }, 50);
    
    // Add click handlers for language selection
    document.querySelectorAll('[data-lang]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // Close dropdowns after selection
            const desktopDropdown = document.getElementById('languageDropdown');
            const mobileDropdown = document.getElementById('mobileLanguageDropdown');
            
            if (desktopDropdown) {
                desktopDropdown.classList.remove('show');
            }
            if (mobileDropdown) {
                mobileDropdown.classList.remove('show');
            }
        });
    });
});

// Export for global use
window.i18n = {
    setLanguage,
    currentLanguage: () => currentLanguage,
    translate: (key) => translations[currentLanguage][key] || key
};

