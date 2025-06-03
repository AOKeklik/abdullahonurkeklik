<!-- Include Alpine.js -->
<script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer></script>

<style>
    .modal-bg {
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0,0,0,0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 50;
    }

    .modal-content {
        background: #fff;
        padding: 2rem;
        border-radius: 0.5rem;
        width: 100%;
        max-width: 500px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    }

    .hidden { display: none; }
</style>

<!-- Delete Account Section -->
<section x-data="{ showModal: false }" class="space-y-6">
    <header class="card-header d-block">
        <h2>{{ __('Delete Account') }}</h2>
        <p class="mt-1 text-sm text-gray-600">
            {{ __('Once your account is deleted, all of its resources and data will be permanently deleted.') }}
        </p>
    </header>

    <!-- Delete Button -->
    <div class="card-footer text-right">
        <x-danger-button @click="showModal = true">
            {{ __('Delete Account') }}
        </x-danger-button>
    </div>

    <!-- Modal -->
    <div x-show="showModal" class="modal-bg" x-transition>
        <div class="modal-content" @click.away="showModal = false">
            <h2 class="text-lg font-medium text-gray-900 mb-2">
                {{ __('Are you sure you want to delete your account?') }}
            </h2>

            <p class="text-sm text-gray-600 mb-4">
                {{ __('Once your account is deleted, all of its resources and data will be permanently deleted. Enter your password to confirm.') }}
            </p>

            <form method="POST" action="{{ route('profile.destroy') }}">
                @csrf
                @method('delete')

                <div>
                    <x-input-label for="password" value="{{ __('Password') }}" />
                    <x-text-input id="password" name="password" type="password" class="mt-1 w-full" placeholder="Password" />
                    <x-input-error :messages="$errors->userDeletion->get('password')" class="mt-2" />
                </div>

                <div class="mt-4 flex justify-end space-x-2">
                    <x-secondary-button type="button" @click="showModal = false">
                        {{ __('Cancel') }}
                    </x-secondary-button>
                    <x-danger-button>
                        {{ __('Delete Account') }}
                    </x-danger-button>
                </div>
            </form>
        </div>
    </div>
</section>
