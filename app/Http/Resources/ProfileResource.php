<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'name' => $this->name,
            'broker' => $this->broker,
            'token' => $this->token,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at
        ];
    }
}
