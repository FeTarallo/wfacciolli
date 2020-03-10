<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Setor extends Model{
    
    protected $table = 'setor';
    protected $fillable = ['nome'];

    public function veiculos(){
        return $this->hasMany(\App\Models\Veiculos::class);
    }

    public function equipamentos(){
        return $this->hasMany(\App\Models\Equipamentos::class);
    }
}
