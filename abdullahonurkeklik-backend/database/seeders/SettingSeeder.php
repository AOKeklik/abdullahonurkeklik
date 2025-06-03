<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $settings = [
            ['key' => 'site_frontend_url', 'value' => 'http://localhost:5173'],
            ['key' => 'site_backend_url', 'value' => 'http://localhost:8000'],
            ['key' => 'site_name', 'value' => 'Your Site Name'],
            ['key' => 'site_favicon', 'value' => ''],
            ['key' => 'site_logo', 'value' => ''],
            ['key' => 'site_email', 'value' => 'example@example.com'],
            ['key' => 'site_phone', 'value' => '+48 888 222 34 32'],
            ['key' => 'site_address', 'value' => 'ul. Marszałkowska 123, Warszawa, Polska'],
            ['key' => 'site_copy', 'value' => '@2025 Example Site Name. All Rights Reserved'],
            ['key' => 'site_color', 'value' => '#ed7011'],
            ['key' => 'site_map', 'value' => '<p><a href="http://<iframe src=&quot;https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77660.36115621003!2d19.632569937846245!3d52.535491562692535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c709e6be515d1%3A0x6c7f8e3c33aea4bf!2zUMWCb2Nr!5e0!3m2!1sen!2spl!4v1745409397135!5m2!1sen!2spl&quot; width=&quot;400&quot; height=&quot;300&quot; style=&quot;border:0;&quot; allowfullscreen=&quot;&quot; loading=&quot;lazy&quot; referrerpolicy=&quot;no-referrer-when-downgrade&quot;></iframe>" target="_blank"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77660.36115621003!2d19.632569937846245!3d52.535491562692535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c709e6be515d1%3A0x6c7f8e3c33aea4bf!2zUMWCb2Nr!5e0!3m2!1sen!2spl!4v1745409397135!5m2!1sen!2spl" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></a><br></p>'],

            ['key' => 'link_facebook', 'value' => 'https://facebook.com/example'],
            ['key' => 'link_linkedin', 'value' => 'https://linkedin.com/in/example'],
            ['key' => 'link_twitter', 'value' => 'https://twitter.com/example'],
            ['key' => 'link_instagram', 'value' => 'https://instagram.com/example'],
            ['key' => 'link_youtube', 'value' => 'https://youtube.com/example'],

            ['key' => 'seo_title', 'value' => 'Your SEO Title'],
            ['key' => 'seo_description', 'value' => 'This is the description of your site for SEO purposes.'],
            ['key' => 'seo_keywords', 'value' => 'keyword1, keyword2, keyword3'],

            ['key' => 'mail_driver', 'value' => 'smtp'],
            ['key' => 'mail_host', 'value' => 'sandbox.smtp.mailtrap.io'],
            ['key' => 'mail_port', 'value' => '2525'],
            ['key' => 'mail_username', 'value' => 'a227fb6c1991fc'],
            ['key' => 'mail_password', 'value' => '0183d80c52a3ba'],
            ['key' => 'mail_encryption', 'value' => 'tls'],
            ['key' => 'mail_from_address', 'value' => 'contact@website.com'],
            ['key' => 'mail_receive_address', 'value' => 'customer@example.com'],
        ];

        foreach ($settings as $setting) {
            DB::table('settings')->updateOrInsert(
                ['key' => $setting['key']],
                ['value' => $setting['value']]
            );
        }
    }
}
