import { MessageCircle, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactCard() {
    return (
        <div className="p-4 space-y-4 w-full max-w-[450px]">
            <h1 className="font-serif text-3xl">Contact me</h1>
            
            <form action="">
                <Input className="w-full mb-2" placeholder="Enter your contact details here, e.g phone number or email" required/>
                <Textarea placeholder="Enter your message here" className="mb-2" required/>
                <Button className="w-full mb-3">
                    <Send />
                    Send message
                </Button>
            </form>

            <div className="text-center space-y-4">
                <p className="text-gray-500">--------------------or--------------------</p>

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

                <Button className="bg-indigo-600 w-full hover:bg-indigo-300" variant={'link'}>
                    <FaGithub />
                    <Link target="_blank" href={'https://github.com/SibusiZW/'}>Get in touch on GitHub</Link>
                </Button>
            </div>
        </div>
    )
}