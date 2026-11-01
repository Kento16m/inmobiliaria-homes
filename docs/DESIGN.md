# SwiftProp — Sistema de diseño

Basado en `docs/reference/01-styleguide`. Los valores hex son aproximados; definirlos como tokens del tema de Tailwind v4 (`@theme`) y usar siempre los tokens.

## Colores

| Grupo | Tokens | Notas |
|-------|--------|-------|
| Primario (azul) | `primary-500` ≈ `#2F5BFF` + 4 tonos más claros (`primary-400` … `primary-100`) | Botones, ítem activo del menú, precios, enlaces |
| Secundario (verde) | `secondary-100` … `secondary-500` (5 tonos) | Etiquetas positivas, éxito |
| Estados (rojo/rosa) | `danger-*` (rojo/rosa) | Errores, alertas, valores negativos |
| Grises | `gray-100` … `gray-600` (6 tonos) | Texto, bordes, fondos; fondo de la app: gris muy claro |

## Tipografía (Inter)

| Estilo | Tamaño / Line-height |
|--------|----------------------|
| H1 | 36 / 44 |
| H2 | 30 / 38 |
| H3 | 24 / 32 |
| H4 | 20 / 30 |
| H5 | 18 / 28 |
| P1 | 16 / 24 |
| P2 | 14 / 20 |
| P3 | 12 / 18 |
| P4 | 10 / 16 |

## Layout

- **Sidebar**: blanco, logo SwiftProp arriba, menú con íconos (lucide-react); ítem activo con fondo azul claro y texto/ícono primario.
- **Topbar**: buscador a la izquierda y avatar de usuario a la derecha.
- **Fondo** de la aplicación: gris muy claro.
- **Tarjetas**: blancas, esquinas redondeadas, sombra suave.
- Tabs de tipo de propiedad: activo en oscuro, inactivos en blanco con borde.

## Glosario de textos (usar exactamente estos)

- **Menú**: Panel, Propiedades, Proyectos, Prospectos, Contratos, Calendario, Actividades, Contactos y Org., Corredores y Agentes, Documentos.
- **Buscador**: "Buscar propiedades, prospectos, contratos".
- **Tipos**: Departamento, Terreno, Prefabricada, Multifamiliar.
- **Estados**: En venta, En alquiler.
- **Botones**: Agregar propiedad, Filtros, Generar correo, Folleto, Guardar, Cancelar.
- **Secciones**: Detalles, Detalles exclusivos, Ubicación.
- **Dashboard**: Prospectos por mes, Prospectos por campaña, Prospectos por agente, Prospectos por fuente.

Todos estos textos se definen en `src/lib/strings.ts`.
