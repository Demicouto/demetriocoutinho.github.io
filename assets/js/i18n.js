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
        'hero.description': 'Desenvolvedor apaixonado por criar soluções robustas com Java.',
        'hero.viewProjects': 'Ver Projetos',
        'hero.contact': 'Entrar em Contato',
        
        // About Section
        'about.title': 'Sobre Mim',
        'about.p1': 'Atualmente cursando o quarto termo de Engenharia de Software, minha trajetória é marcada pela disciplina e pela busca constante por excelência.',
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
        'tech.java': 'Linguagem robusta para sistemas backend corporativos.',
        'tech.javascript': 'Interatividade no frontend e lógica no backend.',
        'tech.html': 'Estrutura semântica e estilização e layout responsivo para aplicações web.',
        'tech.sql': 'Modelagem e consulta eficiente de bancos de dados.',
        'tech.git': 'Controle de versão e colaboração em equipe.',
        'tech.docker': 'Containerização para ambientes de deploy consistentes.',
        'tech.spring': 'Framework Spring Boot para APIs REST e serviços backend escaláveis.',
        'tech.security': 'Proteção de dados, vulnerabilidades e OWASP.',
        'tech.ai': 'Integração com LLMs e ferramentas de GenAI.',
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
        
        // Experience Section
        'experience.title': 'Experiência Profissional',
        'experience.current': 'Atual',
        'experience.showMore': 'Ver Mais Experiências',
        'experience.showLess': 'Ver Menos',
        'experience.nap.company': 'Auxiliar Pedagógico',
        'experience.nap.position': 'Prestador de serviços',
        'experience.nap.description': 'Auxílio em atividades de apoio pedagógico e suporte logístico.',

        
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
        'certs.info': 'Clique no ícone para visualizar o certificado',
        
        // Mobile Menu
        'mobile.menu': 'Menu',
        'mobile.navigation': 'Navegação',
        'mobile.contactButton': 'Vamos conversar',
        'mobile.language': 'Idioma',
        
        // Tooltips
        'tooltip.university': 'Universidade de Pernambuco',
        'tooltip.englishLevel': 'Nível intermediário de inglês. Sendo capaz de compreender textos complexos e me comunicar em alguns contextos.',
        'tooltip.degree': 'Cursando o 4º periodo da faculdade de Engenharia de Software na UPE',
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
        'hero.description': 'Developer passionate about creating robust solutions with Java.',
        'hero.viewProjects': 'View Projects',
        'hero.contact': 'Get in Touch',
        
        // About Section
        'about.title': 'About Me',
        'about.p1': 'Currently in my fourth term of Software Engineering, my journey is marked by discipline and the constant pursuit of excellence.',
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
        'tech.html': 'Semantic structure and responsive visual styling.',
        'tech.sql': 'Efficient database modeling and querying.',
        'tech.git': 'Version control and team collaboration.',
        'tech.docker': 'Containerization for consistent deployment environments.',
        'tech.spring': 'Spring Boot framework for REST APIs and scalable backend services.',
        'tech.security': 'Data protection, vulnerabilities, and OWASP.',
        'tech.ai': 'Integration with LLMs and GenAI tools.',
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
        
        // Experience Section
        'experience.title': 'Professional Experience',
        'experience.current': 'Current',
        'experience.showMore': 'Show More Experience',
        'experience.showLess': 'Show Less',
        'experience.nap.company': 'Pedagogical Assistant',
        'experience.nap.position': 'Service Provider',
        'experience.nap.description': 'Assistance in pedagogical support activities and logistical support.',
        
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
        'certs.info': 'Click the icon to view the certificate',
        
        // Mobile Menu
        'mobile.menu': 'Menu',
        'mobile.navigation': 'Navigation',
        'mobile.contactButton': 'Let\'s talk',
        'mobile.language': 'Language',
        
        // Tooltips
        'tooltip.university': 'UPE - Universidade de Pernambuco',
        'tooltip.englishLevel': 'Intermediate English level according to the Common European Framework of Reference for Languages',
        'tooltip.degree': 'Currently in the 4th term of Software Engineering at UPE',
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
        'hero.description': 'Desarrollador apasionado por crear soluciones robustas con Java.',
        'hero.viewProjects': 'Ver Proyectos',
        'hero.contact': 'Ponerse en Contacto',
        
        // About Section
        'about.title': 'Sobre Mí',
        'about.p1': 'Actualmente cursando el cuarto período de Ingeniería de Software, mi trayectoria está marcada por la disciplina y la búsqueda constante de excelencia.',
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
        'tech.html': 'Estructura semántica y estilización visual responsiva.',
        'tech.sql': 'Modelado y consulta eficiente de bases de datos.',
        'tech.git': 'Control de versiones y colaboración en equipo.',
        'tech.docker': 'Contenedorización para entornos de despliegue consistentes.',
        'tech.security': 'Protección de datos, vulnerabilidades y OWASP.',
        'tech.ai': 'Integración con LLMs y herramientas de GenAI.',
        'tech.agile': 'Metodologías ágiles (Scrum/Kanban) para proyectos.',

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
        
        // Experience Section
        'experience.title': 'Experiencia Profesional',
        'experience.current': 'Actual',
        'experience.showMore': 'Ver Más Experiencias',
        'experience.showLess': 'Ver Menos',
        'experience.nap.company': 'Auxiliar Pedagógico',
        'experience.nap.position': 'Prestador de serviços',
        'experience.nap.description': 'Auxílio en atividades de apoio pedagógico y suporte logístico.',
        
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
        'certs.info': 'Haz clic en el icono para ver el certificado',
        
        // Mobile Menu
        'mobile.menu': 'Menú',
        'mobile.navigation': 'Navegación',
        'mobile.contactButton': 'Hablemos',
        'mobile.language': 'Idioma',
        
        // Tooltips
        'tooltip.university': 'UPE - Universidade de Pernambuco',
        'tooltip.englishLevel': 'Nivel intermedio de inglés según el Marco Común Europeo de Referencia para las Lenguas',
        'tooltip.degree': 'Cursando actualmente el 4to período de Ingeniería de Software en UPE',
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
        'hero.description': '热衷于使用 Java 创建强大解决方案的开发者。',
        'hero.viewProjects': '查看项目',
        'hero.contact': '联系我',
        
        // About Section
        'about.title': '关于我',
        'about.p1': '目前正在攻读软件工程第四学期，我的旅程以纪律和对卓越的不断追求为特征。',
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
        'tech.html': '语义结构和响应式视觉样式。',
        'tech.sql': '高效的数据库建模和查询。',
        'tech.git': '版本控制和团队协作。',
        'tech.docker': '容器化以获得一致的部署环境。',
        'tech.security': '数据保护、漏洞和 OWASP。',
        'tech.ai': '与 LLM 和 GenAI 工具集成。',
        'tech.agile': '项目的敏捷方法论（Scrum/Kanban）。',

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
        
        // Experience Section
        'experience.title': '专业经验',
        'experience.current': '当前',
        'experience.showMore': '查看更多经验',
        'experience.showLess': '收起',
        'experience.nap.company': '教学助理',
        'experience.nap.position': '服务提供者',
        'experience.nap.description': '协助教学支持活动和物流支持。',
        
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
        'certs.info': '点击图标查看证书',
        
        // Mobile Menu
        'mobile.menu': '菜单',
        'mobile.navigation': '导航',
        'mobile.contactButton': '让我们谈谈',
        'mobile.language': '语言',
        
        // Tooltips
        'tooltip.university': 'UPE - 伯南布哥大学',
        'tooltip.englishLevel': '根据欧洲语言共同参考框架的中级英语水平',
        'tooltip.degree': '目前在 UPE 就读软件工程第四学期',
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
        'hero.description': 'Entwickler mit Leidenschaft für robuste Lösungen mit Java.',
        'hero.viewProjects': 'Projekte ansehen',
        'hero.contact': 'Kontakt aufnehmen',
        
        // About Section
        'about.title': 'Über mich',
        'about.p1': 'Ich befinde mich derzeit im vierten Semester des Software-Engineerings, und mein Weg ist geprägt von Disziplin und dem ständigen Streben nach Exzellenz.',
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
        'tech.html': 'Semantische Struktur und responsives visuelles Styling.',
        'tech.sql': 'Effiziente Datenbankmodellierung und -abfrage.',
        'tech.git': 'Versionskontrolle und Teamzusammenarbeit.',
        'tech.docker': 'Containerisierung für konsistente Bereitstellungsumgebungen.',
        'tech.security': 'Datenschutz, Schwachstellen und OWASP.',
        'tech.ai': 'Integration mit LLMs und GenAI-Tools.',
        'tech.agile': 'Agile Methoden (Scrum/Kanban) für Projekte.',

        // Other Projects
        'projects.title': 'Projekte',
        'projects.showMore': 'Mehr Projekte anzeigen',
        'projects.showLess': 'Weniger anzeigen',
        'projects.almanaque.title': 'Almanaque',
        'projects.almanaque.description': 'Bibliotheksverwaltungssystem, das in Java (CLI) mit PostgreSQL-Datenpersistenz entwickelt wurde. Das Projekt folgt Best Practices für mehrschichtige Architektur und verwendet das MVC-Muster.',
        'projects.petPrime.title': 'Pet-Prime',
        'projects.petPrime.description': 'Reines Java-Terminalsystem zur Verwaltung einer kompletten Tierpflege mit Funktionen für Mitarbeiter-, Produkt-, Service- und Veterinärverwaltung. Fokus auf das Erlernen der objektorientierten Programmierung.',
        'projects.BibSync.title': 'BibSync',
        'projects.BibSync.description': 'Mit Java (JDK 25) entwickeltes Tool zum Importieren, Analysieren und Suchen in bibliografischen .bib-Datenbanken aus wissenschaftlichen Repositorys wie IEEE und MDPI. Entwickelt mit klassischen Software-Engineering-Mustern und gewährleistet Modularität und Erweiterbarkeit.',
        
        // Experience Section
        'experience.title': 'Berufserfahrung',
        'experience.current': 'Aktuell',
        'experience.showMore': 'Mehr Erfahrung anzeigen',
        'experience.showLess': 'Weniger anzeigen',
        'experience.nap.company': 'Pädagogischer Assistent',
        'experience.nap.position': 'Dienstleister',
        'experience.nap.description': 'Unterstützung bei pädagogischen Unterstützungsaktivitäten und logistischem Support.',
        
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
        'certs.info': 'Klicken Sie auf das Symbol, um das Zertifikat anzuzeigen',
        
        // Mobile Menu
        'mobile.menu': 'Menü',
        'mobile.navigation': 'Navigation',
        'mobile.contactButton': 'Lass uns reden',
        'mobile.language': 'Sprache',
        
        // Tooltips
        'tooltip.university': 'UPE - Universität von Pernambuco',
        'tooltip.englishLevel': 'Mittleres Englischniveau nach dem Gemeinsamen Europäischen Referenzrahmen für Sprachen',
        'tooltip.degree': 'Derzeit im 4. Semester Software-Engineering an der UPE',
        'tooltip.viewCertificate': 'Klicken Sie auf das Symbol, um das Zertifikat anzuzeigen',
    }
};

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

