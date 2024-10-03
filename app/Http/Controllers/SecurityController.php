<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Security;
use App\Http\Resources\SecurityResource;

class SecurityController extends Controller
{
    public function index()
    {
        $securities = Security::all();
        return SecurityResource::collection($securities);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'portfolio_id' => 'required|exists:portfolios,id',
            'isin' => 'required|string|max:255',
            'figi' => 'string|max:255',
            'company_name' => 'required|string|max:255',
            'value' => 'required|numeric'
        ]);

        $security = Security::create($validated);
        return new SecurityResource($security);
    }

    public function show($id)
    {
        $security = Security::findOrFail($id);
        return new SecurityResource($security);
    }

    public function update(Request $request, $id)
    {
        $security = Security::findOrFail($id);

        $validated = $request->validate([
            'portfolio_id' => 'exists:portfolios,id',
            'isin' => 'string|max:255',
            'figi' => 'string|max:255',
            'company_name' => 'string|max:255',
            'value' => 'numeric'
        ]);

        $security->update($validated);
        return new SecurityResource($security);
    }

    public function destroy($id)
    {
        $security = Security::findOrFail($id);
        $security->delete();
        return response()->json(null, 204);
    }
}
