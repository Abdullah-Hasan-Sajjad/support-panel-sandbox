<?php

namespace App\Http\Controllers;

use App\Http\Resources\DummyCollection;
use App\Models\Dummy;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\View\View;
use Inertia\Inertia;
use Inertia\Response;

class AdminController extends Controller
{
    public function index()
    {
        //$dummy = DummyController::class->index();
        //$dummyAll = Dummy::select('')->get();
        $dummyData = DB::table('dummies')->paginate(3);
        //$dummy = DummyResource::collection($dummyAll);
        //$dummyData = new DummyCollection(Dummy::all());
        //$dummyData = new DummyCollection(Dummy::all());

        //dd($dummyData);

        return inertia(
            'Admin/AdminPage',
            compact('dummyData')
        );
    }
}
