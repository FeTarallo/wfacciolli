<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Veiculo extends Model
{
    protected $table = 'veiculo';
    protected $fillable = ['nome', 'placa', 'numero', 'observacao', 'setor_id'];

    public function setores(){
        return $this->belongsTo(\App\Models\Setor::class);
    }
}
