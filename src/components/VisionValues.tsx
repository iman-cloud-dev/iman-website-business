import { Card } from './ui/card';
import { Target, Heart, Lightbulb, Users, CheckCircle } from 'lucide-react';

export function VisionValues() {
  return (
    <div className="space-y-8">
      {/* Vision */}
      <Card className="p-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <Target className="w-8 h-8 text-white" />
          </div>
          <h3 className="mb-4">Unsere Vision</h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-blue-600 italic mb-4">
              "Wir machen die digitale Zukunft für jedes Unternehmen greifbar und zugänglich."
            </p>
            <p className="text-gray-600">
              Als drei Gründerfreunde haben wir eine klare Mission: Wir wollen Unternehmen dabei helfen, 
              das volle Potenzial moderner IT-Technologien zu nutzen. Dabei verbinden wir technische Exzellenz 
              mit der persönlichen Note eines Startup-Teams.
            </p>
          </div>
        </div>
      </Card>

      {/* Core Values */}
      <Card className="p-8">
        <h3 className="text-center mb-8">Unsere Werte</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-blue-900 mb-3">Vertrauen</h4>
            <p className="text-blue-700 text-sm">
              Transparente Kommunikation und zuverlässige Partnerschaften sind die Basis unserer Arbeit.
            </p>
          </div>

          <div className="text-center p-6 bg-orange-50 rounded-lg">
            <div className="w-12 h-12 bg-orange-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-orange-900 mb-3">Innovation</h4>
            <p className="text-orange-700 text-sm">
              Wir bleiben am Puls der Zeit und bringen die neuesten Technologien zu unseren Kunden.
            </p>
          </div>

          <div className="text-center p-6 bg-green-50 rounded-lg">
            <div className="w-12 h-12 bg-green-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-green-900 mb-3">Partnerschaft</h4>
            <p className="text-green-700 text-sm">
              Wir sind mehr als Dienstleister – wir sind Partner, die langfristig zum Erfolg beitragen.
            </p>
          </div>

          <div className="text-center p-6 bg-purple-50 rounded-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-purple-900 mb-3">Klarheit</h4>
            <p className="text-purple-700 text-sm">
              Komplexe IT-Themen verständlich erklären und klare Lösungswege aufzeigen.
            </p>
          </div>
        </div>
      </Card>

      {/* Mission Statement */}
      <Card className="p-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
        <div className="text-center">
          <h4 className="text-blue-900 mb-4">Unsere Mission</h4>
          <p className="text-lg text-blue-800 max-w-4xl mx-auto">
            Wir transformieren komplexe IT-Herausforderungen in einfache, verständliche Lösungen. 
            Als Team aus drei erfahrenen Gründerfreunden kombinieren wir technische Expertise mit 
            der Agilität und dem persönlichen Service eines Startups.
          </p>
        </div>
      </Card>
    </div>
  );
}