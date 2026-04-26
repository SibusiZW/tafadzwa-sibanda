'use client';

import { Loader2, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import { toast } from "sonner";
import { createMessage } from "@/server/messages";

export default function ContactCard() {

    const [contact, setContact] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    async function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        setLoading(true);
        await createMessage(contact, message);
        setLoading(false);

        toast.success("Message sent succesfully!");
        setMessage("");
        setContact("");
    }

    return (
        <div className="p-4 space-y-4 w-full max-w-[450px]">
            <h1 className="font-serif text-3xl">Contact <span className="text-orange-500">me</span></h1>
            
            <form onSubmit={handleSubmit}>
                <Input value={contact} className="w-full mb-2" placeholder="Enter your contact details here, e.g phone number or email" onChange={(e) => setContact(e.target.value)} required/>
                <Textarea value={message} placeholder="Enter your message here" className="mb-2" onChange={(e) => setMessage(e.target.value)} required/>
                <Button type={'submit'} className="w-full mb-3">
                    {loading ? <Loader2 className="animate-spin"/> : <><Send /> Send message</>}
                </Button>
            </form>

            <div className="text-center space-y-4">
                <p className="text-gray-500">or</p>

                <p className="mb-2">Call +263 78 829 2400</p>

                <Button className="bg-green-500 w-full hover:bg-green-300" variant={'link'}>
                    <MessageCircle />
                    <Link target="_blank" href={'https://wa.me/263788292400'}>Get in touch on WhatsApp</Link>
                </Button>

                <Button className="bg-red-600 w-full hover:bg-red-300" variant={'link'}>
                    <FaInstagram />
                    <Link target="_blank" href={'https://www.instagram.com/__va.sibanda/'}>Get in touch on Instagram</Link>
                </Button>

                <Button className="bg-blue-500 w-full hover:bg-blue-300" variant={'link'}>
                    <FaLinkedin />
                    <Link target="_blank" href={'https://www.linkedin.com/in/tafadzwa-sibanda-6a1a2a369/'}>Get in touch on LinkedIn</Link>
                </Button>

                <Button className="bg-gray-600 w-full hover:bg-gray-300" variant={'link'}>
                    <FaGithub />
                    <Link target="_blank" href={'https://github.com/SibusiZW/'}>Get in touch on GitHub</Link>
                </Button>
            </div>
        </div>
    )
}