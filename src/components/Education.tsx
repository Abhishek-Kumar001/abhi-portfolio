const Education = () => {
  const education = [
    {
      id: 1,
      school: 'National Business College',
      degree: 'Bachelor of Computer Applications (BCA)',
      period: 'Sep 2020 – Mar 2024',
      score: '80.17%',
      highlights: [
        'Strong foundation in computer science fundamentals',
        'Completed major projects in web development',
        'Active participation in coding competitions',
      ],
    },
    {
      id: 2,
      school: 'MR Inter College',
      degree: '12th Board',
      period: 'Jun 2018 – Jun 2020',
      score: '79.20%',
      highlights: [
        'Science stream with focus on mathematics',
        'Foundation for technical excellence',
      ],
    },
  ]

  return (
    <section id="education" className="section-padding bg-slate-800/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Education</h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div
              key={edu.id}
              className="card-hover bg-slate-900/50 rounded-xl p-8 border border-slate-700/50 animate-slideInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100">{edu.degree}</h3>
                  <p className="text-lg text-blue-400 font-semibold mt-1">{edu.school}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold text-slate-400 bg-slate-800 px-4 py-2 rounded-full block mb-2">
                    {edu.period}
                  </span>
                  <p className="text-2xl font-bold gradient-text">{edu.score}</p>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-2">
                {edu.highlights.map((highlight, i) => (
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

export default Education
