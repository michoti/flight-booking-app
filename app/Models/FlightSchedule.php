<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class FlightSchedule extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'flight_id',
        'departure_time',
        'arrival_time',
    ];

    public function flight()
    {
        return $this->belongsTo(Flight::class);
    }

    // Example Query Builder Method
    public function scopeUpcoming($query)
    {
        return $query->where('departure_time', '>', now());
    }
}
