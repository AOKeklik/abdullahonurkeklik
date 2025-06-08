<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    protected $fillable = [
        'slug',
        'title',
        'desc',
        'is_active',
    ];


    protected static function boot()
    { 
        parent::boot(); 
        
        static::creating(function ($item) {
            $item->slug = \Illuminate\Support\Str::slug($item->title);
        });

        static::updating(function ($item) {
            $item->slug = \Illuminate\Support\Str::slug($item->title);
        });
    }
}

