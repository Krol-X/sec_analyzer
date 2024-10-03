<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Security extends Model
{
    use HasFactory;

    protected $fillable = [
        'isin', 'figi', 'portfolio_id', 'company_name', 'value'
    ];

    public function portfolio()
    {
        return $this->belongsTo(Portfolio::class);
    }
}
