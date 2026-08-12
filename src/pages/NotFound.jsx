import { Link } from "react-router-dom"

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-white px-6 text-center">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="mt-4 text-white/70">This page doesn't exist.</p>
      <Link to="/" className="mt-6 px-6 py-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition text-sm font-medium">
        Back to Home
      </Link>
    </div>
  )
}

export default NotFound
