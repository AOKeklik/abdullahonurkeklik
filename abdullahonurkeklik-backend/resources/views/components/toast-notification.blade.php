@if(session('error') || session('status'))
    <script>
        iziToast.show({
            title: "{{ session('error') ?? session('status') }}",
            position: "topRight",
            color: "{{ session('error') ? 'red' : 'green' }}",
            timeout: 5000
        });
    </script>
@endif
