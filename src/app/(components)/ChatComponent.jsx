"use client";

import { useEffect, useRef, useState } from "react";
import Pusher from "pusher-js";


export default function ChatComponent() {
    const [totalComments, setTotalComments] = useState([]);

    useEffect(() => {

        let pusher = new Pusher("3f6bbe996346c336b473", {
            cluster: "sa1"
        })

        let channel = pusher.subscribe('chat');

        channel.bind('hello', function (data) {

            const parseComment = JSON.stringify(data)

            setTotalComments((prev) => [...prev, parseComment])

        });

        return () => {
            pusher.unsubscribe('chat')
        }


    }, []);

    return (
        <div className="p-6 flex-grow max-h-screen z-50 overflow-y-auto py-32 bg-black">
            <div className="flex flex-col gap-4">
                {totalComments.map((message, index) => (
                    <div key={index}>
                        <div className="flex items-center">

                            <div className="rounded-lg bg-slate-600 text-white p-4 shadow-md self-start">
                                {message}
                            </div>
                        </div>

                    </div>
                ))}

            </div>
        </div>
    );
}