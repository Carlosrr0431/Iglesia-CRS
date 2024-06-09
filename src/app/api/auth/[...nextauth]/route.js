import { registrarUsuario } from "@/app/action";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: profile.role ?? "user",
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // await registrarUsuario( user.name, user.email)

      return true;

    },

  },
});

export { handler as GET, handler as POST };

// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId:
//       process.env.AUTH_GOOGLE_ID,
//       clientSecret: process.env.AUTH_GOOGLE_SECRET,

//     }),
//   ],

//   callbacks: {
//     async signIn({ user, account, profile, email, credentials }) {

//       return true;

//     },
//   },
// });

// export { handler as GET, handler as POST };
