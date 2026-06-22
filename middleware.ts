import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Block all routes and return a maintenance response
  return new NextResponse(
    `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>SKYPARK — Coming Soon</title>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            background: #020617;
            color: #fff;
            font-family: system-ui, sans-serif;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 24px;
          }
          .dot {
            width: 10px; height: 10px;
            background: #f59e0b;
            border-radius: 50%;
            margin-bottom: 32px;
          }
          h1 { font-size: 2rem; font-weight: 700; margin-bottom: 12px; }
          p { color: #94a3b8; font-size: 0.95rem; max-width: 360px; line-height: 1.6; }
          .tag {
            margin-top: 32px;
            font-size: 0.7rem;
            font-family: monospace;
            color: #f59e0b;
            letter-spacing: 0.15em;
            text-transform: uppercase;
          }
        </style>
      </head>
      <body>
        <div class="dot"></div>
        <h1>SKYPARK.</h1>
        <p>This site is currently undergoing scheduled maintenance. We'll be back shortly.</p>
        <p class="tag">The Kendy Initiative</p>
      </body>
    </html>`,
    {
      status: 503,
      headers: { "Content-Type": "text/html" },
    }
  );
}

export const config = {
  // Blocks all routes except Next.js internals
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};