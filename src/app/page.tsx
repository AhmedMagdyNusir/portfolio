import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import WorkSection from "@/components/sections/work-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";
import { experiences, projects } from "@/lib/constants";

export default function Page() {
  return (
    <main>
      <HeroSection className="bg-gradient-to-b from-[#000218] to-[#0a0a0a]" />
      <AboutSection className="bg-gradient-to-b from-[#0a0a0a] to-[#000310]" />
      <div className="bg-[#000310] py-10" />
      <WorkSection
        id="experiences"
        heading={
          <>
            A look at my <span className="text-purple-300">experience</span>
          </>
        }
        items={experiences}
        className="bg-gradient-to-b from-[#000310] to-[#060c1a]"
      />
      <WorkSection
        id="projects"
        heading={
          <>
            A small selection of <span className="text-purple-300">recent projects</span>
          </>
        }
        items={projects}
        className="bg-gradient-to-b from-[#060c1a] to-[#0d1525]"
      />
      <ContactSection className="bg-gradient-to-b from-[#0d1525] to-[#000310]" />
      <Footer className="bg-[#000310]" />
    </main>
  );
}
