<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Portfolio;
use App\Http\Resources\PortfolioResource;

class PortfolioController extends Controller
{
    public function index()
    {
        $portfolios = Portfolio::all();
        return PortfolioResource::collection($portfolios);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'profile_id' => 'required|exists:profiles,id',
            'name' => 'required|string|max:255'
        ]);

        $portfolio = Portfolio::create($validated);
        return new PortfolioResource($portfolio);
    }

    public function show($id)
    {
        $portfolio = Portfolio::findOrFail($id);
        return new PortfolioResource($portfolio);
    }

    public function update(Request $request, $id)
    {
        $portfolio = Portfolio::findOrFail($id);

        $validated = $request->validate([
            'profile_id' => 'exists:profiles,id',
            'name' => 'string|max:255'
        ]);

        $portfolio->update($validated);
        return new PortfolioResource($portfolio);
    }

    public function destroy($id)
    {
        $portfolio = Portfolio::findOrFail($id);
        $portfolio->delete();
        return response()->json(null, 204);
    }
}
