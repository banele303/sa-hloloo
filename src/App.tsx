import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Award,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Compass,
  FileCheck2,
  GraduationCap,
  Handshake,
  Heart,
  HelpCircle,
  Leaf,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Newspaper,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  X,
  Zap,
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
    category: 'Education',
    description: 'Build the practical classroom, child development, planning, and learner-care skills needed in early learning environments.',
  },
  {
    title: 'Project Manager',
    category: 'Management',
    description: 'Learn planning, coordination, reporting, stakeholder communication, and delivery skills for real projects.',
  },
  {
    title: 'Occupational Certificate: Christian Religious Professional',
    category: 'Community',
    description: 'Develop ethical service, pastoral communication, faith-based leadership, and community support practice.',
  },
  {
    title: 'Occupational Certificate: Poultry Farmer',
    category: 'Agriculture',
    description: 'Understand daily poultry operations, production routines, record keeping, and responsible farming foundations.',
  },
  {
    title: 'Livestock Farmer (Livestock Farmer Supervisor)',
    category: 'Agriculture',
    description: 'Grow livestock supervision, animal production support, farm operations, and team coordination skills.',
  },
  {
    title: 'Crop Analysis',
    category: 'Agriculture',
    description: 'Practice crop observation, field reporting, growth tracking, and analysis for better agricultural decisions.',
  },
]

const stats = [
  { value: '2016', label: 'Established' },
  { value: '100%', label: 'African women-owned' },
  { value: '6', label: 'Programs open' },
  { value: '2026', label: 'Admissions cycle' },
]

const services = [
  {
    icon: GraduationCap,
    title: 'Skills Training',
    text: 'Structured learning experiences built around practical outcomes and learner confidence.',
  },
  {
    icon: ClipboardCheck,
    title: 'Project Support',
    text: 'Planning, coordination, and implementation support for community and workplace programs.',
  },
  {
    icon: Leaf,
    title: 'Agriculture Pathways',
    text: 'Applied training for poultry, livestock, crop observation, and farm operation basics.',
  },
  {
    icon: Users,
    title: 'Learner Development',
    text: 'Guidance, communication, and support that helps learners stay clear and motivated.',
  },
]

const learningSteps = [
  { title: 'Enquire', text: 'Tell us which program you are interested in and what you want to achieve.' },
  { title: 'Get guidance', text: 'We help you understand the program, expectations, and available support.' },
  { title: 'Register', text: 'Complete the admissions process and secure your place for the intake.' },
  { title: 'Learn and grow', text: 'Attend training, complete practical work, and build skills for your next step.' },
]

const blogPosts = [
  {
    title: 'How to choose the right 2026 program',
    category: 'Admissions',
    date: '2026 Intake',
    excerpt: 'A simple way to compare your goals with the learning path that fits your next career move.',
  },
  {
    title: 'Why practical skills matter in community development',
    category: 'Training',
    date: 'Learner Support',
    excerpt: 'Training works best when learners can connect lessons to real work, service, and project delivery.',
  },
  {
    title: 'Agriculture pathways: poultry, livestock, and crop analysis',
    category: 'Agriculture',
    date: 'Program Focus',
    excerpt: 'A look at practical agricultural skills and why they matter for food systems and local opportunity.',
  },
]

