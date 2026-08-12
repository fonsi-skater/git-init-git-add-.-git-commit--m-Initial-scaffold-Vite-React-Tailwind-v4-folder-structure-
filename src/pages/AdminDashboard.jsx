import { useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { collection, query, orderBy, onSnapshot } from "firebase/firestore"
import { useNavigate } from "react-router-dom"
import { auth, db } from "../lib/firebase.js"
import AdminContentEditor from "./AdminContentEditor.jsx"

function AdminDashboard() {
  const [user, setUser] = useState(undefined)
  const [inquiries, setInquiries] = useState([])
  const [tab, setTab] = useState("inquiries")
  const navigate = useNavigate()

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (u) => {
      setUser(u)
      if (!u) navigate("/admin/login")
    })
    return () => unsubAuth()
  }, [navigate])

  useEffect(() => {
    if (!user) return
    const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"))
    const unsubSnap = onSnapshot(q, (snap) => {
      setInquiries(snap.docs.map((d) => ({ id: d.id, ...d.data() })))
    })
    return () => unsubSnap()
  }, [user])

  if (user === undefined) {
    return <div className="min-h-screen flex items-center justify-center text-brand-dark">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-12 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-brand-dark">Admin</h1>
          <button onClick={() => signOut(auth)} className="px-4 py-2 rounded-full bg-brand-dark text-white text-sm hover:bg-brand-mid transition">Log Out</button>
        </div>

        <div className="flex gap-2 mb-8 border-b border-brand-dark/10 overflow-x-auto">
          <button onClick={() => setTab("inquiries")} className={`px-4 py-2 text-sm font-medium border-b-2 transition whitespace-nowrap ${tab === "inquiries" ? "border-brand-dark text-brand-dark" : "border-transparent text-brand-dark/50"}`}>Inquiries</button>
          <button onClick={() => setTab("content")} className={`px-4 py-2 text-sm font-medium border-b-2 transition whitespace-nowrap ${tab === "content" ? "border-brand-dark text-brand-dark" : "border-transparent text-brand-dark/50"}`}>Edit My Content</button>
        </div>

        {tab === "inquiries" && (
          <>
            {inquiries.length === 0 && (
              <p className="text-brand-dark/60">No inquiries yet — they'll show up here as visitors submit the contact form.</p>
            )}
            <div className="space-y-4">
              {inquiries.map((inq) => (
                <div key={inq.id} className="p-4 md:p-5 rounded-xl border border-brand-dark/10">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="font-semibold text-brand-dark">{inq.name}</h3>
                    <span className="text-xs text-brand-dark/50">{inq.createdAt?.toDate ? inq.createdAt.toDate().toLocaleString() : ""}</span>
                  </div>
                  <p className="text-sm text-brand-mid">{inq.email}</p>
                  <p className="mt-2 text-sm text-brand-dark/80">{inq.message}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "content" && <AdminContentEditor />}
      </div>
    </div>
  )
}

export default AdminDashboard
