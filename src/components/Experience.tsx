const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Techpearl Software',
      period: 'May 2025 – Apr 2026',
      description: 'Building AI-powered interview preparation platform',
      highlights: [
        'Developed AI interview prep platform with Gemini AI integration',
        'Built scalable SaaS application using React 18, TypeScript, Redux Toolkit, and React Query',
        'Implemented JWT authentication, protected routing, and RBAC (Role-Based Access Control)',
        'Optimized performance with advanced state management and caching strategies',
      ],
    },
    {
      id: 2,
      title: 'Web Developer Intern',
      company: 'Vaastaman Solutions',
      period: 'Dec 2024 – May 2025',
      description: 'Frontend development and bug fixing',
      highlights: [
        'Created 15+ reusable and performant React components',
        'Fixed 50+ bugs across the application, improving code quality and stability',
        'Collaborated with design and backend teams on feature implementation',
        'Implemented responsive designs following modern UI/UX principles',
      ],
    },
  ]

  return (
    <section id="experience" className="section-padding bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Professional Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="card-hover bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 animate-slideInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">{exp.title}</h3>
                  <p className="text-lg text-blue-400 font-semibold mt-1">{exp.company}</p>
                </div>
                <span className="text-sm font-semibold text-slate-400 bg-slate-800 px-4 py-2 rounded-full whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 mb-4">{exp.description}</p>

              {/* Highlights */}
              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
