// // export { default } from "next-auth/middleware"

// // export const config = { matcher: ["/dashboard"] }

// import { withAuth } from "next-auth/middleware";

// export default withAuth({
//   // Matches the pages config in `[...nextauth]`

//   pages: {
//     signIn: "/login",
//     error: "/error",
//   },

// //   callbacks: {
// //     authorized({ req }) {

// //         console.log(req.nextUrl.pathname);

// //         return true;

// //     },
// //   },
// });

import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export default async function middleware(
  req: NextRequest,
  event: NextFetchEvent
) {
  // if (req.nextUrl.pathname.startsWith("/login") && isAuthenticated) {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  const authMiddleware = withAuth({
    pages: {
      signIn: `/login`,
    },

    callbacks: {
      authorized({ token }) {
        console.log(token?.email, req.nextUrl.pathname);

        if (
          token?.email == "carlos.facundo.rr@gmail.com" &&
          req.nextUrl.pathname == "/dashboard"
        )
          return true;
        else if (req.nextUrl.pathname == "/user" && token?.email !== undefined)
          return true;
        else return false;
      },
    },
  });

  // @ts-expect-error
  return authMiddleware(req, event);
}

export const config = { matcher: ["/dashboard", "/user"] };
