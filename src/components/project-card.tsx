import Image from "next/image";
import solidIcons from "@/components/icons/solid";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative flex flex-col gap-4 rounded-3xl border border-gray-800 p-5 sm:p-6">
      {/* Project Image */}
      <figure
        style={{ backgroundImage: "radial-gradient(circle, #426090, #13162d)", aspectRatio: "5/3" }}
        className="relative flex w-full justify-center overflow-hidden rounded-xl md:rounded-3xl"
      >
        <div className="relative mt-[10px] h-[calc(100%+10px)] w-[85%]">
          <Image
            src={project.img}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rotate-3 rounded-md object-cover object-top shadow"
          />
        </div>
      </figure>

      <div className="flex flex-col gap-2">
        {/* Project Title */}
        <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>

        {/* Project Description */}
        <p className="text-xs text-gray-400 sm:text-sm md:text-[15px]" style={{ lineHeight: 1.8 }}>
          {project.description}
        </p>
      </div>

      <footer className="flex flex-wrap items-center justify-between gap-4">
        {/* Technologies */}
        <div className="flex items-center">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              title={tech.name}
              className="flex-center -ml-[5px] h-9 w-9 overflow-hidden rounded-full border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-950 sm:h-10 sm:w-10"
            >
              <Image src={tech.img} alt={tech.name} width={20} height={20} className="h-5 w-5" />
            </span>
          ))}
        </div>

        {/* Live Site Button */}
        {project.liveDome && (
          <a
            href={project.liveDome}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-purple-300 transition-colors hover:text-purple-400"
          >
            Check Live Site <solidIcons.ExternalLink size={15} />
          </a>
        )}
      </footer>
    </div>
  );
}
