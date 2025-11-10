import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/constants";

export default function ProjectsSection({ className = "" }: { className?: string }) {
  return (
    <section id="projects" className={`section ${className}`}>
      <div className="container">
        <h2 className="noselect mb-10 text-center text-3xl font-bold text-gray-50">
          A small selection of <span className="text-purple-300">recent projects</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
