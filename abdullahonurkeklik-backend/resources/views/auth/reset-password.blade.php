@extends("layouts.auth")
@section("title", "Signin")
@section("content")
<div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
    <x-form-logo />

    <div class="card card-primary">
        <div class="card-header"><h4>Reset Password</h4></div>

        <div class="card-body">
            <p class="text-muted">We will send a link to reset your password</p>
            <form method="POST" action="{{ route('password.store') }}">
                @csrf
                <!-- Password Reset Token -->
                <input type="hidden" name="token" value="{{ $request->route('token') }}">

                <div class="form-group">
                    <x-input-label for="email" :value="__('Email')" />
                    <x-text-input type="email" name="email" :value="old('email', $request->email)" autofocus />
                    <x-input-error :messages="$errors->get('email')" />
                </div>

                <div class="form-group">
                    <x-input-label for="password" :value="__('New Password')" />
                    <x-text-input type="password" name="password" />
                    <x-input-error :messages="$errors->get('password')" />
                </div>

                <div class="form-group">
                    <x-input-label for="password_confirmation" :value="__('Confirm Password')" />
                    <x-text-input type="password" name="password_confirmation" />
                    <x-input-error :messages="$errors->get('password_confirmation')" />
                </div>

                <div class="form-group">
                    <x-primary-button class="btn-block">
                        {{ __('Reset Password') }}
                    </x-primary-button>
                </div>
            </form>
            <div class="mt-1 text-muted text-center">
                Already have an account? <a href="{{ route('login') }}">Log in</a>.
            </div>
        </div>
    </div>
    <div class="simple-footer">{!! setting("site_copy") !!} {{ setting("site_name") }}</div>
</div>
@endsection