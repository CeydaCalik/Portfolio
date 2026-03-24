export const Projects = () => {
    return (
        <section id="projects" className="min-h-sreen flex items-center justify-center py-20">

            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent text-center">
                    {" "}
                    Mes projets</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2"> Mission progres </h3>

                        <p className="text-gray-400 mb-4">
                            Un site web avec des jeux éducatifs afin d'aider les enfants à progresser dans les matières dans lesquelles ils ont du mal à l'école.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                <span key={key} className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <a href="https://github.com/CeydaCalik/mission_progres" className="text-emerald-400 hover:text-lime-300 transition-colors "> En savoir plus 👉 </a>
                        </div>

                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2"> Quiz quiz </h3>

                        <p className="text-gray-400 mb-4">
                            Un quiz qui permet de savoir quelle classe nous conviendrait dans un RPG.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "JavaScript"].map((tech, key) => (
                                <span key={key} className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <a href="https://github.com/CeydaCalik/quiz_quiz" className="text-emerald-400 hover:text-lime-300 transition-colors "> En savoir plus 👉 </a>
                        </div>

                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-emerald-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition">
                        <h3 className="text-xl font-bold mb-2"> Compost the rich </h3>

                        <p className="text-gray-400 mb-4">
                            Jeu réalisé en équipe lors d'un hackathon chez Interface3.
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTML", "CSS", "C#", "HLSL", "ShaderLab"].map((tech, key) => (
                                <span key={key} className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center my-4">
                            <a href="https://github.com/NadTr/Compost-The-Rich" className="text-emerald-400 hover:text-lime-300 transition-colors "> En savoir plus 👉 </a>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}