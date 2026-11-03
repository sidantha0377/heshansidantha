import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experiance from "./components/Experiance";
import Project from "./components/ProjectSummary";
import ConnectWithMe from "./components/ConnectWithMe";
import Fotter from "./components/Fotter";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gradient-to-r from-[#001a13] to-[#004c39] p-4 pt-4 font-['Times_New_Roman',_Times,_serif] text-white sm:pt-[2%] lg:h-screen lg:flex-row lg:overflow-hidden lg:pl-[2%]">


      <aside className="flex w-full flex-row items-start justify-between gap-6 p-2 sm:p-6 lg:h-full lg:w-1/3 lg:min-w-[30%] lg:flex-col">
        <Header />
        <Fotter />
      </aside>


      <main className="flex min-w-0 flex-1 flex-col gap-8 p-2 sm:p-6 lg:h-full lg:overflow-y-auto">
        <AboutMe />
        <Experiance />
        <Project />
        <ConnectWithMe />
      </main>

    </div>
  );
}