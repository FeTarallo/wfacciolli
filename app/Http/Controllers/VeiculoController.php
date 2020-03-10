<?php

namespace App\Http\Controllers;

use App\Models\Veiculo;
use App\Models\Setor;
use Illuminate\Http\Request;
use App\Http\Requests\Veiculos\StoreVeiculo;

class VeiculoController extends Controller
{
    public function index(){
        $veiculos = Veiculo::withTrashed()->with('setores')->paginate(10);
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

    public function destroy($id){
        $veiculo = Veiculo::withTrashed()->findOrFail($id);
        if($veiculo->trashed()) {
            $veiculo->restore();
            return response()->json(['status' => 'Veiculo restaurado'],200);
        } else {
            $veiculo->delete();
            return response()->json(['status' => 'Veiculo deletado'],200);
        }
    }
}
