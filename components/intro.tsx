import Image from "next/image";
import { Button } from "./ui/button";
import { Briefcase, Phone } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { playfair } from "@/lib/fonts";

export default function Intro() {
    return (
        <div className="flex flex-col p-8">
            <Image 
                src={'/tafadzwa.png'}
                alt="tafadzwa sibanda"
                width={200}
                height={200}
                className="rounded-md mb-4"
            />

            <h1 className={`text-3xl mb-6 ${playfair.className} antialiased`}>Who is <span className="text-orange-500">Tafadzwa Sibanda</span>?</h1>

            <p>
                Hi I'm Tafadzwa 👋, <br /> <br />

                I'm a skilled software developer from Kwekwe, Zimbabwe who specialises in building scalable, reliable and flexible full-stack web apps. <br />
                I like building projects in public to hear out people's enquiries to improve my products. <br />
                I'm a supporter of the project-based learning framework which I use myself. <br /> <br />

                Are you ready to build your next big product? <br />
                If <span className="text-orange-500">yes</span>? Let's get in touch 🤗!
            </p>

            <div className="flex flex-col w-full max-w-[200px] space-y-4 mt-6">
                <Button className="bg-orange-300" variant={'link'}>
                    <Briefcase />
                    <Link target="_blank" href={'/docs/tafadzwa_sibanda_resume.pdf'}>Download my CV</Link>
                </Button>

                <Button className="bg-orange-500" variant={'link'}>
                    <FaGithub />
                    <Link target="_blank" href={'https://github.com/SibusiZW/'}>View My Work on GitHub</Link>
                </Button>

                <Button className="bg-orange-600" variant={'link'}>
                    <Phone />
                    <Link href={'/contact'}>Let's connect</Link>
                </Button>
            </div>
        </div>
    )
}