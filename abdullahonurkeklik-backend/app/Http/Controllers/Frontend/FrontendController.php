<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Service;
use Illuminate\Http\Request;

class FrontendController extends Controller
{
    public function settings_get () 
    {
        $menu_categories = Category::
            orderBy("id","ASC")
            ->where('parent_id', Category::where('slug', 'menu')->first()->id)
            ->get();


        return response()->json([
            "message" => "Settings retrieved successfully.",
            "settings" => settings(),
            "menus" => $menu_categories,
        ],200);
    }

    public function services_get () 
    {
        $services = Service::
            orderBy("id","ASC")
            ->get();


        return response()->json([
            "message" => "Services retrieved successfully.",
            "data" => $services,
        ],200);
    }
}
