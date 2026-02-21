function About() {
  return (
    <div className="min-h-screen">
    

<section className="relative overflow-hidden py-16 md:py-20">
  <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-500/10 via-transparent to-transparent" />
  <div className="absolute top-20 left-1/4 w-72 h-72 bg-violet-500/20 rounded-full blur-3xl" />
  <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-3xl" />

  <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    <h1 className="text-2xl sm:text-5xl md:text-4xl font-black tracking-tight">
      <span className="bg-gradient-to-r from-white via-fuchsia-200 to-violet-200 bg-clip-text text-transparent">
        About HackHers
      </span>
    </h1>

    {/* smaller description + balanced spacing */}
    <p className="mt-4 text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
      The goal of our Voice-enabled Personal Assistant is to enable seamless human-computer interaction through natural speech.
    </p>

    {/* proper gap above badge */}
    <span className="inline-block mt-6 px-4 py-1.5 rounded-full text-sm font-medium bg-fuchsia-500/20 text-fuchsia-300 border border-fuchsia-500/30">
      We are the HACKHERS
    </span>
  </div>
</section>

    

<section className="py-12 md:py-14">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      <div>
        <span className="text-fuchsia-400 font-semibold text-[10px] uppercase tracking-wider">
          The Challenge
        </span>

        <h2 className="mt-1 text-xl md:text-2xl font-semibold text-white">
          The Problem We&apos;re Solving
        </h2>

        <p className="mt-3 text-slate-400 text-sm md:text-base leading-relaxed">
          HackHers is a passionate team dedicated to building intelligent, human-centric AI solutions. In this project, we are developing a voice-enabled personal assistant that transforms natural speech into meaningful actions using advanced speech-to-text, intent detection, and large language models.
        </p>

        <ul className="mt-5 space-y-2.5">
          {[
            'Limited access to hands-on technical experience',
            'Fewer role models and mentors in the industry',
            'Unconscious bias in hiring and promotion',
            'Lack of safe spaces to experiment and fail',
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-slate-300 text-xs md:text-sm">
              <span className="flex-shrink-0 w-4 h-4 rounded-full bg-fuchsia-500/20 flex items-center justify-center text-fuchsia-400 text-[9px] font-bold">
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="relative">
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 border border-white/10 p-6 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div
                key={i}
                className="rounded bg-fuchsia-500/30"
                style={{ height: `${18 + (i % 4) * 10}px` }}
              />
            ))}
          </div>
        </div>
        <div className="absolute -inset-4 rounded-3xl border border-fuchsia-500/20 -z-10 blur-xl opacity-50" />
      </div> */}
      <div className="relative">
  <div className="aspect-square rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-violet-500/20 border border-white/10 p-6 flex items-center justify-center overflow-hidden">
    
    {/* 🔹 Your Image */}
    <img
      src="/img.jpeg"  // 👈 change path
      alt="AI Voice Assistant"
      className="absolute inset-0 w-full h-full object-contain opacity-90"
    />

    {/* 🔹 Existing grid (kept as design overlay) */}
    <div className="relative grid grid-cols-4 gap-2">
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="rounded bg-fuchsia-500/30"
          style={{ height: `${18 + (i % 4) * 10}px` }}
        />
      ))}
    </div>
  </div>

  <div className="absolute -inset-4 rounded-3xl border border-fuchsia-500/20 -z-10 blur-xl opacity-50" />
</div>
    </div>
  </div>
</section>

      

      {/* Our Solution Section */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider">
              What We Do
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Our Solution
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              HackHers creates an inclusive ecosystem where women can thrive in tech.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Hands-On Hackathons',
                desc: '48-hour events where participants build real projects, from idea to demo, with mentorship and workshops.',
                icon: '⚡',
              },
              {
                title: 'Mentorship Network',
                desc: 'Connect with industry professionals who provide guidance, feedback, and career advice.',
                icon: '🤝',
              },
              {
                title: 'Safe Learning Space',
                desc: 'A judgment-free environment where you can experiment, ask questions, and grow confidently.',
                icon: '🛡️',
              },
              {
                title: 'Skill Workshops',
                desc: 'Technical workshops on web dev, AI, design, and more—tailored for all skill levels.',
                icon: '📚',
              },
              {
                title: 'Community Building',
                desc: 'Join a network of ambitious women supporting each other long after the hackathon ends.',
                icon: '🌟',
              },
              {
                title: 'Career Opportunities',
                desc: 'Partnerships with companies actively looking to hire diverse tech talent.',
                icon: '🚀',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-500/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <span className="text-3xl">{card.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-2 text-slate-400 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-fuchsia-500/10 to-transparent border border-fuchsia-500/20">
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                To empower women to pursue careers in technology by providing access to
                hands-on learning, mentorship, and a supportive community that celebrates
                their achievements and potential.
              </p>
            </div>
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/20">
              <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                A tech industry where women are equally represented at every level—from
                entry-level roles to C-suite—and where diverse perspectives drive
                innovation that benefits everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              By The Numbers
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Our Impact
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: '500+', label: 'Participants' },
              { value: '50+', label: 'Projects Built' },
              { value: '30+', label: 'Mentors' },
              { value: '12', label: 'Hackathons' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-2xl bg-white/5 border border-white/10"
              >
                <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <p className="mt-1 text-slate-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fuchsia-400 font-semibold text-sm uppercase tracking-wider">
              Get Started
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              How It Works
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Register', desc: 'Sign up for our next hackathon—it\'s free!' },
              { step: '02', title: 'Form a Team', desc: 'Solo or with friends, build something amazing.' },
              { step: '03', title: 'Build & Learn', desc: '48 hours of coding, workshops, and mentorship.' },
              { step: '04', title: 'Demo & Win', desc: 'Present your project and celebrate your wins.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-fuchsia-500/50 to-transparent" />
                )}
                <div className="text-5xl font-black text-fuchsia-500/20">{item.step}</div>
                <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-12 md:p-16 rounded-3xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-transparent border border-fuchsia-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="mt-4 text-slate-400 text-lg">
              Join our community and take the first step toward your tech journey.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-xl font-semibold bg-gradient-to-r from-fuchsia-500 to-violet-600 text-white shadow-lg shadow-fuchsia-500/25 hover:shadow-fuchsia-500/40 hover:scale-105 transition-all duration-200">
                Join the Next Hackathon
              </button>
              <button className="px-8 py-4 rounded-xl font-semibold border border-white/20 text-white hover:bg-white/10 transition-all duration-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
