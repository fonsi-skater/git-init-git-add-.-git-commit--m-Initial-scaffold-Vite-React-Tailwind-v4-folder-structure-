function AuroraBackground({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="blob-1 absolute -top-1/4 -left-1/4 w-[60%] h-[60%] rounded-full bg-brand-violet/30 blur-[110px]" />
      <div className="blob-2 absolute top-1/3 -right-1/4 w-[55%] h-[55%] rounded-full bg-brand-teal/25 blur-[110px]" />
      <div className="blob-3 absolute bottom-0 left-1/4 w-[45%] h-[45%] rounded-full bg-brand-gold/20 blur-[110px]" />
    </div>
  )
}

export default AuroraBackground
