import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import ProjectsSection from "@/components/sections/projects-section";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/sections/footer";

export default function Page() {
  return (
    <main>
      <HeroSection className="bg-gradient-to-b from-[#000218] to-[#0a0a0a]" />
      <AboutSection className="bg-gradient-to-b from-[#0a0a0a] to-[#000310]" />
      <div className="bg-[#000310] py-10" />
      <ProjectsSection className="bg-gradient-to-b from-[#000310] to-[#0d1525]" />
      <ContactSection className="bg-gradient-to-b from-[#0d1525] to-[#000310]" />
      <Footer className="bg-[#000310]" />
    </main>
  );
}
