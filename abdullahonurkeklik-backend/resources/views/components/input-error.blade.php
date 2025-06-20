{{-- @props(['messages'])

@if ($messages)
    <ul {{ $attributes->merge(['class' => 'text-sm text-red-600 space-y-1']) }}>
        @foreach ((array) $messages as $message)
            <li>{{ $message }}</li>
        @endforeach
    </ul>
@endif --}}


@props(['messages'])

@if ($messages)
    <span role="alert" {{ $attributes->merge(['class' => 'text-sm text-red-600 invalid-feedback']) }}>
        <strong>{{ $messages[0] }}</strong>
    </span>
@endif