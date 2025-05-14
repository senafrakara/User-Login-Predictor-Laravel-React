<?php

namespace App\Http\Controllers;

use App\Services\PredictionService;
use Illuminate\Support\Facades\Http;

class UserController extends Controller
{
    protected $predictionService;
    protected $apiBaseUrl;


    public function __construct(PredictionService $predictionService)
    {
        $this->predictionService = $predictionService;
        $this->apiBaseUrl = 'https://case-test-api.humanas.io';
    }

    public function index()
    {
        $response = Http::get($this->apiBaseUrl);

        if ($response->successful()) {
            $responseData = $response->json();

            $users = $responseData['data']['rows'];


            foreach ($users as &$user) {
                $logins = $user['logins'];

                $user['predicted_login_average'] = $this->predictionService->predictAverage($logins);
                $user['predicted_login_pattern'] = $this->predictionService->predictModeDayPattern($logins);
            }

            return response()->json($users);
        } else {
            return response()->json(['error' => 'Exception when fetching data from external API'], 500);
        }
    }
}
