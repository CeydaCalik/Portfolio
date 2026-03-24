export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "React",
        "TailwindCSS",
        "TypeScript",
        "JavaScript",
    ];

    const backendSkills = [
        "Node.js",
        "MongoDB",
        "Insomnia"
    ];

    const tools = [
        "GitHub",
        "Insomnia",
        "WordPress",
        "Figma",
        "Adobe Illustrator",
        "Adobe Photoshop"
    ];

    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-lime-600     bg-clip-text text-transparent text-center">
                    {" "}
                    À propos
                </h2>

                <div className="rounded-xl p-8 border-white/10 border">
                    <p className="text-grey-300 mb-6 ">Je suis actuellement en formation chez Interface3.<br/><br/>
                 Je suis à la recherche d’un stage afin de développer mes compétences et acquérir une expérience professionnelle concrète. </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all ">
                            <h3 className="text-xl font-bold mb-4"> Frontend </h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span key={key} className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) transition]">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>


                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Backend </h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span key={key} className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) transition]">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Outils </h3>
                            <div className="flex flex-wrap gap-2">
                                {tools.map((tech, key) => (
                                    <span key={key} className="bg-emerald-500/10 text-emerald-500 py-1 px-3 rounded-full text-sm hover:bg-emerald-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) transition]">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                        </div>



                    </div>
                </div>

                

            </div>

        </section>
    );
}