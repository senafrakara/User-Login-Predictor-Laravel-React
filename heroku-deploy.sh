#!/bin/bash

# Optimize Composer autoloader
composer install --optimize-autoloader --no-dev

# Generate application key if not already set
php artisan key:generate --force
php artisan migrate

# Clear and cache configurations
php artisan config:clear
php artisan config:cache

# Cache routes
php artisan route:cache

# Clear and cache views
php artisan view:clear
php artisan view:cache

# Run migrations (use with caution in production)
php artisan migrate --force

# Install NPM dependencies and build assets
npm ci
npm run build

echo "Heroku deployment setup complete!"