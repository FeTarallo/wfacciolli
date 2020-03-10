<?php

namespace App\Http\Controllers;

use App\Models\{Equipamento, Setor, TipoEquipamento};
use Illuminate\Http\Request;
use App\Http\Requests\Equipamentos\StoreEquipamento;

class EquipamentoController extends Controller
{
    
    public function index(){
        $equipamentos = Equipamento::withTrashed()->with('setores', 'tipoEquipamentos')->paginate(10);
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

    public function destroy($id){
        // try {
        //     if (! $user = JWTAuth::parseToken()->authenticate()) {
        //         return response()->json(['user_not_found'], 404);
        //     }
        // } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
        //     return response()->json(['token_expired'], $e->getStatusCode());
        // } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
        //     return response()->json(['token_invalid'], $e->getStatusCode());
        // } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
        //     return response()->json(['token_absent'], $e->getStatusCode());
        // }
        $equipamento = Equipamento::withTrashed()->findOrFail($id);
        if($equipamento->trashed()) {
            $equipamento->restore();
            return response()->json(['status' => 'Equipamento restaurado'],200);
        } else {
            $equipamento->delete();
            return response()->json(['status' => 'Equipamento deletado'],200);
        }
    }
}
