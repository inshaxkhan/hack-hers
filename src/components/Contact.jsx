const teamMembers = [
  {
    id: 1,
    name: 'Insha Khan',
    linkedin: 'https://www.linkedin.com/in/inshaxkhan/',
  },
  {
    id: 2,
    name: 'Madiha',
    linkedin: 'https://www.linkedin.com/in/madiha-wasif-0ab2b8256/',
  },
  {
    id: 3,
    name: 'Shubhi Shukla',
    linkedin: null,
  },
]

function Contact() {
  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-fuchsia-400 font-semibold text-sm uppercase tracking-wider">
            Get in Touch
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Meet Our Team
          </h1>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Connect with the brilliant minds building the voice-enabled AI assistant
          </p>
        </div>

        {/* Team Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-fuchsia-500/30 hover:bg-white/[0.08] transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 border-2 border-fuchsia-500/30 flex items-center justify-center mb-6 mx-auto group-hover:border-fuchsia-500/50 transition-colors">
                <span className="text-4xl font-bold text-fuchsia-400">
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-xl font-semibold text-white text-center mb-6">
                {member.name}
              </h3>

              {/* LinkedIn Link */}
              {member.linkedin ? (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-fuchsia-500/30 hover:bg-fuchsia-500/10 transition-all duration-200 font-medium"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                  </svg>
                  Visit LinkedIn
                </a>
              ) : (
                <div className="flex items-center justify-center px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-500 font-medium">
                  LinkedIn profile coming soon
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contact

