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
          HackHers is building a voice-enabled personal assistant that transforms natural speech into meaningful actions. Powered by speech recognition, intent detection, and large language models, it helps users interact with technology in a simple, intuitive, and human-centric way.
        </p>

        <ul className="mt-5 space-y-2.5">
          {[
            'Turns voice commands into intelligent, real-time responses',
            'Assists with tasks like answering questions and drafting emails',
            'Creates a more accessible and user-friendly AI experience'
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
              HackHers is building a voice-enabled AI personal assistant that understands natural speech and turns it into meaningful actions — instantly and intelligently.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Smart Conversations',
                desc: 'Get accurate answers to general questions using advanced large language models.',
                icon: '⚙️',
              },
              {
                title: 'Email Automation',
                desc: 'Draft and send emails seamlessly through voice commands.',
                icon: '✉️',
              },
              {
                title: 'Intelligent Intent Detection',
                desc: 'Understands user intent to trigger the right action every time.',
                icon: '🎯',
              },
              {
                title: 'Voice-First Experience',
                desc: 'Speak naturally — no rigid commands or complex inputs required.',
                icon: '🔊',
              },
              {
                title: 'Secure & Scalable',
                desc: 'Built with modern architecture designed for reliability and growth.',
                icon: '🔐',
              },
              {
                title: 'Real-World Productivity',
                desc: 'From quick queries to task automation, it simplifies daily workflows.',
                icon: '📈',
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

      {/* Core Capabilities */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-fuchsia-400 font-semibold text-sm uppercase tracking-wider">
              Technology Stack
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              Core Capabilities
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Voice-to-Text Processing',
              'Large Language Model Integration (Claude Sonnet)',
              'Intent-Based Workflow Automation',
              'MCP Email Agent Integration',
              'Scalable React + Vite Frontend',
            ].map((capability, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-fuchsia-500/30 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div className="text-3xl font-bold text-fuchsia-400 mb-3">{i + 1}.</div>
                <h4 className="text-lg font-semibold text-white">{capability}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Detailed */}
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-violet-400 font-semibold text-sm uppercase tracking-wider">
              The Process
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
              How It Works
            </h2>
            <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
              Our voice-enabled assistant combines speech recognition, intent detection, and large language models to convert natural language into intelligent actions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Speech Input', desc: 'User speaks naturally through the interface.' },
              { step: '02', title: 'Intent Understanding', desc: 'The system processes the request using LLM-powered reasoning.' },
              { step: '03', title: 'Action Execution', desc: 'The assistant responds with answers or triggers workflows like sending emails.' },
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 border border-white/10">
                <div className="text-5xl font-black text-fuchsia-500/30 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
 
    </div>
  )
}

export default About
