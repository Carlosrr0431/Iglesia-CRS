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
  metadataBase: new URL('https://www.centroderestauracion.com.ar/'),
  openGraph: {
    title: 'Iglesia Centro de Restauración Salta',
    description: 'Ven a adorar al Rey y a compartir en familia',
    siteName: 'Iglesia CRS',
    url: 'https://www.centroderestauracion.com.ar/',
    type: 'website',
    images: [
      {
        
        url: "https://www.centroderestauracion.com.ar/api/og?img=1",
        width: 256,
        height: 256,
        itemprop: 'image'
      },
      {

        
        url: "https://www.centroderestauracion.com.ar/api/og?img=2",
        width: 600,
        height: 336,
        itemprop: 'image'
      },
      {
        url: "https://www.centroderestauracion.com.ar/api/og?img=3",
        width: 1200,
        height: 630,
        itemprop: 'image'
      },


    ],
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
