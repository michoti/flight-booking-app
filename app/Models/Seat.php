<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Seat extends Model
{
    use HasFactory, SoftDeletes;

    
    protected $fillable = [
        'flight_id',
        'seat_number',
        'class',
        'is_available',
    ];

    public function flight()
    {
        return $this->belongsTo(Flight::class);
    }

    // Example Query Builder Method
    public function scopeAvailable($query)
    {
        return $query->where('is_available', true);
    }
}
