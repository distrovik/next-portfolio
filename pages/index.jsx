import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "./api/github";

export default function Home() {
  return (
    <>
      <section id="cover">
        <Hero />
      </section>
      <section id="projectMini">
        <Projects page="none" />
      </section>
    </>
  );
}
