import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Project from "./components/ProjectSummary";
import ConnectWithMe from "./components/ConnectWithMe";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen">

      <div className="relative z-10 flex min-h-screen w-full flex-col  overflow-x-hidden p-4 pt-4 text-white sm:pt-[2%] lg:h-screen lg:flex-row lg:overflow-hidden lg:pl-[2%]">


        <aside className="flex w-full flex-col gap-6 p-2 sm:flex-row sm:items-start sm:justify-between sm:p-6 lg:h-full lg:w-1/3 lg:min-w-[30%] lg:flex-col">
          <Header />

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap gap-x-4 gap-y-2 text-sm sm:text-base lg:flex-col lg:gap-3"
          >
            <a className="transition-colors hover:text-emerald-300 text-xl focus-visible:text-emerald-300" href="#about">About</a>
            <a className="transition-colors hover:text-emerald-300 text-xl focus-visible:text-emerald-300" href="#experience">Experience</a>
            <a className="transition-colors hover:text-emerald-300 text-xl focus-visible:text-emerald-300" href="#projects"> Projects</a>
            <a className="transition-colors hover:text-emerald-300 text-xl focus-visible:text-emerald-300" href="#contact"> Contact</a>
          </nav>

          <div className="hidden lg:block">
            <Footer />
          </div>
        </aside>


        <main className="flex min-w-0 flex-1 flex-col gap-[5%] p-2 scroll-smooth sm:p-6 lg:h-full lg:overflow-y-auto">
          <AboutMe />
          <Experience />
          <Project />
          <ConnectWithMe />
        </main>

        <div className="p-2 sm:p-6 lg:hidden">
          <Footer />
        </div>
      </div>
    </div>
  );
}