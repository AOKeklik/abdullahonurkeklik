<?php

// H1?N=p:g

use App\Http\Controllers\Frontend\FrontendController;
use Illuminate\Support\Facades\Route;

Route::controller(FrontendController::class)->group(function () {
    Route::get("settings", "settings_get");
    Route::get("services", "services_get");
});
