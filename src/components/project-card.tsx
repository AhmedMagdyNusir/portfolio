import Image from "next/image";
import solidIcons from "@/components/icons/solid";

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
    <span
      title={description}
      className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${className}`}
    >
      <Icon size={13} />
      {label}
    </span>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative flex flex-col gap-4 rounded-3xl border border-gray-800 p-5 sm:p-6">
      {/* Project Image */}
      <a
        href={project.img}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} image`}
        className="block opacity-100 transition-opacity hover:opacity-85"
        title={`Open ${project.title} image in new tab`}
      >
        <figure
          style={{ backgroundImage: "radial-gradient(circle, #426090, #13162d)", aspectRatio: "5/3" }}
          className="relative flex w-full justify-center overflow-hidden rounded-xl md:rounded-3xl"
        >
          <div className="relative mt-[7.5px] h-[calc(100%+10px)] w-[90%]">
            <Image
              src={project.img}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rotate-3 rounded-md object-cover object-top shadow"
            />
          </div>
        </figure>
      </a>

      <div className="flex flex-1 flex-col justify-between gap-4">
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
            {project.technologies.map((tech) => (
              <span
                key={tech.name}
                title={tech.name}
                className="flex-center -ml-[5px] h-9 w-9 overflow-hidden rounded-full border border-gray-800 bg-gradient-to-br from-gray-800 to-gray-950 sm:h-10 sm:w-10"
              >
                <Image src={tech.img} alt={tech.name} width={20} height={20} className="h-5 w-5" />
              </span>
            ))}
          </div>

          {/* Live Site Button */}
          {project.liveDemo && (
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-purple-300 transition-colors hover:text-purple-400 sm:text-sm"
            >
              Check Live Site <solidIcons.ExternalLink size={15} />
            </a>
          )}

          {/* Status Badge (shown when there's no live site) */}
          {!project.liveDemo && project.status && <StatusBadge status={project.status} />}
        </footer>
      </div>
    </div>
  );
}
