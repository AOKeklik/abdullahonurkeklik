<?php

namespace Database\Seeders;

use App\Models\Service;
use Illuminate\Database\Seeder;

class ServicesSeeder extends Seeder
{
    public function run()
    {
        $services = [
            [
                'icon' => 'code2',
                'title' => 'Web App Development',
                'desc' => 'Building modern, fast, and scalable web applications tailored to your business.',
                'is_active' => 1,
            ],
            [
                'icon' => 'wrench',
                'title' => 'Maintenance',
                'desc' => 'Ensuring your site is secure, up-to-date, and running without issues.',
                'is_active' => 1,
            ],
            [
                'icon' => 'headset',
                'title' => 'Tech Support',
                'desc' => 'Providing responsive, expert-level technical support to solve your problems quickly.',
                'is_active' => 1,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
