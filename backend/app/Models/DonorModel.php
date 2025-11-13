<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DonorModel extends Model
{
    //
    protected $table = 'donor';
    
    protected $fillable = [
        'name',
        'age',
        'blood_group',
        'gender',
        'contact',
        'id_document',
        'blood_test_document',
        'location',
        'status',
    ];
}
