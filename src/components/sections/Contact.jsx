import emailjs from 'emailjs-com'
import { useState } from 'react'

export const Contact = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm( import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY ).then((result) => {
            alert("Message envoyé !");
            setFormData({name: "", email: "", message: ""})
        }).catch(() => alert("Une erreur est survenue, veuillez réessayer."));
    }

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center py-20">

            <div className="px-4 w-150">

                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-emerald-500 to-lime-500 bg-clip-text text-transparent text-center">
                    {" "} 
                     Contactez-moi !</h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    
                    <div className="relative">
                        <input 
                        type="text" 
                        id="name" required 
                        value={formData.name}
                        name="name"
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-emerald-300/5 focus:bg-emerald-500/10"
                        placeholder="Nom"
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />

                    </div>

                    <div className="relative">
                        <input 
                        type="email" 
                        id="email" required 
                        value={formData.email}
                        name="email"
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-emerald-300/5 focus:bg-emerald-500/10"
                        placeholder="Votre mail"
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />

                    </div>

                     <div className="relative">
                        <textarea 
                        
                        id="message" required 
                        value={formData.message}
                        name="message"
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-emerald-300/5 focus:bg-emerald-500/10"
                        placeholder="Votre message" 
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />

                    </div>

                    <button type="submit" className="w-full bg-emerald-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_grba(59,130,246,0.4)]">
                        Envoyer
                    </button>

                </form>
            </div>

        </section>
    )
}