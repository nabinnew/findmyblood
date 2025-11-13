# Use official PHP with Apache
FROM php:8.2-apache

# Install system dependencies + PostgreSQL dev libraries
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    zip \
    libzip-dev \
    libpng-dev \
    libpq-dev \
    && docker-php-ext-install pdo pdo_pgsql zip gd

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set working directory to Laravel root
WORKDIR /var/www/html

# Copy project files
COPY . .

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions and ownership
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html \
    && chmod -R 777 storage bootstrap/cache

# Set Apache DocumentRoot to Laravel public folder
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

# Ensure Laravel .htaccess works
RUN echo '<Directory /var/www/html/public>\n\
    AllowOverride All\n\
    Require all granted\n\
</Directory>' > /etc/apache2/conf-available/laravel.conf \
    && a2enconf laravel

# Run Laravel migrations during build (forces DB tables to exist)
# ⚠️ Make sure your DB credentials are correct in .env
RUN php artisan migrate --force || echo "Migration skipped if DB not ready"

# Expose port 80
EXPOSE 80

# Start Apache in foreground
CMD ["apache2-foreground"]
