<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ClienteController extends Controller
{
    public function __construct(Cliente $cliente){
        $this->cliente = $cliente;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clientes = DB::table('clientes')
        ->orderBy('nome', 'asc')
        ->get();

        return response()->json($clientes, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate(
            $this->cliente->rules(),
            [
                'nome.required'         => 'Insira o nome do cliente', 
                'cpf.required'          => 'Insira o CPF do cliente', 
                'logradouro.required'   => 'Por favor, insira o logradouro (ex: rua, avenida)', 
                'numero.required'       => 'Por favor, insira o número da residência do cliente', 
                'bairro.required'       => 'Por favor, insira o bairro do cliente', 
                'cidade.required'       => 'Insira a cidade do cliente',
                'email.required'        => 'Insira o e-mail do cliente',
                'cep.required'          => 'Insira o CEP do cliente',
                'dataNasc.required'     => 'Insira a data de nascimento do cliente'
            ]
        );

        $cliente = $this->cliente->create([
            'nome'          => $request->nome,
            'cpf'           => $request->cpf,
            'logradouro'    => $request->logradouro,
            'numero'        => $request->numero,
            'bairro'        => $request->bairro,
            'complemento'   => $request->complemento ?? '',
            'cidade'        => $request->cidade,
            'email'         => $request->email,
            'cep'           => $request->cep,
            'dataNasc'      => $request->dataNasc,
        ]);
        return response()->json(['success' => 'Cliente criado com sucesso!'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function show(Cliente $cliente)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function edit(Cliente $cliente)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cliente $cliente)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cliente  $cliente
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cliente $cliente)
    {
        //
    }
}
