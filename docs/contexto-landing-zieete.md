# ZIEETE — Contexto completo de la landing page

## 1. Propósito del proyecto

Este proyecto corresponde a la landing page comercial de ZIEETE, un software existente para la gestión operacional integral de empresas de transporte.

La landing no debe presentar ZIEETE como un simple software de despacho, FUEC o administración de vehículos.

La propuesta principal es mostrar a ZIEETE como una plataforma integral que conecta diferentes procesos de una empresa de transporte dentro de un mismo ecosistema digital.

Concepto principal de comunicación:

ZIEETE — Toda tu operación, conectada.

Mensaje complementario:

Gestiona. Controla. Capacita. Evalúa. Decide.

La landing tiene un objetivo principalmente comercial:

- Presentar claramente el software.
- Explicar qué problema resuelve.
- Mostrar sus principales soluciones y funcionalidades.
- Mostrar visualmente el software real.
- Generar confianza.
- Permitir solicitar una demostración.
- Facilitar contacto mediante WhatsApp y formulario.
- Permitir acceso al sistema a clientes actuales.

El objetivo de comprensión es que una persona que nunca haya escuchado hablar de ZIEETE pueda comprender rápidamente:

1. Qué es ZIEETE.
2. Para qué tipo de empresas sirve.
3. Qué problemas resuelve.
4. Qué procesos permite gestionar.
5. Cómo se ve el software.
6. Cómo solicitar una demostración.

## 2. Regla principal de desarrollo

IMPORTANTE

NO desarrollar toda la landing page de una sola vez.

El desarrollo debe hacerse:

archivo por archivo → sección por sección → validación → siguiente sección

Claude debe trabajar únicamente sobre el archivo o componente solicitado en cada interacción.

### Prohibiciones

- No crear todas las secciones.
- No crear funcionalidades futuras.
- No modificar componentes no relacionados.
- No cambiar la arquitectura.
- No instalar dependencias innecesarias.
- No crear contenido inventado.
- No rediseñar otras partes de la página.

## 3. Orden obligatorio de implementación

```
01. Configuración base
02. Layout global
03. Variables y estilos globales
04. Navbar
05. Hero
06. Problema
07. Solución
08. Soluciones por proceso
09. Funcionalidades
10. Cómo funciona
11. ZIEETE en acción
12. Beneficios
13. Video / demostración
14. FAQ
15. CTA / Contacto
16. Footer
17. Responsive
18. Animaciones
19. SEO
20. Accesibilidad
21. Optimización de rendimiento
22. Revisión final
```

No saltar directamente a las últimas etapas.

## 4. Arquitectura de la landing

```
NAVBAR
   ↓
HERO
   ↓
PROBLEMA
   ↓
SOLUCIÓN
   ↓
SOLUCIONES POR PROCESO
   ↓
FUNCIONALIDADES
   ↓
¿CÓMO FUNCIONA?
   ↓
ZIEETE EN ACCIÓN
   ↓
BENEFICIOS
   ↓
VIDEO / DEMOSTRACIÓN
   ↓
FAQ
   ↓
CTA / CONTACTO
   ↓
FOOTER
```

## 5. Estructura esperada de archivos

```
/
├── public/
│   ├── images/
│   ├── screenshots/
│   ├── videos/
│   └── icons/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Problem.astro
│   │   ├── Solution.astro
│   │   ├── ProcessSolutions.astro
│   │   ├── Features.astro
│   │   ├── HowItWorks.astro
│   │   ├── ProductShowcase.astro
│   │   ├── Benefits.astro
│   │   ├── DemoVideo.astro
│   │   ├── FAQ.astro
│   │   ├── CTAContact.astro
│   │   └── Footer.astro
│   │
│   ├── layouts/
│   │   └── Layout.astro
│   │
│   ├── pages/
│   │   └── index.astro
│   │
│   ├── data/
│   │   ├── navigation.ts
│   │   ├── solutions.ts
│   │   ├── features.ts
│   │   └── faq.ts
│   │
│   └── styles/
│       ├── global.css
│       └── variables.css
│
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── CLAUDE.md
```

## 6. Regla para index.astro

`src/pages/index.astro` debe funcionar principalmente como compositor de secciones.

La intención es que termine teniendo una estructura conceptualmente similar a:

