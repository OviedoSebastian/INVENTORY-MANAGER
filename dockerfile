FROM python:3.8
ENV PYTHONUNBUFFERED=1

WORKDIR /App

COPY requirements.txt /App/

RUN python -m pip install --upgrade pip
RUN python -m pip install -r requirements.txt

COPY . /App/

# Crea las migraciones y las ejecuta
RUN python manage.py makemigrations