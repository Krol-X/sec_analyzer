<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class SecurityResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'isin' => $this->isin,
            'figi' => $this->figi,
            'portfolio_id' => $this->portfolio_id,
            'company_name' => $this->company_name,
            'value' => $this->value,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
