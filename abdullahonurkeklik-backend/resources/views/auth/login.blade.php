@extends("layouts.auth")
@section("title", "Signin")
@section("content")
    <div class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
        <x-form-logo />

        <div class="card card-primary">
            <div class="card-header"><h4>Login</h4></div>

            <div class="card-body">
                <form method="POST" action="{{ route('login') }}">
                    @csrf
                    <div class="form-group">
                        <x-input-label for="email" :value="__('Email')" />
                        <x-text-input type="email" name="email" :value="old('email')" autofocus />
                        <x-input-error :messages="$errors->get('email')" />
                    </div>

                    <div class="form-group">
                        <div class="d-block">
                            <div class="float-right">
                                <a href="{{ route("password.request") }}" class="text-small">
                                Forgot Password?
                                </a>
                            </div>
                        </div>
                        <x-input-label for="password" :value="__('Password')" />
                        <x-text-input type="password" name="password" />
                        <x-input-error :messages="$errors->get('password')" />
                    </div>

                    <div class="form-group">
                        <div class="custom-control custom-checkbox">
                        <input type="checkbox" name="remember" class="custom-control-input" tabindex="3" id="remember_me">
                            <label class="custom-control-label" for="remember_me">Remember Me</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <x-primary-button class="btn-block">
                            {{ __('Login') }}
                        </x-primary-button>
                    </div>
                </form>
            </div>
        </div>
        <div class="simple-footer">{!! setting("site_copy") !!} {{ setting("site_name") }}</div>
    </div>
@endsection