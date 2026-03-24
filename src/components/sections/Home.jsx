

export const Home = () => {

    return <section id="home" className="min-h-screen flex items-center justify-center relative ">

        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text=7xl font-bold mb-6  bg-emerald-50 bg-clip-text text-transparent">Bonjour, moi c'est Ceyda.</h1>

            <p className="text-gray-400 text-lg  mb-8 max-w-lg mx-auto">
               
               Je suis developpeuse web en apprentissage.
            </p>

            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-emerald-900 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                    Voir mes projets
                </a>
            
                <a href="#contact" className="border border-emerald-900 text-emerald-50 py-3 px-6 rounded font-medium transition-all duration-200  
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-emerald-500/10"
                >
                    Contactez-moi
                </a>
            </div>
        </div>
    </section>
}