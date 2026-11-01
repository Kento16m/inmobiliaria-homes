# SwiftProp — Sistema de diseño

Basado en `docs/03-styleguide.png` (paleta y tipografía). Los tokens viven en `src/index.css` (`@theme`) y se usan siempre por nombre. La página temporal `/styleguide` sirve para compararlos con la referencia.

## Colores

Hex muestreados de la imagen. Los tonos 50, 200, 300, 400 y 500 salen de la referencia (secundario y estados: los 5 swatches); los tonos 100 (punto medio entre 50 y 200) y 600-900 (oscurecidos) son derivados.

| Grupo | Tokens | Valores de la referencia |
|-------|--------|--------------------------|
| Primario (azul) | `primary-50` … `primary-900` | 500 `#2C55FB`, 400 `#5677FC`, 300 `#97ACFD`, 200 `#C0CCFC`, 50 `#F5F8FF` |
| Secundario (verde) | `secondary-50` … `secondary-900` | 500 `#22B83A`, 400 `#65CC75`, 300 `#A7E2B0`, 200 `#D3F1D9`, 50 `#F3FBF4` |
| Estados (rojo/rosa) | `danger-50` … `danger-900` | 500 `#D43331`, 400 `#E1706F`, 300 `#F2C2C0`, 200 `#F8D5D5`, 50 `#FEF5F6` |
| Grises | `gray-50` … `gray-900` (10 tonos) | 900 `#2C3340`, 800 `#3F4653`, 700 `#555A66`, 600 `#686D76`, 500 `#7D8088`, 400 `#90939B`, 300 `#BABBBF`, 200 `#CECFD3`, 100 `#E2E2E2`, 50 `#EAEAEA` |
| Fondo de la app | `surface` | `#F5F7F9` (muestreado de las pantallas de la imagen 01/04) |
| Acento | `accent` | `#EFCF2F` (amarillo de las etiquetas, p. ej. "En venta") |

## Utilidades y tokens

- Texto: `text-h1` … `text-h5` (peso 600) y `text-p1` … `text-p4`, con tamaño/line-height de la tabla siguiente.
- Radios: `rounded-button` (8px), `rounded-card` (12px), `rounded-pill`.
- Sombra: `shadow-card`.

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
