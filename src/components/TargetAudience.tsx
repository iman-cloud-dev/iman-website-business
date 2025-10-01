import { Card } from './ui/card';
import { Building2, Users, TrendingUp, Briefcase } from 'lucide-react';

export function TargetAudience() {
  return (
    <Card className="p-8">
      <h3 className="text-center mb-8">Unsere Zielgruppen</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Small & Medium Enterprises */}
        <div className="p-6 border border-blue-200 rounded-lg bg-blue-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-blue-900">Klein- & Mittelständische Unternehmen</h4>
              <p className="text-blue-700 text-sm">10-500 Mitarbeiter</p>
            </div>
          </div>
          <ul className="space-y-2 text-blue-800 text-sm">
            <li>• Wachsende Unternehmen mit IT-Modernisierungsbedarf</li>
            <li>• Benötigen skalierbare Cloud-Lösungen</li>
            <li>• Suchen persönliche Betreuung statt anonymer Konzerne</li>
            <li>• Wollen Kosten optimieren und Effizienz steigern</li>
          </ul>
        </div>

        {/* Startups & Scale-ups */}
        <div className="p-6 border border-orange-200 rounded-lg bg-orange-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="text-orange-900">Startups & Scale-ups</h4>
              <p className="text-orange-700 text-sm">5-100 Mitarbeiter</p>
            </div>
          </div>
          <ul className="space-y-2 text-orange-800 text-sm">
            <li>• Schnell wachsende Tech-Unternehmen</li>
            <li>• Brauchen flexible, skalierbare Infrastruktur</li>
            <li>• Verstehen die Startup-Mentalität</li>
            <li>• Benötigen kosteneffiziente Cloud-First Ansätze</li>
          </ul>
        </div>
      </div>

      {/* Target Personas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-white" />
          </div>
          <h5 className="text-gray-900 mb-2">Geschäftsführer KMU</h5>
          <p className="text-gray-700 text-sm mb-3">
            Möchte das Unternehmen digitalisieren, aber IT ist nicht das Kerngeschäft.
          </p>
          <div className="text-xs text-gray-600 space-y-1">
            <p><strong>Pain Points:</strong> Komplexität, Kosten, Sicherheit</p>
            <p><strong>Ziele:</strong> Effizienz, Wachstum, Zukunftssicherheit</p>
          </div>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h5 className="text-gray-900 mb-2">IT-Leiter</h5>
          <p className="text-gray-700 text-sm mb-3">
            Verantwortlich für IT-Strategie, sucht externe Expertise für Cloud-Migration.
          </p>
          <div className="text-xs text-gray-600 space-y-1">
            <p><strong>Pain Points:</strong> Ressourcenmangel, Compliance</p>
            <p><strong>Ziele:</strong> Modernisierung, Performance, Entlastung</p>
          </div>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="w-16 h-16 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h5 className="text-gray-900 mb-2">Startup-Gründer</h5>
          <p className="text-gray-700 text-sm mb-3">
            Fokus auf Produkt, braucht zuverlässige IT-Infrastruktur ohne Ablenkung.
          </p>
          <div className="text-xs text-gray-600 space-y-1">
            <p><strong>Pain Points:</strong> Zeit, Budget, Skalierung</p>
            <p><strong>Ziele:</strong> Schnelle Umsetzung, Flexibilität</p>
          </div>
        </div>
      </div>

      {/* Key Characteristics */}
      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg">
        <h4 className="text-center text-gray-900 mb-4">Gemeinsame Charakteristika unserer Zielgruppen</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h5 className="text-gray-800 mb-3">Herausforderungen</h5>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Begrenzte interne IT-Ressourcen</li>
              <li>• Komplexe Technologie-Landschaften</li>
              <li>• Sicherheits- und Compliance-Anforderungen</li>
              <li>• Kostendruck und Budgetbeschränkungen</li>
            </ul>
          </div>
          <div>
            <h5 className="text-gray-800 mb-3">Erwartungen</h5>
            <ul className="space-y-1 text-gray-700 text-sm">
              <li>• Verständliche Kommunikation ohne Tech-Jargon</li>
              <li>• Persönliche Betreuung und schnelle Reaktionszeiten</li>
              <li>• Transparente Preisgestaltung</li>
              <li>• Langfristige Partnerschaft auf Augenhöhe</li>
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}