<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!--  <meta name="yandex-verification" content="711abed7d9b5a891" />-->
    <!--  <meta name="yandex-verification" content="7e9fb0dfaa70431f" />-->

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
{{--    <script src="{{ mix('js/app.js') }}" defer></script>--}}

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div class="wrapper" id="wrapper">
        @include('site.layouts.partials._fix-bar')
        @include('site.layouts.partials._bar')

        @include('site.layouts.partials._header-carousel')

        <!-- Content -->
        @yield('content')
        <!-- Content END -->

        @include('site.layouts.partials._footer')

        <div class="nav-overlay"></div>

        @include('site.layouts.partials._get-consulting-modal')

        @include('site.layouts.partials._order-modal')
    </div>

    @include('site.layouts.partials._mobile-nav')

    <!-- Javascript -->
    <script type='text/javascript' src="{{ asset('js/site/jquery.min.js') }}"></script>
    <script type='text/javascript' src="{{ asset('js/site/libs.min.js') }}"></script>
    <script type='text/javascript' src="{{ asset('js/site/common.js') }}"></script>

    @stack('site-scripts')
</body>
</html>
