# Use the official PHP image with Apache
FROM php:8.2-apache
 
# Install system dependencies
RUN apt-get update && apt-get install -y \
    git unzip zip libpng-dev libonig-dev libxml2-dev libzip-dev && \
    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip
 
# Enable Apache mod_rewrite
RUN a2enmod rewrite
 
# Set working directory
WORKDIR /var/www/html
 
# Copy project files
COPY . .
 
# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
 
# Install PHP dependencies (Laravel packages)
RUN composer install --no-dev --optimize-autoloader
 
# Set folder permissions
RUN chmod -R 777 storage bootstrap/cache
 
# Expose port 80
EXPOSE 80
 
# Start Apache
CMD ["apache2-foreground"]