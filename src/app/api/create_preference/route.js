import { MercadoPagoConfig, Preference } from "mercadopago";
import { NextResponse } from "next/server";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

export async function GET() {
  return NextResponse.json("Entro al servidor");
}

export async function POST(request) {
  try {
    const datos = await request.json();

    const body = {
      items: [
        {
          title: datos.title,
          description: datos.description,
          quantity: Number(1),
          unit_price: Number(datos.price),
          currency_id: "ARS",
        },
      ],

      back_urls: {
        success: "https://tn.com.ar/",
        failure: "https://tn.com.ar/",
        pending: "https://tn.com.ar/",
      },

      auto_return: "approved",
      notification_url: "https://iglesia-crs-vqz6.vercel.app/api/webhook",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });

    return NextResponse.json({ result });
  } catch (error) {}

  return NextResponse.json("Resultado concretado");
}
