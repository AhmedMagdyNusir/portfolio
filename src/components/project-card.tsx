import Image from "next/image";
import solidIcons from "@/components/icons/solid";

// Shared shape for the footer pill (live site link or status badge)
const PILL = "flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium sm:text-sm";

const statuses = {
  internal: {
    label: "Internal project",
    description: "Built for an organization's internal use, so it isn't publicly available",
    icon: solidIcons.Lock,
    className: "border-gray-700 bg-gray-900 text-gray-300",
  },
  "under-construction": {
    label: "Under construction",
    description: "Still in active development, a live site is coming soon",
    icon: solidIcons.Tool,
    className: "border-amber-500/30 bg-amber-500/10 text-amber-300",
  },
};

function StatusBadge({ status }: { status: NonNullable<Project["status"]> }) {
  const { label, description, icon: Icon, className } = statuses[status];

  return (
    <span title={description} className={`${PILL} ${className}`}>
      <Icon size={14} />
      {label}
    </span>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex w-full flex-col overflow-hidden rounded-3xl border border-[#151930] bg-gradient-to-b from-gray-900/70 to-gray-950/40 shadow-lg">
      {/* Project Image */}
      <a
        href={project.img}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} image`}
        title={`Open ${project.title} image in new tab`}
        className="block p-3 pb-0 transition-opacity hover:opacity-85 sm:p-4 sm:pb-0"
      >
        <figure
          style={{ backgroundImage: "radial-gradient(circle, #426090, #13162d)", aspectRatio: "5/3" }}
          className="relative flex w-full justify-center overflow-hidden rounded-2xl border border-white/5"
        >
          <div className="relative mt-[7.5px] h-[calc(100%+10px)] w-[90%]">
            <Image
              src={project.img}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
              className="rotate-3 rounded-md object-cover object-top shadow-xl"
            />
          </div>
        </figure>
      </a>

      <div className="flex flex-1 flex-col gap-5 p-5 sm:p-6">
        <div className="flex flex-col gap-2">
          {/* Project Title */}
          <h3 className="text-xl font-bold text-gray-100">{project.title}</h3>

          {/* Project Description */}
          <p className="text-sm leading-[1.8] text-gray-400 md:text-[15px]">{project.description}</p>
        </div>

        {/* Technologies */}
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li
              key={tech.name}
              className="flex items-center gap-1.5 rounded-lg border border-gray-800 bg-gray-900/80 px-2.5 py-1 text-xs text-gray-300"
            >
              <Image src={tech.img} alt="" width={14} height={14} className="h-3.5 w-3.5" />
              {tech.name}
            </li>
          ))}
        </ul>

        {/* Footer: live site link, or why there isn't one */}
        {(project.liveDemo || project.status) && (
          <footer className="mt-auto flex items-center border-t border-gray-800/70 pt-5">
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${PILL} border-purple-400/30 bg-purple-500/10 text-purple-200 transition-colors hover:bg-purple-500/20`}
              >
                Check Live Site <solidIcons.ExternalLink size={14} />
              </a>
            ) : (
              project.status && <StatusBadge status={project.status} />
            )}
          </footer>
        )}
      </div>
    </article>
  );
}
