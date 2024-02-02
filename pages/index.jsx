import Header from "@/components/header";
import Hero from "@/components/hero";
import ProjectMini from "@/components/projectMini";

export default function Home() {
  return (
    <>
      <section id="cover">
        <Hero />
      </section>
      <section id="projectMini">
        <ProjectMini />
      </section>
    </>
  );
}
