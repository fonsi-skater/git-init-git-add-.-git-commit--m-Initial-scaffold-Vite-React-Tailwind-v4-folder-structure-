import { useState } from "react"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../lib/firebase.js"
import { sendInquiryEmails } from "../../lib/emailjs.js"

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

      await sendInquiryEmails({
        from_name: form.name,
        from_email: form.email,
        message: form.message,
      })

      setStatus("success")
      setForm({ name: "", email: "", message: "", company: "" })
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <section id="contact" className="px-6 md:px-12 py-20 bg-white text-brand-dark">
      <div className="max-w-2xl mx-auto">
        <span className="inline-block text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-brand-light/10 text-brand-mid mb-8">Get In Touch</span>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="company" value={form.company} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />

          <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:border-brand-mid" />
          <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:border-brand-mid" />
          <textarea name="message" placeholder="Your message" rows="5" value={form.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:border-brand-mid" />

          <button type="submit" disabled={status === "sending"} className="px-6 py-3 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-mid transition disabled:opacity-50">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && <p className="text-sm text-green-600">Message sent! I'll get back to you soon.</p>}
          {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please fill all fields and try again.</p>}
        </form>
      </div>
    </section>
  )
}

export default ContactForm
