import { NextRequest, NextResponse } from 'next/server';
import { UserRole } from './constants/role';

export const middleware = async (request: NextRequest) => {
  const { pathname } = request.nextUrl;

  try {
    const sessionRes = await fetch(`${process.env.AUTH_APP_URL}/get-session`, {
      headers: {
        Cookie: request.headers.get('cookie') || '',
      },
    });

    if (!sessionRes.ok) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const session = await sessionRes.json();
    const user = session?.user;

    if (!user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    const role = user.role as UserRole;

    // Role-based access control
    if (
      pathname.startsWith('/dashboard/student') &&
      role !== UserRole.STUDENT
    ) {
      return NextResponse.redirect(
        new URL(`/dashboard/${role.toLowerCase()}`, request.url),
      );
    }

    if (pathname.startsWith('/dashboard/tutor') && role !== UserRole.TUTOR) {
      return NextResponse.redirect(
        new URL(`/dashboard/${role.toLowerCase()}`, request.url),
      );
    }

    if (pathname.startsWith('/dashboard/admin') && role !== UserRole.ADMIN) {
      return NextResponse.redirect(
        new URL(`/dashboard/${role.toLowerCase()}`, request.url),
      );
    }

    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL('/login', request.url));
  }
};

export const config = {
  matcher: ['/dashboard/:path*'],
};
