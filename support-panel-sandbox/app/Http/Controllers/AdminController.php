<?php

namespace App\Http\Controllers;


use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    public function index()
    {
        $dummyData = DB::table('dummies')->paginate(3);

        return inertia(
            'Admin/AdminPage',
            compact('dummyData')
        );
    }
}
