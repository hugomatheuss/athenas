cd api
composer install
cp .env.example .env
php artisan key:generate
php artisan jwt:secret
php artisan migrate --seed