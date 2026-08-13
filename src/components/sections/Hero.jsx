import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useSiteContent } from "../../lib/content.js"
import SocialIcons from "../ui/SocialIcons.jsx"
import AuroraBackground from "../ui/AuroraBackground.jsx"

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

function Hero() {
  const { content } = useSiteContent()

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-brand-dark grain">
      <AuroraBackground />

      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10 flex-1 flex flex-col justify-center px-6 md:px-16 pt-28">
        <motion.h1 variants={item} className="font-display italic text-brand-gold text-4xl sm:text-5xl md:text-8xl leading-[0.95]">
          Software Engineer
        </motion.h1>

        <motion.div variants={item} className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
          {["Fullstack Developer", "Machine Learning Engineer", "Networking Associate", "Cloud Computing", "Big Data", "Database Management Systems"].map((role) => (
            <span key={role} className="px-3 py-1.5 rounded-full glass text-xs text-brand-cream/80">{role}</span>
          ))}
        </motion.div>

        <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-brand-cream/50 text-xs tracking-widest uppercase">
          <span>Languages:</span>
          <span className="text-brand-teal">Python</span><span>&middot;</span>
          <span className="text-brand-teal">JavaScript</span><span>&middot;</span>
          <span className="text-brand-teal">C</span><span>&middot;</span>
          <span className="text-brand-teal">C++</span><span>&middot;</span>
          <span className="text-brand-teal">Java</span><span>&middot;</span>
          <span className="text-brand-teal">SQL</span>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
          <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border border-white/10 shrink-0">
            <img src="/images/profile-photo.jpg" alt="Otieno Alphonce Okoth" className="w-full h-full object-cover" style={{ objectPosition: "50% 10%" }} />
          </div>
          <p className="max-w-md text-brand-cream/70 text-sm md:text-base">{content.heroIntroLeft}</p>
        </motion.div>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-brand-cream text-sm font-medium hover:bg-white/15 transition">
            Let's Talk <MessageCircle size={14} />
          </a>
          <SocialIcons links={content.socialLinks} />
        </motion.div>
      </motion.div>

      <motion.div variants={item} initial="hidden" animate="show" className="relative z-10 px-6 md:px-16 pb-10 flex flex-wrap gap-x-10 gap-y-2 text-brand-cream/40 text-xs tracking-widest uppercase">
        <span>Based in Nairobi</span>
        <span>Available for freelance</span>
      </motion.div>
    </section>
  )
}

export default Hero
