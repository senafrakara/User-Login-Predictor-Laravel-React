<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    {{--     <link href="/dist/styles.css" rel="stylesheet">
 --}} <title>Laravel + Vite + React</title>
    @viteReactRefresh
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>

<body class="bg-gray-100">
    <div id="app"></div>
</body>

</html>
