FROM python:3.12-slim

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends curl \
    && rm -rf /var/lib/apt/lists/*

RUN pip install flask

COPY app.py .

EXPOSE 8888

CMD ["python", "app.py"]
