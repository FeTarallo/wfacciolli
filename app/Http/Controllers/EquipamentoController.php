<?php

namespace App\Http\Controllers;

use App\Models\Equipamento;
use Illuminate\Http\Request;
use App\Http\Requests\Equipamentos\StoreEquipamento;

class EquipamentoController extends Controller
{
    
    public function index(){
        $equipamentos = Equipamento::all();
        return response()->json([ 'equipamentos' => $equipamentos ], 200);
    }

    public function create(){}

    public function store(StoreEquipamento $request){
        $equipamento = Equipamento::create($request->all());
        return response()->json(['message' => 'Equipamento cadastrado com sucesso']);
    }

    public function show($id){}

    public function edit($id){}

    public function update(Request $request, $id){
        $equipamento = Equipamento::find($id);
        $equipamento->update($request->all());
        return response()->json(['message' => 'Equipamento atualizado com sucesso']);
    }

    public function destroy($id){}
}
