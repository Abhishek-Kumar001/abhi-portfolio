const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'C/C++', 'Java', 'Python'],
    },
    {
      category: 'Frontend',
      skills: ['React.js', 'Redux Toolkit', 'Zustand', 'React Hooks', 'Tailwind CSS', 'DaisyUI', 'MUI'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT', 'Zod'],
    },
    {
      category: 'AI & LLM',
      skills: ['Gemini AI API', 'LangChain', 'LangGraph', 'RAG', 'GenAI'],
    },
    {
      category: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Socket.IO', 'Puppeteer', 'Postman', 'AWS S3'],
    },
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.category}
              className="card-hover bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 animate-slideInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-tag px-3 py-1 text-sm rounded-full font-medium text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
