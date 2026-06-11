import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Award,
  BookOpen,
  ChevronRight,
  GraduationCap,
  Heart,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Target,
  Users,
  X,
} from 'lucide-react'

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55 },
}

const graduationPhotos = [
  {
    src: '/images/graduates.jpeg',
    alt: 'Three SA Hlolo Entle graduates celebrating after the ceremony',
    title: 'Graduate celebration',
  },
  {
    src: '/images/graduates2.jpeg',
    alt: 'Two graduates posing at a graduation backdrop',
    title: 'Achievement moment',
  },
  {
    src: '/images/graduates3.jpeg',
    alt: 'A graduate standing outdoors in her gown',
    title: 'Proud graduate',
  },
  {
    src: '/images/graduates4.jpeg',
    alt: 'Graduation ceremony taking place on stage',
    title: 'Ceremony stage',
  },
  {
    src: '/images/graduates5.jpeg',
    alt: 'Graduate receiving her academic hood on stage',
    title: 'Hooding ceremony',
  },
]

const programs = [
  {
    title: 'Early Childhood Development Practitioner',
    group: 'Education',
    description: 'Practical preparation for supporting young learners, classroom routines, child development, and early learning environments.',
  },
  {
    title: 'Project Manager',
    group: 'Management',
    description: 'Planning, coordination, reporting, and delivery skills for community, training, and workplace projects.',
  },
  {
    title: 'Occupational Certificate: Christian Religious Professional',
    group: 'Community',
    description: 'Faith-based leadership, service, communication, and ethical community support practices.',
  },
  {
    title: 'Occupational Certificate: Poultry Farmer',
    group: 'Agriculture',
    description: 'Foundational poultry production knowledge, daily farm routines, record keeping, and responsible farming practice.',
  },
  {
    title: 'Livestock Farmer (Livestock Farmer Supervisor)',
    group: 'Agriculture',
    description: 'Livestock supervision, animal production support, farm operations, and practical team coordination.',
  },
  {
    title: 'Crop Analysis',
    group: 'Agriculture',
    description: 'Crop observation, growth tracking, field reporting, and practical analysis for better agricultural decisions.',
  },
]

const stats = [
  { value: '2016', label: 'Established' },
  { value: '100%', label: 'African women-owned' },
  { value: '6', label: 'Programs open for 2026' },
  { value: 'Gauteng', label: 'Based in Kempton Park' },
]

const valueCards = [
  {
    icon: BookOpen,
    title: 'Consistency',
    description: 'Reliable learning experiences, clear communication, and practical teaching that learners can trust.',
  },
  {
    icon: Award,
    title: 'Commitment',
    description: 'Training services delivered with accountability, transparency, and care for every learner journey.',
  },
  {
    icon: Leaf,
    title: 'Environmentalism',
    description: 'Respect, teamwork, and responsible practices embedded into our education and project work.',
  },
]

