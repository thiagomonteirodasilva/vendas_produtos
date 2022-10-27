<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome', 
        'cpf', 
        'logradouro', 
        'numero', 
        'bairro', 
        'complemento',
        'cidade',
        'email',
        'cep',
        'dataNasc'
    ];

    public function rules(){
        return [
            'nome' => 'required',
            'cpf' => 'required', 
            'logradouro' => 'required', 
            'numero' => 'required', 
            'bairro' => 'required', 
            'cidade' => 'required',
            'email' => 'required',
            'cep' => 'required',
            'dataNasc' => 'required'
        ];
    }
}
