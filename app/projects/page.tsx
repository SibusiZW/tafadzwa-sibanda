import ProjectCard from "@/components/project-card"
import { playfair } from "@/lib/fonts"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {

    return (
        <div className="p-6 w-full">
            <h1 className={`${playfair.className} text-4xl mb-4`}>My <span className="text-orange-500">Projects</span></h1>
            {projects.map(project => <ProjectCard key={project.title} project={project}/>)}
        </div>
    )
}