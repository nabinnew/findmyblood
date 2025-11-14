# ===========================
# Dockerfile for Laravel + Render Free
# ===========================

# Use official PHP with Apache
FROM php:8.2-apache

# Install system dependencies + PostgreSQL dev libraries + Node.js dependencies
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libzip-dev \
    libpng-dev \
    libpq-dev \
    libonig-dev \
    curl \
    && docker-php-ext-install pdo pdo_pgsql zip gd mbstring

# Install Node.js (for Vite build)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set working directory
WORKDIR /var/www/html

# Copy Laravel project
COPY . .

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
RUN composer install --no-dev --optimize-autoloader

# Build Vite assets
RUN npm install
RUN npm run build

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && chmod -R 777 storage bootstrap/cache

# Set Apache DocumentRoot to Laravel public
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Ensure Laravel .htaccess works
RUN echo '<Directory /var/www/html/public>\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>' > /etc/apache2/conf-available/laravel.conf \
    && a2enconf laravel

# Expose port
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]

# ===========================
# Notes:
# 1. Migrations are NOT run during build; run them manually after deployment:
#    php artisan migrate --force
# 2. Use Render Free PostgreSQL public URL in .env with PGSSLMODE=require:
#    DB_HOST=dpg-xxxx.singapore-postgres.render.com
# 3. CACHE_STORE=file & SESSION_DRIVER=file until DB tables exist.
# ===========================