const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Sarah.m@hloloentleholdings.co.zo',
    href: 'mailto:Sarah.m@hloloentleholdings.co.zo',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '083 777 2806 | 079 064 6850 | 061 585 6961',
    href: 'tel:+27837772806',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '21 Van Der Walt, Kempton Park 1618',
    href: 'https://maps.google.com/?q=21+Van+Der+Walt+Kempton+Park',
  },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`site-header ${scrolled ? 'site-header--solid' : ''}`}
    >
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <Sparkles size={20} aria-hidden="true" />
          </span>
          <span>
            <strong>SA HLOLO ENTLE</strong>
            <small>HOLDINGS (PTY) LTD</small>
          </span>
        </a>

        <div className="desktop-nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Enquire Now
          </a>
        </div>

        <button className="menu-button" type="button" onClick={() => setOpen((value) => !value)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <img className="hero-image" src={graduationPhotos[0].src} alt="" aria-hidden="true" />
      <div className="hero-overlay" />

      <div className="container hero-grid">
        <motion.div className="hero-copy" {...fadeUp}>
          <span className="eyebrow eyebrow--light">
            <Sparkles size={16} aria-hidden="true" />
            Est. 2016 | 100% African women-owned
          </span>
          <h1>Training that builds confident learners and practical leaders.</h1>
          <p>
            SA Hlolo Entle Holdings delivers education, skills development, agricultural training, and community-focused
            programs from Kempton Park to learners across South Africa.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programs">
              View Programs <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#gallery">
              See Graduates
            </a>
          </div>
        </motion.div>

        <motion.div className="hero-panel" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="panel-label">Admission now open</p>
          <strong>2026</strong>
          <span>Programs study</span>
        </motion.div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats-band" aria-label="Company highlights">
      <div className="container stats-grid">
        {stats.map((item) => (
          <div className="stat-card" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section section-white">
      <div className="container split">
        <motion.div className="copy-stack" {...fadeUp}>
          <span className="eyebrow">About us</span>
          <h2>Empowering communities through education, training, and projects.</h2>
          <p>
            <strong>SA HLOLO ENTLE HOLDINGS (PTY) LTD</strong>, trading as HLOLO ENTLE TRAINING AND PROJECTS, is a
            100% African women-owned company managed by Mrs. M.S. Mokwena.
          </p>
          <p>
            We focus on practical skills development, learner support, youth and employee development, and training that
            connects people with real opportunities for growth.
          </p>
          <div className="info-pills">
            <span><Award size={16} aria-hidden="true" /> Reg: 2016/445856/07</span>
            <span><Users size={16} aria-hidden="true" /> Women-owned business</span>
          </div>
        </motion.div>

        <motion.figure className="image-card image-card--about" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={graduationPhotos[2].src} alt={graduationPhotos[2].alt} />
          <figcaption>
            <strong>8+ years</strong>
            <span>of training and development work</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}

function Vision() {
  const cards = [
    {
      icon: Target,
      title: 'Our vision',
      description: 'To create awareness of youth and employee development while becoming a benchmark for quality learning and job creation.',
    },
    {
      icon: Heart,
      title: 'Our mission',
      description: 'To deliver impactful skills development programs, empower communities, and encourage respect, teamwork, and lifelong learning.',
    },
    {
      icon: Users,
      title: 'Our approach',
      description: 'We combine structured learning, practical instruction, learner support, and community-based project experience.',
    },
  ]

  return (
    <section className="section section-soft">
      <div className="container">
        <motion.div className="section-heading" {...fadeUp}>
          <span className="eyebrow">What drives us</span>
          <h2>Training with purpose, care, and measurable outcomes.</h2>
        </motion.div>
        <div className="cards-grid">
          {cards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.article
                className="feature-card"
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="icon-badge"><Icon size={24} aria-hidden="true" /></span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Programs() {
  return (
    <section id="programs" className="section section-white">
      <div className="container">
        <motion.div className="section-heading" {...fadeUp}>
          <span className="eyebrow">Programs study</span>
          <h2>Admission now open for 2026.</h2>
          <p>Choose from focused programs designed for education, management, community service, and agriculture.</p>
        </motion.div>

        <div className="program-grid">
          {programs.map((program, index) => (
            <motion.article
              className="program-card"
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <div className="program-icon">
                <GraduationCap size={24} aria-hidden="true" />
              </div>
              <span>{program.group}</span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Admissions() {
  return (
    <section id="admissions" className="admissions">
      <div className="container admissions-grid">
        <motion.div className="copy-stack" {...fadeUp}>
          <span className="eyebrow eyebrow--light">Admissions</span>
          <h2>Ready to register for 2026?</h2>
          <p>
            Speak to our team about entry details, program availability, learner support, and how to secure your place.
            We will help you choose the right learning path.
          </p>
          <a className="button button-light" href="#contact">
            Contact Admissions <ChevronRight size={18} aria-hidden="true" />
          </a>
        </motion.div>

        <div className="admissions-list" aria-label="Admissions support">
          <span>Program guidance</span>
          <span>Registration support</span>
          <span>Learner communication</span>
          <span>Career-focused learning</span>
        </div>
      </div>
    </section>
  )
}

function Values() {
  return (
    <section className="section section-dark">
      <div className="container">
        <motion.div className="section-heading section-heading--dark" {...fadeUp}>
          <span className="eyebrow eyebrow--light">Our foundation</span>
          <h2>Values that guide the work.</h2>
        </motion.div>

        <div className="cards-grid">
          {valueCards.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                className="value-card"
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <span className="icon-badge icon-badge--dark"><Icon size={24} aria-hidden="true" /></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Gallery() {
  return (
    <section id="gallery" className="section section-soft">
      <div className="container">
        <motion.div className="section-heading" {...fadeUp}>
          <span className="eyebrow">Gallery</span>
          <h2>Celebrating our graduates.</h2>
          <p>Real moments from learners, ceremonies, and proud milestones at SA Hlolo Entle Holdings.</p>
        </motion.div>

        <div className="gallery-grid">
          {graduationPhotos.map((photo, index) => (
            <motion.figure
              className={`gallery-item gallery-item-${index + 1}`}
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <img src={photo.src} alt={photo.alt} />
              <figcaption>{photo.title}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section section-white">
      <div className="container split">
        <motion.div className="copy-stack" {...fadeUp}>
          <span className="eyebrow">Get in touch</span>
          <h2>Let us help you choose your next step.</h2>
          <p>
            Reach out for program details, admission questions, registration support, or partnership conversations.
          </p>

          <div className="contact-list">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <a className="contact-card" key={item.label} href={item.href} target={item.label === 'Address' ? '_blank' : undefined} rel="noreferrer">
                  <span className="contact-icon"><Icon size={22} aria-hidden="true" /></span>
                  <span>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.figure className="image-card image-card--contact" initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <img src={graduationPhotos[4].src} alt={graduationPhotos[4].alt} />
          <figcaption>
            <strong>SA HLOLO ENTLE HOLDINGS</strong>
            <span>Training and Projects</span>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="brand brand--footer">
          <span className="brand-mark">
            <Sparkles size={18} aria-hidden="true" />
          </span>
          <span>
            <strong>SA HLOLO ENTLE HOLDINGS</strong>
            <small>HLOLO ENTLE TRAINING AND PROJECTS</small>
          </span>
        </div>
        <p>&copy; {new Date().getFullYear()} HLOLO ENTLE HOLDINGS (PTY) LTD. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Vision />
        <Programs />
        <Admissions />
        <Values />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
