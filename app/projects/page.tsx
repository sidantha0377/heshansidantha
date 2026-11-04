import Projects from '../components/Projects'
import { FooterCenter } from '../components/Footer'

export default function ProjectsPage() {
    return (
        <div className="relative justify-center text-white z-10 flex min-h-screen flex-col">
            <Projects />
            <footer className="mx-auto  mt-auto w-full max-w-6xl px-6 pb-8 sm:px-10">
                <FooterCenter />
            </footer>
        </div>
    )
}
