<?php

namespace App\Http\Controllers;

use App\Models\Veiculo;
use Illuminate\Http\Request;
use App\Http\Requests\Veiculos\StoreVeiculo;

class VeiculoController extends Controller
{
    public function index(){
        $veiculos = Veiculo::all();
        return response()->json([ 'veiculos' => $veiculos ], 200);
    }

    public function create(){}

    public function store(Request $request){
        $veiculo = Veiculo::create($request->all());
        return response()->json(['message' => 'Veiculo cadastrado com sucesso'],200);
    }

    public function show($id){}

    public function edit($id){}

    public function update(StoreVeiculo $request, $id){
        $veiculos = Veiculos::find($id);
        $veiculos->update($request->all());
        return response()->json(['message' => 'veiculos atualizado com sucesso'], 200);
    }

    public function destroy($id){}
}
