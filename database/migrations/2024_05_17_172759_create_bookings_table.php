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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
            $table->foreignId('flight_id')->constrained('flights')->onDelete('cascade');
            $table->enum('status', ['pending', 'confirmed', 'cancelled'])->default('pending'); // e.g., pending, confirmed, cancelled
            $table->decimal('total_price', 8, 2);
            $table->timestamps();
            $table->softDeletes();
        });

        Schema::table('seats', function (Blueprint $table) {
            $table->foreignId('booking_id')->nullable()->constrained('bookings')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('seats', function (Blueprint $table) {
            $table->dropColumn('booking_id');
        });
        Schema::dropIfExists('bookings');
    }
};
