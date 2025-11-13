# Use official PHP with Apache
FROM php:8.2-apache
 
# Install dependencies + PostgreSQL dev libraries
RUN apt-get update && apt-get install -y \
    git \
    unzip \
    libzip-dev \
    zip \
    libpng-dev \
    libpq-dev \
&& docker-php-ext-install pdo pdo_pgsql zip gd
 
# Install composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
 
WORKDIR /var/www/html
 
# Copy project files
COPY . .
 
# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader
 
# Give permissions
RUN chmod -R 777 storage bootstrap/cache
 
EXPOSE 80
CMD ["apache2-foreground"]