// =============================================================
//  src/data/courses.ts
//  Catálogo de cursos (datos quemados). Única fuente de verdad:
//  la consumen HomeView (lista) y CourseDetailView (por id).
//  Al conectar la API, se reemplaza por un store de Pinia.
// =============================================================

export type Status = 'completed' | 'in-progress' | 'pending' | 'locked'

export interface Module {
  id: number
  order: number
  status: Status
  title: string
  description: string
  grade?: string
  time: string
  lessons: number
  assessment: string
  progress?: number
  currentLesson?: string
}

export interface Course {
  id: string
  title: string
  badge: string
  description: string
  duration: string
  certification: string
  department: string
  lastAccess: string
  deadline: string
  progress: number
  note: string
  image: string
  category: string
  modules: Module[]
}

export const coursesData: Record<string, Course> = {
  '1': {
    id: '1',
    title: 'Inducción Institucional para Nuevos Colaboradores',
    badge: 'Onboarding',
    category: 'Onboarding',
    image: '/img/courses/induccion.jpg',
    description:
      'Conoce la estructura, cultura, procesos y políticas de la organización para desempeñar tu cargo de manera segura y alineada con los objetivos estratégicos de la entidad.',
    duration: '4 horas estimadas',
    certification: 'Certificación oficial',
    department: 'Dirección de Talento Humano',
    lastAccess: 'Ayer, 3:20 PM',
    deadline: '15 Dic 2026',
    progress: 25,
    note: 'Completa los cuatro módulos para obtener tu constancia de inducción institucional.',
    modules: [
      {
        id: 1,
        order: 1,
        status: 'completed',
        title: 'Bienvenida y presentación institucional',
        description:
          'Mensaje de bienvenida, historia de la entidad y ubicación del colaborador dentro de la estructura organizacional.',
        grade: 'Aprobado',
        time: '35 min invertidos',
        lessons: 3,
        assessment: 'Sin evaluación',
      },
      {
        id: 2,
        order: 2,
        status: 'in-progress',
        title: 'Cultura organizacional y valores',
        description:
          'Misión, visión, valores institucionales y código de integridad que guían el quehacer de la organización.',
        time: '20 min restantes',
        lessons: 4,
        assessment: 'Cuestionario de repaso',
        progress: 40,
        currentLesson: 'Lección 2 de 4',
      },
      {
        id: 3,
        order: 3,
        status: 'pending',
        title: 'Estructura y funciones del cargo',
        description:
          'Organigrama, áreas de la entidad y descripción de las responsabilidades asociadas al cargo.',
        time: '45 min',
        lessons: 5,
        assessment: 'Evaluación de comprensión',
      },
      {
        id: 4,
        order: 4,
        status: 'locked',
        title: 'Seguridad, salud en el trabajo y protocolos',
        description:
          'Lineamientos de autocuidado, prevención de riesgos y protocolos de seguridad en el entorno laboral.',
        time: '50 min',
        lessons: 6,
        assessment: 'Evaluación final certificable',
      },
    ],
  },

  '2': {
    id: '2',
    title: 'Cultura Organizacional e Identidad Institucional',
    badge: 'Habilidades',
    category: 'Habilidades',
    image: '/img/courses/cultura.jpg',
    description:
      'Explora en profundidad la misión, visión, valores y el código de integridad que definen la identidad institucional y fortalecen el sentido de pertenencia.',
    duration: '3 horas estimadas',
    certification: 'Certificación oficial',
    department: 'Dirección de Comunicaciones',
    lastAccess: 'Hace 3 días',
    deadline: '20 Dic 2026',
    progress: 100,
    note: '¡Felicidades! Completaste este curso. Tu certificado está disponible para descarga.',
    modules: [
      {
        id: 1,
        order: 1,
        status: 'completed',
        title: 'Historia y evolución institucional',
        description:
          'Antecedentes, hitos históricos y consolidación de la entidad a lo largo del tiempo.',
        grade: '92/100',
        time: '55 min invertidos',
        lessons: 4,
        assessment: 'Test de validación aprobado',
      },
      {
        id: 2,
        order: 2,
        status: 'completed',
        title: 'Misión, visión y valores',
        description:
          'Fundamentos estratégicos de la organización y su aplicación en el día a día del colaborador.',
        grade: '98/100',
        time: '1 h 10 min invertidos',
        lessons: 5,
        assessment: 'Cuestionario aprobado',
      },
      {
        id: 3,
        order: 3,
        status: 'completed',
        title: 'Código de integridad y objetivos estratégicos',
        description:
          'Principios éticos, conducta esperada y alineación con los objetivos estratégicos del Distrito.',
        grade: '95/100',
        time: '50 min invertidos',
        lessons: 4,
        assessment: 'Evaluación final aprobada (95%)',
      },
    ],
  },

  '3': {
    id: '3',
    title: 'Fundamentos de Seguridad de la Información Corporativa',
    badge: 'Programa obligatorio 2026',
    category: 'Normativo',
    image: '/img/courses/seguridad.jpg',
    description:
      'Instrucción obligatoria diseñada para salvaguardar la infraestructura digital, proteger activos de datos confidenciales y garantizar el cumplimiento de estándares de ciberseguridad y normativas corporativas vigentes.',
    duration: '8 horas estimadas',
    certification: 'Certificación oficial',
    department: 'Dirección de Seguridad de la Información (CISO)',
    lastAccess: 'Hoy, 10:42 AM',
    deadline: '30 Nov 2026',
    progress: 65,
    note: 'Se requiere completar el 100% de los módulos y superar la evaluación del Módulo 4 con un mínimo de 80% para tramitar la certificación.',
    modules: [
      {
        id: 1,
        order: 1,
        status: 'completed',
        title: 'Políticas de contraseñas y control de acceso',
        description:
          'Establecimiento de longitud y complejidad, autenticación multifactorial (MFA) obligatoria y segregación estricta de permisos según el principio de privilegio mínimo.',
        grade: '96/100',
        time: '1 h 45 min invertidas',
        lessons: 6,
        assessment: 'Test de validación aprobado',
      },
      {
        id: 2,
        order: 2,
        status: 'completed',
        title: 'Detección de ataques de phishing e ingeniería social',
        description:
          'Identificación visual de correos apócrifos, simulación práctica de spear-phishing, técnicas de spoofing y protocolo estandarizado de reporte al SOC corporativo.',
        grade: '100/100',
        time: '2 h 15 min invertidas',
        lessons: 8,
        assessment: 'Laboratorio de simulación aprobado',
      },
      {
        id: 3,
        order: 3,
        status: 'in-progress',
        title: 'Manejo de datos sensibles y cumplimiento regulatorio',
        description:
          'Clasificación de información confidencial, directrices para almacenamiento local y en nube, normativas GDPR/HIPAA y prevención de fuga de datos (DLP).',
        time: '45 min restantes',
        lessons: 7,
        assessment: 'Evaluación final pendiente (mínimo 80%)',
        progress: 60,
        currentLesson: 'Lección 3 de 5',
      },
      {
        id: 4,
        order: 4,
        status: 'pending',
        title: 'Plan de respuesta a incidentes y copias de seguridad',
        description:
          'Canales de escalamiento, remediación ante ransomware, aislamiento de hosts y política de restauración de copias de respaldo (Backups 3-2-1).',
        time: '2 h 00 min',
        lessons: 5,
        assessment: 'Evaluación final certificable (80% requerido)',
      },
    ],
  },
}

// Lista para el Home (tarjetas de la oferta de cursos).
export const courseList: Course[] = Object.values(coursesData)
