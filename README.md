# Portafolio Profesional & Marca Personal - Bryan Coronel Paz

> **Desarrollador de Software | Backend & Mobile**  
> Estudiante de Diseño y Desarrollo de Software en **TECSUP**

Sitio web de marca personal y portafolio técnico desarrollado con **React + TypeScript + Vite + Tailwind CSS v4**, optimizado para despliegue directo en **Vercel**.

---

## 🎨 Paleta y Estilo Visual
- **Tema:** Dark mode corporativo con fondo `#0B0F17`, capas `#0F172A`, `#1E293B` y acentos en azul eléctrico (`#2563EB`, `#38BDF8`).
- **Tipografía:** *Plus Jakarta Sans* y *JetBrains Mono*.
- **Diseño:** Tarjetas modulares con bordes sutiles, microinteracciones, glassmorphism y modales dinámicos para evidencias.

---

## 📑 Secciones del Portafolio

1. **INICIO (`#inicio`)**:
   - Monograma de marca `<BC />` con diseño estilizado y tipografía mono.
   - Titular profesional y status en TECSUP.
   - Fotografía casual-profesional de Bryan Coronel Paz (`foto-portafolio.png`) con relación de aspecto natural, difuminado y marco estilizado.
   - Botones de acción directa: "Explorar Proyectos" y "Contactar".
   - Enlaces directos a [LinkedIn](https://www.linkedin.com/in/bryan-coronel-paz) y [GitHub](https://github.com/brui4n).

2. **PERFIL PROFESIONAL (`#perfil-profesional`)**:
   - Extracto profesional en primera persona sobre experiencia full stack (.NET, React, Docker, Spring Boot, etc.).
   - Declaración de objetivo profesional.
   - Badges clasificados de competencias técnicas con .NET, Docker, Oracle, Postman, JUnit, TFS, etc.
   - **Descarga directa del CV oficial en formato PDF** (`CV-Bryan-Coronel.pdf`).
   - Mockup interactivo 3D de tarjeta de presentación digital con monograma `<BC />` y credenciales TECSUP (anverso y reverso con código QR simulado).
   - Bloque amplio para logros y reconocimientos académicos en TECSUP.

3. **PROYECTOS (`#proyectos`)**:
   - **Prácticas Pre-Profesionales & Pasantía Empresarial:**
     - **NTT DATA**: Prácticas Pre-Profesionales (**23 de marzo de 2026 - Presente**). Funciones en estimación de requerimientos, desarrollo y pruebas en Visual Studio, Oracle y Linux, control de calidad, pases controlados entre ambientes (Desarrollo, QA, Preproducción, Producción) y reuniones diarias de seguimiento.
     - **Chiru Marketplace S.A.C.**: Pasantía Empresarial (**Enero 2026 - Marzo 2026**). Desarrollo del MVP del sistema de entregas a delivery **"Chiru Riders"**, abarcando panel web administrativo, aplicación móvil para repartidores (drivers) e integración con Google Maps para traza de rutas.
   - **Proyecto Destacado (Integrador) - SUMAQ**: Desarrollo full stack de un sistema para administrar platos, pedidos y menús digitales, con módulos de atención en mesa y delivery para restaurantes MYPES. Implementado con Spring Boot, Django, React y Kotlin, aplicando Scrum y Git/GitHub.
   - **Proyectos Móviles y Adicionales**: Aplicación Android nativa en Kotlin con arquitectura MVVM y enlace al repositorio de GitHub `@brui4n`.

---

## 📁 Carpeta para Imágenes de Proyectos

Para que cualquier imagen cargue directamente en la web sin compilar:
- Coloca tus archivos `.png` o `.jpg` en: **[`public/images/projects/`](file:///Users/bryan/Documents/Portfolio/public/images/projects)**
- Se accederán inmediatamente en la web mediante la ruta `/images/projects/tu-imagen.png`.

4. **NOTICIAS Y ARTÍCULOS TÉCNICOS (`#noticias`)**:
   - **Artículo 1 (ES):** *Arquitecturas desacopladas y patrones de diseño en el desarrollo empresarial moderno* (con citación formal APA).
   - **Artículo 2 (ES):** *El auge de Spring Boot y microservicios en sistemas corporativos escalables* (con citación formal APA).
   - **Artículo 3 (EN):** *Modern Android Architecture: Implementing MVVM with Kotlin and Coroutines* (con citación formal APA).
   - **Noticia de Marca Personal:** Reflexión sobre la formación técnica en TECSUP y la transición profesional como desarrollador junior.

5. **CONTACTOS Y RED DE NETWORKING (`#contactos`)**:
   - Teléfono / WhatsApp: `+51 908 786 111`.
   - Correo electrónico: `coronelbryan900@gmail.com`.
   - Enlaces a LinkedIn y GitHub.
   - **Evidencias de Red de Networking:** Slots para capturas de red LinkedIn (+250 conexiones) y feedback profesional.
   - **Formulario de contacto interactivo:** Con validación frontend y confirmación de envío.

---

## 🚀 Despliegue en Vercel

### Opción 1: Con Vercel CLI
```bash
npm install -g vercel
vercel
```

### Opción 2: Conectar Repositorio en Vercel Dashboard
1. Sube este repositorio a tu cuenta de GitHub (`git push origin main`).
2. Ingresa a [vercel.com](https://vercel.com) e inicia sesión.
3. Haz clic en **"Add New Project"** e importa tu repositorio `Portfolio`.
4. El framework preset se detectará automáticamente como **Vite**.
5. Haz clic en **"Deploy"**.

---

## 🛠️ Comandos Locales
- `npm run dev`: Inicia el servidor de desarrollo en `http://localhost:5173`.
- `npm run build`: Compila para producción con verificación estricta de tipos TypeScript.
- `npm run preview`: Previsualiza el bundle de producción localmente.
