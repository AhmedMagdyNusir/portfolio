import Image from "next/image";
import BlockQuote from "@/components/block-quote";
import EmailButton from "@/components/email-button";
import solidIcons from "@/components/icons/solid";
import outlineIcons from "@/components/icons/outline";
import { author, education, techStack } from "@/lib/constants";

const GAP = "gap-8";

export default function AboutSection({ className = "" }: { className?: string }) {
  return (
    <section id="about" className={`section ${className}`}>
      <div className={`container flex flex-col ${GAP}`}>
        <header className="relative mx-auto mb-2 w-fit">
          <h2 className="noselect text-center text-3xl font-bold text-gray-50">Who am I</h2>
          <solidIcons.LightPlus className="absolute -left-10 -top-2 opacity-50" />
          <solidIcons.LightPlus className="absolute -bottom-2 -right-10 opacity-50" />
        </header>

        <BlockQuote className="flex-center flex-col gap-6 p-8 md:p-16">
          <p className="text-center text-base font-semibold leading-[1.75] text-gray-100 md:text-lg md:leading-[1.75]">
            {author.bio}
          </p>
          <div className="flex-center flex-col gap-2 sm:flex-row">
            <a href={author.cvLink} download="Ahmed_Magdy_CV.pdf" className="basic-btn text-sm">
              <solidIcons.Download size={17.5} />
              Download my CV
            </a>
            <a href="#experiences" className="blue-btn text-sm">
              <outlineIcons.LocationArrow size={17.5} />
              Explore my experience
            </a>
          </div>
        </BlockQuote>

        <div className={`grid grid-cols-1 ${GAP} lg:grid-cols-5`}>
          <article className="about-card relative flex h-[415px] items-end lg:col-span-3">
            <Image
              src="/imgs/graduation.webp"
              alt=""
              priority
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute left-0 top-0 object-cover object-[80%_center]"
            />

            {/* Education */}
            <div className="relative z-10 flex w-full flex-col gap-1.5 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent p-6 pt-24 sm:gap-2 md:p-8 md:pt-28">
              <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-purple-300">
                <solidIcons.GraduationCap size={16} />
                Education
              </p>
              <h3 className="text-xl font-bold lg:text-[1.65rem]">{education.degree}</h3>
              <p className="text-sm text-gray-300">
                {education.university} · {education.location}
              </p>
              <p className="text-xs text-gray-400 lg:text-sm">{education.period}</p>
            </div>
          </article>

          <div className={`grid grid-cols-1 ${GAP} grid-rows-2 lg:col-span-2`}>
            <article className="about-card relative">
              {/* Skills in the background */}
              <div
                dir="rtl"
                className="pointer-events-none absolute right-0 top-0 flex h-full w-[68%] flex-wrap gap-2 p-4 opacity-35"
              >
                {techStack.map((skill) => (
                  <span key={skill} className="w-fit rounded-lg bg-gray-800 px-5 py-3 text-center text-xs font-bold">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Content */}
              <div className="relative z-10 flex h-full w-full flex-col justify-center gap-2 bg-gradient-to-r from-gray-900 from-[30%] to-[#03071225] px-10">
                <p className="text-xs text-gray-400 lg:text-sm">Constantly try to improve</p>
                <h3 className="text-xl font-bold lg:text-[1.65rem]">My tech stack</h3>
              </div>
            </article>

            <article className="about-card flex-center h-full w-full flex-col gap-4 bg-gradient-to-r from-purple-600 to-blue-800 p-8">
              <h3 className="text-center text-xl font-bold">Start a project together?</h3>
              <EmailButton />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
