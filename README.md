# Portfolio de Backend Developer en Astro

Este es un portfolio profesional para un desarrollador backend construido con Astro, siguiendo las mejores prácticas y utilizando componentes reutilizables.

## 🚀 Tecnologías utilizadas

- **[Astro](https://astro.build/)**: Framework web moderno con renderizado en el servidor
- **[React](https://reactjs.org/)**: Para componentes interactivos
- **[Tailwind CSS](https://tailwindcss.com/)**: Para estilos personalizados y responsive
- **[TypeScript](https://www.typescriptlang.org/)**: Para tipado estático y mejor DX
- **[Framer Motion](https://www.framer.com/motion/)**: Para animaciones

## 🧞 Características principales

- **Sección de About:** Muestra una breve descripción personal y una foto de perfil.
- **Sección de Skills:** Muestra un listado de tecnologías organizadas por categorías.
- **Sección de Experiencia:** Muestra de forma clara la posición, empresa y responsabilidades.
- **Sección de Proyectos:** Presenta proyectos con sus tecnologías asociadas, links a demos y repositorios.
- **Formulario de Contacto:** Incluye opciones para contacto vía correo y WhatsApp.

## 📦 Estructura del proyecto

```
/
├── src/
│   ├── components/         # Componentes reutilizables de Astro
│   │   └── ui/             # Componentes básicos de UI
│   ├── layouts/            # Layouts para las páginas
│   ├── pages/              # Páginas del sitio (rutas)
│   ├── data/               # Datos estructurados
│   ├── styles/             # Estilos globales
│   └── utils/              # Utilidades y helpers
└── public/                 # Activos estáticos
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                  | Acción                                             |
| :----------------------- | :------------------------------------------------- |
| `npm install`            | Instala dependencias                               |
| `npm run dev`            | Inicia servidor local en `localhost:4321`          |
| `npm run build`          | Construye tu sitio para producción en `./dist/`    |
| `npm run preview`        | Vista previa de la compilación localmente          |

## 💡 Mejores prácticas implementadas

- **Componentes atómicos**: Separación clara de componentes reutilizables
- **Datos separados de la presentación**: Todos los datos están en carpeta `/data`
- **Tipado estricto**: Uso de TypeScript en todo el proyecto
- **Estilos optimizados**: Uso de Tailwind CSS con sistema de colores personalizado
- **SEO optimizado**: Meta etiquetas apropiadas y estructura semántica
- **Rendimiento optimizado**: Astro proporciona renderizado híbrido y carga mínima de JS

## 🔧 Instalación

1. Clona este repositorio
2. Instala las dependencias con `npm install`
3. Ejecuta `npm run dev` para iniciar el servidor de desarrollo
4. Personaliza los datos en la carpeta `/src/data` con tu información

## 🌐 Despliegue

Este proyecto puede ser desplegado en cualquier plataforma que soporte sitios estáticos como:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
