<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Billing;
use App\Http\Resources\BillingResource;

class BillingsController extends Controller
{
    public function index()
    {
        $billings = Billing::all();
        return BillingResource::collection($billings);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'profileId' => 'required|exists:profiles,id',
            'name' => 'required|string|max:255'
        ]);

        $billing = Billing::create($validated);
        return new BillingResource($portfolio);
    }

    public function show($id)
    {
        $billing = Billing::findOrFail($id);
        return new BillingResource($portfolio);
    }

    public function update(Request $request, $id)
    {
        $billing = Billing::findOrFail($id);

        $validated = $request->validate([
            'profile_id' => 'exists:profiles,id',
            'name' => 'string|max:255'
        ]);

        $billing->update($validated);
        return new BillingResource($portfolio);
    }

    public function destroy($id)
    {
        $billing = Billing::findOrFail($id);
        $billing->delete();
        return response()->json(null, 204);
    }
}
