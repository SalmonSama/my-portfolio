import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import About from "@/components/About";
// import Education from "@/components/Education";
import Projects from "@/components/Projects";

export default function Home() {
    return (
        <div className="min-h-screen bg-[#0f172a]">
            {/* Layer 2: Centered Container */}
            <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-12 lg:py-0">
                {/* Layer 3: Flex Wrapper */}
                <div className="lg:flex lg:justify-between lg:gap-4">

                    {/* ── LEFT COLUMN: Sticky Sidebar (48%) ── */}
                    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
                        <div>
                            <Header />
                        </div>
                        <div>
                            <SocialLinks />
                        </div>
                    </header>

                    {/* ── RIGHT COLUMN: Scrollable Content (52%) ── */}
                    <main id="content" className="lg:w-[52%] lg:py-24">
                        {/* ย้าย section เข้าไปไว้ข้างในคอมโพเนนต์แต่ละตัวแทน */}
                        <About />
                        <Projects />
                        {/* <Education /> */}

                        {/* Footer */}
                        <footer className="pb-16 text-sm text-slate-500">
                            <p>
                                Designed &amp; Built by{" "}
                                <span className="font-medium text-slate-400">Jeadsada Tanya</span>.
                                Inspired by{" "}
                                <span className="font-medium text-slate-400">
                                    Brittany Chiang
                                </span>.
                            </p>
                        </footer>
                    </main>

                </div>
            </div>
        </div>
    );
}