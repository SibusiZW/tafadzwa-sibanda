import Image from "next/image";

export default function TechStack() {
    return (
        <div className="mb-6">
            <h1 className="text-3xl mb-4 font-serif">My Tech <span className="text-green-500">Stack</span></h1>

            <Image 
                src={"https://skillicons.dev/icons?i=ts,vue,nextjs,python,vscode,react,django,git,github,js"}
                alt="My Tech Stack"
                width={500}
                height={120}
                unoptimized
            />
        </div>
    )
}