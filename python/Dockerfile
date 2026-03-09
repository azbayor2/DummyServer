FROM python:3.12-slim

WORKDIR /app

RUN pip install flask

COPY app.py .

EXPOSE 8888

CMD ["python", "app.py"]
