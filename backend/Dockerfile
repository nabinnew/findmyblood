# =============================
# Base image
# =============================
FROM php:8.2-apache

# =============================
# Install system dependencies
# =============================
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libzip-dev \
    libpng-dev \
    libpq-dev \
    libonig-dev \
    curl \
    postgresql-client \
    && docker-php-ext-install pdo pdo_pgsql zip gd mbstring

# =============================
# Install Node.js
# =============================
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# =============================
# Enable Apache rewrite module
# =============================
RUN a2enmod rewrite

# =============================
# Set working directory
# =============================
WORKDIR /var/www/html

# =============================
# Copy Laravel project
# =============================
COPY . .

# =============================
# Install Composer
# =============================
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# =============================
# Install NPM dependencies and build frontend
# =============================
RUN npm install
RUN npm run build

# =============================
# Set permissions
# =============================
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && chmod -R 777 storage bootstrap/cache

# =============================
# Configure Apache to use Laravel public folder
# =============================
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

RUN echo '<Directory /var/www/html/public>\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>' > /etc/apache2/conf-available/laravel.conf \
    && a2enconf laravel

# =============================
# Expose port
# =============================
EXPOSE 80

# =============================
# Wait for PostgreSQL and run migrations
# =============================
COPY wait-for-db.sh /wait-for-db.sh
RUN chmod +x /wait-for-db.sh

# CMD: Wait for DB, run migrations, start Apache
CMD ["/wait-for-db.sh", "php", "artisan", "migrate", "--force", "&&", "apache2-foreground"]

# =============================
# Notes:
# 1. Make sure your .env has correct Postgres URL with SSL:
#    DB_CONNECTION=pgsql
#    DB_HOST=dpg-xxxx.singapore-postgres.render.com
#    DB_PORT=5432
#    DB_DATABASE=bloodline_db
#    DB_USERNAME=postgres
#    DB_PASSWORD=yourpassword
#    PGSSLMODE=require
# 2. `wait-for-db.sh` ensures the container waits for the database.
# =============================
