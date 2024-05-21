<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Scout\Searchable;

class Flight extends Model
{

    use HasFactory, SoftDeletes, Searchable;

    protected $fillable = [
        'airline',
        'flight_number',
        'origin',
        'destination',
        'departure_time',
        'arrival_time',
        'price',
    ];

    public function toSearchableArray(): array
    {
        return [
            'flight_number' => $this->flight_number,
        ];
    }

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