```astro
<Layout>
  <Navbar />
  <Hero />
  <Problem />
  <Solution />
  <ProcessSolutions />
  <Features />
  <HowItWorks />
  <ProductShowcase />
  <Benefits />
  <DemoVideo />
  <FAQ />
  <CTAContact />
  <Footer />
</Layout>
```

No colocar toda la estructura HTML de la landing directamente dentro de `index.astro`.

## 7. Identidad del producto

Nombre: ZIEETE

Concepto: Toda tu operación, conectada.

Mensaje secundario: Gestiona. Controla. Capacita. Evalúa. Decide.

Producto: Software SaaS para la gestión operacional integral de empresas de transporte.

## 8. Público objetivo

La landing está dirigida principalmente a:

- Empresas de transporte especial de pasajeros.
- Empresas de transporte terrestre.
- Organizaciones que administran flotas propias o tercerizadas.

Usuarios internos:

- Gerentes.
- Coordinadores de operaciones.
- Responsables de mantenimiento.
- HSEQ / SST / PESV.
- Talento humano.
- Personal administrativo.
- Conductores.

## 9. Problema que comunica la página

La landing debe representar problemas reales del sector:

- Información dispersa.
- Excel.
- Documentos físicos.
- WhatsApp.
- Aplicaciones independientes.
- Controles separados.
- Vencimientos.
- Reprocesos.
- Dificultad para obtener evidencias.
- Dificultad para disponer de información confiable para tomar decisiones.

La narrativa debe ser:

```
Información dispersa
        ↓
Procesos desconectados
        ↓
Dificultad de control
        ↓
ZIEETE
        ↓
Operación centralizada
        ↓
Mayor trazabilidad
        ↓
Información consolidada
```

No utilizar lenguaje exageradamente alarmista.

## 10. Propuesta de valor

ZIEETE integra en una sola plataforma:

- Operación.
- Vehículos.
- Conductores.
- Mantenimiento.
- Inspecciones.
- Seguridad vial.
- HSEQ.
- Talento humano.
- E-learning.
- Proveedores.
- Indicadores.
- Evidencias y trazabilidad.

La diferenciación debe surgir de la integración de estos procesos, no de presentar una sola funcionalidad como si fuera todo el producto.

## 11. Secciones de la landing

### 01 — NAVBAR

Objetivo: permitir navegación y acceso rápido a las principales acciones.

Elementos:

- Logo ZIEETE.
- Navegación.
- Soluciones.
- Funcionalidades.
- Cómo funciona.
- Producto.
- Contacto.
- Iniciar sesión.
- Solicitar demo.

Prioridad: Alta.

### 02 — HERO

Objetivo: explicar ZIEETE inmediatamente.

Mensaje principal: Toda tu operación, conectada.

Debe comunicar:

- Qué es ZIEETE.
- Que está dirigido a empresas de transporte.
- Que integra diferentes procesos.
- Que existe un producto real.

CTA principal: Solicitar demo

CTA secundario: Conocer ZIEETE

Visual: priorizar dashboard real, mockup de computador, aplicación móvil, contexto visual relacionado con transporte.

El software debe ser el protagonista visual.

No hacer que una fotografía de un vehículo sea más importante que el producto.

### 03 — PROBLEMA

Objetivo: mostrar la realidad antes de centralizar procesos.

Elementos:

- Excel.
- WhatsApp.
- Documentos físicos.
- Aplicaciones independientes.
- Información dispersa.
- Controles separados.

Mensaje conceptual: Cuando la información está dispersa, controlar la operación se vuelve más complejo.

Después debe existir una transición visual hacia ZIEETE.

### 04 — SOLUCIÓN

Objetivo: presentar ZIEETE como respuesta al problema.

Concepto:

```
Operaciones
Vehículos
Conductores
Mantenimiento
HSEQ
E-learning
Proveedores
Indicadores

        ↓

      ZIEETE
```

Mensaje: Una plataforma para conectar los procesos críticos de tu empresa de transporte.

Esta sección debe ser principalmente visual.

### 05 — SOLUCIONES POR PROCESO

Sección fundamental.

Debe contener cinco áreas:

