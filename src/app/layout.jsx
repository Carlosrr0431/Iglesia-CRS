import "./globals.css";


import AOS from 'aos';
import 'aos/dist/aos.css';

import Link from "next/link";
import Nav from "./(components)/Nav";
import Header from "./(components)/Header";
import { AppWrapper } from "./(context)/AppWrapper";
import Image from "next/image";
import Whatsapp from "./public/boton de whatsapp.svg";
import Providers from "./(providers)/Providers";
import { Toaster } from "sonner";
import WhatsApp from "./(components)/WhatsApp";
import Biblia from "./(components)/Biblia";
import BibliaNVI from "./(components)/BibliaNVI";
import { BotonesFlotantes } from "./(components)/BotonesFlotantes";

export const metadata = {
  title: "Iglesia CRS",
  description: "Iglesia Cristiana del Dios VIVO",
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {


  return (
    <html lang="es">
      <body className="montserrat">
        <Nav />
        <Header />

        <main
          className={`page  text-white bg-cover bg-no-repeat font-sora`}
        >
          <Providers>
            <AppWrapper>
              {children}
              <BibliaNVI />
              <Toaster position="bottom-center" richColors />

              <BotonesFlotantes />
            </AppWrapper>
          </Providers>
        </main>
      </body>
    </html>
  );
}
