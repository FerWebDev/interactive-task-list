# Lista de Tareas ESG IA

Una aplicación web moderna y eficiente para la gestión de tareas diarias, desarrollada por ESG IA Consultores.

![Banner de la aplicación](https://api.placeholder.com/1200/630)

## Descripción

Esta aplicación de lista de tareas está diseñada con un enfoque en la experiencia del usuario y la eficiencia. Permite gestionar tareas diarias con una interfaz intuitiva y visualmente atractiva, adaptable a cualquier dispositivo. Perfecta para profesionales que necesitan organizar sus actividades de manera eficaz.

## Características

- ✅ Agregar nuevas tareas con validación
- ❌ Eliminar tareas con animación fluida
- ✓ Marcar tareas como completadas 
- 🔢 Contador automático de tareas (pendientes, completadas y total)
- 💾 Almacenamiento local persistente (LocalStorage)
- 🌓 Soporte para tema claro/oscuro
- 📱 Diseño completamente responsive

## Tecnologías utilizadas

- HTML5 semántico
- CSS3 con variables para temas
- JavaScript vanilla (ES6+)
- LocalStorage API para persistencia de datos
- Diseño responsive sin dependencias externas

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/ESG-IA-Consultores/lista-tareas.git
```

2. Navega al directorio del proyecto:
```bash
cd lista-tareas
```

3. Abre el archivo `index.html` en tu navegador preferido o utiliza un servidor local.

## Uso

1. Escribe una tarea en el campo de texto
2. Presiona el botón "Agregar" o la tecla Enter
3. Gestiona tus tareas con los botones de completar o eliminar
4. Las tareas se guardan automáticamente en tu navegador

## Estructura del proyecto

```
lista-tareas/
├── index.html          # Estructura principal HTML
├── global.css          # Estilos globales y variables
├── index.css           # Estilos específicos de la aplicación
├── task.js             # Módulo de gestión de tareas
├── index.js            # Lógica principal y manipulación DOM
└── README.md           # Documentación
```

## Personalización

### Cambiar colores y tema

El proyecto utiliza variables CSS para una fácil personalización. Puedes modificar los colores y otros estilos en el archivo `global.css`:

```css
:root {
  --primary-color: #4f46e5;
  --primary-color-darker: #4338ca;
  /* Otras variables */
}
```

## Contribución

Si deseas contribuir a este proyecto:

1. Haz un fork del repositorio
2. Crea una rama para tu característica (`git checkout -b feature/amazing-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## Licencia

Distribuido bajo la licencia MIT. Ver `LICENSE` para más información.

## Contacto

FerWebDev - [@FerWebDev](https://github.com/FerWebDev)

ESG IA Consultores - [https://github.com/ESG-IA-Consultores](https://github.com/ESG-IA-Consultores)

URL del proyecto: [https://github.com/ESG-IA-Consultores/lista-tareas](https://github.com/ESG-IA-Consultores/lista-tareas)