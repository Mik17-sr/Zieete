import type { IconName } from './icons';

export interface Highlight {
  title: string;
  text: string;
  consequence?: string;
}

// Props de Illustration.astro
export interface ArtProps {
  kind:
    | 'document'
    | 'checklist'
    | 'form'
    | 'table'
    | 'timeline'
    | 'alerts'
    | 'bars'
    | 'files'
    | 'assign'
    | 'permit'
    | 'profile'
    | 'route'
    | 'notifs'
    | 'donut'
    | 'stepper'
    | 'gallery'
    | 'calendar'
    | 'gauge'
    | 'kanban'
    | 'builder'
    | 'quiz'
    | 'toggles'
    | 'rating'
    | 'columns'
    | 'tags'
    | 'dashboard';
  title: string;
  rows: string[];
  states?: ('ok' | 'warn')[];
  labels?: [string, string];
  active?: number; // paso/columna/día activo según el tipo
  values?: number[];
  dynamic?: boolean;
  variant?: 'person' | 'vehicle' | 'license' | 'truck';
}

export interface SolutionItem {
  icon: IconName; // icono del elemento (mismos iconos del hero)
  id: string; // también es el nombre de la captura: public/screenshots/{area}-{id}.webp|png|jpg
  label: string; // texto que ve el usuario
  art: ArtProps; // ilustración de referencia (se reemplaza si existe la captura)
}

export interface Solution {
  icon: IconName; // icono del área (el mismo del nodo en el hero)
  id: string; // id del área
  title: string; // nombre del proceso (pregunta 12 del cuestionario)
  group: string; // nombre del grupo de funcionalidades (pregunta 9)
  items: SolutionItem[]; // qué gestiona (pregunta 9)
  highlight: Highlight; // lo que lo hace distinto (preguntas 6, 9 y 33)
  outcome: string; // qué obtiene la empresa (pregunta 10)
  connections: string[]; // ids de áreas conectadas
  demo?: 'asignacion';
}

