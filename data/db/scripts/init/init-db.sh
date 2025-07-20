#!/bin/bash

set -e

echo "PostgreSQL is up - restoring database"

pg_restore -U "$POSTGRES_USER" -d "$POSTGRES_DB" --clean --if-exists --no-owner --no-acl /docker-entrypoint-initdb.d/dvdrental.tar

echo "Database restore complete!"