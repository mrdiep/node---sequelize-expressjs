#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER BikeStoreDemoUser;
    CREATE DATABASE BikeStoreDemo;
    GRANT ALL PRIVILEGES ON DATABASE BikeStoreDemoUser TO BikeStoreDemoUser;
EOSQL