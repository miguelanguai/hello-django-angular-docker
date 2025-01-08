# Usar una imagen base de Python
FROM python:3.9-slim

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de requisitos
COPY requirements.txt /app/

# Actualizar pip
RUN pip install --upgrade pip

# Instalar las dependencias de Python. -r es desde el archivo dado como requerimientos. --no-cache-dir es sin caché
RUN pip install --no-cache-dir -r requirements.txt

# Copiar el resto de los archivos del proyecto
COPY . /app/

# Archivos estáticos (para los estilos)
RUN python manage.py collectstatic --noinput

# Exponer el puerto donde Gunicorn servirá la app
EXPOSE 8000

# Ejecutar Gunicorn como el servidor WSGI
CMD ["gunicorn", "helloDocker.wsgi:application", "--bind", "0.0.0.0:8000"]
