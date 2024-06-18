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
          category_id: datos.name
        },
      ],

      back_urls: {
        success: "http://centroderestauracion.com.ar/payments/exitoso",
        failure: "http://centroderestauracion.com.ar/payments/denegado",
      },

      auto_return: "approved",
      notification_url: "http://centroderestauracion.com.ar/api/webhook",
      // notification_url: "https://iglesia-crs-vqz6.vercel.app/api/webhook",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });

    return NextResponse.json({ result });
  } catch (error) {}

  return NextResponse.json("Resultado concretado");
}
