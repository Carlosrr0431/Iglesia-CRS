import { NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

let contador = 1;
let fuente = "";

export async function GET() {
  return NextResponse.json("Entro al servidor");
}

export async function POST(request) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: () => cookieStore,
    }
  );
  const resp = await request.json();

  if (resp?.resource) fuente = resp.resource;

  const paymenyId = resp?.data?.id;

  const response = await fetch(
    `https://api.mercadopago.com/v1/payments/${paymenyId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
      },
    }
  );

  if (response.ok) {
    const data = await response.json();

    const response2 = await fetch(fuente, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
      },
    });

    const dato = await response2.text();

    const dataInfo = JSON.parse(dato)

    // approved
    console.log(dataInfo.payments[0].status);
    console.log(dataInfo.items[0]);
    // const dataTransform = JSON.parse({items})
    // console.log("Datatransform: " +  dataTransform);
    // console.log(dataTransform.items[0].title);

    // const descripcionUser = dataTransform.items[0].description;

    // if (contador == 1 && dataTransform.items != undefined) {
      // console.log(JSON.parse(dataTransform).items[0].title);

      // const descripcionUser = dataTransform.items[0].description;

      // console.log(descripcionUser);

      // const result2 = await supabase
      // .from("donaciones")
      // .insert({
      //   descripcion: descripcionUser,
      //   monto: data.transaction_amount,
      //   tipo: data.payment_method.type,
      //   email: data.payer.email,
      //   titulo: data.description,
      // })
      // .single();

    //   contador++;
    // }

    return NextResponse.json(data);
  }

  return NextResponse.json({ paymenyId });
}

//    --   Recuperar --

// import { NextResponse } from "next/server";

// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export async function GET() {
//   return NextResponse.json("Entro al servidor");
// }

// export async function POST(request) {
// const cookieStore = cookies();

// const supabase = createServerClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//   {
//     cookies: () => cookieStore,
//   }
// );

//   const resp = await request.json();

//   const paymenyId = resp?.data?.id;

//   const response = await fetch(
//     `https://api.mercadopago.com/v1/payments/${paymenyId}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
//       },
//     }
//   );

//   const data = await response.json();

//   const response2 = await fetch(
//     `https://api.mercadopago.com/checkout/preferences/${data.id}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
//       },
//     }
//   );

//   const data3 = await response2.json()

//   console.log("preferences: " + JSON.stringify(data3));

//   if (response.ok) {

//     const dataTransform = {
//       descripcion: data.description,
//       monto: data.transaction_amount,
//       tipo: data.payment_method.type,
//       email: data.payer.email,
//     };

// const result2 = await supabase
//   .from("donaciones")
//   .insert({
//     descripcion: data.description,
//     monto: data.transaction_amount,
//     tipo: data.payment_method.type,
//     email: data.payer.email,
//   })
//   .single();

//       console.log(data);

//     return NextResponse.json(data);
//   }

//   return NextResponse.json({ paymenyId });
// }

// ----------------------

// import { NextResponse } from "next/server";
// import Donation from "../../models/Donation";
// import { connectToDB } from "../../lib/db";

// let contador = 1;
// let fuente = "";

// export async function GET() {
//   return NextResponse.json("Entro al servidor");
// }

// export async function POST(request) {
//   const resp = await request.json();

//   if (resp?.resource) fuente = resp.resource;

//   const paymenyId = resp?.data?.id;

//   console.log(paymenyId);

// const response = await fetch(
//   `https://api.mercadopago.com/v1/payments/${paymenyId}`,
//   {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
//     },
//   }
// );

//   if (response.ok) {
//     const data = await response.json();

//     const response2 = await fetch(fuente, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
//       },
//     });

//     const dato = await response2.json();

//     const descripcionUser = dato.items[0].description;

//     await connectToDB();

//     if (contador == 1) {
//       let donacion = await Donation.create({
//         descripcion: descripcionUser,
//         monto: data.transaction_amount,
//         tipo: data.payment_method.type,
//         email: data.payer.email,
//         titulo: data.description,
//       });
//       contador++;
//     }

//     return NextResponse.json(data);
//   }

//   return NextResponse.json({ paymenyId });
// }

// ----------------- RECUPERAR CODIGO ----------------

// import { NextResponse } from "next/server";
// import Donation from "../../models/Donation";
// import { connectToDB } from "../../lib/db";

// export async function GET() {
//   return NextResponse.json("Entro al servidor");
// }

// export async function POST(request) {
//   const resp = await request.json();

//   const paymenyId = resp?.data?.id;

//   const response = await fetch(
//     `https://api.mercadopago.com/v1/payments/${paymenyId}`,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
//       },
//     }
//   );

//   if (response.ok) {
//     const data = await response.json();

//     const dataTransform = {
//       descripcion: data.description,
//       monto: data.transaction_amount,
//       tipo: data.payment_method.type,
//       email: data.payer.email,
//     };

//     await connectToDB();

//     let donacion = await Donation.create({
//       descripcion: data.description,
//       monto: data.transaction_amount,
//       tipo: data.payment_method.type,
//       email: data.payer.email,
//       titulo: "hola",
//     });

//     console.log(dataTransform);

//     console.log(data);

//     return NextResponse.json(data);
//   }

//   return NextResponse.json({ paymenyId });
// }

// -------------------------------------------------------

// if (resp?.resource) {
//   console.log("resource" + resp.resource);

//   const response2 = await fetch(resp.resource,
//     {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.MERCADO_PAGO_ACCESS_TOKEN}`,
//       },
//     }
//   );

//     const dato = await response2.json()

//     descripcionUser = dato.items[0].description
// }
