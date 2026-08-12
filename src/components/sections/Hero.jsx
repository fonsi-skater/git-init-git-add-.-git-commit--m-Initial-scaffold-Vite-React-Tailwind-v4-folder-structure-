import { MessageCircle } from "lucide-react"

function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-brand-dark via-brand-mid to-brand-light overflow-hidden flex flex-col items-center justify-center px-6 text-white">
      <div className="absolute inset-6 md:inset-12 border-t border-white/10 grid grid-cols-3 pointer-events-none">
        <div className="border-l border-r border-white/10" />
        <div className="border-r border-white/10" />
      </div>

      <span className="absolute left-[8%] top-[38%] text-brand-accent text-xl">+</span>
      <span className="absolute right-[8%] top-[38%] text-brand-accent text-xl">+</span>
      <span className="absolute left-[8%] bottom-[22%] text-brand-accent text-xl">+</span>
      <span className="absolute right-[8%] bottom-[22%] text-brand-accent text-xl">+</span>

      <h1 className="relative z-10 text-center font-extrabold leading-[0.95] text-5xl md:text-7xl tracking-tight mt-16">
        Designing
        <br />
        Digital Products
      </h1>

      <div className="relative z-10 mt-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 items-end gap-8">
        <div className="text-sm md:text-base text-white/90 max-w-xs order-2 md:order-1">
          <p>Hey, I am Alphonce, I help businesses turn complex ideas into simple, intuitive digital experiences.</p>
          <a href="#contact" className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/60 hover:bg-black/80 transition text-sm font-medium">
            Let's Talk Now <MessageCircle size={14} />
          </a>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <div className="relative w-56 md:w-72 h-72 md:h-96 rounded-t-[120px] overflow-hidden">
            <img src="/images/profile-photo.jpg" alt="Otieno Alphonce Okoth" className="w-full h-full object-cover" style={{ objectPosition: "50% 15%" }} />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-mid/20 to-transparent mix-blend-multiply" />
            <div className="absolute inset-0 bg-brand-light/10" />
          </div>
        </div>

        <div className="text-sm md:text-base text-white/90 max-w-xs md:ml-auto md:text-right order-3">
          <p>This portfolio showcases my journey as a UX/UI designer that reflects my passion for design.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
