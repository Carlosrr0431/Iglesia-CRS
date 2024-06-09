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
      // console.log("Entro");
      // if () {
      //   return true;
      // } else {
      //   // Return false to display a default error message
      //   return false;
      //   // Or you can return a URL to redirect to:
      //   // return '/unauthorized'
      // }
    },

    async jwt({ token, user }) {
  
        token.name = user.name
        token.email = user.email
        token.picture = user.email

      return token;
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
