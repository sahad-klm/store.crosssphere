import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.host.startsWith('aldaninternational.com')) {
    return NextResponse.redirect(
      new URL('https://major-interaction-543393.framer.app/', request.url),
    );
  }
}