#### Operaciones
- Programación de servicios.
- Asignación.
- Conductores.
- Vehículos.
- FUEC.
- Plan de viaje.
- Novedades.
- Seguimiento.
- Cierre.
- Evidencias.

#### Flota y mantenimiento
- Documentación.
- Vencimientos.
- Mantenimiento preventivo.
- Órdenes de servicio.
- Historial.
- Inspecciones.

#### HSEQ y seguridad vial
- PESV.
- SG-SST.
- Inspecciones.
- Test de fatiga.
- Alertas.
- Evidencias.
- Trazabilidad.

#### Talento humano y E-learning
- Conductores.
- Trabajadores.
- Licencias.
- Cursos.
- Exámenes.
- Capacitaciones.
- Evaluaciones.
- Seguimiento.

#### Proveedores e indicadores
- Registro.
- Clasificación.
- Evaluación.
- Documentación.
- Desempeño.
- Dashboards.
- Indicadores.
- Alertas.

### 06 — FUNCIONALIDADES

Objetivo: mostrar qué puede hacer concretamente el software.

Priorizar:

- Gestión operacional.
- Gestión de vehículos.
- Gestión de conductores.
- Mantenimiento.
- Inspecciones.
- Seguridad vial.
- Gestión documental.
- E-learning.
- Proveedores.
- Indicadores.
- Alertas.

Regla: no convertir esta sección en una pared de texto.

Priorizar tarjetas, iconos, microinterfaces, capturas y datos visuales.

### 07 — ¿CÓMO FUNCIONA?

Utilizar el concepto:

```
GESTIONA
    ↓
CONTROLA
    ↓
CAPACITA
    ↓
EVALÚA
    ↓
DECIDE
```

La sección debe explicar el flujo de forma visual.

Evitar hacer un tutorial técnico.

### 08 — ZIEETE EN ACCIÓN

Debe tener mucho peso visual.

Mostrar capturas reales o autorizadas del software.

Posibles vistas:

- Dashboard.
- Operaciones.
- Vehículos.
- Mantenimiento.
- Inspecciones.
- HSEQ.
- Indicadores.
- Aplicación móvil.

Regla importante: toda información visible en capturas públicas debe ser ficticia, anonimizada o expresamente autorizada.

Nunca mostrar datos personales reales, placas reales, documentos reales, teléfonos, correos, credenciales o información sensible.

### 09 — BENEFICIOS

No repetir funcionalidades.

Esta sección responde: ¿Qué obtiene la empresa?

Beneficios:

- Centralización.
- Menos reprocesos.
- Trazabilidad.
- Alertas.
- Control.
- Información.

### 10 — VIDEO / DEMOSTRACIÓN

Crear espacio para incorporar posteriormente un video.

Título sugerido: Conoce ZIEETE en funcionamiento.

Debe existir un componente preparado para recibir video, thumbnail y botón de reproducción.

No inventar todavía el video.

### 11 — FAQ

La FAQ debe resolver objeciones comerciales.

Preguntas iniciales:

- ¿Para qué tipo de empresas está diseñado ZIEETE?
- ¿Puedo utilizar ZIEETE desde celular?
- ¿Cómo es la implementación?
- ¿Qué soporte ofrece?
- ¿La plataforma se adapta a diferentes empresas?
- ¿Cómo se gestiona la información?
- ¿Cómo puedo solicitar una demostración?

No crear respuestas técnicas que no estén confirmadas.

### 12 — CTA / CONTACTO

Objetivo: convertir el interés en una oportunidad comercial.

Mensaje: Conecta toda tu operación con ZIEETE.

CTA: Solicitar demo

Canales:

- WhatsApp.
- Formulario.
- Teléfono.
- Correo.

Formulario debe mantenerse corto:

- Nombre y apellido
- Empresa
- Cargo
- Celular / WhatsApp
- Correo
- Número aproximado de vehículos
- Mensaje
- Aceptación tratamiento de datos

Debe existir referencia a la política de privacidad.

### 13 — FOOTER

Debe incluir:

- Logo.
- Información de contacto.
- WhatsApp.
- Correo.
- Teléfono.
- Redes sociales.
- Política de privacidad.
- Tratamiento de datos.
- Acceso a ZIEETE.
- Copyright.

## 12. Diseño visual

La identidad debe ser:

