# Use official PHP 8.2 image with Apache

FROM php:8.2-apache
 
# Install system dependencies and PHP extensions

RUN apt-get update && apt-get install -y \

    git unzip zip libpng-dev libonig-dev libxml2-dev libzip-dev && \

    docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip && \

    a2enmod rewrite
 
# Set working directory

WORKDIR /var/www/html
 
# Copy all files

COPY . .
 
# Install Composer

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer
 
# Install Laravel dependencies

RUN composer install --no-dev --optimize-autoloader
 
# Fix Apache Document Root (force override)

RUN sed -i 's#/var/www/html#/var/www/html/public#g' /etc/apache2/sites-available/000-default.conf

RUN sed -i 's#/var/www/html#/var/www/html/public#g' /etc/apache2/apache2.conf
 
# Enable .htaccess (important for Laravel routing)

RUN echo "<Directory /var/www/html/public>\n\

    AllowOverride All\n\

    Require all granted\n\
</Directory>" > /etc/apache2/conf-available/laravel.conf && \

    a2enconf laravel
 
# Set permissions

RUN chmod -R 777 storage bootstrap/cache
 
# Expose port 80

EXPOSE 80
 
# Start Apache

CMD ["apache2-foreground"]

 