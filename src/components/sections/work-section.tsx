import ProjectCard from "@/components/project-card";

type WorkSectionProps = {
  id: string;
  heading: React.ReactNode;
  items: Project[];
  className?: string;
};

export default function WorkSection({ id, heading, items, className = "" }: WorkSectionProps) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="container">
        <h2 className="noselect mb-10 text-center text-3xl font-bold text-gray-50">{heading}</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <ProjectCard key={item.title} project={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