- Profesional.
- Tecnológica.
- Moderna.
- Minimalista.
- Empresarial.
- Confiable.
- Clara.

Inspiración conceptual: SaaS B2B moderno + software empresarial + gestión operacional.

Evitar:

- Diseño institucional excesivo.
- Colores excesivos.
- Fotografía genérica sin propósito.
- Plantillas genéricas.
- Exceso de gradientes.
- Exceso de glassmorphism.
- Efectos futuristas sin relación con el producto.
- Animaciones invasivas.

La interfaz del software debe ser protagonista.

## 13. Fotografías e imágenes

No utilizar fotografías genéricas únicamente para llenar espacio.

Si se utiliza transporte, debe tener relación directa con operación, flotas, transporte especial, conductores, gestión.

Pero siempre priorizar el producto real.

## 14. Animaciones

Prioridad: moderada.

Las animaciones deben ser suaves, rápidas, profesionales y funcionales.

Permitidas:

- Fade.
- Slide.
- Scale sutil.
- Transiciones.
- Scroll reveal.
- Microinteracciones.
- Indicadores dinámicos.

Evitar:

- Animaciones permanentes.
- Parallax excesivo.
- Partículas.
- Efectos pesados.
- Animaciones que dificulten la lectura.

Las animaciones nunca deben tener prioridad sobre rendimiento.

## 15. Responsive

La página debe funcionar correctamente en desktop, tablet y mobile.

Mobile no debe ser una adaptación improvisada del desktop.

Diseñar cada componente pensando desde el inicio en:

- Ancho reducido.
- Touch.
- Tipografía.
- Botones.
- Imágenes.
- Mockups.
- Menú móvil.

## 16. Rendimiento

La velocidad es prioridad alta.

Priorizar:

- Astro.
- HTML estático cuando sea suficiente.
- Imágenes optimizadas.
- Lazy loading.
- SVG cuando sea apropiado.
- Evitar JavaScript innecesario.
- Evitar dependencias innecesarias.
- Evitar videos pesados cargados automáticamente.

No agregar una librería únicamente para realizar una animación simple.

## 17. SEO

La página debe estar preparada para posicionamiento orgánico.

Palabras clave objetivo:

- Software para empresas de transporte.
- Software de transporte especial.
- Software para transporte de pasajeros.
- Software FUEC.
- Software para control de flotas.
- Software para gestión de transporte.
- Software para mantenimiento de flotas.
- Software PESV.
- Software para inspección preoperacional.
- Software para control de conductores.
- Software para gestión de proveedores.
- Software para empresas de transporte Colombia.

No realizar keyword stuffing. El contenido debe seguir siendo natural.

## 18. Seguridad y privacidad

No exponer:

- Credenciales.
- Datos reales.
- Información sensible.
- Configuración interna.
- Arquitectura privada.
- Código fuente.
- Bases de datos.
- Mecanismos específicos de seguridad.

Las capturas deben utilizar datos ficticios, anonimizados o autorizados.

La landing debe incluir política de privacidad, tratamiento de datos y autorización en formularios.

## 19. Comunicación sobre ISO

ZIEETE dispone de herramientas que facilitan la gestión y generación de evidencias relacionadas con requisitos aplicables de:

- ISO 9001.
- ISO 45001.

NO utilizar:

“ZIEETE garantiza el cumplimiento de ISO 9001.”

No afirmar que el software por sí mismo garantiza conformidad.

Utilizar una comunicación similar a:

“ZIEETE facilita el cumplimiento y la generación de evidencias frente a requisitos aplicables de ISO 9001 e ISO 45001, integrando controles operacionales, formación, proveedores, mantenimiento, inspecciones y seguimiento en una sola plataforma.”

## 20. Datos pendientes de confirmación

No inventar información sobre:

- Tecnología utilizada actualmente por ZIEETE.
- Hosting.
- Dominio.
- API.
- Integraciones técnicas.
- URLs reales.
- Datos comerciales.
- Información de contacto.

Si se necesita alguno de estos datos, utilizar un placeholder claramente identificado.

Ejemplo:

```md
TODO: CONFIRMAR URL DE ZIEETE
TODO: CONFIRMAR WHATSAPP
TODO: CONFIRMAR CORREO
TODO: CONFIRMAR URL DE LOGIN
```

