import { useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { db } from "./firebase.js"

const defaults = {
  heroIntroLeft: "Hey, I am Alphonce, I help businesses turn complex ideas into simple, intuitive digital experiences.",
  heroIntroRight: "This portfolio showcases my journey as a UX/UI designer that reflects my passion for design.",
  myStory: "Over the years, I've worked with startups, agencies, and product teams to improve usability, increase engagement, and simplify digital experiences across web application and mobile platforms.",
  pathToMastery: [
    { year: "2018", title: "Started in Graphic Design", desc: "Built a foundation in visual design principles, layout, and color theory." },
    { year: "2020", title: "Transitioned to UI Design", desc: "Began designing interfaces for web and mobile products." },
    { year: "2022", title: "Grew into UX Research", desc: "Added user research, testing, and information architecture to the toolkit." },
    { year: "2024", title: "Product Design Leadership", desc: "Leading end-to-end design across startups and product teams." },
  ],
  services: [
    { title: "UI Design", desc: "Interfaces that are clean, intuitive, and on-brand." },
    { title: "UX Research", desc: "User interviews, testing, and insights that guide decisions." },
    { title: "Product Design", desc: "End-to-end design from concept to shipped feature." },
    { title: "Design Systems", desc: "Reusable components and guidelines that scale with your product." },
  ],
  footerBio: "UX/UI Designer turning complex ideas into simple digital experiences.",
  footerEmail: "alphonce@example.com",
  footerPhone: "+254 700 000 000",
  socialLinks: {
    linkedin: "",
    github: "https://github.com/fonsi-skater",
    twitter: "",
    instagram: "",
    behance: "",
    dribbble: "",
    whatsapp: "",
  },
}

export function useSiteContent() {
  const [content, setContent] = useState(defaults)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const ref = doc(db, "siteContent", "main")
    const unsub = onSnapshot(ref, (snap) => {
      if (snap.exists()) {
        const data = snap.data()
        setContent({ ...defaults, ...data, socialLinks: { ...defaults.socialLinks, ...(data.socialLinks || {}) } })
      }
      setLoading(false)
    })
    return () => unsub()
  }, [])

  return { content, loading, defaults }
}
