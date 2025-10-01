import { Quote, Stars, CheckCircle2 } from 'lucide-react';

export function TestimonialsNew() {
  const quotes = [
    { 
      name: 'Michael Schmidt', 
      company: 'SevenElektrotechnik',
      text: 'Unsere neue Website wirkt professionell und bringt endlich Anfragen. Die Zusammenarbeit war unkompliziert und das Ergebnis übertrifft unsere Erwartungen.', 
      role: 'Geschäftsführer',
      avatar: '👨‍💼',
      rating: 5
    },
    { 
      name: 'Sarah Weber', 
      company: 'IT‑Experten24',
      text: 'Schnelle Umsetzung, klare Kommunikation und messbare Ergebnisse. Besonders beeindruckt hat uns die Performance-Optimierung.', 
      role: 'Marketing Managerin',
      avatar: '👩‍💻',
      rating: 5
    },
    { 
      name: 'Dr. Thomas Müller', 
      company: 'Wissensquelle',
      text: 'Super Zusammenarbeit – Design, Technik und SEO aus einer Hand. Die Website lädt blitzschnell und sieht auf allen Geräten perfekt aus.', 
      role: 'Gründer',
      avatar: '👨‍🏫',
      rating: 5
    },
  ];
  
  return (
    <section id="referenzen" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Kundenstimmen</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Ausgewählte Rückmeldungen unserer Kunden aus unterschiedlichen Branchen.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {quotes.map((q) => (
          <figure 
            key={q.name} 
            className="group relative p-8 rounded-2xl border border-gray-100 bg-white hover:border-blue-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Quote className="w-16 h-16 text-blue-600" />
            </div>
            
            <div className="flex gap-1 mb-4">
              {[...Array(q.rating)].map((_, i) => (
                <Stars key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            
            <blockquote className="text-gray-700 leading-relaxed mb-6 relative z-10">
              "{q.text}"
            </blockquote>
            
            <figcaption className="flex items-center gap-4 pt-4 border-t border-gray-100">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-2xl shadow-lg">
                {q.avatar}
              </div>
              <div>
                <div className="font-semibold text-gray-900">{q.name}</div>
                <div className="text-sm text-gray-600">{q.role}</div>
                <div className="text-xs text-blue-600 font-medium">{q.company}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-flex items-center gap-3 bg-green-50 text-green-700 px-6 py-3 rounded-full border border-green-100">
          <CheckCircle2 className="w-5 h-5" />
          <span className="font-medium">100% Kundenzufriedenheit • Über 50 erfolgreiche Projekte</span>
        </div>
      </div>
    </section>
  );
}