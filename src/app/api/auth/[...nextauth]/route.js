import { supabaseClient } from "@/supabase/client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,

      // En modo prueba activar solo la propiedad authorization y poner el tunel en env. NEXTAUTH_URL = https://d0jvt1bv-3000.brs.devtunnels.ms/
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
          role: profile.role ?? "Miembro",
        };
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      // await registrarUsuario( user.name, user.email)
      return true;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      let { data: autorizados, error } = await supabaseClient
        .from("autorizados")
        .select("*");

      if ( user?.email != undefined ) {
        if ( autorizados.find( (e)  => e.email == user.email))
            token.role = "Admin"
        else token.role = "Miembro"
      }

      // console.log(autorizados);
      // console.log(user?.email);
      // console.log(
      //   autorizados.find((e) => {
      //     if (e != undefined && e.email == user?.email) {
      //       return true;
      //     } else return false;
      //   })
      // );
      // if (autorizados.find((e) => e.email == user?.email))
      //   token.role = "Admin";
      // else token.role = "Miembro"

      // if (user?.email == "carlos.facundo.rr@gmail.com") {
      //   token.role = "Admin";
      // }
    
      return token;
    },
  },
});

export { handler as GET, handler as POST };
