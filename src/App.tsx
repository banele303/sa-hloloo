import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Award, Target, Heart, BookOpen, Users, Leaf, GraduationCap, ChevronRight, Sparkles } from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.7 }
}

const stagger = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, staggerChildren: 0.15 }
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Vision', href: '#vision' },
    { label: 'Academics', href: '#academics' },
    { label: 'Values', href: '#values' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-orange-500 flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm leading-tight text-gray-900">SA HLOLO ENTLE</p>
              <p className="text-[10px] text-gray-500 font-medium">HOLDINGS (PTY) LTD</p>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-gray-700 hover:text-amber-600 transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-600 to-orange-500 text-white text-sm font-bold shadow-lg shadow-amber-600/20 hover:shadow-xl hover:shadow-amber-600/30 transition-all">
              Get in Touch
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-xl hover:bg-gray-100">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-2">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-600">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="block px-4 py-3 rounded-xl bg-amber-600 text-white text-sm font-bold text-center">
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-400/30 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Est. 2016 · 100% Women-Owned
            </span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
            Shaping Future
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Leaders & Learners</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-lg sm:text-xl text-gray-300 max-w-xl mb-8 leading-relaxed">
            Providing quality education, SETA-accredited training, and impactful skills development programs across South Africa.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="flex flex-wrap gap-4">
            <a href="#academics" className="px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold shadow-xl shadow-amber-600/30 hover:shadow-2xl hover:shadow-amber-600/40 transition-all">
              Explore Programs
            </a>
            <a href="#contact" className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold hover:bg-white/20 transition-all">
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp}>
            <span className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em]">About Us</span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
              Empowering Communities Through <span className="text-amber-600">Education & Training</span>
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p><strong className="text-gray-900">SA HLOLO ENTLE HOLDINGS (PTY) LTD</strong> — HLOLO ENTLE TRAINING AND PROJECTS — is a 100% African women-owned company managed by Mrs. M.S. Mokwena.</p>
              <p>Based in Kempton Park, Gauteng, we empower individuals and organizations through SETA-accredited training, practical skills development, and impactful education initiatives.</p>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2 text-sm"><Award className="w-4 h-4 text-amber-600" /> <span className="text-gray-900 font-medium">Reg: 2016/445856/07</span></div>
                <div className="flex items-center gap-2 text-sm"><Users className="w-4 h-4 text-amber-600" /> <span className="text-gray-900 font-medium">100% Women-Owned</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80" alt="Training" className="w-full h-[400px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4">
                  <p className="text-2xl font-bold text-gray-900">8+ Years</p>
                  <p className="text-sm text-gray-600">Of Excellence in Training & Development</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-100 rounded-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section id="vision" className="py-24 sm:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <span className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em]">What Drives Us</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4">Vision, Mission & Values</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Vision',
              desc: 'To create awareness of the importance of youth and employee development, featuring as a benchmark for high-quality learning, job creation, and economic growth in South Africa.',
              color: 'from-amber-500 to-orange-500',
              bg: 'bg-amber-50'
            },
            {
              icon: Heart,
              title: 'Our Mission',
              desc: 'To deliver impactful skills development programs, empower communities through teamwork, and foster respect, good values, and lifelong learning.',
              color: 'from-emerald-500 to-teal-500',
              bg: 'bg-emerald-50'
            },
            {
              icon: Leaf,
              title: 'Our Values',
              desc: 'Consistency in innovative teaching. Commitment to reliable, transparent training. Environmentalism through respect, teamwork, and sustainability.',
              color: 'from-blue-500 to-indigo-500',
              bg: 'bg-blue-50'
            }
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`group relative rounded-3xl ${item.bg} p-8 border border-transparent hover:border-amber-200/50 transition-all cursor-default`}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Academics() {
  const programs = [
    { seta: 'EDTP SETA', qualifications: [
      { id: '23117', level: '5', credits: '120', title: 'Higher Certificate: Early Childhood Development' },
      { id: '58761', level: '4', credits: '140', title: 'FET Certificate: Early Childhood Development' },
      { id: '73254', level: '1', credits: '120', title: 'General Education & Training Certificate: ECD' },
    ]},
    { seta: 'AGRISETA', qualifications: [
      { id: '48970', level: '1', credits: '120', title: 'National Certificate: Animal Production' },
    ]},
  ]

  return (
    <section id="academics" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <span className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em]">Programs</span>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4">SETA-Accredited Qualifications</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Nationally recognized qualifications designed to equip learners with practical skills and knowledge.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((prog, i) => (
            <motion.div key={prog.seta} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
              className="rounded-3xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-r from-amber-600 to-orange-500 px-6 py-5">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{prog.seta}</h3>
                </div>
              </div>
              <div className="p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="text-left py-3 text-gray-500 font-medium">ID</th>
                      <th className="text-left py-3 text-gray-500 font-medium">Level</th>
                      <th className="text-left py-3 text-gray-500 font-medium">Credits</th>
                      <th className="text-left py-3 text-gray-500 font-medium">Title</th>
                    </tr>
                  </thead>
                  <tbody>
                    {prog.qualifications.map(q => (
                      <tr key={q.id} className="border-b border-gray-50 last:border-0">
                        <td className="py-3 font-mono text-amber-700">{q.id}</td>
                        <td className="py-3">{q.level}</td>
                        <td className="py-3">{q.credits}</td>
                        <td className="py-3 text-gray-900 font-medium">{q.title}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div className="mt-12 text-center" {...fadeUp}>
          <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-500 text-white font-bold shadow-lg hover:shadow-xl transition-all">
            Apply Now <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function Values() {
  const items = [
    { icon: BookOpen, title: 'Consistency', desc: 'Innovative teaching and youth development programs that deliver measurable outcomes.' },
    { icon: Award, title: 'Commitment', desc: 'Reliable, transparent, and efficient training services you can trust.' },
    { icon: Leaf, title: 'Environmentalism', desc: 'Respect, teamwork, and sustainable practices embedded in everything we do.' },
  ]

  return (
    <section id="values" className="py-24 sm:py-32 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-16" {...fadeUp}>
          <span className="text-sm font-bold text-amber-400 uppercase tracking-[0.2em]">Our Foundation</span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mt-4">Core Values</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center mx-auto mb-6 border border-amber-500/10">
                  <Icon className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div {...fadeUp}>
            <span className="text-sm font-bold text-amber-600 uppercase tracking-[0.2em]">Get in Touch</span>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">Let's Start a Conversation</h2>
            <p className="text-gray-500 mb-8">Ready to invest in skills development? Reach out to us for more information about our programs.</p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'HloloEntleHoldings@outlook.com', href: 'mailto:HloloEntleHoldings@outlook.com' },
                { icon: Phone, label: 'Phone', value: '083 777 2806 | 079 064 6850 | 061 585 6961', href: 'tel:+27837772806' },
                { icon: MapPin, label: 'Address', value: '21 Van Der Walt, Kempton Park 1618', href: 'https://maps.google.com/?q=21+Van+Der+Walt+Kempton+Park' },
              ].map((item, i) => {
                const Icon = item.icon
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">{item.value}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
          >
            <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80" alt="Contact" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-lg font-bold text-gray-900">SA HLOLO ENTLE HOLDINGS</p>
                <p className="text-sm text-gray-600 mt-1">Reg: 2016/445856/07</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-600 to-orange-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-bold text-sm text-white">SA HLOLO ENTLE HOLDINGS</p>
              <p className="text-[10px] text-gray-500">(PTY) LTD · Projects Pty/Ltd</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} HLOLO ENTLE HOLDINGS (PTY) LTD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="font-['Inter']">
      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Academics />
      <Values />
      <Contact />
      <Footer />
    </div>
  )
}
