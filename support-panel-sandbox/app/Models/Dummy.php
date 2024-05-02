<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dummy extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'last_contacted',
        'sales_representative',
        'status',
        'deal_value',
    ];
}
