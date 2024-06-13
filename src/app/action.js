"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

import { connectToDB } from "./lib/db";
import { v2 as cloudinary } from "cloudinary";
import Oracion from "./models/Oracion";
import Evento from "./models/Evento";
import EventoEspecial from "./models/EventoEspecial";
import User from "./models/User";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

import { MercadoPagoConfig, Preference } from "mercadopago";
import { redirect } from "next/navigation";

const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADO_PAGO_ACCESS_TOKEN,
});

cloudinary.config({
  cloud_name: "dlxwkq6bm",
  api_key: "312155376375165",
  api_secret: "OuD06O8Izb2EVH8rnWYr9Xjfeak",
});

export async function postData(formData, userName, email, img) {
  const message = formData.get("message");

  console.log(message + " " + userName + " " + email + img);

  const Pusher = require("pusher");

  const pusher = new Pusher({
    appId: "1765391",
    key: "3f6bbe996346c336b473",
    secret: "cf6d3f62c67be65430ce",
    cluster: "sa1",
    useTLS: true,
  });

  await pusher.trigger("chat", "hello", {
    message: message,
    nombre: userName,
    email: email,
    imagen: img,
  });
}

export async function sendForm(formData) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: () => cookieStore,
    }
  );

  const nombre = formData.get("name");
  const telefono = formData.get("phone");
  const motivo = formData.get("mensaje");

  const result2 = await supabase
    .from("oraciones")
    .insert({
      nombre: nombre,
      telefono: telefono,
      mensaje: motivo,
    })
    .single();


    
  return { message: "Success" };
}

export async function actualizarDatos(formData, idEvento, tipo) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: () => cookieStore,
    }
  );

  const titulo = formData.get("titulo");
  const fecha = formData.get("fecha");
  const imagen = formData.get("imagen");

  if (!imagen) {
    return NextResponse.json("No se ha subido ninguna imagen", {
      status: 400,
    });
  }

  const bytes = await imagen.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) reject(err);

        resolve(result);
      })
      .end(buffer);
  });

  if (tipo == "Eventos Oficiales") {
    const result2 = await supabase
      .from("eventosOficiales")
      .update({
        titulo: titulo,
        fecha: fecha,
        imagenUrl: result.secure_url,
      })
      .eq("id", idEvento);

    console.log(JSON.stringify(result2));
  } else if (tipo == "Eventos Especiales") {
    const result3 = await supabase
      .from("eventosEspeciales")
      .update({
        titulo: titulo,
        fecha: fecha,
        imagenUrl: result.secure_url,
      })
      .eq("id", idEvento);
  }
}

export async function crearEvento(formData, tipo) {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: () => cookieStore,
    }
  );

  const titulo = formData.get("titulo");
  const fecha = formData.get("fecha");
  const imagen = formData.get("imagen");

  console.log("Entro crear evento");

  if (!imagen) {
    return NextResponse.json("No se ha subido ninguna imagen", {
      status: 400,
    });
  }

  const bytes = await imagen.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const result = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) reject(err);

        resolve(result);
      })
      .end(buffer);
  });

  if (tipo == "Eventos Oficiales") {
    const result2 = await supabase
      .from("eventosOficiales")
      .insert({
        titulo: titulo,
        fecha: fecha,
        imagenUrl: result.secure_url,
      })
      .single();

    console.log(JSON.stringify(result2));
  } else if (tipo == "Eventos Especiales") {
    const result3 = await supabase
      .from("eventosEspeciales")
      .insert({
        titulo: titulo,
        fecha: fecha,
        imagenUrl: result.secure_url,
      })
      .single();
  }

  return { message: "Success" };
}

export const registrarUsuario = async (nombre, email) => {
  try {
    await connectToDB();

    const newUser = await User.create({
      nombre: nombre,
      email: email,
      permisoChat: true,
    });

    const data = JSON.parse(JSON.stringify(newUser));
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export async function donate(formData) {
  const preference = await new Preference(client).create({
    body: {
      items: [
        {
          id: "donacion",
          title: formData.get("mensaje"),
          quantity: 1,
          unit_price: Number(formData.get("monto")),
        },
      ],

      back_urls: {
        success: "https://tn.com.ar/",
        failure: "https://tn.com.ar/",
        pending: "https://tn.com.ar/",
      },

      auto_return: "approved",
      notification_url: "https://iglesia-crs-qx4l.vercel.app/api/webhook",
    },
  });

  redirect(preference.init_point);
}
