import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import { auth } from "../lib/firebase.js"

function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate("/admin")
    } catch (err) {
      setError("Invalid email or password.")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white rounded-2xl p-8 space-y-4">
        <h1 className="text-xl font-bold text-brand-dark">Admin Login</h1>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:border-brand-mid" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-brand-dark/10 focus:outline-none focus:border-brand-mid" />
        {error && <p className="text-sm text-red-600">{error}</p>}
        <button type="submit" className="w-full px-6 py-3 rounded-full bg-brand-dark text-white font-medium hover:bg-brand-mid transition">Log In</button>
      </form>
    </div>
  )
}

export default AdminLogin
