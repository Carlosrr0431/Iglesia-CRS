"use server";

import { revalidatePath } from "next/cache.js";
import Donation from "../models/Donation.js";
import Evento from "../models/Evento.js";
import EventoEspecial from "../models/EventoEspecial.js";
import Oracion from "../models/Oracion.js";
import User from "../models/User.js";
import { connectToDB } from "./db.js";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers.js";
import { NextResponse } from "next/server.js";

export const fetchPayments = async () => {
  try {
    const cookieStore = cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: () => cookieStore,
      }
    );

    let { data: donaciones, error } = await supabase
      .from("donaciones")
      .select("*");

    return donaciones;
  } catch (error) {
    console.log(error);
  }
};

export const getUsuarios = async () => {
  try {
    const cookieStore = cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: () => cookieStore,
      }
    );

    let { data: autorizados, error } = await supabase
      .from("autorizados")
      .select("*");

    return autorizados;
  } catch (error) {
    console.log(error);
  }
};


export const fetchOraciones = async () => {
  try {
    const cookieStore = cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: () => cookieStore,
      }
    );

    let { data: oraciones, error } = await supabase
      .from("oraciones")
      .select("*");

    return oraciones;
  } catch (error) {
    console.log(error);
  }
};

export const fetchEventos = async () => {
  try {
    const cookieStore = cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: () => cookieStore,
      }
    );

    let { data: eventosOficiales, error } = await supabase
      .from("eventosOficiales")
      .select("*");

    return eventosOficiales;
  } catch (error) {
    console.log(error);
  }
};

export const fetchEventosEspeciales = async () => {
  try {
    const cookieStore = cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: () => cookieStore,
      }
    );

    let { data: eventosEspeciales, error } = await supabase
      .from("eventosEspeciales")
      .select("*");

    return eventosEspeciales;
  } catch (error) {
    console.log(error);
  }
};

export const EliminarEvento = async (tipo, idEvento) => {
  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: () => cookieStore,
    }
  );

  try {
    if (tipo == "Eventos Oficiales") {
      console.log(idEvento);

      const evento = await supabase
        .from("eventosOficiales")
        .delete()
        .eq("id", idEvento);
    } else if (tipo == "Eventos Especiales") {
      const evento = await supabase
        .from("eventosEspeciales")
        .delete()
        .eq("id", idEvento);
    }
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUsuario = async (email) => {
  try {
    await connectToDB();

    const user = await User.findOne({ email: email });

    const data = JSON.parse(JSON.stringify(user));

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const modificarPermiso = async (email, permiso) => {
  try {
    await connectToDB();

    const user = await User.findOneAndUpdate(
      { email: email },
      {
        permisoChat: permiso,
      },
      { new: true }
    );

    console.log(user);

    const data = JSON.parse(JSON.stringify(user));

    // revalidatePath("/radio")

    return data;
  } catch (error) {
    console.log(error);
  }
};

// const evento = await Evento.findByIdAndUpdate(
//   idEvento,
//   {
//     titulo: titulo,
//     fecha: fecha,
//     imagenUrl: result.secure_url,
//   },
//   { new: true }
// );
