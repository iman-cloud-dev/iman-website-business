import { useState } from 'react';
import { Cloud, Code2, MonitorSmartphone, Rocket, ShieldCheck, Sparkles, Stars, Wrench, Wallet, Users, Quote } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Nav />
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Services />
        <Pricing />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-xl backdrop-blur-sm">
            <Cloud className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl tracking-tight">
            <span className="font-bold">Iman</span> <span className="font-light">Websites</span>
          </h1>
        </div>
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-2xl mb-4">Moderne Webseiten, die Kunden gewinnen.</p>
          <p className="text-blue-100 text-lg mb-8">
            Wir planen, gestalten und entwickeln professionelle Webseiten für kleine und mittlere Unternehmen – schnell, messbar und zu fairen Preisen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#preise" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-50">
              <Wallet className="w-5 h-5" />
              Angebot ansehen
            </a>
            <a href="#kontakt" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-700/40 border border-white/30 text-white font-medium hover:bg-blue-700/50">
              <Rocket className="w-5 h-5" />
              Kontakt aufnehmen
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-100 flex items-center justify-center gap-6">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> DSGVO-konform</span>
            <span className="inline-flex items-center gap-2"><MonitorSmartphone className="w-4 h-4" /> Responsive</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="w-4 h-4" /> SEO-ready</span>
          </div>
        </div>
      </div>
    </header>
  );
}

function Nav() {
  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex items-center justify-center gap-8 py-4 overflow-x-auto">
          <a href="#leistungen" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">Leistungen</a>
          <a href="#preise" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">Preise</a>
          <a href="#referenzen" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">Referenzen</a>
          <a href="#kontakt" className="text-gray-600 hover:text-blue-600 transition-colors whitespace-nowrap">Kontakt</a>
        </nav>
      </div>
    </div>
  );
}

