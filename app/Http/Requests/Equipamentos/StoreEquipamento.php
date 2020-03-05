<?php

namespace App\Http\Requests\Equipamentos;

use Illuminate\Foundation\Http\FormRequest;

class StoreEquipamento extends FormRequest
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
            'numero_serie' => ['required'],
            'tipo_equipamento_id' => ['required'],
            'setor_id' => ['required']
        ];
    }
}
