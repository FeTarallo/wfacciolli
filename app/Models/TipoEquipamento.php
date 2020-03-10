<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TipoEquipamento extends Model
{
    protected $table = 'tipo_equipamento';
    protected $fillable = ['nome'];
    

    public function equipamentos(){
        return $this->hasOne(\App\Models\Equipamento::class);
    } 
}
