<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Venda extends Model
{
    use HasFactory;

    protected $fillable = [
        'dataVenda', 
        'clienteId',
        'totalVenda',
        'produtosId'
    ];

    public function rules(){
        return [
            'clienteId'  => 'required',
            'produtosId' => 'required'
        ];
    }
}
