import { useState } from 'react';
import { ChevronDown, MessageSquare } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: 'Wie lange dauert die Entwicklung einer Website?',
      answer: 'Die Dauer hängt vom Umfang ab. Ein einfacher One-Pager ist in 1-2 Wochen fertig, eine umfangreichere Business-Website benötigt 3-4 Wochen. Wir geben Ihnen nach dem Erstgespräch einen konkreten Zeitplan.'
    },
    {
      question: 'Kann ich die Inhalte später selbst ändern?',
      answer: 'Ja! Wir integrieren auf Wunsch ein Content Management System (CMS), mit dem Sie Texte, Bilder und andere Inhalte selbst pflegen können. Wir schulen Sie in der Bedienung und stehen bei Fragen zur Verfügung.'
    },
    {
      question: 'Ist die Website für Suchmaschinen optimiert?',
      answer: 'Absolut. Alle unsere Websites werden nach aktuellen SEO-Best-Practices entwickelt: sauberer Code, schnelle Ladezeiten, mobile Optimierung, strukturierte Daten und optimierte Meta-Tags sind Standard.'
    },
    {
      question: 'Was passiert nach dem Launch?',
      answer: 'Nach dem Launch bieten wir Wartung und Support an. Das umfasst Updates, Backups, Monitoring und schnelle Hilfe bei Problemen. Sie können zwischen verschiedenen Support-Paketen wählen oder uns bei Bedarf kontaktieren.'
    },
    {
      question: 'Welche Zahlungsoptionen gibt es?',
      answer: 'Wir bieten flexible Zahlungsmodelle: Einmalzahlung, Ratenzahlung oder monatliche Abrechnung. Bei größeren Projekten arbeiten wir mit Meilensteinen. Details besprechen wir im Angebot.'
    },
    {
      question: 'Bekomme ich auch Unterstützung beim Hosting?',
      answer: 'Ja, wir kümmern uns auf Wunsch um das komplette Hosting – inklusive Domain, SSL-Zertifikat und E-Mail-Einrichtung. Wir arbeiten mit zuverlässigen EU-Hostern zusammen und garantieren DSGVO-Konformität.'
    },
  ];

  return (
    <section id="faq" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Häufige Fragen</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Antworten auf die wichtigsten Fragen rund um unsere Leistungen und den Ablauf.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-blue-200 transition-colors"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              <ChevronDown 
                className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${
                  openIndex === i ? 'rotate-180' : ''
                }`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-200 ${
                openIndex === i ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-gray-600 mb-4">Noch Fragen? Wir helfen gerne weiter!</p>
        <a 
          href="#kontakt" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <MessageSquare className="w-5 h-5" />
          Kontakt aufnehmen
        </a>
      </div>
    </section>
  );
}