function Services() {
  const items = [
    { icon: <Code2 className="w-6 h-6 text-white" />, title: 'Individuelles Webdesign', desc: 'Klar strukturiert, nutzerfreundlich und perfekt auf Ihre Zielgruppe ausgerichtet.' },
    { icon: <MonitorSmartphone className="w-6 h-6 text-white" />, title: 'Entwicklung & Performance', desc: 'Moderne Frontends (React/Vite) – schnell, sicher und wartbar.' },
    { icon: <Stars className="w-6 h-6 text-white" />, title: 'SEO & Auffindbarkeit', desc: 'Sauberer Code, klare Struktur und Best Practices für bessere Sichtbarkeit.' },
    { icon: <Wrench className="w-6 h-6 text-white" />, title: 'Pflege & Support', desc: 'Updates, Monitoring und schnelle Hilfe – wir kümmern uns langfristig.' },
    { icon: <Users className="w-6 h-6 text-white" />, title: 'CMS & Inhalte', desc: 'Headless oder WordPress – Sie pflegen Inhalte selbst, wir unterstützen.' },
    { icon: <ShieldCheck className="w-6 h-6 text-white" />, title: 'Sicherheit & DSGVO', desc: 'Rechtssicher, Cookie-Banner, sichere Formulare und Hosting in der EU.' },
  ];

  return (
    <section id="leistungen" className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Unsere Leistungen</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Alles, was Ihre neue Website braucht – von der Idee bis zum Launch und darüber hinaus.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="p-6 border border-gray-100 rounded-lg bg-white hover:border-blue-200 transition-colors">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '1.490–2.490€',
      ribbon: 'Beliebt bei Gründern',
      features: ['One‑Pager oder kleine Website', 'Responsives Design', 'Basis‑SEO', 'Kontaktformular', 'DSGVO & Cookie-Hinweis'],
    },
    {
      name: 'Business',
      price: '3.490–5.990€',
      ribbon: 'Empfehlung',
      features: ['Mehrseitige Website', 'Komponenten & CMS', 'Erweitertes SEO', 'Performance‑Optimierung', 'Analytics & Tracking'],
      highlighted: true,
    },
    {
      name: 'Premium',
      price: 'ab 7.990€',
      features: ['Individuelles Konzept', 'Headless CMS', 'Integrationen & APIs', 'Konversion-Optimierung', 'Support-SLA'],
    },
  ];

  return (
    <section id="preise" className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Transparente Preise</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Wir arbeiten mit klaren Paketen. Fixe Leistungen – faire Preise. Auf Wunsch erhalten Sie ein individuelles Angebot.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((p) => (
          <div key={p.name} className={`relative p-6 rounded-xl border ${p.highlighted ? 'border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50' : 'border-gray-200 bg-white'}`}>
            {p.ribbon && (
              <span className="absolute -top-3 left-4 text-xs bg-blue-600 text-white px-2 py-1 rounded">{p.ribbon}</span>
            )}
            <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
            <p className="text-3xl font-bold text-blue-700 mt-2">{p.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2"><span className="mt-1 block w-1.5 h-1.5 rounded-full bg-blue-600"></span>{f}</li>
              ))}
            </ul>
            <a href="#kontakt" className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Projekt anfragen</a>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center">Alle Preise zzgl. USt. Ratenzahlung möglich.</p>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { name: 'SevenElektrotechnik', text: 'Unsere neue Website wirkt professionell und bringt endlich Anfragen.', role: 'KMU, Elektro' },
    { name: 'IT‑Experten24', text: 'Schnelle Umsetzung, klare Kommunikation und messbare Ergebnisse.', role: 'IT-Dienstleistung' },
    { name: 'Wissensquelle', text: 'Super Zusammenarbeit – Design, Technik und SEO aus einer Hand.', role: 'Bildung' },
  ];
  return (
    <section id="referenzen" className="mb-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Kundenstimmen</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Ausgewählte Rückmeldungen unserer Kunden aus unterschiedlichen Branchen.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotes.map((q) => (
          <figure key={q.name} className="p-6 rounded-xl border border-gray-200 bg-white">
            <Quote className="w-6 h-6 text-blue-600 mb-3" />
            <blockquote className="text-gray-700">“{q.text}”</blockquote>
            <figcaption className="mt-4 text-sm text-gray-600">
              <span className="font-medium text-gray-900">{q.name}</span> • {q.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }
  return (
    <section id="kontakt" className="mb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Kontakt aufnehmen</h2>
          <p className="text-gray-600 mb-6">Beschreiben Sie Ihr Vorhaben kurz – wir melden uns innerhalb eines Werktags mit einem Vorschlag für das weitere Vorgehen.</p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-blue-600" /> Kostenlose Erstberatung (30 Min.)</li>
            <li className="flex items-center gap-2"><Stars className="w-4 h-4 text-blue-600" /> Klare Roadmap & Angebot</li>
            <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-blue-600" /> Feste Ansprechpartner</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          {sent ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                <Rocket className="w-7 h-7 text-green-600" />
              </div>
              <p className="text-lg font-medium text-gray-900">Vielen Dank! Ihre Nachricht wurde übermittelt.</p>
              <p className="text-gray-600 text-sm">Wir melden uns in Kürze bei Ihnen.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Ihr Name</label>
                  <input required name="name" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">E-Mail</label>
                  <input type="email" required name="email" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Unternehmen</label>
                <input name="company" className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Budget</label>
                  <select name="budget" className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>bis 2.500€</option>
                    <option>2.500–5.000€</option>
                    <option>5.000–10.000€</option>
                    <option>über 10.000€</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700 mb-1">Zeitplan</label>
                  <select name="timeline" className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>so schnell wie möglich</option>
                    <option>in 1–2 Monaten</option>
                    <option>flexibel</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-1">Ihre Nachricht</label>
                <textarea required name="message" rows={5} className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <button type="submit" className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700">Nachricht senden</button>
              <p className="text-xs text-gray-500 text-center">Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Beantwortung der Anfrage zu.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg">
            <Cloud className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl tracking-tight"><span className="font-bold">Iman</span> <span className="font-light text-blue-300">Websites</span></span>
        </div>
        <p className="text-gray-400 mb-2">Webseiten-Entwicklung für kleine und mittlere Unternehmen</p>
        <p className="text-gray-500 text-sm">Kontakt: hello@iman-cloud.dev</p>
      </div>
    </footer>
  );
}
