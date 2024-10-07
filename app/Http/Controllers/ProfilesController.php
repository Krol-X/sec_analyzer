<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profile;
use App\Http\Resources\ProfileResource;

class ProfilesController extends Controller
{
    public function index()
    {
        $profiles = Profile::all();
        return ProfileResource::collection($profiles);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'brokerId' => 'required|number',
            'token' => 'required|string|max:255'
        ]);

        $profile = Profile::create($validated);
        return new ProfileResource($profile);
    }

    public function show($id)
    {
        $profile = Profile::findOrFail($id);
        return new ProfileResource($profile);
    }

    public function update(Request $request, $id)
    {
        $profile = Profile::findOrFail($id);

        $validated = $request->validate([
            'name' => 'string|max:255',
            'brokerId' => 'number',
            'token' => 'string|max:255'
        ]);

        $profile->update($validated);
        return new ProfileResource($profile);
    }

    public function destroy($id)
    {
        $profile = Profile::findOrFail($id);
        $profile->delete();
        return response()->json(null, 204);
    }
}
