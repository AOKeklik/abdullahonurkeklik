<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->foreignId("parent_id")->nullable()->constrained("categories")->cascadeOnDelete();

            $table->string("slug")->unique();
            $table->string("name");
            $table->boolean("is_active")->default(true);
            
            $table->timestamps();
            $table->index("parent_id");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categories');
    }
};
