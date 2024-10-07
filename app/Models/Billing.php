<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    use HasFactory;

    protected $fillable = [
        'profile_id', 'name'
    ];

    public function profile()
    {
        return $this->belongsTo(Profile::class);
    }

    public function securities()
    {
        return $this->hasMany(Security::class);
    }
}
