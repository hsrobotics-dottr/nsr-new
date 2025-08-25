'use client';

import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return (
          <FallbackComponent
            error={this.state.error}
            resetError={this.resetError}
          />
        );
      }

      return (
        <div className='min-h-screen bg-gray-50 flex items-center justify-center p-4'>
          <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center'>
            <div className='w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <AlertTriangle className='w-8 h-8 text-red-600' />
            </div>

            <h1 className='text-2xl font-bold text-gray-900 mb-2'>
              Bir Hata Oluştu
            </h1>

            <p className='text-gray-600 mb-6'>
              Üzgünüz, beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className='mb-6 text-left'>
                <summary className='cursor-pointer text-sm text-gray-500 hover:text-gray-700 mb-2'>
                  Hata Detayları (Geliştirici)
                </summary>
                <pre className='text-xs text-red-600 bg-red-50 p-3 rounded overflow-auto'>
                  {this.state.error.toString()}
                </pre>
              </details>
            )}

            <div className='flex flex-col sm:flex-row gap-3'>
              <Button
                onClick={this.resetError}
                className='flex-1'
                variant='outline'
              >
                <RefreshCw className='w-4 h-4 mr-2' />
                Tekrar Dene
              </Button>

              <Button
                onClick={() => (window.location.href = '/')}
                className='flex-1'
              >
                <Home className='w-4 h-4 mr-2' />
                Ana Sayfa
              </Button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
