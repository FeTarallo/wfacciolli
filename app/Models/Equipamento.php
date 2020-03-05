<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Equipamento extends Model
{
    protected $table = 'equipamento';
    protected $fillable = ['numero_serie', 'obeservaocao', 'tipo_equipamento_id','setor_id'];
    

    public function tipoEquipamentos(){
        return $this->belongsTo(\App\Models\TipoEquipamento::class);
    } 

    public function setores(){
        return $this->belongsTo(\App\Models\Setor::class);
    }
}
