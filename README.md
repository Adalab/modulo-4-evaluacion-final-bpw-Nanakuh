# API de recetas

## Descripción

Esta API permite gestionar recetas y sus ingredientes.
Puedes acceder a ella a través de esta dirección:
https://modulo-4-evaluacion-final-bpw-nanakuh.onrender.com/

A continuación, se detallan los endpoints disponibles:

## Configuración

1. Clona este repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto.
3. Copia el archivo `.env.example` a un nuevo archivo llamado `.env`.
4. Edita el archivo `.env` con tus credenciales de MySQL y otros ajustes relevantes.
5. Instala las dependencias del proyecto:

   ```bash
   npm install
   ```

6. Arrancar la api

   ```bash
   npm run start
   ```

## Endpoints

### Obtener Todas las Recetas

- **Método y Ruta:** `GET /api/recetas`
- **Descripción:** Devuelve todas las recetas disponibles, incluyendo sus ingredientes.
- **Respuesta:**
  ```json
  {
    "info": {
      "count": "number"
    },
    "results": [
      {
        "id": "number",
        "nombre": "string",
        "instrucciones": "string",
        "imagen": "string",
        "ingredientes": [
          {
            "nombre": "string",
            "cantidad": "string"
          }
        ]
      }
    ]
  }
  ```

### Obtener una Receta por ID

- **Método y Ruta:** `GET /api/recetas/:id`
- **Descripción:** Devuelve los detalles de una receta específica, incluyendo sus ingredientes, basado en el ID proporcionado.
- **Parámetros:** `id` (en la ruta)
- **Respuesta:**
  ```json
  {
    "receta": {
      "id": "number",
      "nombre": "string",
      "instrucciones": "string",
      "imagen": "string",
      "ingredientes": [
        {
          "nombre": "string",
          "cantidad": "string"
        }
      ]
    }
  }
  ```

### Crear una Receta

- **Método y Ruta:** `POST /api/recetas`
- **Descripción:** Permite crear una nueva receta con sus ingredientes.
- **Cuerpo de la solicitud:**

  ```json
  {
    "nombre": "Tarta de manzana",
    "instrucciones": "1. Precalentar el horno a 180°C. 2. Pelar las manzanas y cortarlas en rodajas finas. 3. En un bol, mezclar las manzanas con azúcar y canela. 4. Colocar la masa de tarta en un molde y añadir la mezcla de manzanas. 5. Hornear durante 45 minutos.",
    "imagen": "url-de-la-imagen-de-la-tarta.jpg",
    "ingredientes": [
      {
        "nombre": "Manzana",
        "cantidad": "3 unidades"
      },
      {
        "nombre": "Azúcar",
        "cantidad": "100 gr"
      },
      {
        "nombre": "Canela",
        "cantidad": "1 cucharadita"
      },
      {
        "nombre": "Masa de tarta",
        "cantidad": "1 unidad"
      }
    ]
  }
  ```

- **Respuesta:**
  ```json
  {
    "success": true,
    "message": "Receta creada con éxito",
    "id": "number"
  }
  ```

### Actualizar una Receta

- **Método y Ruta:** `PUT /api/recetas/:id`
- **Descripción:** Actualiza los detalles de una receta existente y sus ingredientes.
- **Parámetros:** `id` (en la ruta)
- **Cuerpo de la solicitud:**
  ```json
  {
    "nombre": "Tarta de manzana actualizada",
    "instrucciones": "1. Precalentar el horno a 180°C. 2. Pelar las manzanas y cortarlas en láminas. 3. En un bol grande, mezclar las manzanas con azúcar, canela y un poco de harina. 4. Extender la masa de tarta en un molde y verter la mezcla de manzanas encima. 5. Cubrir con otra capa de masa de tarta y sellar los bordes. 6. Hornear durante 45-50 minutos o hasta que esté dorada.",
    "imagen": "url-de-la-imagen-de-la-tarta-actualizada.jpg",
    "ingredientes": [
      {
        "nombre": "Manzana",
        "cantidad": "5 unidades"
      },
      {
        "nombre": "Azúcar",
        "cantidad": "150 gr"
      },
      {
        "nombre": "Canela",
        "cantidad": "2 cucharaditas"
      },
      {
        "nombre": "Harina",
        "cantidad": "50 gr"
      },
      {
        "nombre": "Masa de tarta",
        "cantidad": "2 unidades"
      }
    ]
  }
  ```
- **Respuesta:**
  ```json
  {
    "success": true,
    "message": "Receta actualizada con éxito",
    "id": "number"
  }
  ```

### Eliminar una Receta

- **Método y Ruta:** `DELETE /api/recetas/:id`
- **Descripción:** Elimina una receta y todos sus ingredientes basado en el ID proporcionado.
- **Parámetros:** `id` (en la ruta)
- **Respuesta:**

  ```json
  {
    "success": true,
    "message": "Receta eliminada correctamente"
  }
  ```

  Espero que te haya sido útil este README.
  
  Si tienes alguna sugerencia, no dudes en contactar conmigo 🙂:

  email: anagilrodrig@gmail.com

  linkedin: https://www.linkedin.com/in/ana-maria-gil-rod/

  github: https://github.com/Nanakuh

  Authors @Nanakuh
