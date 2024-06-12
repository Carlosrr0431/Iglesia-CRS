import "./globals.css";


import Nav from "./(components)/Nav";
import Header from "./(components)/Header";
import { AppWrapper } from "./(context)/AppWrapper";


import Providers from "./(providers)/Providers";
import { Toaster } from "sonner";
import BibliaNVI from "./(components)/BibliaNVI";
import { BotonesFlotantes } from "./(components)/BotonesFlotantes";

export const metadata = {
  title: "Iglesia CRS",
  description: "Iglesia Cristiana del Dios VIVO",
  manifest: "/manifest.json",
  keywords: ['Iglesia', "Iglesia Salta"]

};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  height: 'device-height',
  
  
}

export default function RootLayout({ children }) {


  return (
    <html lang="es">
      <body className="montserrat h-[100dvh]">
        <Nav />
        <Header />

        <main
          className={`page text-white bg-cover bg-no-repeat font-sora`}
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
