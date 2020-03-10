<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Veiculo extends Model{
    use SoftDeletes;
    protected $table = 'veiculo';
    protected $fillable = ['nome', 'placa', 'numero', 'observacao', 'setor_id'];

    public function setores(){
        return $this->belongsTo(\App\Models\Setor::class);
    }
}
