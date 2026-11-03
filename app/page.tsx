import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experiance from "./components/Experiance";
import Project from "./components/ProjectSummery";
import ConnectWithMe from "./components/ConnectWithMe";
import Fotter from "./components/Fotter";

export default function Home() {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-gradient-to-r from-[#001a13] to-[#004c39] text-white font-['Times_New_Roman',_Times,_serif] p-4 pl-[2%] pt-[2%]">


      <aside className="w-1/3 min-w-[30%] h-full p-6 flex flex-col justify-between">
        <Header />
        <Fotter />
      </aside>


      <main className="flex-1 h-full overflow-y-auto p-6 flex flex-col gap-8">
        <AboutMe />
        <Experiance />
        <Project />
        <ConnectWithMe />
      </main>

    </div>
  );
}