import "./globals.css";


import Nav from "./(components)/Nav";
import Header from "./(components)/Header";
import { AppWrapper } from "./(context)/AppWrapper";


import Providers from "./(providers)/Providers";
import { Toaster } from "sonner";
import BibliaNVI from "./(components)/BibliaNVI";
import { BotonesFlotantes } from "./(components)/BotonesFlotantes";

export const metadata = {
  title: {
    default: "Iglesia CRS",
    template: '%s - Iglesia Cristiana'
  },

  description: "Iglesia Cristiana del Dios VIVO",
  manifest: "/manifest.json",
  keywords: ['Iglesia', 'Iglesia Salta', 'Iglesia Cristiana', 'Iglesia Evangelica', 'Centro de restauración', 'Orar', 'Culto', 'Lugar para orar'],
  metadataBase: new URL("https://www.centroderestauracion.com.ar"),

  openGraph: {
    title: 'Iglesia Centro de Restauración Salta',
    description: 'Ven a adorar al Rey y a compartir en familia',
    url: 'https://www.centroderestauracion.com.ar',
    siteName: 'Iglesia CRS',
    type: 'website',
  },
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
