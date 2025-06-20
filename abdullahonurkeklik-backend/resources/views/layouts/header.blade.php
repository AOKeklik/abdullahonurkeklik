<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no" name="viewport">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="shortcut icon" href="{{ setting("site_favicon") }}">

        <title>{{ setting("site_name") }} - @yield("title", "Admin Dashboard")</title>


        <!-- General CSS Files -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">

        <!-- CSS Libraries -->
        <link rel="stylesheet" href="{{  asset('assets/css/plugins/summernote-bs4.css') }}">
        <link rel="stylesheet" href="{{  asset('assets/css/plugins/selectric.css') }}">
        <link rel="stylesheet" href="{{  asset('assets/css/plugins/bootstrap-tagsinput.css') }}">
        <link rel="stylesheet" href="{{  asset('assets/css/plugins/bootstrap-timepicker.min.css') }}">
        <link rel="stylesheet" href="{{  asset('assets/css/plugins/daterangepicker.css') }}">
        <link rel="stylesheet" href="{{  asset('assets/css/plugins/select2.min.css') }}">
        <link rel="stylesheet" href="{{  asset('assets/css/plugins/iziToast.min.css') }}">

        <!-- Template CSS -->
        <link rel="stylesheet" href="{{  asset('assets/css/style.css') }}">
        <link rel="stylesheet" href="{{  asset('assets/css/components.css') }}">

        @stack("styles")
    </head>
    <body>
        <div id="app">
            <div class="main-wrapper">