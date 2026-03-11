

export const Home = () => {

    return <section id="home" className="min-h-screen flex items-center justify-center relative ">

        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text=7xl font-bold mb-6  bg-emerald-50 bg-clip-text text-transparent">Hi, I'm Ceyda.</h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            </p>

            <div className="flex justify-center space-x-4 ">
                <a href="#projects" className="bg-emerald-900 text-white py-3 px-5 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    View Projects
                </a>
            </div>
            <div className="flex justify-center space-x-4 ">
                <a href="#contact" className="border border-emerald-900 text-emerald-50 py-3 px-6 rounded font-medium tansition-all duration- hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    Contact Me
                </a>
            </div>
        </div>
    </section>
}