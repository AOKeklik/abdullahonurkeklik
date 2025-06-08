<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [ 
        'parent_id',
        'slug', 
        'name',
        'is_active',       
    ];
        
    protected static function boot()
    { 
        parent::boot(); 
        
        static::creating(function ($item) {
            $item->slug = \Illuminate\Support\Str::slug($item->name);
        });

        static::updating(function ($item) {
            $item->slug = \Illuminate\Support\Str::slug($item->name);
        });
    }
    
    public function parent()
    { 
        return $this->belongsTo(Category::class, 'parent_id');
    }
    
    public function children()
    { 
        return $this->hasMany(Category::class, 'parent_id');
    }
    
    public function getDepthAttribute()
    { 
        $depth = 0; 
        $current = $this->parent; 
        
        while ($current) { 
            $depth++; 
            $current = $current->parent; 
        } 
    
        return $depth;
    }
    
    public function getFullHierarchyAttribute()
    { 
        if (!$this->parent) { 
            return $this->name;
        } 
    
        $hierarchy = []; 
        $current = $this;
        
        do { 
            array_unshift($hierarchy, $current->name); 
            $current = $current->parent;
        } while ($current); 
        
        return implode(' > ', $hierarchy);
    }
}