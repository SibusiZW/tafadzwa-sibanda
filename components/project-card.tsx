import { playfair } from "@/lib/fonts";
import { ProjectItem } from "@/lib/types";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Globe } from "lucide-react";

export default function ProjectCard({ project }: { project: ProjectItem }) {

    function renderContent() {
        if (project.liveDemo.trim() !== '') {
            return <Button variant={'link'} className="bg-orange-500">
                <Globe />
                <Link target="_blank" href={project.liveDemo}>View live demo</Link>
            </Button>
        } else {
            return ""
        }
    }

    return (
        <div className="max-w-[450px] mb-4 p-[30px] rounded-md border border-zinc-200">
            <h1 className={`${playfair.className} text-2xl mb-3`}>{project.title}</h1>

            <p className="mb-4 text-gray-500">
                {project.description}
            </p>

            <div className="flex flex-col space-y-2">
                <Button variant={'link'} className="bg-indigo-500">
                    <FaGithub />
                    <Link target='_blank' href={project.githubRepo}>View on Github</Link>
                </Button>

                {renderContent()}
            </div>
        </div>
    )
}