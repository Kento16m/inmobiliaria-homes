# SwiftProp — CRM inmobiliario

Dashboard "SwiftProp". Diseño de referencia en `docs/reference/` y sistema de diseño en `docs/DESIGN.md`.
**Toda la interfaz está en ESPAÑOL.**

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- React Router
- lucide-react (íconos)
- recharts (gráficos)
- Fuente: Inter (Google Fonts)

No agregar librerías adicionales sin preguntar antes.

## Idioma y textos

- Las imágenes de referencia están en inglés, pero **todo texto visible al usuario debe estar en español**.
- `<html lang="es">`.
- Todo texto visible vive en `src/lib/strings.ts` (objeto tipado). **Prohibido** escribir textos en español directamente dentro de los componentes.
- Usar exactamente los textos del glosario de `docs/DESIGN.md`.
- Comentarios y nombres de variables/archivos en inglés o español, pero consistentes en todo el proyecto.

## Formatos (locale "es")

- Fechas: `Intl.DateTimeFormat('es')`.
- Números y moneda: `Intl.NumberFormat('es', { style: 'currency', currency: 'USD' })`.
- Meses y días de la semana en español (calendario, gráficos, etiquetas).

## Estructura

```
src/
  components/
    ui/          # primitivas (botón, input, badge, tarjeta, tabs...)
    layout/      # sidebar, topbar, shell
    properties/  # tarjetas, listado, detalle de propiedades
    dashboard/   # gráficos y widgets del panel
  pages/         # una página por ruta
  data/          # datos de ejemplo tipados
  lib/           # strings.ts, formatters, utilidades
```

## Reglas de código

- Componentes pequeños (< 150 líneas).
- Sin estilos inline (`style={{}}`).
- Solo tokens del tema (colores, tipografía, radios, sombras definidos en el tema de Tailwind); sin valores hex sueltos en componentes.
- Sin librerías extra sin preguntarme.

## Flujo de trabajo

Al terminar cada tarea:

1. Ejecutar `npm run build`.
2. Corregir los errores que aparezcan.
3. Resumir lo hecho en 5 líneas.
4. **No avanzar a otras tareas** sin que se pida.
