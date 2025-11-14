#!/bin/bash
# wait-for-db.sh

set -e

host="$DB_HOST"
port="${DB_PORT:-5432}"

until pg_isready -h "$host" -p "$port" -U "$DB_USERNAME"; do
  echo "Waiting for PostgreSQL at $host:$port..."
  sleep 2
done

echo "PostgreSQL is ready"
exec "$@"
