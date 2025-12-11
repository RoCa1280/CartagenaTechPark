# 🌴 Parque Tecnológico Cartagena | Hub de Innovación & Web3

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![React](https://img.shields.io/badge/react-v19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-v5-3178C6?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-v3-38B2AC?logo=tailwind-css)

> La puerta de entrada digital al ecosistema de emprendimiento, blockchain e innovación más vibrante del Caribe colombiano.

## 📖 Descripción

Este proyecto es una **Landing Page de Alto Impacto** diseñada para el **Parque Tecnológico de Cartagena**. Su objetivo principal es comunicar la propuesta de valor del parque, atraer startups, inversores y nómadas digitales, y facilitar la conversión de usuarios interesados en formar parte del ecosistema Web3.

El diseño sigue principios minimalistas y modernos, utilizando una paleta de colores inspirada en la tecnología y el mar Caribe, con una arquitectura de software modular y escalable.

## ✨ Características Principales

*   **🎨 Diseño UI/UX Moderno:** Estética limpia, uso de espacios en blanco (whitespace) y tipografía moderna (Inter).
*   **📱 Totalmente Responsivo:** Adaptabilidad fluida desde móviles hasta pantallas de escritorio grandes (Mobile-First).
*   **⚡ Animaciones de Alto Rendimiento:** Transiciones suaves y efectos de entrada utilizando `Framer Motion`.
*   **📊 Visualización de Datos:** Gráficos interactivos de crecimiento del ecosistema con `Recharts`.
*   **🔍 SEO Optimizado:** Etiquetas Meta, Open Graph para redes sociales y estructura semántica HTML5.
*   **📈 Analytics Ready:** Configuración base para Google Analytics 4 (GA4) y Tag Manager.
*   **🧩 Componentes Reutilizables:** Arquitectura modular basada en React y TypeScript.

## 🛠️ Stack Tecnológico

*   **Core:** React 19
*   **Lenguaje:** TypeScript
*   **Estilos:** Tailwind CSS (Configurado para diseño rápido y consistente)
*   **Animaciones:** Framer Motion
*   **Iconografía:** Lucide React
*   **Gráficos:** Recharts
*   **Enrutamiento:** React Router DOM

## 📂 Estructura del Proyecto

El proyecto sigue una estructura clara para facilitar el mantenimiento y la escalabilidad:

```
/
├── components/          # Componentes de UI reutilizables
│   ├── Navigation.tsx   # Barra de navegación responsiva con efecto glassmorphism
│   ├── Hero.tsx         # Sección principal con métricas animadas
│   ├── Benefits.tsx     # Grid de beneficios con iconografía
│   ├── Startups.tsx     # Portafolio de proyectos destacados
│   ├── Testimonials.tsx # Sección de prueba social
│   ├── Contact.tsx      # Formulario de contacto y newsletter
│   └── Footer.tsx       # Pie de página
├── constants.tsx        # Datos estáticos (Textos, Configuración de Menú, Datos Mock)
├── types.ts             # Definiciones de tipos TypeScript e interfaces
├── App.tsx              # Componente raíz y orquestador de layout
├── index.tsx            # Punto de entrada de la aplicación
├── index.html           # Documento HTML base con configuraciones SEO
└── metadata.json        # Metadatos del entorno de ejecución
```

## 🚀 Instalación y Uso

Si deseas ejecutar este proyecto en un entorno local estándar (basado en Vite o similar):

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/cartagena-tech-park.git
    cd cartagena-tech-park
    ```

2.  **Instalar dependencias:**
    ```bash
    npm install
    ```

3.  **Ejecutar servidor de desarrollo:**
    ```bash
    npm run dev
    ```

4.  **Construir para producción:**
    ```bash
    npm run build
    ```

## 🎨 Personalización

### Colores y Tema
La configuración de colores se encuentra extendida en la configuración de Tailwind. Los colores principales de la marca son:
*   `brand-500`: #0ea5e9 (Azul principal)
*   `brand-900`: #0c4a6e (Azul oscuro corporativo)

### Contenido
Para modificar textos, imágenes o añadir nuevos proyectos/testimonios, edita el archivo `constants.tsx`. No es necesario tocar la lógica de los componentes para cambios de contenido básico.

## 🤝 Contribución

Las contribuciones son bienvenidas para mejorar el ecosistema digital de Cartagena.
1.  Haz un Fork del proyecto.
2.  Crea tu rama de funcionalidad (`git checkout -b feature/AmazingFeature`).
3.  Haz Commit de tus cambios (`git commit -m 'Add some AmazingFeature'`).
4.  Haz Push a la rama (`git push origin feature/AmazingFeature`).
5.  Abre un Pull Request.

## 📄 Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

---
Hecho con 💙 y ☕ en **Cartagena de Indias**.
