const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Avatar */}
          <div className="animate-slideInLeft">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-700/50 card-hover">
                <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-xl flex items-center justify-center">
                  <svg className="w-24 h-24 text-slate-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="animate-slideInRight space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a Full Stack AI Engineer with 1.5+ years of experience building production-grade web applications.
              My passion lies in creating fast, scalable solutions that leverage AI and modern technologies.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have hands-on experience with LLM integrations using Gemini AI, LangChain, and RAG architectures.
            </p>

            <p className="text-lg text-slate-300 leading-relaxed">
              My journey started with a strong foundation in computer science (BCA degree) and has evolved through real-world projects and professional experiences.
              I'm driven by the challenge of solving complex problems and shipping features that matter.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/50">
              <div>
                <p className="text-3xl font-bold gradient-text">1.5+</p>
                <p className="text-slate-400 text-sm">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">50+</p>
                <p className="text-slate-400 text-sm">Bugs Fixed</p>
              </div>
              <div>
                <p className="text-3xl font-bold gradient-text">15+</p>
                <p className="text-slate-400 text-sm">Components Built</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
