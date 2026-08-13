import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../lib/firebase.js"
import { sendInquiryEmails } from "../../lib/emailjs.js"
import FadeIn from "../ui/FadeIn.jsx"

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" })
  const [status, setStatus] = useState("idle")

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (form.company) return
    if (!form.name || !form.email || !form.message) {
      setStatus("error")
      return
    }
    setStatus("sending")
    try {
      await addDoc(collection(db, "inquiries"), {
        name: form.name,
        email: form.email,
        message: form.message,
        createdAt: serverTimestamp(),
      })
      await sendInquiryEmails({ from_name: form.name, from_email: form.email, message: form.message })
      setStatus("success")
      setForm({ name: "", email: "", message: "", company: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-brand-cream placeholder:text-brand-cream/40 focus:outline-none focus:border-brand-gold/60 transition"

  return (
    <section id="contact" className="px-6 md:px-16 py-24 bg-brand-dark">
      <div className="max-w-2xl mx-auto">
        <FadeIn>
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full glass text-brand-cream/80 mb-8">Get In Touch</span>
        </FadeIn>

        <FadeIn delay={0.15}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="company" value={form.company} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />
            <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} className={inputClass} />
            <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} className={inputClass} />
            <textarea name="message" placeholder="Your message" rows="5" value={form.message} onChange={handleChange} className={inputClass} />
            <button type="submit" disabled={status === "sending"} className="px-6 py-3 rounded-full glass text-brand-cream font-medium hover:bg-white/15 transition disabled:opacity-50">
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && <p className="text-sm text-brand-teal">Message sent! I'll get back to you soon.</p>}
            {status === "error" && <p className="text-sm text-red-400">Something went wrong. Please fill all fields and try again.</p>}
          </form>
        </FadeIn>
      </div>
    </section>
  )
}

export default ContactForm
