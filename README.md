# Outlet Rental Cars — Flujo de búsqueda y selección de vehículos

Aplicación web para buscar, explorar y reservar vehículos de alquiler. Permite al usuario ver un catálogo de autos disponibles, consultar el detalle de cada uno y simular el proceso de reserva con precio final calculado.

---

## Cómo ejecutar el proyecto

### Instalación de dependencias

```bash
npm install
```

### Modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

### Producción

```bash
npm run build && npm start
```

---

## Decisiones técnicas

### Next.js 16 con App Router
Se utiliza el App Router de Next.js 16. La ruta `/search` es un Server Component asíncrono que obtiene los datos de vehículos en el servidor (SSR) antes de renderizar la página, mejorando el tiempo de carga inicial y el SEO.

### Redux Toolkit
Se usa Redux Toolkit para el estado global de la aplicación. El slice `vehicleSlice` gestiona:
- `results` — lista de vehículos disponibles
- `selectedVehicle` — vehículo seleccionado por el usuario
- `loading` — estado de carga
- `error` — mensajes de error

Esto permite que componentes en distintas partes del árbol compartan estado sin prop drilling.

### Separación de capas
La arquitectura sigue una separación clara de responsabilidades:
- `pages (app/)` → definen rutas y obtienen datos (Server Components)
- `views (app/view/)` → orquestan la UI de cada página (Client Components)
- `components/` → componentes reutilizables de UI
- `lib/` → lógica de negocio pura (cálculo de precios, manejo de reservas, datos mock)

### TypeScript
Todo el proyecto está tipado con TypeScript para detectar errores en tiempo de compilación y mejorar la mantenibilidad del código.

### Tailwind CSS
Los estilos se gestionan con Tailwind CSS mediante clases utilitarias, lo que permite un desarrollo rápido y consistente sin necesidad de archivos CSS separados.

---

## Estructura de carpetas

```
app/              → Páginas y rutas (App Router)
app/view/         → Vistas por página (Client Components)
components/       → Componentes reutilizables de UI
store/            → Redux store, slices y StoreProvider
lib/              → Lógica de negocio, utilidades y datos mock
```

---

## Integración con pasarela de pago (conceptual)

El flujo de pago previsto es el siguiente:

1. El usuario navega por el catálogo en `/search` y selecciona un vehículo.
2. Se muestra la página de resumen (`/search/[slug]`) con la imagen, nombre, categoría y precio final calculado según los días de alquiler.
3. Al confirmar la reserva, el frontend envía una solicitud al backend con los datos del vehículo y las fechas seleccionadas.
4. El backend crea una sesión de pago con la pasarela elegida (por ejemplo, Stripe o PayU) y devuelve una URL de checkout.
5. El usuario es redirigido al checkout de la pasarela para completar el pago de forma segura.
6. Una vez completado el pago, la pasarela notifica al backend mediante un webhook.
7. El backend valida la notificación, confirma la reserva en la base de datos y notifica al usuario (por correo o en la propia aplicación).
