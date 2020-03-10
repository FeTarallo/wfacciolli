<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\TipoEquipamento;

class TipoEquipamentoController extends Controller
{
   
    public function index(){
        $tipoEquipamento = TipoEquipamento::all();
        return response()->json(['tipos' => $tipoEquipamento]);
    }

    public function create(){}


    public function store(Request $request){
     $tipoEquipamento = TipoEquipamento::create($request->all());
     return response()->json(['message' => 'Item cadastrado com sucesso']);
    }

  
    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
