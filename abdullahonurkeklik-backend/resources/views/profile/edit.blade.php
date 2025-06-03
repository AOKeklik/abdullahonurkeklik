@extends("layouts.app")
@section("title", "Profile")
@section("content")
    <div class="section-header">
        <h1>Profile</h1>
        <div class="section-header-breadcrumb">
            <div class="breadcrumb-item active"><a href="#">Dashboard</a></div>
            <div class="breadcrumb-item">Profile</div>
        </div>
    </div>
    <div class="section-body">
        <div class="row mt-sm-4">
            <div class="col-12">
                <div class="card">
                    @include('profile.partials.update-profile-information-form')
                </div>
            </div>

            <div class="col-12">
                <div class="card">
                    @include('profile.partials.update-password-form')
                </div>
            </div>

            <div class="col-12">
                <div class="card">
                    @include('profile.partials.delete-user-form')
                </div>
            </div>
        </div>
    </div>
@endsection