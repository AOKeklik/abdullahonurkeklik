@props([
    'disabled' => false,
    'type' => 'text',
    'name',
])

@php
    $errorClass = $errors->has($name) ? ' is-invalid' : '';
@endphp

<input
    type="{{ $type }}"
    name="{{ $name }}"
    id="{{ $attributes->get('id') ?? $name }}"
    {{ $disabled ? 'disabled' : '' }}
    {{ $attributes->merge(['class' => 'form-control' . $errorClass]) }}
>
