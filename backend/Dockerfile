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
 
# Set working directory to Laravel project root

WORKDIR /var/www/html
 
# Copy all project files

COPY . .
 
# Install Laravel dependencies

RUN composer install --no-dev --optimize-autoloader
 
# Permissions for storage and cache

RUN chmod -R 777 storage bootstrap/cache
 
# Set Apache document root to Laravel public folder

RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf
 
# Enable mod_rewrite for Laravel routing

RUN a2enmod rewrite
 
EXPOSE 80

CMD ["apache2-foreground"]

 