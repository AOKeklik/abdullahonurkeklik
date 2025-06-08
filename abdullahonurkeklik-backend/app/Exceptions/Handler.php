<?php

namespace App\Exceptions;

use Illuminate\Auth\AuthenticationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Throwable;

class Handler extends ExceptionHandler
{
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            // Log unexpected errors if needed
        });
    }

    // 404
    protected function handleNotFoundHttpException($request, NotFoundHttpException $exception)
    {
        if ($request->expectsJson())
            return response()->json([
                'success' => false,
                'error_type' => 'credential',
                'message' => 'The resource you are looking for could not be found.',
                'error' => 'resource_not_found'
            ], 404);

        return redirect()->back()->with('error', 'Resource not found.');
    }

    // 404
    protected function handleModelNotFoundException($request, ModelNotFoundException $exception)
    {
        if ($request->expectsJson())
            return response()->json([
                'success' => false,
                'error_type' => 'not_found',
                'message' => 'The requested resource was not found.',
                'error' => 'model_not_found',
            ], 404);

        return redirect()->back()->with('error', 'Resource not found.');
    }

    // 422
    protected function handleValidationException(ValidationException $e, $request)
    {
        if ($request->expectsJson())
            return response()->json([
                'success' => false,
                'error_type' => 'validation',
                'message' => 'Validation failed',
                'errors' => $e->errors(),
            ], 422);

        return redirect()
            ->back()
            ->withInput()
            ->withErrors($e->errors())
            ->with('error', 'Please correct the errors below.');
    }

    // 401
    protected function unauthenticated($request, AuthenticationException $exception)
    {
        if ($request->expectsJson())
            return response()->json([
                'success' => false,
                'error_type' => 'credential',
                'message' => 'Unauthenticated. Please log in.',
                'error' => 'authentication_required',
                // 'login_url' => route('login')
            ], 401);
        
        // return redirect()->guest(route('login'));
    }    

    public function render($request, Throwable $exception)
    {
        // Handle NotFoundHttpException (404)
        if ($exception instanceof NotFoundHttpException) {
            return $this->handleNotFoundHttpException($request, $exception);
        }

        // Handle ModelNotFoundException (404 for models)
        if ($exception instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
            return $this->handleModelNotFoundException($request, $exception);
        }

        // Handle ValidationException (422)
        if ($exception instanceof ValidationException) {
            return $this->handleValidationException($exception, $request);
        }

        // General
        // if ($request->expectsJson()) {
        //     $statusCode = $this->getStatusCode($exception);
    
        //     // Handle 500 separately
        //     if ($statusCode === 500) {
        //         return response()->json([
        //             'success' => false,
        //             'error_type' => 'server_error',
        //             'message' => 'An internal server error occurred.',
        //             'error' => 'internal_server_error',
        //         ], 500);
        //     }
    
        //     return response()->json([
        //         'success' => false,
        //         'error_type' => 'general',
        //         'message' => $exception->getMessage(),
        //     ], $statusCode);
        // }

        return parent::render($request, $exception);
    }

    protected function getStatusCode(Throwable $exception)
    {
        if ($exception instanceof \Illuminate\Database\Eloquent\ModelNotFoundException) {
            return 404;
        }

        if ($exception instanceof \Illuminate\Auth\AuthenticationException) {
            return 401;
        }

        if ($exception instanceof \Symfony\Component\HttpKernel\Exception\HttpException) {
            return $exception->getStatusCode();
        }

        return 500;
    }
}
