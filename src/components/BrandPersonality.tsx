import { Card } from './ui/card';
import { MessageCircle, Lightbulb, Users, Target } from 'lucide-react';

export function BrandPersonality() {
  return (
    <Card className="p-8">
      <h3 className="text-center mb-8">Markencharakter & Tonality</h3>
      
      {/* Brand Personality Traits */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="text-center p-6 bg-blue-50 rounded-lg">
          <div className="w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-blue-900 mb-2">Verständlich</h4>
          <p className="text-blue-700 text-sm">
            Wir erklären komplexe IT-Themen in klarer, einfacher Sprache ohne Fachchinesisch.
          </p>
        </div>

        <div className="text-center p-6 bg-orange-50 rounded-lg">
          <div className="w-12 h-12 bg-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Lightbulb className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-orange-900 mb-2">Innovativ</h4>
          <p className="text-orange-700 text-sm">
            Modern, zukunftsorientiert und immer auf dem neuesten Stand der Technik.
          </p>
        </div>

        <div className="text-center p-6 bg-green-50 rounded-lg">
          <div className="w-12 h-12 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-green-900 mb-2">Nahbar</h4>
          <p className="text-green-700 text-sm">
            Freundlich, persönlich und auf Augenhöhe – wie ein Gespräch unter Freunden.
          </p>
        </div>

        <div className="text-center p-6 bg-purple-50 rounded-lg">
          <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Target className="w-6 h-6 text-white" />
          </div>
          <h4 className="text-purple-900 mb-2">Fokussiert</h4>
          <p className="text-purple-700 text-sm">
            Klar strukturiert, zielgerichtet und immer lösungsorientiert.
          </p>
        </div>
      </div>

      {/* Communication Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="text-gray-900 mb-4">Wie wir kommunizieren</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">Direkt & Ehrlich</p>
                <p className="text-gray-600 text-sm">Keine leeren Versprechungen, sondern realistische Einschätzungen</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">Proaktiv & Lösungsorientiert</p>
                <p className="text-gray-600 text-sm">Wir denken mit und bringen eigene Ideen ein</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">Persönlich & Warmherzig</p>
                <p className="text-gray-600 text-sm">Mit echtem Interesse an Ihrem Erfolg</p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 rounded-lg">
          <h4 className="text-gray-900 mb-4">Was uns ausmacht</h4>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">Startup-Mentalität</p>
                <p className="text-gray-600 text-sm">Schnell, flexibel und unkompliziert</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">Enterprise-Qualität</p>
                <p className="text-gray-600 text-sm">Professionelle Standards und bewährte Prozesse</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-gray-800 font-medium">Freundschaftlicher Ansatz</p>
                <p className="text-gray-600 text-sm">Langfristige Partnerschaften auf Vertrauensbasis</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slogans & Key Messages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
          <h4 className="text-blue-900 mb-4">Kernbotschaften</h4>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-blue-100">
              <p className="text-blue-800 font-medium">"Cloud mit Vertrauen"</p>
              <p className="text-blue-600 text-sm">Hauptslogan – Sicherheit & Partnerschaft</p>
            </div>
            <div className="p-3 bg-white rounded border border-blue-100">
              <p className="text-blue-800 font-medium">"Euer IT-Partner auf Augenhöhe"</p>
              <p className="text-blue-600 text-sm">Positionierung – Persönlich & Kompetent</p>
            </div>
            <div className="p-3 bg-white rounded border border-blue-100">
              <p className="text-blue-800 font-medium">"Drei Gründerfreunde. Eine Mission."</p>
              <p className="text-blue-600 text-sm">Über uns – Team & Fokus</p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg border border-orange-200">
          <h4 className="text-orange-900 mb-4">Wertversprechen</h4>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border border-orange-100">
              <p className="text-orange-800 font-medium">"Digitale Zukunft. Persönlich begleitet."</p>
              <p className="text-orange-600 text-sm">Vision – Modernisierung mit menschlicher Note</p>
            </div>
            <div className="p-3 bg-white rounded border border-orange-100">
              <p className="text-orange-800 font-medium">"IT, die funktioniert. Menschen, die verstehen."</p>
              <p className="text-orange-600 text-sm">Differenzierung – Technik + Empathie</p>
            </div>
            <div className="p-3 bg-white rounded border border-orange-100">
              <p className="text-orange-800 font-medium">"Startup-Spirit meets Enterprise-Qualität"</p>
              <p className="text-orange-600 text-sm">USP – Beste aus beiden Welten</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tone of Voice Guidelines */}
      <div className="p-6 bg-gray-900 text-white rounded-lg">
        <h4 className="text-center mb-6">Tone of Voice Guidelines</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="text-green-400 mb-3">✓ So sind wir</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Klar und verständlich</li>
              <li>• Persönlich und authentisch</li>
              <li>• Proaktiv und hilfreich</li>
              <li>• Kompetent aber nicht arrogant</li>
              <li>• Freundlich und zugänglich</li>
            </ul>
          </div>
          <div>
            <h5 className="text-red-400 mb-3">✗ So sind wir nicht</h5>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>• Überheblich oder besserwisserisch</li>
              <li>• Technisches Fachchinesisch</li>
              <li>• Unpersönlich oder distanziert</li>
              <li>• Übertrieben verkaufsorientiert</li>
              <li>• Steif oder corporate</li>
            </ul>
          </div>
          <div>
            <h5 className="text-blue-400 mb-3">💡 Beispiele</h5>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><strong>Statt:</strong> "Implementierung einer skalierbaren Cloud-Infrastruktur"</p>
              <p><strong>Sagen wir:</strong> "Wir bauen euch eine Cloud-Lösung, die mit eurem Unternehmen wächst"</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}