## 21. Separación entre contenido y presentación

Cuando sea conveniente, mantener datos reutilizables fuera de los componentes.

Ejemplo:

```md
src/data/solutions.ts
src/data/features.ts
src/data/faq.ts
src/data/navigation.ts
```

Los componentes deben encargarse principalmente de presentación, layout y interacción.

Los archivos de datos deben contener títulos, descripciones, etiquetas, listas y configuración.

No crear una arquitectura excesivamente compleja para una landing.

## 22. Reglas para Claude

Antes de modificar código:

1. Revisar la estructura actual del proyecto.
2. Revisar `package.json`.
3. Revisar configuración de Astro.
4. Revisar componentes existentes.
5. Revisar estilos existentes.
6. Determinar qué archivos son realmente necesarios.

Después:

1. Explicar brevemente qué archivo se va a modificar.
2. Realizar únicamente el cambio solicitado.
3. No modificar archivos no relacionados.
4. Mantener coherencia con las secciones anteriores.
5. Verificar que el proyecto siga siendo ejecutable.
6. Indicar qué archivo se modificó.
7. Indicar qué debería revisarse visualmente.

## 23. Orden de prioridad

Si existe conflicto entre decisiones visuales y técnicas, utilizar este orden:

```
1. Claridad del producto
2. Experiencia de usuario
3. Conversión
4. Responsive
5. Rendimiento
6. Accesibilidad
7. SEO
8. Identidad visual
9. Animaciones
```

La página debe verse profesional, pero el diseño no debe perjudicar la comprensión, rendimiento o conversión.

## 24. Criterio de éxito

La landing se considera correctamente estructurada cuando una persona que no conoce ZIEETE puede responder rápidamente:

```
¿Qué es?
→ Una plataforma integral para gestionar empresas de transporte.

¿Para quién?
→ Empresas de transporte y organizaciones con flotas.

¿Qué gestiona?
→ Operaciones, flota, mantenimiento, HSEQ, talento humano, E-learning, proveedores e indicadores.

¿Qué problema resuelve?
→ Información y procesos dispersos.

¿Cómo se ve?
→ Puede observar el software real.

¿Qué puedo hacer?
→ Solicitar una demostración.
```

## 25. Primera tarea de Claude

Al comenzar el desarrollo, NO crear todavía la landing completa.

Primero:

TAREA 01

Analizar el proyecto Astro existente y devolver:

1. Estructura actual de carpetas.
2. Archivos relevantes existentes.
3. Dependencias instaladas.
4. Sistema de estilos existente.
5. Configuración de Astro.
6. Assets existentes.
7. Qué debería reutilizarse.
8. Qué archivos nuevos serán necesarios.
9. Propuesta de orden de implementación.

No modificar archivos en esta primera tarea.

Esperar instrucciones después del análisis.

## 26. Principio final

La landing debe sentirse como la página oficial de un producto SaaS empresarial real, no como una demostración de habilidades de frontend.

La prioridad es:

Producto primero. Diseño después. Animación como complemento.

La experiencia completa debe comunicar:

ZIEETE

Toda tu operación, conectada.

Gestiona. Controla. Capacita. Evalúa. Decide.

## 27. Estado actual del proyecto

El proyecto ya tiene una base funcional desarrollada con Astro y con varias secciones implementadas, especialmente:

- Navbar
- Hero
- Problem
- Solution
- ProcessSolutions

Se mantiene la lógica del diseño y la narrativa del producto, y se debe continuar con un enfoque incremental, sección por sección, sin saltar pasos.

## 28. Recomendación de continuidad

El trabajo debe continuar de la siguiente manera:

1. Reutilizar el sistema visual y la narrativa actual.
2. Construir la siguiente sección solo cuando se haya validado la anterior.
3. Mantener la estructura modular.
4. No forzar un rediseño completo.
5. Priorizar claridad, comprensión, conversión y profesionalismo.

## 29. Uso recomendado en esta conversación

Este documento sirve como referencia permanente para:

- entender el propósito del producto,
- mantener coherencia con la identidad,
- recordar el orden de desarrollo,
- evitar cambios no alineados con la estrategia del proyecto,
- y continuar entregando trabajo incremental sin perder contexto.
