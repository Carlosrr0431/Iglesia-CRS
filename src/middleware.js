export const config = { matcher: ["/dashboard"] };

import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login",
    error: "/error",
  },

  callbacks: {
    authorized({ req, token }) {

      console.log("token: " + token?.role);

      if (
        req.nextUrl.pathname.startsWith("/dashboard") && token?.role == "Admin"
      ) {
        return true;
      } else return false;
    },
  },
});

// import { withAuth } from "next-auth/middleware";
// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

// export default async function middleware(
//   req: NextRequest,
//   event: NextFetchEvent
// ) {

//   const authMiddleware = withAuth({
//     pages: {
//       signIn: `/login`,
//     },

//     callbacks: {
//       authorized({ token, req }) {
//         console.log(token, req.nextUrl.pathname);
//         if (
//           token?.email == "carlos.facundo.rr@gmail.com" &&
//           req.nextUrl.pathname == "/dashboard"
//         ) {
//           return true;
//         } else return false
//       },
//     },
//   });

//   // @ts-expect-error
//   return authMiddleware(req, event);
// }

// export const config = { matcher: ["/dashboard", "/user"] };
