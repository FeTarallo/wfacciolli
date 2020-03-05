<?php

namespace App\Http\Requests\Veiculos;

use Illuminate\Foundation\Http\FormRequest;

class StoreVeiculo extends FormRequest
{
   /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nome' => ['required'],
            'placa' => ['required'],
            'numero' => ['required'],
            'setor_id' => ['required']
        ];
    }
}
