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
        Schema::create('donor', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('age');
            $table->string('blood_group');
            $table->string('gender');
            $table->string('contact');
            $table->string('id_document')->nullable();
            $table->string('blood_test_document')->nullable();
            $table->string('location');  
            $table->integer('status')->default(0);
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('donor');
    }
};