// Todo el contenido sale del cuestionario de requerimientos de ZIEETE.
// No agregar módulos ni funciones que no estén confirmados por la dirección
// o por el equipo de desarrollo.
//
// ILUSTRACIONES: cada elemento tiene su propia ilustración genérica (barras de
// relleno, sin datos reales). Si existe una captura en
// public/screenshots/{area}-{elemento}.(webp|png|jpg) reemplaza a la ilustración.
// Las capturas deben usar información ficticia, anonimizada o autorizada.
export const solutions: Solution[] = [
  {
    id: 'operaciones',
    icon: 'clipboard',
    title: 'Operaciones',
    group: 'Gestión y control operacional',
    items: [
      {
        id: 'programacion',
        icon: 'calendar',
        label: 'Programación y asignación de servicios',
        art: {
          kind: 'assign',
          title: 'Asignar servicio',
          rows: ['Vehículo', 'Conductor A', 'Conductor B'],
          states: ['ok', 'ok', 'warn'],
        },
      },
      {
        id: 'conductores-vehiculos',
        icon: 'users',
        label: 'Gestión de conductores y vehículos',
        art: {
          kind: 'profile',
          variant: 'person',
          title: 'Ficha del conductor',
          rows: ['Licencia', 'Seguridad social', 'Curso vigente', 'Examen médico'],
          states: ['ok', 'ok', 'ok', 'warn'],
        },
      },
      {
        id: 'fuec',
        icon: 'file',
        label: 'FUEC',
        art: {
          kind: 'permit',
          title: 'FUEC',
          rows: ['Contratante', 'Ruta', 'Vigencia'],
        },
      },
      {
        id: 'plan-viaje',
        icon: 'route',
        label: 'Plan de viaje',
        art: {
          kind: 'route',
          title: 'Plan de viaje',
          rows: ['Origen', 'Control', 'Descanso', 'Destino'],
          active: 1,
        },
      },
      {
        id: 'novedades',
        icon: 'bell',
        label: 'Control de novedades',
        art: {
          kind: 'notifs',
          title: 'Novedades',
          rows: ['Retraso en ruta', 'Novedad reportada', 'Novedad atendida'],
          states: ['warn', 'warn', 'ok'],
        },
      },
      {
        id: 'seguimiento',
        icon: 'chart',
        label: 'Seguimiento de la operación',
        art: {
          kind: 'donut',
          title: 'Estado de servicios',
          rows: ['Programados', 'En curso', 'Finalizados'],
          values: [30, 25, 45],
        },
      },
      {
        id: 'cierre',
        icon: 'check',
        label: 'Precierre y cierre de servicios',
        art: {
          kind: 'stepper',
          title: 'Cierre de servicio',
          rows: ['Evidencias', 'Novedades', 'Precierre', 'Cierre'],
          active: 2,
        },
      },
      {
        id: 'evidencias',
        icon: 'camera',
        label: 'Almacenamiento de evidencias',
        art: {
          kind: 'gallery',
          title: 'Evidencias del servicio',
          rows: ['Foto', 'Firma', 'Acta', 'Registro'],
        },
      },
    ],
    highlight: {
      title: 'Controles preventivos antes de asignar',
      text: 'Alertas y controles preventivos impiden la asignación de un servicio cuando el vehículo o el conductor no cuenta con los requisitos o documentos definidos y vigentes.',
      consequence:
        'Contribuye a reducir el riesgo de incumplimientos, sanciones, inmovilizaciones e interrupciones de la operación.',
    },
    outcome:
      'Mayor trazabilidad de la operación y disponibilidad de evidencias y datos en tiempo real.',
    connections: ['flota', 'talento'],
    demo: 'asignacion',
  },
  {
    id: 'flota',
    icon: 'truck',
    title: 'Flota y mantenimiento',
    group: 'Gestión de flota, mantenimiento e inspecciones',
    items: [
      {
        id: 'control-documental',
        icon: 'folder',
        label: 'Control documental de vehículos',
        art: {
          kind: 'profile',
          variant: 'truck',
          title: 'Ficha del vehículo',
          rows: ['SOAT', 'Revisión técnico-mecánica', 'Tarjeta de operación', 'Póliza'],
          states: ['ok', 'ok', 'warn', 'ok'],
        },
      },
      {
        id: 'vencimientos',
        icon: 'clock',
        label: 'Control de vencimientos',
        art: {
          kind: 'calendar',
          title: 'Calendario de vencimientos',
          rows: [],
          values: [5, 12, 26],
          active: 19,
        },
      },
      {
        id: 'mantenimiento-preventivo',
        icon: 'wrench',
        label: 'Mantenimiento preventivo por tiempo o kilometraje',
        art: {
          kind: 'gauge',
          title: 'Mantenimiento preventivo',
          rows: ['Por tiempo', 'Por kilometraje'],
          values: [72],
        },
      },
      {
        id: 'ordenes-servicio',
        icon: 'clipboard',
        label: 'Órdenes de servicio',
        art: {
          kind: 'kanban',
          title: 'Órdenes de servicio',
          rows: ['Pendiente', 'En taller', 'Listo'],
          values: [2, 3, 1],
          active: 1,
        },
      },
      {
        id: 'historial',
        icon: 'layers',
        label: 'Historial de mantenimiento',
        art: {
          kind: 'timeline',
          title: 'Historial del vehículo',
          rows: ['Servicio 1', 'Servicio 2', 'Servicio 3', 'Servicio 4'],
          active: 3,
        },
      },
      {
        id: 'inspecciones',
        icon: 'search',
        label: 'Inspecciones preoperacionales dinámicas',
        art: {
          kind: 'builder',
          title: 'Diseñador de inspecciones',
          rows: ['Tipo de vehículo', 'Frenos', 'Luces', 'Observaciones'],
          active: 1,
        },
      },
    ],
    highlight: {
      title: 'Inspecciones preoperacionales a la medida',
      text: 'Formularios dinámicos para diseñar inspecciones adaptadas al tipo y a las características de cada vehículo.',
    },
    outcome:
      'Alertas preventivas frente a vencimientos, mejor control del mantenimiento y digitalización de inspecciones.',
    connections: ['operaciones', 'hseq'],
  },
  {
    id: 'hseq',
    icon: 'shield',
    title: 'HSEQ y seguridad vial',
    group: 'Seguridad vial, HSEQ y cumplimiento',
    items: [
      {
        id: 'pesv',
        icon: 'road',
        label: 'Controles del PESV',
        art: {
          kind: 'checklist',
          title: 'Controles PESV',
          rows: ['Control 1', 'Control 2', 'Control 3'],
          states: ['ok', 'ok', 'warn'],
        },
      },
      {
        id: 'sg-sst',
        icon: 'shield',
        label: 'Controles del SG-SST',
        art: {
          kind: 'gauge',
          title: 'Cumplimiento SG-SST',
          rows: ['Controles', 'Seguimiento', 'Evidencias'],
          values: [82],
        },
      },
      {
        id: 'fatiga',
        icon: 'moon',
        label: 'Test de fatiga',
        art: {
          kind: 'quiz',
          title: 'Test de fatiga',
          rows: ['Descansé lo suficiente', 'Me siento alerta', 'Tuve somnolencia'],
          active: 1,
        },
      },
      {
        id: 'inspecciones',
        icon: 'search',
        label: 'Inspecciones',
        art: {
          kind: 'toggles',
          title: 'Inspección',
          rows: ['Luces', 'Frenos', 'Llantas', 'Extintor'],
          states: ['ok', 'ok', 'warn', 'ok'],
        },
      },
      {
        id: 'requisitos',
        icon: 'check',
        label: 'Seguimiento de requisitos',
        art: {
          kind: 'table',
          title: 'Requisitos',
          rows: ['Requisito 1', 'Requisito 2', 'Requisito 3'],
          states: ['ok', 'warn', 'ok'],
          labels: ['Cumple', 'Pendiente'],
        },
      },
      {
        id: 'alertas',
        icon: 'bell',
        label: 'Alertas',
        art: {
          kind: 'notifs',
          title: 'Alertas',
          rows: ['Requisito por vencer', 'Control pendiente', 'Control cumplido'],
          states: ['warn', 'warn', 'ok'],
        },
      },
      {
        id: 'evidencias',
        icon: 'folder',
        label: 'Evidencias',
        art: {
          kind: 'files',
          title: 'Evidencias',
          rows: ['Registros', 'Informes', 'Fotos', 'Actas'],
        },
      },
      {
        id: 'trazabilidad',
        icon: 'route',
        label: 'Trazabilidad',
        art: {
          kind: 'timeline',
          title: 'Trazabilidad',
          rows: ['Control', 'Evidencia', 'Seguimiento', 'Cierre'],
          active: 2,
        },
      },
    ],
    highlight: {
      title: 'Evidencias frente a ISO 9001 e ISO 45001',
      text: 'ZIEETE facilita el cumplimiento y la generación de evidencias frente a requisitos aplicables de ISO 9001 e ISO 45001, integrando controles operacionales, formación, proveedores, mantenimiento, inspecciones y seguimiento en una sola plataforma.',
    },
    outcome:
      'Seguimiento, control y conservación de las evidencias de los controles implementados.',
    connections: ['flota', 'talento', 'proveedores'],
  },
  {
    id: 'talento',
    icon: 'cap',
    title: 'Talento humano y E-learning',
    group: 'Talento humano y E-learning',
    items: [
      {
        id: 'documental',
        icon: 'folder',
        label: 'Gestión documental de conductores y trabajadores',
        art: {
          kind: 'profile',
          variant: 'person',
          title: 'Ficha del trabajador',
          rows: ['Identificación', 'Contrato', 'Afiliaciones', 'Exámenes médicos'],
          states: ['ok', 'ok', 'ok', 'warn'],
        },
      },
      {
        id: 'licencias',
        icon: 'idcard',
        label: 'Control de licencias',
        art: {
          kind: 'profile',
          variant: 'license',
          title: 'Licencia de conducción',
          rows: ['Categoría', 'Vigencia'],
          states: ['ok', 'warn'],
        },
      },
      {
        id: 'cursos-examenes',
        icon: 'exam',
        label: 'Cursos y exámenes',
        art: {
          kind: 'quiz',
          title: 'Examen del curso',
          rows: ['Opción A', 'Opción B', 'Opción C'],
          active: 0,
        },
      },
      {
        id: 'elearning',
        icon: 'book',
        label: 'Plataforma E-learning',
        art: {
          kind: 'bars',
          title: 'Mis cursos',
          rows: ['Curso 1', 'Curso 2', 'Curso 3'],
          values: [90, 55, 20],
        },
      },
      {
        id: 'programacion',
        icon: 'calendar',
        label: 'Programación de capacitaciones',
        art: {
          kind: 'calendar',
          title: 'Calendario de capacitaciones',
          rows: [],
          values: [3, 10, 24],
          active: 17,
        },
      },
      {
        id: 'evaluaciones',
        icon: 'award',
        label: 'Evaluaciones',
        art: {
          kind: 'rating',
          title: 'Evaluación',
          rows: ['Conocimiento', 'Actitud', 'Práctica'],
          values: [4, 3, 5],
        },
      },
      {
        id: 'participacion',
        icon: 'users',
        label: 'Seguimiento de participación',
        art: {
          kind: 'columns',
          title: 'Participación por grupo',
          rows: ['G1', 'G2', 'G3', 'G4'],
          values: [80, 60, 92, 45],
          active: 2,
        },
      },
      {
        id: 'resultados',
        icon: 'chart',
        label: 'Resultados de formación',
        art: {
          kind: 'donut',
          title: 'Resultados',
          rows: ['Aprobaron', 'En proceso', 'Pendientes'],
          values: [60, 25, 15],
        },
      },
    ],
    highlight: {
      title: 'Plataforma E-learning',
      text: 'Gestión y seguimiento de capacitaciones: cursos, exámenes, evaluaciones, participación y resultados de formación.',
    },
    outcome:
      'Capacitación mediante E-learning, con evidencias de competencia y formación.',
    connections: ['operaciones', 'hseq'],
  },
  {
    id: 'proveedores',
    icon: 'chart',
    title: 'Proveedores e indicadores',
    group: 'Proveedores, indicadores y gestión gerencial',
    items: [
      {
        id: 'registro',
        icon: 'userplus',
        label: 'Registro de proveedores',
        art: {
          kind: 'form',
          title: 'Nuevo proveedor',
          rows: ['Razón social', 'Tipo de proveedor', 'Contacto'],
        },
      },
      {
        id: 'clasificacion',
        icon: 'layers',
        label: 'Clasificación',
        art: {
          kind: 'tags',
          title: 'Clasificación',
          rows: ['Crítico', 'Estratégico', 'Estándar', 'Ocasional'],
          states: ['ok', 'warn', 'ok', 'ok'],
        },
      },
      {
        id: 'seguimiento',
        icon: 'search',
        label: 'Seguimiento',
        art: {
          kind: 'timeline',
          title: 'Seguimiento',
          rows: ['Registro', 'Evaluación', 'Seguimiento', 'Reevaluación'],
          active: 2,
        },
      },
      {
        id: 'evaluacion',
        icon: 'star',
        label: 'Evaluación',
        art: {
          kind: 'rating',
          title: 'Evaluación de proveedor',
          rows: ['Calidad', 'Cumplimiento', 'Servicio'],
          values: [5, 4, 3],
        },
      },
      {
        id: 'documentacion',
        icon: 'file',
        label: 'Control de documentación',
        art: {
          kind: 'document',
          title: 'Documentos del proveedor',
          rows: ['RUT', 'Certificaciones', 'Pólizas', 'Contrato'],
        },
      },
      {
        id: 'desempeno',
        icon: 'award',
        label: 'Control de desempeño',
        art: {
          kind: 'columns',
          title: 'Desempeño por proveedor',
          rows: ['P1', 'P2', 'P3', 'P4', 'P5'],
          values: [85, 60, 40, 72, 55],
          active: 0,
        },
      },
      {
        id: 'dashboards',
        icon: 'layers',
        label: 'Dashboards',
        art: {
          kind: 'dashboard',
          title: 'Dashboard gerencial',
          rows: ['Servicios', 'Cumplimiento', 'Alertas'],
          values: [40, 65, 50, 80, 60, 90],
          active: 5,
        },
      },
      {
        id: 'indicadores',
        icon: 'chart',
        label: 'Indicadores',
        art: {
          kind: 'gauge',
          title: 'Indicador de cumplimiento',
          rows: ['Cumplimiento', 'Formación'],
          values: [88],
        },
      },
      {
        id: 'alertas',
        icon: 'bell',
        label: 'Alertas',
        art: {
          kind: 'alerts',
          title: 'Alertas',
          rows: ['Documento A', 'Documento B', 'Documento C'],
          states: ['warn', 'ok', 'ok'],
          labels: ['Vigente', 'Por vencer'],
        },
      },
    ],
    highlight: {
      title: 'Módulo de proveedores y visión gerencial',
      text: 'Gestión, seguimiento y evaluación de proveedores, complementado con dashboards, indicadores y alertas para facilitar la toma de decisiones.',
    },
    outcome:
      'Mejor control de proveedores y mayor capacidad para tomar decisiones basadas en información consolidada.',
    connections: ['hseq'],
  },
];