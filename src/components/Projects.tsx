const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'ChatterFlow',
      description: 'Real-time chat application with WebSocket support for instant messaging',
      stack: ['React', 'Socket.IO', 'JWT', 'Node.js', 'MongoDB'],
      features: ['Real-time messaging', 'User authentication', 'Message history', 'Online status'],
      liveUrl: 'https://chatter-flow-app.vercel.app/',
      date: 'Feb 2025',
    },
    {
      id: 2,
      title: 'PrimeCart',
      description: 'Full-featured e-commerce platform with product catalog and checkout',
      stack: ['React', 'Redux Toolkit', 'Firebase', 'REST APIs', 'Tailwind CSS'],
      features: ['Product filtering', 'Shopping cart', 'Payment integration', 'Order tracking'],
      liveUrl: 'https://prime-cart-abhi.netlify.app/',
      date: 'Jan 2025',
    },
    {
      id: 3,
      title: 'SparkMatcher',
      description: 'Dating application with real-time messaging and user matching',
      stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO'],
      features: ['User profiles', 'Smart matching', 'Real-time chat', 'Notifications'],
      liveUrl: 'https://spark-matcher.vercel.app/',
      date: 'Oct 2024',
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="card-hover bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 flex flex-col animate-slideInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Header with Date */}
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 p-6 border-b border-slate-700/50">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="text-xl font-bold text-slate-100">{project.title}</h3>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-3 py-1 rounded-full">
                    {project.date}
                  </span>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Project Features */}
              <div className="p-6 flex-grow">
                <p className="text-xs font-semibold text-slate-400 uppercase mb-3">Key Features</p>
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-blue-400 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="px-6 pb-6">
                <p className="text-xs font-semibold text-slate-400 uppercase mb-2">Tech Stack</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span key={tech} className="skill-tag px-2 py-1 text-xs rounded font-medium text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <div className="px-6 pb-6">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-btn w-full py-2 rounded-lg text-white font-semibold text-center text-sm block"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
