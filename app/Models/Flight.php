<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Flight extends Model
{

    use HasFactory, SoftDeletes;

    protected $fillable = [
        'airline',
        'flight_number',
        'origin',
        'destination',
        'departure_time',
        'arrival_time',
        'price',
    ];

    public function seats()
    {
        return $this->hasMany(Seat::class);
    }
    public function airline()
    {
        return $this->belongsTo(Airline::class);
    }

    public function flightSchedules()
    {
        return $this->hasMany(FlightSchedule::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    // Example Query Builder Method
    public function scopeAvailable($query)
    {
        return $query->where('departure_time', '>', now());
    }
}

