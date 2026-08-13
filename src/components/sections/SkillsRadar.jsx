import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from "recharts"
import { useSiteContent } from "../../lib/content.js"
import FadeIn from "../ui/FadeIn.jsx"

function SkillsRadar() {
  const { content } = useSiteContent()

  return (
    <section id="skills" className="px-6 md:px-16 py-24 bg-brand-dark">
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full glass text-brand-cream/80 mb-8">Skills</span>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="glass rounded-2xl p-4 md:p-8">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={content.skills}>
                <PolarGrid stroke="rgba(255,255,255,0.12)" />
                <PolarAngleAxis dataKey="name" tick={{ fill: "#f3ece0", fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "rgba(243,236,224,0.3)", fontSize: 10 }} />
                <Radar name="Proficiency" dataKey="level" stroke="#e0a63c" fill="#e0a63c" fillOpacity={0.35} strokeWidth={2} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default SkillsRadar
