<?php

namespace App\Services;

class PredictionService
{
    /**
     * Predict the next login time based on the average interval between logins.
     *
     * This function calculates the time difference (in seconds) between each consecutive login,
     * computes the average interval, and then adds it to the last login time to estimate the next login.
     *
     * @param array $logins Array of login timestamps in ISO 8601 format.
     * @return string Predicted next login time in ISO 8601 format.
     */
    public function predictAverage(array $logins): string
    {
        // Convert the array to a Laravel Collection for easier handling
        $dates = collect($logins);
        $intervals = [];

        // Calculate time differences (in seconds) between each consecutive login
        for ($i = 1; $i < $dates->count(); $i++) {
            $intervals[] = strtotime($dates[$i]) - strtotime($dates[$i - 1]);
        }

        // Calculate the average of all intervals
        $averageInterval = array_sum($intervals) / count($intervals);

        // Add the average interval to the last login time
        $lastLogin = strtotime($dates->last());
        $nextLogin = date(DATE_ATOM, $lastLogin + $averageInterval);

        // Return the predicted next login time in ISO 8601 format
        return $nextLogin;
    }

    /**
     * Predict the next login time based on the most frequent day and time pattern.
     *
     * This function analyzes the login days of the week (e.g., Monday, Tuesday)
     * and the specific login times (e.g., 08:00), then determines the most common
     * day and time. It returns the next date that matches this pattern.
     *
     * @param array $logins Array of login timestamps in ISO 8601 format.
     * @return string|null Predicted next login time or null if input is empty.
     */
    public function predictModeDayPattern(array $logins): ?string
    {
        if (empty($logins)) return null;

        $days = [];
        $hours = [];

        // Extract the day of the week and hour:minute from each login
        foreach ($logins as $login) {
            $date = new \DateTime($login);
            $days[] = $date->format('l');    // e.g., Monday
            $hours[] = $date->format('H:i'); // e.g., 08:00
        }

        // Determine the most frequent login day and hour
        $commonDay = array_search(max(array_count_values($days)), array_count_values($days));
        $commonHour = array_search(max(array_count_values($hours)), array_count_values($hours));

        // Create a DateTime object for the next occurrence of the most common day
        $next = new \DateTime('next ' . $commonDay);

        // Set the time to the most common login time
        [$h, $m] = explode(':', $commonHour);
        $next->setTime($h, $m);

        // Return the predicted next login time in ISO 8601 format
        return $next->format(DATE_ATOM);
    }
}
