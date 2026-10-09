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
        {/* Flex instead of grid so an incomplete last row is centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex w-full md:w-[calc((100%-2rem)/2)] xl:w-[calc((100%-4rem)/3)]">
              <ProjectCard project={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
