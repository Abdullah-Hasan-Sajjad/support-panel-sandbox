<?php

namespace App\Http\Controllers;

use App\Models\Dummy;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DummyController extends Controller
{
    public function index()
    {
        return Dummy::all();
    }
}
