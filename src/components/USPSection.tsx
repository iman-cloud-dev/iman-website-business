import { Card } from './ui/card';
import { Users, Zap, Award, Heart, CheckCircle, Star } from 'lucide-react';

export function USPSection() {
  return (
    <Card className="p-8">
      <h3 className="text-center mb-8">Unser Alleinstellungsmerkmal</h3>
      
      {/* Main USP Statement */}
      <div className="text-center mb-8 p-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white rounded-lg">
        <h4 className="mb-4">Warum Iman Cloud?</h4>
        <p className="text-xl mb-4">
          Persönliche Betreuung + Technische Exzellenz + Startup-Energie = Ihr IT-Erfolg
        </p>
        <p className="text-blue-100">
          Wir sind keine anonyme IT-Beratung. Wir sind drei Gründerfreunde, die Ihr Unternehmen 
          persönlich begleiten und verstehen.
        </p>
      </div>

      {/* USP Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="text-center p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-blue-900 mb-3">Persönliche Betreuung</h4>
          <p className="text-blue-800 text-sm mb-4">
            Direkte Kommunikation mit den Gründern. Kurze Entscheidungswege. 
            Ihr Ansprechpartner kennt Sie und Ihr Business.
          </p>
          <div className="text-blue-700 text-sm space-y-1">
            <p>✓ Feste Ansprechpartner</p>
            <p>✓ Keine Callcenter</p>
            <p>✓ Schnelle Reaktionszeiten</p>
          </div>
        </div>

        <div className="text-center p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
          <div className="w-16 h-16 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Award className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-orange-900 mb-3">Technische Exzellenz</h4>
          <p className="text-orange-800 text-sm mb-4">
            Jahrelange Erfahrung in Enterprise-Umgebungen gepaart mit 
            aktuellstem Know-how zu Cloud-Technologien.
          </p>
          <div className="text-orange-700 text-sm space-y-1">
            <p>✓ Zertifizierte Experten</p>
            <p>✓ Best Practices</p>
            <p>✓ Cutting-Edge Tech</p>
          </div>
        </div>

        <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
          <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-green-900 mb-3">Startup-Energie</h4>
          <p className="text-green-800 text-sm mb-4">
            Agile Arbeitsweise, innovative Lösungsansätze und die Flexibilität 
            eines jungen Unternehmens.
          </p>
          <div className="text-green-700 text-sm space-y-1">
            <p>✓ Schnelle Umsetzung</p>
            <p>✓ Flexible Lösungen</p>
            <p>✓ Innovative Ansätze</p>
          </div>
        </div>
      </div>

      {/* Competitive Advantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-600" />
            Vs. Große IT-Konzerne
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Persönlicher Kontakt statt Ticketsystem</li>
            <li>• Flexible Verträge statt starrer Pakete</li>
            <li>• Schnelle Entscheidungen statt Bürokratie</li>
            <li>• Faire Preise statt Konzern-Aufschläge</li>
            <li>• Individuelle Lösungen statt Standard-Software</li>
          </ul>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="text-gray-900 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-blue-600" />
            Vs. Freelancer
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>• Team-Expertise statt Einzelkämpfer</li>
            <li>• Verfügbarkeit durch mehrere Personen</li>
            <li>• Strukturierte Prozesse und Dokumentation</li>
            <li>• Langfristige Partnerschaft und Kontinuität</li>
            <li>• Breites Skill-Set für komplexe Projekte</li>
          </ul>
        </div>
      </div>

      {/* Value Proposition Canvas */}
      <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
        <h4 className="text-center text-gray-900 mb-6">Unser Wertversprechen im Detail</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="text-gray-800 mb-3 flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              Pain Relievers
            </h5>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Reduziert IT-Komplexität</li>
              <li>• Eliminiert Vendor Lock-in</li>
              <li>• Minimiert Ausfallzeiten</li>
              <li>• Senkt operative Kosten</li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-800 mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-500" />
              Gain Creators
            </h5>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Steigert Produktivität</li>
              <li>• Ermöglicht Skalierung</li>
              <li>• Verbessert Sicherheit</li>
              <li>• Schafft Wettbewerbsvorteile</li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-800 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500" />
              Products & Services
            </h5>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Cloud-Migration</li>
              <li>• Managed Services</li>
              <li>• Security Solutions</li>
              <li>• Custom Development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonial Mockup */}
      <div className="mt-8 p-6 bg-white border-l-4 border-blue-500 rounded-lg shadow-sm">
        <p className="text-gray-800 italic mb-3">
          "Endlich ein IT-Partner, der unsere Sprache spricht und unsere Bedürfnisse versteht. 
          Die drei von Iman Cloud haben uns nicht nur technisch weitergeholfen, sondern waren 
          echte Berater für unser Geschäft."
        </p>
        <p className="text-gray-600 text-sm">
          – Beispiel-Testimonial eines KMU-Geschäftsführers
        </p>
      </div>
    </Card>
  );
}