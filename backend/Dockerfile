# Use the official PHP 8.2 image with Apache

FROM php:8.2-apache
 
# Install required system packages and PHP extensions

RUN apt-get update && apt-get install -y \

    git unzip zip libpng-dev libonig-dev libxml2-dev libzip-dev && \

    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip && \

    a2enmod rewrite
 
# Set the working directory inside the container

WORKDIR /var/www/html
 
# Copy the application files to the container

COPY . .
 
# Install Composer

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
 
# Install PHP dependencies

RUN composer install --no-dev --optimize-autoloader
 
# Change Apache document root to Laravel's public folder

ENV APACHE_DOCUMENT_ROOT=/var/www/html/public

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/default-ssl.conf
 
# Give proper permissions

RUN chmod -R 777 storage bootstrap/cache
 
# Expose port 80

EXPOSE 80
 
# Start Apache

CMD ["apache2-foreground"]

 