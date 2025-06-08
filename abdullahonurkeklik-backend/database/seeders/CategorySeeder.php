<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        // Create top-level "Menu" category
        $menu = Category::create([
            'name' => 'Menu',
            'parent_id' => null,
            'is_active' => true,
        ]);

        // Create child menu items
        $childMenus = ['Services', 'About', 'Lewiatan', 'Projects', 'Contact'];

        foreach ($childMenus as $child) {
            Category::create([
                'name' => $child,
                'parent_id' => $menu->id,
                'is_active' => true,
            ]);
        }
    }
}
