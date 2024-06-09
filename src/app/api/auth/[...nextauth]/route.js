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

  jwt: {
    async encode({ secret, token }) {
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      return jwt.verify(token, secret);
    },
  },

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // await registrarUsuario( user.name, user.email)

      return user;
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
