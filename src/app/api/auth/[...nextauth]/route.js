import { registrarUsuario } from "@/app/action";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
      process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.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,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
    
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
  },
});

export { handler as GET, handler as POST };
