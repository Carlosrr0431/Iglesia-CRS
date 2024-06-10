import { registrarUsuario } from "@/app/action";
import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
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

    async jwt( { token, user } ) {

      if ( user?.email == "carlos.facundo.rr@gmail.com"){
        token.role = "Admin"
      }

      return token;
    }
  },
});

export { handler as GET, handler as POST };

