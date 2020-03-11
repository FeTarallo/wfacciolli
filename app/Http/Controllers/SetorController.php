<?php

namespace App\Http\Controllers;

use App\Models\Setor;
use Illuminate\Http\Request;

class SetorController extends Controller
{
    public function index(){
        $setores = Setor::paginate(10);
        return response()->json(['setores' => $setores]);
    }

    public function getSetores(){
        $setores = Setor::all();
        return response()->json(['setores' => $setores]);
    }

    public function create(){}


    public function store(Request $request){
     $setor = Setor::create($request->all());
     return response()->json(['message' => 'Item cadastrado com sucesso']);
    }

  
    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        $setor = Setor::find($id);
        return response()->json([ 'setor' => $setor ]);
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
