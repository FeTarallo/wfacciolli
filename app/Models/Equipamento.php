<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Equipamento extends Model{
    use SoftDeletes;

    protected $table = 'equipamento';
    protected $fillable = ['numero_serie', 'obeservacao', 'tipo_equipamento_id','setor_id'];
    

    public function tipoEquipamentos(){
        return $this->belongsTo(\App\Models\TipoEquipamento::class);
    } 

    public function setores(){
        return $this->belongsTo(\App\Models\Setor::class);
    }
}
