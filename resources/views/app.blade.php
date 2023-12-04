<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <title>{{env('APP_NAME')}}</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
        <!-- Favicon -->
        <link rel="shortcut icon" href="{{ asset('favicon/favicon.ico') }}">
    </head>
    <body class="theme-light">
        <div id="app"></div>
        <script src="{{ asset('js/app.js') .'?'. now() }}"></script>
    </body>
</html>
