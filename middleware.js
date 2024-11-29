import { NextResponse } from "next/server";

export function middleware(request) {
  // Log the incoming request URL
  console.log("Incoming request URL:", request.url);

  // Log all incoming headers
  console.log("Incoming request headers:", Object.fromEntries(request.headers));

  // Optionally, check for the Authorization header
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    console.warn("Authorization header is missing!");
  } else {
    console.log("Authorization header:", authHeader);
  }

  // Allow the request to proceed
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
