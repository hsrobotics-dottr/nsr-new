import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // App Router için gerekli middleware
  const response = NextResponse.next();

  // Vercel için optimize edilmiş cache kontrolü
  if (request.nextUrl.pathname.startsWith('/_next/static/')) {
    response.headers.set(
      'Cache-Control',
      'public, max-age=31536000, immutable'
    );
  } else if (request.nextUrl.pathname.startsWith('/api/')) {
    response.headers.set('Cache-Control', 'public, max-age=300');
  } else {
    response.headers.set('Cache-Control', 'public, max-age=3600');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
