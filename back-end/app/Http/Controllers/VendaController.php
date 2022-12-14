<?php

namespace App\Http\Controllers;

use App\Models\Venda;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class VendaController extends Controller
{
    public function __construct(Venda $venda){
        $this->venda = $venda;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $dataHora = Carbon::now();

        $request->validate(
            $this->venda->rules(),
            [
                'clienteId.required'  => 'Por favor, selecione um cliente!',
                'produtosId.required' => 'É necessário selecionar pelo menos um produto!'
            ]
        );

        $venda = $this->venda->create([
            'dataVenda'     => $dataHora->toDateTimeString(),
            'clienteId'     => $request->clienteId,
            'totalVenda'    => $request->totalVenda,
            'produtosId'    => $request->produtosId
        ]);
        
        return response()->json(['success' => 'Pedido de venda feito com sucesso!'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Venda  $venda
     * @return \Illuminate\Http\Response
     */
    public function show(Venda $venda)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Venda  $venda
     * @return \Illuminate\Http\Response
     */
    public function edit(Venda $venda)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Venda  $venda
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Venda $venda)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Venda  $venda
     * @return \Illuminate\Http\Response
     */
    public function destroy(Venda $venda)
    {
        //
    }
}