const faqs = [
  {
    question: 'Are admissions open for 2026?',
    answer: 'Yes. Admissions are open for the 2026 program cycle. Contact the team for registration guidance and availability.',
  },
  {
    question: 'Where is SA Hlolo Entle Holdings based?',
    answer: 'The office is based at 21 Van Der Walt, Kempton Park 1618, Gauteng.',
  },
  {
    question: 'Can I ask for help choosing a program?',
    answer: 'Yes. The team can explain the programs and help you choose the option that fits your goals.',
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

function SectionIntro({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string
  title: string
  text?: string
  light?: boolean
}) {
  return (
    <motion.div className="mx-auto mb-12 max-w-3xl text-center" {...fadeUp}>
      <span className={`text-xs font-black uppercase tracking-[0.22em] ${light ? 'text-amber-200' : 'text-gold'}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl font-black leading-tight sm:text-5xl ${light ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {text ? <p className={`mx-auto mt-5 max-w-2xl text-base sm:text-lg ${light ? 'text-white/70' : 'text-muted'}`}>{text}</p> : null}
    </motion.div>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-slate-200 bg-white/95 text-ink shadow-lg backdrop-blur-xl' : 'text-white'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <a href="#home" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/images/newlogo.jpeg"
            alt="SA Hlolo Entle Holdings"
            className="h-16 w-16 rounded-full bg-white object-cover p-1 shadow-glow ring-1 ring-white/40"
          />
          <span className="sr-only">SA Hlolo Entle Holdings home</span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-bold opacity-85 transition hover:text-gold hover:opacity-100">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="rounded-full bg-gold px-5 py-2.5 text-sm font-black text-white shadow-glow transition hover:-translate-y-0.5">
            Enquire Now
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className={`flex h-11 w-11 items-center justify-center rounded-2xl border lg:hidden ${
            scrolled ? 'border-slate-200 bg-white' : 'border-white/20 bg-white/10'
          }`}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mx-4 mb-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 text-ink shadow-soft lg:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-black hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-navy-deep text-white">
      <img src={graduationPhotos[0].src} alt="" aria-hidden="true" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,27,48,.96),rgba(6,27,48,.78)_48%,rgba(6,27,48,.32)),linear-gradient(0deg,rgba(6,27,48,.76),rgba(6,27,48,.12))]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />

      <div className="mx-auto grid min-h-screen max-w-7xl items-end gap-10 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-[1fr_360px] lg:px-8">
        <motion.div className="max-w-4xl" {...fadeUp}>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-amber-100 backdrop-blur">
            <Sparkles size={16} aria-hidden="true" />
            Est. 2016 | 100% African women-owned
          </div>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            Professional training for confident graduates and future leaders.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
            SA Hlolo Entle Holdings delivers practical education, skills development, agricultural training, and community-focused programs from Kempton Park.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#programs" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 font-black text-white shadow-glow transition hover:-translate-y-1">
              Explore Programs <ChevronRight size={19} aria-hidden="true" />
            </a>
            <a href="#admissions" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/20">
              2026 Admissions
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl"
        >
          <div className="rounded-[1.5rem] bg-white p-5 text-ink">
            <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">Admission now open</p>
            <div className="mt-3 flex items-end justify-between gap-4">
              <strong className="text-7xl font-black leading-none text-navy">2026</strong>
              <CalendarDays className="mb-2 text-gold" size={34} aria-hidden="true" />
            </div>
            <p className="mt-4 text-sm font-bold text-muted">Register for practical programs designed for work, service, agriculture, and leadership.</p>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3 text-sm font-black">
            <span className="rounded-2xl bg-white/10 px-4 py-3">Programs study</span>
            <span className="rounded-2xl bg-white/10 px-4 py-3">Learner support</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div key={item.label} className="border-b border-slate-200 p-6 last:border-b-0 sm:odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
            <strong className="block text-3xl font-black text-navy">{item.value}</strong>
            <span className="mt-1 block text-sm font-bold text-muted">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <motion.div {...fadeUp}>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-gold">About us</span>
          <h2 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">
            A modern training partner with real community roots.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-8 text-muted">
            <p>
              <strong className="text-ink">SA HLOLO ENTLE HOLDINGS (PTY) LTD</strong>, trading as HLOLO ENTLE TRAINING AND PROJECTS, is a 100% African women-owned company managed by Mrs. M.S. Mokwena.
            </p>
            <p>
              The company focuses on education, practical skills development, youth and employee growth, and community-based project work.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            {['Reg: 2016/445856/07', 'Based in Kempton Park', 'Training and Projects'].map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-black text-navy">
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="overflow-hidden rounded-[2rem] shadow-soft">
            <img src={graduationPhotos[2].src} alt={graduationPhotos[2].alt} className="h-[520px] w-full object-cover object-top" />
          </div>
          <div className="absolute -bottom-6 left-6 right-6 rounded-[1.5rem] bg-white p-5 shadow-soft">
            <strong className="block text-2xl font-black text-navy">Training that feels personal</strong>
            <span className="mt-1 block text-sm font-bold text-muted">Guidance, support, and proud learner milestones.</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="What we do"
          title="A complete training and development experience."
          text="The site now has more substance: programs, support, admissions guidance, gallery, blog, FAQ, and clear contact paths."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.text}</p>
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
    <section id="programs" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro
          eyebrow="Programs study"
          title="2026 programs built for practical skills."
          text="Clear, focused programs across education, management, community service, and agriculture."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold/50 hover:shadow-soft"
            >
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-gold">{program.category}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white transition group-hover:bg-gold">
                  <GraduationCap size={22} aria-hidden="true" />
                </span>
              </div>
              <h3 className="mt-6 text-xl font-black leading-snug text-ink">{program.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{program.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Admissions() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-navy-deep py-24 text-white sm:py-32">
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-leaf/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
        <motion.div {...fadeUp}>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-amber-200">Admissions</span>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">Admission now open for 2026.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
            A bolder admissions section with clear steps, modern cards, and a direct path to enquiry. Speak to our team and secure your place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-black text-navy shadow-xl transition hover:-translate-y-1">
              Register Interest <ChevronRight size={18} aria-hidden="true" />
            </a>
            <a href="#blog" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 py-4 font-black text-white backdrop-blur transition hover:bg-white/20">
              Read Updates
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-white p-6 text-ink">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-gold">Intake card</p>
            <strong className="mt-3 block text-7xl font-black leading-none text-navy">2026</strong>
            <p className="mt-4 text-sm font-bold leading-6 text-muted">Program guidance, registration support, learner communication, and career-focused learning.</p>
          </div>
          <div className="mt-4 grid gap-3">
            {['Choose a program', 'Contact admissions', 'Submit details', 'Start learning'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-black">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold text-sm">{index + 1}</span>
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function LearningJourney() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Learning journey" title="From enquiry to graduation, the path is clear." />
        <div className="grid gap-5 lg:grid-cols-4">
          {learningSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="relative rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-lg font-black text-white">{index + 1}</span>
              <h3 className="mt-6 text-xl font-black text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Support() {
  const items = [
    { icon: MessageCircle, title: 'Friendly communication', text: 'Ask questions and get clear responses about programs and registration.' },
    { icon: FileCheck2, title: 'Registration guidance', text: 'Support with the next steps so learners know what to prepare.' },
    { icon: Compass, title: 'Program direction', text: 'Help choosing a path that matches your goals and interests.' },
  ]

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[.85fr_1fr] lg:px-8">
        <motion.div {...fadeUp}>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-gold">Learner support</span>
          <h2 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">Support that makes the process feel simple.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Professional does not need to feel cold. The site now speaks clearly to learners who need practical guidance.</p>
        </motion.div>
        <div className="grid gap-4">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold text-white">
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span>
                  <h3 className="font-black text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                </span>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Outcomes() {
  const outcomes = [
    'Career-ready confidence',
    'Practical workplace habits',
    'Community leadership',
    'Agricultural awareness',
    'Communication skills',
    'Graduate pride',
  ]

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={graduationPhotos[1].src} alt={graduationPhotos[1].alt} className="h-72 w-full rounded-[1.5rem] object-cover shadow-soft" />
            <img src={graduationPhotos[3].src} alt={graduationPhotos[3].alt} className="mt-10 h-72 w-full rounded-[1.5rem] object-cover shadow-soft" />
          </motion.div>
          <motion.div {...fadeUp}>
            <span className="text-xs font-black uppercase tracking-[0.22em] text-gold">Outcomes</span>
            <h2 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">Built around real learner outcomes.</h2>
            <p className="mt-5 text-lg leading-8 text-muted">The page now explains why the programs matter, what learners gain, and why SA Hlolo Entle is a credible training partner.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {outcomes.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-black text-ink">
                  <CheckCircle2 className="text-leaf" size={20} aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Values() {
  const values = [
    { icon: BookOpen, title: 'Consistency', text: 'Clear training experiences learners can trust.' },
    { icon: Award, title: 'Commitment', text: 'Reliable, transparent, and accountable delivery.' },
    { icon: Leaf, title: 'Environmentalism', text: 'Respect, teamwork, and responsible practice.' },
  ]

  return (
    <section className="bg-navy-deep py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Core values" title="A professional foundation for every program." light />
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                className="rounded-[1.5rem] border border-white/10 bg-white/10 p-6 backdrop-blur"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-amber-200">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{item.text}</p>
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
    <section id="gallery" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Gallery" title="Graduate moments that make the work matter." text="All five graduation images are included in a modern responsive gallery." />
        <div className="grid auto-rows-[260px] gap-4 md:grid-cols-2 lg:grid-cols-4">
          {graduationPhotos.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className={`group relative overflow-hidden rounded-[1.5rem] shadow-soft ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''} ${index === 3 ? 'lg:col-span-2' : ''}`}
            >
              <img src={photo.src} alt={photo.alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <figcaption className="absolute bottom-3 left-3 right-3 rounded-2xl bg-navy-deep/82 px-4 py-3 text-sm font-black text-white backdrop-blur">
                {photo.title}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Blog" title="Updates, guidance, and learner resources." text="A polished blog section gives the website more depth and a place for future announcements." />
        <div className="grid gap-5 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-navy">{post.category}</span>
                <Newspaper className="text-gold" size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl font-black leading-tight text-ink">{post.title}</h3>
              <p className="mt-3 text-sm font-bold text-gold">{post.date}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{post.excerpt}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-navy hover:text-gold">
                Ask about this <ChevronRight size={17} aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Trust() {
  const items = [
    { icon: ShieldCheck, title: 'Registered company', text: '2016/445856/07' },
    { icon: Handshake, title: 'Community focused', text: 'Training and projects' },
    { icon: Trophy, title: 'Graduate pride', text: 'Ceremonies and milestones' },
    { icon: Zap, title: 'Practical energy', text: 'Skills for real progress' },
  ]

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow="Why choose us" title="Professional, local, and learner-centered." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="rounded-[1.5rem] border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white">
                  <Icon size={23} aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-black text-ink">{item.title}</h3>
                <p className="mt-2 text-sm font-bold text-muted">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function FAQ() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[.75fr_1fr] lg:px-8">
        <motion.div {...fadeUp}>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-gold">FAQ</span>
          <h2 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">Questions learners usually ask.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">This section gives visitors answers before they contact the team.</p>
        </motion.div>
        <div className="grid gap-4">
          {faqs.map((faq, index) => (
            <motion.article
              key={faq.question}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6"
            >
              <div className="flex gap-4">
                <HelpCircle className="mt-1 shrink-0 text-gold" size={23} aria-hidden="true" />
                <div>
                  <h3 className="font-black text-ink">{faq.question}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{faq.answer}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_.9fr] lg:px-8">
        <motion.div {...fadeUp}>
          <span className="text-xs font-black uppercase tracking-[0.22em] text-gold">Contact</span>
          <h2 className="mt-4 text-4xl font-black leading-tight text-ink sm:text-5xl">Let us help you choose your next step.</h2>
          <p className="mt-5 text-lg leading-8 text-muted">Reach out for program details, admissions support, registration questions, or partnership conversations.</p>
          <div className="mt-8 grid gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon
              return (
                <a key={item.label} href={item.href} target={item.label === 'Address' ? '_blank' : undefined} rel="noreferrer" className="flex gap-4 rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-white">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>
                    <small className="block text-xs font-black uppercase tracking-[0.16em] text-muted">{item.label}</small>
                    <strong className="mt-1 block break-words text-base font-black text-ink">{item.value}</strong>
                  </span>
                </a>
              )
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-[2rem] bg-white shadow-soft">
          <img src={graduationPhotos[4].src} alt={graduationPhotos[4].alt} className="h-[560px] w-full object-cover" />
          <div className="p-6">
            <strong className="block text-2xl font-black text-navy">SA HLOLO ENTLE HOLDINGS</strong>
            <span className="mt-1 block text-sm font-bold text-muted">HLOLO ENTLE TRAINING AND PROJECTS</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-navy-deep py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <img
            src="/images/newlogo.jpeg"
            alt="SA Hlolo Entle Holdings"
            className="h-16 w-16 rounded-full bg-white object-cover p-1 shadow-glow ring-1 ring-white/20"
          />
          <span className="sr-only">SA Hlolo Entle Holdings</span>
        </div>
        <p className="text-sm font-bold text-white/55">&copy; {new Date().getFullYear()} HLOLO ENTLE HOLDINGS (PTY) LTD. All rights reserved.</p>
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
        <Services />
        <Programs />
        <Admissions />
        <LearningJourney />
        <Support />
        <Outcomes />
        <Values />
        <Gallery />
        <Blog />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
