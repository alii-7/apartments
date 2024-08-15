FROM postgres:latest

ENV POSTGRES_USER=postgres_user
ENV POSTGRES_PASSWORD=postgres_password
ENV POSTGRES_DB=postgres_db

EXPOSE 5432

# Copy any initialization scripts to the docker-entrypoint-initdb.d directory
# This is optional and only needed if you have custom SQL scripts you want to run at startup
# COPY ./init-scripts/*.sql /docker-entrypoint-initdb.d/