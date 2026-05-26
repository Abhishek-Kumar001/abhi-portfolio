import { useState } from 'react'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const contactMethods = [
    {
      icon: 'email',
      label: 'Email',
      value: 'abhigupta12558@gmail.com',
      href: 'mailto:abhigupta12558@gmail.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+91 95253 03570',
      href: 'tel:+919525303570',
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'Bangalore, India',
      href: '#',
    },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`New message from ${formState.name}`)
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)
    window.location.href = `mailto:abhigupta12558@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-8 animate-slideInLeft">
            <p className="text-lg text-slate-300 mb-8">
              I'm always interested in hearing about new projects and opportunities.
            </p>

            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="card-hover flex items-start gap-4 p-6 rounded-xl bg-slate-800/50 border border-slate-700/50"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/20 flex-shrink-0">
                  {method.icon === 'email' && (
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  )}
                  {method.icon === 'phone' && (
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.707 12.293l-5.293-5.293a1 1 0 0 0-1.414 0l-5.293 5.293a1 1 0 1 0 1.414 1.414L10 9.414V20a1 1 0 1 0 2 0V9.414l3.293 3.293a1 1 0 1 0 1.414-1.414z" />
                    </svg>
                  )}
                  {method.icon === 'location' && (
                    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5z" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-slate-100 mb-1">{method.label}</p>
                  <p className="text-slate-400 text-sm hover:text-blue-400 transition-colors">{method.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slideInRight">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="gradient-btn w-full py-3 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
