import { useState, useEffect } from "react"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../lib/firebase.js"
import { useSiteContent } from "../lib/content.js"
import { Plus, Trash2 } from "lucide-react"

function AdminContentEditor() {
  const { content, defaults } = useSiteContent()
  const [form, setForm] = useState(defaults)
  const [status, setStatus] = useState("idle")

  useEffect(() => {
    setForm(content)
  }, [content])

  function updateField(key, value) {
    setForm({ ...form, [key]: value })
  }

  function updateSocial(key, value) {
    setForm({ ...form, socialLinks: { ...form.socialLinks, [key]: value } })
  }

  function updateListItem(listKey, index, field, value) {
    const list = [...form[listKey]]
    list[index] = { ...list[index], [field]: value }
    setForm({ ...form, [listKey]: list })
  }

  function addListItem(listKey, blank) {
    setForm({ ...form, [listKey]: [...form[listKey], blank] })
  }

  function removeListItem(listKey, index) {
    const list = form[listKey].filter((_, i) => i !== index)
    setForm({ ...form, [listKey]: list })
  }

  async function handleSave() {
    setStatus("saving")
    try {
      await setDoc(doc(db, "siteContent", "main"), form, { merge: true })
      setStatus("saved")
      setTimeout(() => setStatus("idle"), 2000)
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  const inputClass = "w-full px-4 py-2.5 rounded-lg border border-brand-dark/10 focus:outline-none focus:border-brand-mid text-sm"
  const labelClass = "text-xs font-semibold text-brand-dark/60 mb-1 block"

  return (
    <div className="space-y-10 max-w-3xl">
      <div>
        <h2 className="font-bold text-lg mb-4">Hero Section</h2>
        <div className="space-y-3">
          <div>
            <label className={labelClass}>Left intro text</label>
            <textarea className={inputClass} rows="2" value={form.heroIntroLeft} onChange={(e) => updateField("heroIntroLeft", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Right intro text</label>
            <textarea className={inputClass} rows="2" value={form.heroIntroRight} onChange={(e) => updateField("heroIntroRight", e.target.value)} />
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-4">Social Links</h2>
        <p className="text-xs text-brand-dark/50 mb-3">Leave blank to hide an icon. Only filled-in links show up on the site.</p>
        <div className="space-y-3">
          {Object.keys(form.socialLinks).map((key) => (
            <div key={key}>
              <label className={labelClass}>{key.charAt(0).toUpperCase() + key.slice(1)}</label>
              <input className={inputClass} placeholder="https://..." value={form.socialLinks[key]} onChange={(e) => updateSocial(key, e.target.value)} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-4">My Story</h2>
        <textarea className={inputClass} rows="4" value={form.myStory} onChange={(e) => updateField("myStory", e.target.value)} />
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h2 className="font-bold text-lg">Path to Mastery</h2>
          <button onClick={() => addListItem("pathToMastery", { year: "", title: "", desc: "" })} className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 transition w-fit"><Plus size={12} /> Add milestone</button>
        </div>
        <div className="space-y-4">
          {form.pathToMastery.map((m, i) => (
            <div key={i} className="p-4 rounded-xl border border-brand-dark/10 relative">
              <button onClick={() => removeListItem("pathToMastery", i)} className="absolute top-3 right-3 text-red-500 hover:text-red-700"><Trash2 size={14} /></button>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pr-8">
                <input className={inputClass} placeholder="Year" value={m.year} onChange={(e) => updateListItem("pathToMastery", i, "year", e.target.value)} />
                <input className={inputClass + " sm:col-span-3"} placeholder="Title" value={m.title} onChange={(e) => updateListItem("pathToMastery", i, "title", e.target.value)} />
              </div>
              <textarea className={inputClass + " mt-2"} rows="2" placeholder="Description" value={m.desc} onChange={(e) => updateListItem("pathToMastery", i, "desc", e.target.value)} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h2 className="font-bold text-lg">Skills (Radar Chart)</h2>
          <button onClick={() => addListItem("skills", { name: "", level: 50 })} className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 transition w-fit"><Plus size={12} /> Add skill</button>
        </div>
        <p className="text-xs text-brand-dark/50 mb-3">Level is 0-100. 6-10 skills reads best on the chart.</p>
        <div className="space-y-3">
          {form.skills.map((s, i) => (
            <div key={i} className="p-3 rounded-xl border border-brand-dark/10 relative flex items-center gap-3 pr-10">
              <input className={inputClass} placeholder="Skill name" value={s.name} onChange={(e) => updateListItem("skills", i, "name", e.target.value)} />
              <input type="number" min="0" max="100" className={inputClass + " w-24"} placeholder="Level" value={s.level} onChange={(e) => updateListItem("skills", i, "level", parseInt(e.target.value) || 0)} />
              <button onClick={() => removeListItem("skills", i)} className="absolute right-3 text-red-500 hover:text-red-700"><Trash2 size={14} /></button>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
          <h2 className="font-bold text-lg">Services</h2>
          <button onClick={() => addListItem("services", { title: "", desc: "" })} className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-full bg-brand-dark/5 hover:bg-brand-dark/10 transition w-fit"><Plus size={12} /> Add service</button>
        </div>
        <div className="space-y-4">
          {form.services.map((s, i) => (
            <div key={i} className="p-4 rounded-xl border border-brand-dark/10 relative">
              <button onClick={() => removeListItem("services", i)} className="absolute top-3 right-3 text-red-500 hover:text-red-700"><Trash2 size={14} /></button>
              <input className={inputClass + " pr-8"} placeholder="Title" value={s.title} onChange={(e) => updateListItem("services", i, "title", e.target.value)} />
              <textarea className={inputClass + " mt-2"} rows="2" placeholder="Description" value={s.desc} onChange={(e) => updateListItem("services", i, "desc", e.target.value)} />
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="font-bold text-lg mb-4">Footer</h2>
        <div className="space-y-3">
          <div>
            <label className={labelClass}>Short bio</label>
            <textarea className={inputClass} rows="2" value={form.footerBio} onChange={(e) => updateField("footerBio", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Email</label>
            <input className={inputClass} value={form.footerEmail} onChange={(e) => updateField("footerEmail", e.target.value)} />
          </div>
          <div>
            <label className={labelClass}>Phone</label>
            <input className={inputClass} value={form.footerPhone} onChange={(e) => updateField("footerPhone", e.target.value)} />
          </div>
        </div>
      </div>

      <div className="sticky bottom-4">
        <button onClick={handleSave} disabled={status === "saving"} className="px-6 py-3 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-mid transition disabled:opacity-50 shadow-lg">
          {status === "saving" ? "Saving..." : status === "saved" ? "Saved" : "Save Changes"}
        </button>
        {status === "error" && <p className="mt-2 text-sm text-red-600">Something went wrong saving.</p>}
      </div>
    </div>
  )
}

export default AdminContentEditor
