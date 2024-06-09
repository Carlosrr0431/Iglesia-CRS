import { registrarUsuario } from "@/app/action";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";



const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:
      process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,

    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
    
      return true;
    
    },
  },
});

export { handler as GET, handler as POST };
