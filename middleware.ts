import { NextRequest, NextResponse } from "next/server";

const CV_HOST = "cv.yashaswini.xyz";

export function middleware(request: NextRequest) {
  if (request.nextUrl.hostname === CV_HOST) {
    return NextResponse.rewrite(new URL("/cv", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
