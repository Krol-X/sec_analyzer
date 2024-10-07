<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BillingResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'profileId' => $this->profile_id,
            'name' => $this->name,
            'value' => '0 $',
            'secCount' => '0',
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
