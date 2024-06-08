"use client";

import { useRef } from "react";
import { postData } from "../action.js";

export default function Form() {
  const formRef = useRef(null);
  return (
    <form
      action={async (formData) => {
        await postData(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="p-6 fixed  left-0 w-full bg-slate-800"
    >
      <div className="flex">
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          className="flex-grow py-2 px-4 text-black outline-none"
        />
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-full"
        >
          Send
        </button>
      </div>
    </form>
  );
}